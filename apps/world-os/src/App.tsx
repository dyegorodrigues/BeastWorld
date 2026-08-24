import { useEffect, useMemo, useState } from 'react';
import { Background, Controls, MiniMap, ReactFlow, type Edge, type Node } from '@xyflow/react';
import type { EntitiesResponse, WorldEntity } from './types';

const fallback: EntitiesResponse = {
  mode: 'demo',
  readOnly: true,
  source: 'browser fallback',
  warning: 'API indisponível. Nenhum dado privado foi carregado.',
  entities: [
    { id: 'DEMO-CHAR-001', name: 'Personagem de demonstração', type: 'Character', status: 'HYPOTHESIS', summary: 'Nó sintético: não pertence ao cânone BeastWorld.' },
    { id: 'DEMO-BEAST-001', name: 'Besta de demonstração', type: 'Beast Individual', status: 'HYPOTHESIS', summary: 'Nó sintético usado apenas para validar a interface.' },
    { id: 'DEMO-PLACE-001', name: 'Região de demonstração', type: 'Place', status: 'UNRESOLVED', summary: 'Local sintético. Dados reais permanecem protegidos.' },
  ],
};

function graphFor(entities: WorldEntity[]): { nodes: Node[]; edges: Edge[] } {
  const nodes = entities.map((entity, index) => ({
    id: entity.id,
    position: { x: (index % 4) * 260, y: Math.floor(index / 4) * 180 },
    data: { label: `${entity.name}\n${entity.type} · ${entity.status}` },
    style: {
      width: 220,
      borderRadius: 16,
      padding: 12,
      border: '1px solid #394251',
      background: '#151a22',
      color: '#f3f4f6',
      whiteSpace: 'pre-line' as const,
    },
  }));

  const edges = entities.slice(1).map((entity, index) => ({
    id: `preview-edge-${index}`,
    source: entities[0]?.id ?? entity.id,
    target: entity.id,
  }));

  return { nodes, edges };
}

export default function App() {
  const [payload, setPayload] = useState<EntitiesResponse>(fallback);
  const [selected, setSelected] = useState<WorldEntity | null>(fallback.entities[0]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    fetch('/api/entities')
      .then((response) => response.ok ? response.json() : Promise.reject(new Error(String(response.status))))
      .then((data: EntitiesResponse) => {
        setPayload(data);
        setSelected(data.entities[0] ?? null);
      })
      .catch(() => setPayload(fallback));
  }, []);

  const filtered = useMemo(
    () => payload.entities.filter((entity) => `${entity.name} ${entity.type} ${entity.status} ${entity.summary}`.toLowerCase().includes(query.toLowerCase())),
    [payload.entities, query],
  );
  const graph = useMemo(() => graphFor(filtered), [filtered]);

  return (
    <main className="shell">
      <header className="topbar">
        <div><div className="eyebrow">BEASTWORLD</div><h1>World OS</h1></div>
        <div className={`mode ${payload.mode}`}>{payload.mode === 'live' ? 'LIVE · READ ONLY' : 'DEMO SEGURO'}</div>
      </header>

      <aside className="sidebar">
        <input aria-label="Buscar" placeholder="Buscar no mundo…" value={query} onChange={(event) => setQuery(event.target.value)} />
        <nav>
          {['Grafo', 'Entidades', 'Atlas', 'Cronologia', "Writer's Room", 'Cânone & Drift'].map((item, index) => (
            <button className={index === 0 ? 'active' : ''} key={item}>{item}</button>
          ))}
        </nav>
        <section>
          <h2>Entidades</h2>
          {filtered.map((entity) => (
            <button className="entity" key={entity.id} onClick={() => setSelected(entity)}>
              <strong>{entity.name}</strong>
              <span>{entity.type} · {entity.status}</span>
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
          onNodeClick={(_, node) => setSelected(filtered.find((entity) => entity.id === node.id) ?? null)}
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
            <div className="pill">{selected.type}</div>
            <h2>{selected.name}</h2>
            <div className="id">{selected.id}</div>
            <p>{selected.summary || 'Sem resumo.'}</p>
            <dl>
              <dt>Cânone</dt><dd>{selected.status}</dd>
              <dt>Sync</dt><dd>{selected.syncStatus ?? '—'}</dd>
              <dt>Região</dt><dd>{selected.region ?? '—'}</dd>
              <dt>Tier</dt><dd>{selected.tier ?? '—'}</dd>
              <dt>GitHub</dt><dd>{selected.githubPath ?? '—'}</dd>
            </dl>
            <div className="safe">Fase 0: leitura apenas. A edição permanece bloqueada até o protocolo lossless + autenticação serem auditados.</div>
          </>
        ) : <p>Selecione uma entidade.</p>}
      </aside>
    </main>
  );
}
