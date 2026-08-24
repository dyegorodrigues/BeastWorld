export interface Env {
  NOTION_TOKEN?: string;
  NOTION_VERSION: string;
  NOTION_ENTITY_ATLAS_DATA_SOURCE_ID: string;
  WORLD_OS_PRIVATE_DATA_ENABLED: string;
  ASSETS: { fetch(request: Request): Promise<Response> };
}

type AnyProperty = Record<string, any>;

type WorldEntity = {
  id: string;
  notionPageId?: string;
  name: string;
  type: string;
  status: string;
  summary: string;
  region?: string;
  tier?: string;
  syncStatus?: string;
  githubPath?: string;
};

const demo: WorldEntity[] = [
  { id: 'DEMO-CHAR-001', name: 'Personagem de demonstração', type: 'Character', status: 'HYPOTHESIS', summary: 'Nó sintético: não pertence ao cânone BeastWorld.' },
  { id: 'DEMO-BEAST-001', name: 'Besta de demonstração', type: 'Beast Individual', status: 'HYPOTHESIS', summary: 'Nó sintético usado apenas para validar a interface.' },
  { id: 'DEMO-PLACE-001', name: 'Região de demonstração', type: 'Place', status: 'UNRESOLVED', summary: 'Local sintético. Dados reais permanecem protegidos.' },
];

const json = (value: unknown, status = 200) => new Response(JSON.stringify(value), {
  status,
  headers: {
    'content-type': 'application/json; charset=utf-8',
    'cache-control': 'no-store',
  },
});

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

function mapPage(page: any): WorldEntity {
  const p = page.properties ?? {};
  return {
    id: plain(p['Entity ID']) || page.id,
    notionPageId: page.id,
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

async function notionEntities(env: Env): Promise<WorldEntity[]> {
  const out: WorldEntity[] = [];
  let startCursor: string | undefined;

  do {
    const body: Record<string, unknown> = { page_size: 100, result_type: 'page' };
    if (startCursor) body.start_cursor = startCursor;

    const response = await fetch(`https://api.notion.com/v1/data_sources/${env.NOTION_ENTITY_ATLAS_DATA_SOURCE_ID}/query`, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${env.NOTION_TOKEN}`,
        'notion-version': env.NOTION_VERSION,
        'content-type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) throw new Error(`Notion query failed: ${response.status}`);
    const data: any = await response.json();
    for (const item of data.results ?? []) {
      if (item.object === 'page') out.push(mapPage(item));
    }
    startCursor = data.has_more ? data.next_cursor : undefined;
  } while (startCursor && out.length < 2000);

  return out;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === '/api/health') {
      return json({
        ok: true,
        privateDataEnabled: env.WORLD_OS_PRIVATE_DATA_ENABLED === 'true',
        notionConfigured: Boolean(env.NOTION_TOKEN),
        readOnly: true,
      });
    }

    if (url.pathname === '/api/entities') {
      const privateEnabled = env.WORLD_OS_PRIVATE_DATA_ENABLED === 'true';
      const accessAssertion = request.headers.get('cf-access-jwt-assertion');

      if (!privateEnabled) {
        return json({
          mode: 'demo',
          readOnly: true,
          source: 'synthetic demo',
          entities: demo,
          warning: 'Dados privados desativados por segurança. Ative somente depois de proteger o Worker com Cloudflare Access.',
        });
      }

      if (!accessAssertion) {
        return json({
          error: 'PRIVATE_DATA_REQUIRES_CLOUDFLARE_ACCESS',
          message: 'Fail closed: Cloudflare Access assertion ausente.',
        }, 403);
      }

      if (!env.NOTION_TOKEN) return json({ error: 'NOTION_NOT_CONFIGURED' }, 503);

      try {
        const entities = await notionEntities(env);
        return json({ mode: 'live', readOnly: true, source: 'Notion Entity Atlas', entities });
      } catch (error) {
        return json({
          error: 'NOTION_READ_FAILED',
          message: error instanceof Error ? error.message : 'Unknown error',
        }, 502);
      }
    }

    if (url.pathname.startsWith('/api/')) return json({ error: 'NOT_FOUND' }, 404);
    return env.ASSETS.fetch(request);
  },
};
