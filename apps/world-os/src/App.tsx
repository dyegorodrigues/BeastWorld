import { useEffect, useMemo, useState } from 'react';
import { Background, Controls, MiniMap, ReactFlow, type Edge, type Node } from '@xyflow/react';
import type { GraphResponse, WorldNode } from './types';

const fallback: GraphResponse = {
  mode: 'demo',
  readOnly: true,
  source: 'browser fallback',
  warning: 'API indisponível. Nenhum dado privado foi carregado.',
  nodes: [
    { id: 'DEMO-CHAR-001', kind: 'entity', name: 'Personagem de demonstração', type: 'Character', status: 'HYPOTHESIS', summary: 'Nó sintético: não pertence ao cânone BeastWorld.' },
    { id: 'DEMO-BEAST-001', kind: 'entity', name: 'Besta de demonstração', type: 'Beast Individual', status: 'HYPOTHESIS', summary: 'Nó sintético usado apenas para validar a interface.' },
    { id: 'DEMO-LORE-001', kind: 'lore', name: 'Conceito de demonstração', type: 'Concept', status: 'UNRESOLVED', summary: 'Conceito sintético. Dados reais permanecem protegidos.' },
  ],
  edges: [
    { id: 'DEMO-EDGE-001', source: 'DEMO-CHAR-001', target: 'DEMO-BEAST-001', relationType: 'RELATED_TO', status: 'HYPOTHESIS' },
    { id: 'DEMO-EDGE-002', source: 'DEMO-BEAST-001', target: 'DEMO-LORE-001', relationType: 'DEPENDS_ON', status: 'HYPOTHESIS' },
  ],
};

type Scope = 'all' | 'entity' | 'lore';

function graphFor(nodesIn: WorldNode[], edgesIn: GraphResponse['edges']): { nodes: Node[]; edges: Edge[] } {
  const ids = new Set(nodesIn.map((node) => node.id));
  const nodes = nodesIn.map((node, index) => ({
    id: node.id,
    position: { x: (index % 6) * 255, y: Math.floor(index / 6) * 165 },
    data: { label: `${node.name}\n${node.kind === 'entity' ? node.type : node.domain || node.type} · ${node.status}` },
    style: {
      width: 215,
      borderRadius: 16,
      padding: 12,
      border: node.kind === 'entity' ? '1px solid #536278' : '1px solid #6c5c83',
      background: node.kind === 'entity' ? '#151c26' : '#1b1722',
      color: '#f3f4f6',
      whiteSpace: 'pre-line' as const,
    },
  }));

  const edges = edgesIn
    .filter((edge) => ids.has(edge.source) && ids.has(edge.target))
    .map((edge) => ({
      id: edge.id,
      source: edge.source,
      target: edge.target,
      label: edge.relationType,
      data: edge,
      style: { strokeWidth: edge.strength === 'Structural' ? 2.2 : 1.2 },
      labelStyle: { fontSize: 9, fill: '#8994a6' },
    }));

  return { nodes, edges };
}

export default function App() {
  const [payload, setPayload] = useState<GraphResponse>(fallback);
  const [selected, setSelected] = useState<WorldNode | null>(fallback.nodes[0]);
  const [query, setQuery] = useState('');
  const [scope, setScope] = useState<Scope>('all');

  useEffect(() => {
    fetch('/api/graph')
      .then((response) => response.ok ? response.json() : Promise.reject(new Error(String(response.status))))
      .then((data: GraphResponse) => {
        setPayload(data);
        setSelected(data.nodes[0] ?? null);
      })
      .catch(() => setPayload(fallback));
  }, []);

  const filtered = useMemo(() => payload.nodes.filter((node) => {
    const matchesScope = scope === 'all' || node.kind === scope;
    const haystack = `${node.name} ${node.type} ${node.status} ${node.summary} ${node.domain ?? ''} ${node.region ?? ''}`.toLowerCase();
    return matchesScope && haystack.includes(query.toLowerCase());
  }), [payload.nodes, query, scope]);

  const graph = useMemo(() => graphFor(filtered, payload.edges), [filtered, payload.edges]);

  return (
    <main className="shell">
      <header className="topbar">
        <div><div className="eyebrow">BEASTWORLD</div><h1>World OS</h1></div>
        <div className={`mode ${payload.mode}`}>{payload.mode === 'live' ? 'LIVE · READ ONLY' : 'DEMO SEGURO'}</div>
      </header>

      <aside className="sidebar">
        <input aria-label="Buscar" placeholder="Buscar no mundo…" value={query} onChange={(event) => setQuery(event.target.value)} />
        <div className="scope" aria-label="Escopo">
          {(['all', 'entity', 'lore'] as Scope[]).map((item) => (
            <button className={scope === item ? 'active' : ''} key={item} onClick={() => setScope(item)}>
              {item === 'all' ? 'Tudo' : item === 'entity' ? 'Entidades' : 'Lore'}
            </button>
          ))}
        </div>
        <nav>
          {['Grafo', 'Entidades', 'Atlas', 'Cronologia', "Writer's Room", 'Cânone & Drift'].map((item, index) => (
            <button className={index === 0 ? 'active' : ''} key={item}>{item}</button>
          ))}
        </nav>
        <section>
          <h2>{filtered.length} nós · {graph.edges.length} relações visíveis</h2>
          {filtered.map((node) => (
            <button className="entity" key={node.id} onClick={() => setSelected(node)}>
              <strong>{node.name}</strong>
              <span>{node.kind === 'entity' ? node.type : node.domain || node.type} · {node.status}</span>
            </button>
          ))}
        </section>
      </aside>

      <section className="workspace">
        {payload.warning && <div className="warning">{payload.warning}</div>}
        <ReactFlow
          nodes={graph.nodes}
          edges={graph.edges}
          fitView
          onNodeClick={(_, node) => setSelected(filtered.find((candidate) => candidate.id === node.id) ?? null)}
          nodesConnectable={false}
          elementsSelectable
        >
          <Background gap={24} />
          <MiniMap pannable zoomable />
          <Controls />
        </ReactFlow>
      </section>

      <aside className="inspector">
        {selected ? (
          <>
            <div className="pill">{selected.kind} · {selected.type}</div>
            <h2>{selected.name}</h2>
            <div className="id">{selected.id}</div>
            <p>{selected.summary || 'Sem resumo.'}</p>
            <dl>
              <dt>Cânone</dt><dd>{selected.status}</dd>
              <dt>Sync</dt><dd>{selected.syncStatus ?? '—'}</dd>
              <dt>Domínio</dt><dd>{selected.domain ?? '—'}</dd>
              <dt>Spoiler</dt><dd>{selected.spoilerLayer ?? '—'}</dd>
              <dt>Região</dt><dd>{selected.region ?? '—'}</dd>
              <dt>Tier</dt><dd>{selected.tier ?? '—'}</dd>
              <dt>GitHub</dt><dd>{selected.githubPath ?? '—'}</dd>
            </dl>
            <div className="safe">Fase 0: leitura apenas. Nenhuma ação desta interface modifica o Notion, o GitHub ou o cânone.</div>
          </>
        ) : <p>Selecione um nó.</p>}
      </aside>
    </main>
  );
}
