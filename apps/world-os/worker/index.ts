import { createRemoteJWKSet, jwtVerify } from 'jose';

type AnyProperty = Record<string, any>;

type WorldNode = {
  id: string;
  notionPageId?: string;
  kind: 'entity' | 'lore';
  name: string;
  type: string;
  status: string;
  summary: string;
  region?: string;
  tier?: string;
  domain?: string;
  spoilerLayer?: string;
  syncStatus?: string;
  githubPath?: string;
};

type WorldEdge = {
  id: string;
  source: string;
  target: string;
  relationType: string;
  status: string;
  strength?: string;
  spoilerLayer?: string;
};

const demoNodes: WorldNode[] = [
  { id: 'DEMO-CHAR-001', kind: 'entity', name: 'Personagem de demonstração', type: 'Character', status: 'HYPOTHESIS', summary: 'Nó sintético: não pertence ao cânone BeastWorld.' },
  { id: 'DEMO-BEAST-001', kind: 'entity', name: 'Besta de demonstração', type: 'Beast Individual', status: 'HYPOTHESIS', summary: 'Nó sintético usado apenas para validar a interface.' },
  { id: 'DEMO-LORE-001', kind: 'lore', name: 'Conceito de demonstração', type: 'Concept', status: 'UNRESOLVED', summary: 'Conceito sintético. Dados reais permanecem protegidos.' },
];

const demoEdges: WorldEdge[] = [
  { id: 'DEMO-EDGE-001', source: 'DEMO-CHAR-001', target: 'DEMO-BEAST-001', relationType: 'RELATED_TO', status: 'HYPOTHESIS' },
  { id: 'DEMO-EDGE-002', source: 'DEMO-BEAST-001', target: 'DEMO-LORE-001', relationType: 'DEPENDS_ON', status: 'HYPOTHESIS' },
];

const json = (value: unknown, status = 200) => new Response(JSON.stringify(value), {
  status,
  headers: {
    'content-type': 'application/json; charset=utf-8',
    'cache-control': 'no-store',
  },
});

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const normalizedPageId = (value: string) => value.replaceAll('-', '').toLowerCase();

function plain(prop?: AnyProperty): string {
  if (!prop) return '';
  const kind = prop.type;
  if (kind === 'title') return (prop.title ?? []).map((x: any) => x.plain_text ?? x.text?.content ?? '').join('');
  if (kind === 'rich_text') return (prop.rich_text ?? []).map((x: any) => x.plain_text ?? x.text?.content ?? '').join('');
  if (kind === 'select') return prop.select?.name ?? '';
  if (kind === 'status') return prop.status?.name ?? '';
  if (kind === 'url') return prop.url ?? '';
  return '';
}

function relationIds(prop?: AnyProperty): string[] {
  return (prop?.relation ?? []).map((item: any) => String(item.id)).filter(Boolean);
}

async function notionFetch(url: string, init: RequestInit, attempt = 0): Promise<Response> {
  const response = await fetch(url, init);
  const retryable = response.status === 429 || response.status === 529 || [500, 502, 503, 504].includes(response.status);
  if (!retryable || attempt >= 4) return response;

  const retryAfter = Number(response.headers.get('retry-after'));
  const delaySeconds = Number.isFinite(retryAfter) && retryAfter >= 0 ? retryAfter : Math.min(2 ** attempt, 30);
  await sleep(delaySeconds * 1000 + Math.random() * 250);
  return notionFetch(url, init, attempt + 1);
}

async function queryDataSource(env: Env, dataSourceId: string): Promise<any[]> {
  const out: any[] = [];
  let startCursor: string | undefined;

  do {
    const body: Record<string, unknown> = { page_size: 100, result_type: 'page' };
    if (startCursor) body.start_cursor = startCursor;

    const response = await notionFetch(`https://api.notion.com/v1/data_sources/${dataSourceId}/query`, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${env.NOTION_TOKEN}`,
        'notion-version': env.NOTION_VERSION,
        'content-type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) throw new Error(`Notion query ${dataSourceId} failed: ${response.status}`);
    const data: any = await response.json();
    out.push(...(data.results ?? []).filter((item: any) => item.object === 'page'));
    startCursor = data.has_more ? data.next_cursor : undefined;
  } while (startCursor && out.length < 5000);

  return out;
}

function mapEntity(page: any): WorldNode {
  const p = page.properties ?? {};
  return {
    id: plain(p['Entity ID']) || `BW-NOTION-ENTITY-${normalizedPageId(page.id)}`,
    notionPageId: page.id,
    kind: 'entity',
    name: plain(p.Entity) || 'Entidade sem título',
    type: plain(p['Entity Type']) || 'Unknown',
    status: plain(p['Canon Status']) || 'UNRESOLVED',
    summary: plain(p.Summary),
    region: plain(p['Region / Habitat']),
    tier: plain(p['Narrative Tier']),
    syncStatus: plain(p['Sync Status']),
    githubPath: plain(p['GitHub Path']),
  };
}

function mapLore(page: any): WorldNode {
  const p = page.properties ?? {};
  return {
    id: plain(p['Concept ID']) || `BW-NOTION-LORE-${normalizedPageId(page.id)}`,
    notionPageId: page.id,
    kind: 'lore',
    name: plain(p.Name) || 'Conceito sem título',
    type: plain(p['Node Type']) || 'Concept',
    status: plain(p['Canon Status']) || 'UNRESOLVED',
    summary: plain(p.Summary),
    domain: plain(p.Domain),
    spoilerLayer: plain(p['Spoiler Layer']),
    syncStatus: plain(p['Sync Status']),
    githubPath: plain(p['GitHub Path']),
  };
}

function firstResolved(ids: string[], pageToNode: Map<string, string>): string | undefined {
  for (const id of ids) {
    const resolved = pageToNode.get(normalizedPageId(id));
    if (resolved) return resolved;
  }
  return undefined;
}

function mapEdges(pages: any[], pageToNode: Map<string, string>): WorldEdge[] {
  const edges: WorldEdge[] = [];
  for (const page of pages) {
    const p = page.properties ?? {};
    if (p.Active?.checkbox === false) continue;

    const source = firstResolved([
      ...relationIds(p['Source Entity']),
      ...relationIds(p['Source Lore']),
    ], pageToNode);
    const target = firstResolved([
      ...relationIds(p['Target Entity']),
      ...relationIds(p['Target Lore']),
    ], pageToNode);

    if (!source || !target) continue;
    edges.push({
      id: plain(p['Edge ID']) || `BW-NOTION-EDGE-${normalizedPageId(page.id)}`,
      source,
      target,
      relationType: plain(p['Relation Type']) || 'RELATED_TO',
      status: plain(p['Canon Status']) || 'UNRESOLVED',
      strength: plain(p.Strength),
      spoilerLayer: plain(p['Spoiler Layer']),
    });
  }
  return edges;
}

async function verifyAccess(request: Request, env: Env): Promise<{ ok: true; email?: string } | { ok: false; reason: string }> {
  if (!env.TEAM_DOMAIN || !env.POLICY_AUD) return { ok: false, reason: 'ACCESS_VALIDATION_NOT_CONFIGURED' };
  const token = request.headers.get('cf-access-jwt-assertion');
  if (!token) return { ok: false, reason: 'MISSING_CF_ACCESS_JWT' };

  try {
    const jwks = createRemoteJWKSet(new URL(`${env.TEAM_DOMAIN.replace(/\/$/, '')}/cdn-cgi/access/certs`));
    const { payload } = await jwtVerify(token, jwks, {
      issuer: env.TEAM_DOMAIN.replace(/\/$/, ''),
      audience: env.POLICY_AUD,
    });
    return { ok: true, email: typeof payload.email === 'string' ? payload.email : undefined };
  } catch {
    return { ok: false, reason: 'INVALID_CF_ACCESS_JWT' };
  }
}

async function liveGraph(env: Env): Promise<{ nodes: WorldNode[]; edges: WorldEdge[] }> {
  const [entityPages, lorePages, edgePages] = await Promise.all([
    queryDataSource(env, env.NOTION_ENTITY_ATLAS_DATA_SOURCE_ID),
    queryDataSource(env, env.NOTION_LORE_REGISTRY_DATA_SOURCE_ID),
    queryDataSource(env, env.NOTION_EDGE_REGISTRY_DATA_SOURCE_ID),
  ]);

  const nodes = [...entityPages.map(mapEntity), ...lorePages.map(mapLore)];
  const pageToNode = new Map<string, string>();
  for (const node of nodes) if (node.notionPageId) pageToNode.set(normalizedPageId(node.notionPageId), node.id);
  const edges = mapEdges(edgePages, pageToNode);
  return { nodes, edges };
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === '/api/health') {
      return json({
        ok: true,
        privateDataEnabled: env.WORLD_OS_PRIVATE_DATA_ENABLED === 'true',
        notionConfigured: Boolean(env.NOTION_TOKEN),
        accessValidationConfigured: Boolean(env.TEAM_DOMAIN && env.POLICY_AUD),
        readOnly: true,
      });
    }

    if (url.pathname === '/api/graph') {
      const privateEnabled = env.WORLD_OS_PRIVATE_DATA_ENABLED === 'true';
      if (!privateEnabled) {
        return json({
          mode: 'demo',
          readOnly: true,
          source: 'synthetic demo',
          nodes: demoNodes,
          edges: demoEdges,
          warning: 'Dados privados desativados por segurança. Ative somente depois de proteger o Worker e configurar a validação JWT do Cloudflare Access.',
        });
      }

      const access = await verifyAccess(request, env);
      if (!access.ok) return json({ error: access.reason, message: 'Fail closed: autenticação privada não validada.' }, 403);

      try {
        const graph = await liveGraph(env);
        return json({
          mode: 'live',
          readOnly: true,
          source: 'Notion Entity Atlas + Lore Registry + Relation Edge Registry',
          ...graph,
        });
      } catch (error) {
        console.error(JSON.stringify({
          message: 'Notion graph read failed',
          error: error instanceof Error ? error.message : String(error),
          path: url.pathname,
        }));
        return json({
          error: 'NOTION_READ_FAILED',
          message: error instanceof Error ? error.message : 'Unknown error',
        }, 502);
      }
    }

    if (url.pathname.startsWith('/api/')) return json({ error: 'NOT_FOUND' }, 404);
    return env.ASSETS.fetch(request);
  },
} satisfies ExportedHandler<Env>;
