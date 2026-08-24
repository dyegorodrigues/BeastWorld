import { useEffect, useMemo, useState } from 'react';
import { Background, Controls, MiniMap, ReactFlow, type Edge, type Node } from '@xyflow/react';
import { demoGraph, demoMeta, type DemoUiMeta } from './demoData';
import type { GraphResponse, WorldEdge, WorldNode } from './types';

type Scope = 'all' | 'entity' | 'lore';
type ViewId = 'overview' | 'graph' | 'atlas' | 'timeline' | 'writers' | 'canon';

type NavItem = { id: ViewId; label: string; short: string; description: string };

const navigation: NavItem[] = [
  { id: 'overview', label: 'Visão Geral', short: 'OS', description: 'Pulso do mundo' },
  { id: 'graph', label: 'Grafo Vivo', short: 'GX', description: 'Relações & causalidade' },
  { id: 'atlas', label: 'Atlas', short: 'AT', description: 'Entidades & lore' },
  { id: 'timeline', label: 'Cronologia', short: 'TL', description: 'Tempo & consequências' },
  { id: 'writers', label: "Writer's Room", short: 'WR', description: 'Setup, tensão & payoff' },
  { id: 'canon', label: 'Cânone & Drift', short: 'CD', description: 'Integridade editorial' },
];

const accentMap: Record<DemoUiMeta['accent'], string> = {
  ember: '#df7655',
  tide: '#5aa8bd',
  frost: '#91b9c8',
  verdant: '#6faa8a',
  violet: '#9a83c7',
  gold: '#c8a365',
  steel: '#7f8da0',
};

function metaFor(node: WorldNode): DemoUiMeta {
  return demoMeta[node.id] ?? {
    icon: node.name.slice(0, 1).toUpperCase(),
    accent: node.kind === 'lore' ? 'violet' : 'steel',
    eyebrow: node.kind === 'lore' ? node.domain || node.type : node.type,
    tags: [node.status.toLowerCase()],
  };
}

function graphFor(nodesIn: WorldNode[], edgesIn: WorldEdge[]): { nodes: Node[]; edges: Edge[] } {
  const ids = new Set(nodesIn.map((node) => node.id));
  const grouped = [...nodesIn].sort((a, b) => a.kind.localeCompare(b.kind) || a.type.localeCompare(b.type));
  const nodes = grouped.map((node, index) => {
    const meta = metaFor(node);
    const column = index % 4;
    const row = Math.floor(index / 4);
    return {
      id: node.id,
      position: { x: column * 285 + (row % 2) * 30, y: row * 190 },
      data: { label: `${node.name}\n${meta.eyebrow}` },
      style: {
        width: 238,
        minHeight: 92,
        borderRadius: 20,
        padding: '17px 18px',
        border: `1px solid ${accentMap[meta.accent]}66`,
        borderLeft: `4px solid ${accentMap[meta.accent]}`,
        background: 'linear-gradient(145deg, rgba(23,29,38,.98), rgba(13,17,23,.98))',
        color: '#f7f4ec',
        whiteSpace: 'pre-line' as const,
        lineHeight: 1.45,
        fontSize: 12,
        boxShadow: '0 18px 50px rgba(0,0,0,.24)',
      },
    };
  });

  const edges = edgesIn
    .filter((edge) => ids.has(edge.source) && ids.has(edge.target))
    .map((edge) => ({
      id: edge.id,
      source: edge.source,
      target: edge.target,
      label: edge.relationType,
      data: edge,
      animated: edge.strength === 'Structural',
      style: { strokeWidth: edge.strength === 'Structural' ? 2 : 1.1, stroke: edge.strength === 'Structural' ? '#b99a65' : '#485566' },
      labelStyle: { fontSize: 9, fill: '#8995a7', letterSpacing: '.04em' },
      labelBgStyle: { fill: '#0b0f15', fillOpacity: 0.88 },
    }));

  return { nodes, edges };
}

function countConnections(nodeId: string, edges: WorldEdge[]): number {
  return edges.filter((edge) => edge.source === nodeId || edge.target === nodeId).length;
}

function StatusDot({ status }: { status: string }) {
  return <span className={`status-dot ${status.toLowerCase().replace(/[^a-z]+/g, '-')}`} aria-hidden="true" />;
}

function NodeCard({ node, edges, selected, onSelect }: { node: WorldNode; edges: WorldEdge[]; selected: boolean; onSelect: () => void }) {
  const meta = metaFor(node);
  return (
    <button className={`atlas-card ${selected ? 'selected' : ''}`} onClick={onSelect} style={{ '--accent': accentMap[meta.accent] } as React.CSSProperties}>
      <div className="card-head">
        <span className="sigil">{meta.icon}</span>
        <span className="connection-count">{countConnections(node.id, edges)} links</span>
      </div>
      <div className="card-eyebrow">{meta.eyebrow}</div>
      <h3>{node.name}</h3>
      <p>{node.summary}</p>
      <div className="tag-row">{meta.tags.slice(0, 3).map((tag) => <span key={tag}>{tag}</span>)}</div>
    </button>
  );
}

export default function App() {
  const [payload, setPayload] = useState<GraphResponse>(demoGraph);
  const [selected, setSelected] = useState<WorldNode | null>(demoGraph.nodes[0]);
  const [query, setQuery] = useState('');
  const [scope, setScope] = useState<Scope>('all');
  const [activeView, setActiveView] = useState<ViewId>('overview');

  useEffect(() => {
    fetch('/api/graph')
      .then((response) => response.ok ? response.json() : Promise.reject(new Error(String(response.status))))
      .then((data: GraphResponse) => {
        const safePayload = data.mode === 'demo' && data.nodes.length < 5 ? demoGraph : data;
        setPayload(safePayload);
        setSelected(safePayload.nodes[0] ?? null);
      })
      .catch(() => setPayload(demoGraph));
  }, []);

  const filtered = useMemo(() => payload.nodes.filter((node) => {
    const matchesScope = scope === 'all' || node.kind === scope;
    const haystack = `${node.name} ${node.type} ${node.status} ${node.summary} ${node.domain ?? ''} ${node.region ?? ''} ${metaFor(node).tags.join(' ')}`.toLowerCase();
    return matchesScope && haystack.includes(query.trim().toLowerCase());
  }), [payload.nodes, query, scope]);

  const graph = useMemo(() => graphFor(filtered, payload.edges), [filtered, payload.edges]);
  const selectedMeta = selected ? metaFor(selected) : null;
  const selectedEdges = selected ? payload.edges.filter((edge) => edge.source === selected.id || edge.target === selected.id) : [];
  const timeline = useMemo(() => payload.nodes
    .map((node) => ({ node, meta: metaFor(node) }))
    .filter(({ meta }) => meta.timelineYear !== undefined)
    .sort((a, b) => (a.meta.timelineYear ?? 0) - (b.meta.timelineYear ?? 0)), [payload.nodes]);

  const stats = useMemo(() => ({
    entities: payload.nodes.filter((node) => node.kind === 'entity').length,
    lore: payload.nodes.filter((node) => node.kind === 'lore').length,
    relations: payload.edges.length,
    unresolved: payload.nodes.filter((node) => node.status === 'UNRESOLVED').length,
  }), [payload]);

  const focusItems = [...payload.nodes]
    .sort((a, b) => countConnections(b.id, payload.edges) - countConnections(a.id, payload.edges))
    .slice(0, 4);

  const renderOverview = () => (
    <div className="view-scroll overview-view">
      <section className="hero-panel">
        <div>
          <div className="kicker">CREATOR OPERATING SYSTEM · READ ONLY</div>
          <h2>O mundo inteiro,<br/><em>numa única superfície.</em></h2>
          <p>Explore relações, causalidade, território, história e dramaturgia sem duplicar a fonte da verdade.</p>
          <div className="hero-actions">
            <button onClick={() => setActiveView('graph')}>Abrir Grafo Vivo</button>
            <button className="ghost" onClick={() => setActiveView('atlas')}>Explorar Atlas</button>
          </div>
        </div>
        <div className="world-orbit" aria-hidden="true">
          <div className="orbit orbit-a"><i /><i /><i /></div>
          <div className="orbit orbit-b"><i /><i /></div>
          <div className="core-mark">BW</div>
        </div>
      </section>

      <section className="metric-grid">
        <article><span>Entidades</span><strong>{stats.entities}</strong><small>personagens, bestas, facções, lugares</small></article>
        <article><span>Lore</span><strong>{stats.lore}</strong><small>conceitos, eventos, mistérios, sistemas</small></article>
        <article><span>Relações tipadas</span><strong>{stats.relations}</strong><small>causalidade e dependência navegáveis</small></article>
        <article><span>Em aberto</span><strong>{stats.unresolved}</strong><small>hipóteses e questões não resolvidas</small></article>
      </section>

      <section className="dashboard-grid">
        <article className="panel wide-panel">
          <div className="panel-title"><div><span>WORLD PULSE</span><h3>Maior gravidade relacional</h3></div><button onClick={() => setActiveView('graph')}>Ver rede</button></div>
          <div className="pulse-list">
            {focusItems.map((node, index) => {
              const meta = metaFor(node);
              return <button key={node.id} onClick={() => { setSelected(node); setActiveView('graph'); }}>
                <span className="rank">0{index + 1}</span><span className="mini-sigil" style={{ '--accent': accentMap[meta.accent] } as React.CSSProperties}>{meta.icon}</span>
                <span className="pulse-copy"><strong>{node.name}</strong><small>{meta.signal ?? meta.eyebrow}</small></span>
                <span className="pulse-value">{countConnections(node.id, payload.edges)}</span>
              </button>;
            })}
          </div>
        </article>

        <article className="panel integrity-panel">
          <div className="panel-title"><div><span>INTEGRITY</span><h3>Memória protegida</h3></div><span className="health">HEALTHY</span></div>
          <div className="integrity-ring"><div><strong>100%</strong><span>read-only</span></div></div>
          <ul>
            <li><i />Nenhuma rota de escrita ativa</li>
            <li><i />Projeção real desabilitada</li>
            <li><i />Fonte editorial preservada</li>
          </ul>
        </article>
      </section>

      <section className="panel recent-panel">
        <div className="panel-title"><div><span>CONNECTED THINKING</span><h3>Atalhos para pensar o mundo</h3></div></div>
        <div className="shortcut-grid">
          {navigation.slice(1).map((item) => <button key={item.id} onClick={() => setActiveView(item.id)}><b>{item.short}</b><span><strong>{item.label}</strong><small>{item.description}</small></span><em>→</em></button>)}
        </div>
      </section>
    </div>
  );

  const renderGraph = () => (
    <div className="graph-view">
      <div className="graph-toolbar">
        <div><span className="toolbar-kicker">LIVING KNOWLEDGE GRAPH</span><strong>{filtered.length} nós · {graph.edges.length} relações</strong></div>
        <div className="scope compact" aria-label="Escopo">
          {(['all', 'entity', 'lore'] as Scope[]).map((item) => <button className={scope === item ? 'active' : ''} key={item} onClick={() => setScope(item)}>{item === 'all' ? 'Tudo' : item === 'entity' ? 'Entidades' : 'Lore'}</button>)}
        </div>
      </div>
      <ReactFlow nodes={graph.nodes} edges={graph.edges} fitView fitViewOptions={{ padding: 0.22 }} onNodeClick={(_, node) => setSelected(filtered.find((candidate) => candidate.id === node.id) ?? null)} nodesConnectable={false} elementsSelectable>
        <Background gap={28} size={1} color="#25303d" />
        <MiniMap pannable zoomable nodeColor="#7f8da0" maskColor="rgba(5,8,12,.72)" />
        <Controls />
      </ReactFlow>
      <div className="graph-legend"><span><i className="structural"/> estrutural</span><span><i/> relação tipada</span><span className="readonly-mark">READ ONLY</span></div>
    </div>
  );

  const renderAtlas = () => (
    <div className="view-scroll atlas-view">
      <div className="view-heading"><div><span>ENTITY & LORE ATLAS</span><h2>Explore por significado, não por pasta.</h2><p>Uma coleção visual das peças do mundo e do contexto que as conecta.</p></div><div className="scope">{(['all', 'entity', 'lore'] as Scope[]).map((item) => <button className={scope === item ? 'active' : ''} key={item} onClick={() => setScope(item)}>{item === 'all' ? 'Tudo' : item === 'entity' ? 'Entidades' : 'Lore'}</button>)}</div></div>
      <div className="atlas-grid">
        {filtered.map((node) => <NodeCard key={node.id} node={node} edges={payload.edges} selected={selected?.id === node.id} onSelect={() => setSelected(node)} />)}
      </div>
    </div>
  );

  const renderTimeline = () => (
    <div className="view-scroll timeline-view">
      <div className="view-heading"><div><span>CHRONOLOGY ENGINE</span><h2>Causa antes de data.</h2><p>Eventos ligados ao que mudou, quem foi afetado e quais conflitos nasceram depois.</p></div></div>
      <div className="timeline-stage">
        <div className="timeline-spine" />
        {timeline.length ? timeline.map(({ node, meta }, index) => (
          <button key={node.id} className={`timeline-event side-${index % 2}`} onClick={() => setSelected(node)} style={{ '--accent': accentMap[meta.accent] } as React.CSSProperties}>
            <span className="timeline-year">{meta.timelineYear === 0 ? 'NOW' : meta.timelineYear && meta.timelineYear < 0 ? `${Math.abs(meta.timelineYear)} BA` : `+${meta.timelineYear}`}</span>
            <span className="timeline-dot" />
            <div><small>{meta.era}</small><h3>{node.name}</h3><p>{meta.timelineLabel}</p><span>{countConnections(node.id, payload.edges)} consequences</span></div>
          </button>
        )) : <div className="empty-state">A projeção atual ainda não contém datas estruturadas.</div>}
      </div>
    </div>
  );

  const renderWriters = () => {
    const lanes: Array<{ id: NonNullable<DemoUiMeta['writerLane']>; title: string; subtitle: string }> = [
      { id: 'setup', title: 'Setups', subtitle: 'sementes, promessas e informação plantada' },
      { id: 'friction', title: 'Friction', subtitle: 'pressão, conflito e mudança de trajetória' },
      { id: 'payoff', title: 'Payoffs', subtitle: 'revelações, consequências e fechamento' },
    ];
    return <div className="view-scroll writers-view">
      <div className="view-heading"><div><span>WRITER'S ROOM</span><h2>Do lore à dramaturgia.</h2><p>Uma mesa visual para enxergar promessas narrativas sem transformar hipótese em cânone.</p></div><div className="readonly-badge">PLANNING · READ ONLY</div></div>
      <div className="story-board">
        {lanes.map((lane) => <section key={lane.id} className="story-lane"><header><span>{lane.title}</span><small>{lane.subtitle}</small></header><div>{payload.nodes.filter((node) => metaFor(node).writerLane === lane.id).map((node) => {
          const meta = metaFor(node); return <button key={node.id} onClick={() => setSelected(node)} style={{ '--accent': accentMap[meta.accent] } as React.CSSProperties}><div><span className="mini-sigil">{meta.icon}</span><small>{meta.eyebrow}</small></div><strong>{node.name}</strong><p>{node.summary}</p><footer><span>{node.status}</span><span>{countConnections(node.id, payload.edges)} links</span></footer></button>;
        })}</div></section>)}
      </div>
      <div className="writer-note"><strong>Próxima fase</strong><p>Edição, drag-and-drop e promoção editorial continuarão bloqueados até o ChangeEnvelope, idempotência, reconciliação e integrity gates estarem auditados.</p></div>
    </div>;
  };

  const renderCanon = () => (
    <div className="view-scroll canon-view">
      <div className="view-heading"><div><span>CANON & DRIFT CONTROL</span><h2>Nada muda sem deixar rastro.</h2><p>Este painel será o freio editorial: origem, estado, impacto, regressão e sincronização.</p></div><div className="health large">SAFE MODE</div></div>
      <section className="canon-grid">
        <article className="panel"><span className="panel-label">WRITE SURFACE</span><strong className="big-state">LOCKED</strong><p>Nenhuma ação deste Web altera Notion, GitHub ou cânone.</p><div className="checkline"><i/>API pública sem endpoints de mutação</div></article>
        <article className="panel"><span className="panel-label">PRIVATE PROJECTION</span><strong className="big-state">OFF</strong><p>Dados reais permanecem fora do navegador nesta fase.</p><div className="checkline"><i/>Demo sintética isolada</div></article>
        <article className="panel"><span className="panel-label">SOURCE OF TRUTH</span><strong className="big-state">INTACT</strong><p>O Web é uma projeção; não cria um segundo banco de lore.</p><div className="checkline"><i/>Notion + GitHub preservados</div></article>
      </section>
      <section className="panel gate-panel"><div className="panel-title"><div><span>FUTURE WRITE GATES</span><h3>O que precisa existir antes de editar</h3></div><span className="locked-chip">5 BLOCKING</span></div><div className="gate-list">{['ChangeEnvelope lossless com before/after','Idempotência e retry seguro','Reconciliação Notion ↔ GitHub','Detecção explícita de drift e conflito','Regressão de lore pós-escrita'].map((gate, index) => <div key={gate}><span>0{index + 1}</span><strong>{gate}</strong><em>BLOCKED</em></div>)}</div></section>
    </div>
  );

  const content = activeView === 'overview' ? renderOverview() : activeView === 'graph' ? renderGraph() : activeView === 'atlas' ? renderAtlas() : activeView === 'timeline' ? renderTimeline() : activeView === 'writers' ? renderWriters() : renderCanon();

  return (
    <main className="world-shell">
      <aside className="rail">
        <div className="brand"><div className="brand-mark">B</div><div><span>BEASTWORLD</span><strong>WORLD OS</strong></div></div>
        <nav className="main-nav">{navigation.map((item) => <button key={item.id} className={activeView === item.id ? 'active' : ''} onClick={() => setActiveView(item.id)}><b>{item.short}</b><span><strong>{item.label}</strong><small>{item.description}</small></span></button>)}</nav>
        <div className="rail-state"><div><i className={payload.mode}/><span>{payload.mode === 'live' ? 'Private projection' : 'Synthetic projection'}</span></div><strong>{payload.mode === 'live' ? 'LIVE · READ ONLY' : 'DEMO · SAFE'}</strong></div>
      </aside>

      <section className="app-surface">
        <header className="command-bar">
          <div className="mobile-brand">BW</div>
          <label className="global-search"><span>⌕</span><input aria-label="Busca global" placeholder="Buscar personagem, besta, lugar, conceito…" value={query} onChange={(event) => setQuery(event.target.value)} /><kbd>{filtered.length}</kbd></label>
          <div className="command-actions"><span className="sync-pill"><i/>Source protected</span><button className="avatar">D</button></div>
        </header>
        {payload.warning && <div className="safe-banner"><strong>SAFE DEMO</strong><span>{payload.warning}</span><button onClick={() => setActiveView('canon')}>Ver proteção</button></div>}
        <section className="workspace-v2">{content}</section>
      </section>

      <aside className="detail-panel">
        {selected && selectedMeta ? <>
          <header><span>INSPECTOR</span><button aria-label="Fechar seleção" onClick={() => setSelected(null)}>×</button></header>
          <div className="detail-identity" style={{ '--accent': accentMap[selectedMeta.accent] } as React.CSSProperties}><div className="detail-sigil">{selectedMeta.icon}</div><div><small>{selectedMeta.eyebrow}</small><h2>{selected.name}</h2></div></div>
          <div className="detail-status"><span><StatusDot status={selected.status}/>{selected.status}</span><span>{selected.syncStatus ?? '—'}</span></div>
          <p className="detail-summary">{selected.summary || 'Sem resumo.'}</p>
          <div className="tag-row detail-tags">{selectedMeta.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
          <section className="detail-section"><h3>Contexto</h3><dl><dt>Região</dt><dd>{selected.region ?? '—'}</dd><dt>Tier</dt><dd>{selected.tier ?? '—'}</dd><dt>Domínio</dt><dd>{selected.domain ?? '—'}</dd><dt>Spoiler</dt><dd>{selected.spoilerLayer ?? '—'}</dd></dl></section>
          <section className="detail-section"><h3>Relações <span>{selectedEdges.length}</span></h3><div className="relation-list">{selectedEdges.length ? selectedEdges.map((edge) => {
            const otherId = edge.source === selected.id ? edge.target : edge.source; const other = payload.nodes.find((node) => node.id === otherId); return <button key={edge.id} onClick={() => other && setSelected(other)}><span>{edge.source === selected.id ? 'OUT' : 'IN'}</span><div><strong>{edge.relationType}</strong><small>{other?.name ?? otherId}</small></div><em>→</em></button>;
          }) : <small>Nenhuma relação visível.</small>}</div></section>
          <section className="detail-section provenance"><h3>Proveniência</h3><div><span>ID</span><code>{selected.id}</code></div><div><span>GitHub</span><code>{selected.githubPath ?? '—'}</code></div></section>
          <div className="safety-lock"><span>LOCK</span><p><strong>Fase 0 · leitura apenas</strong>Nenhuma ação desta interface modifica Notion, GitHub ou cânone.</p></div>
        </> : <div className="empty-inspector"><span>◎</span><strong>Nada selecionado</strong><p>Selecione um nó, ficha ou evento para abrir o contexto sem sair da superfície atual.</p></div>}
      </aside>

      <nav className="mobile-nav">{navigation.map((item) => <button key={item.id} className={activeView === item.id ? 'active' : ''} onClick={() => setActiveView(item.id)}><b>{item.short}</b><span>{item.label}</span></button>)}</nav>
    </main>
  );
}
