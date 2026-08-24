'use client'

import {
  Background,
  Controls,
  MiniMap,
  ReactFlow,
  addEdge,
  useEdgesState,
  useNodesState,
  type Connection,
  type Edge,
  type Node,
} from '@xyflow/react'
import { ChangeEvent, useCallback, useMemo, useState } from 'react'

type EntityKind = 'personagem' | 'besta' | 'nacao' | 'local' | 'evento' | 'item' | 'ordem'
type ViewMode = 'grafo' | 'atlas' | 'arquivo' | 'timeline'

type WorldEntity = {
  id: string
  name: string
  kind: EntityKind
  subtitle: string
  summary: string
  notes: string
  icon: string
  relations: string[]
  image?: string
}

const kindLabel: Record<EntityKind, string> = {
  personagem: 'Personagens',
  besta: 'Bestas',
  nacao: 'Nações',
  local: 'Locais & Mapas',
  evento: 'Eventos',
  item: 'Itens & Relíquias',
  ordem: 'Ordens & Facções',
}

const seedEntities: WorldEntity[] = [
  {
    id: 'asterion',
    name: 'Asterion Vael',
    kind: 'personagem',
    subtitle: 'O herdeiro sem trono',
    summary: 'Um viajante marcado pela Guerra das Sete Luas e ligado ao antigo pacto de Vhalor.',
    notes: 'Definir o preço real do pacto e a criatura que reconhece sua linhagem.',
    icon: '♞',
    relations: ['vhalor', 'guerra-sete-luas', 'ordem-cinzas'],
  },
  {
    id: 'leviata-nhar',
    name: 'Leviatã de Nhar',
    kind: 'besta',
    subtitle: 'Besta abissal ancestral',
    summary: 'Uma criatura colossal que desperta quando os cristais de eco são extraídos em excesso.',
    notes: 'Relacionar ciclo de sono aos eclipses do calendário.',
    icon: '🐉',
    relations: ['umbra', 'cristal-eco'],
  },
  {
    id: 'vhalor',
    name: 'Reino de Vhalor',
    kind: 'nacao',
    subtitle: 'Coroa do oeste',
    summary: 'Nação militar e marítima construída sobre ruínas de uma civilização anterior.',
    notes: 'Criar casas nobres, rotas, capitais antigas e fronteiras disputadas.',
    icon: '♜',
    relations: ['asterion', 'guerra-sete-luas', 'umbra', 'ordem-cinzas'],
  },
  {
    id: 'umbra',
    name: 'Floresta de Umbra',
    kind: 'local',
    subtitle: 'Região viva e mutável',
    summary: 'A floresta altera caminhos e fronteiras; mapas antigos continuam verdadeiros, mas apenas em determinadas luas.',
    notes: 'Adicionar mapa em camadas: superfície, raízes, ruínas e corredores sazonais.',
    icon: '◈',
    relations: ['leviata-nhar', 'vhalor', 'cristal-eco'],
  },
  {
    id: 'guerra-sete-luas',
    name: 'Guerra das Sete Luas',
    kind: 'evento',
    subtitle: 'Era 4 · Ano 611–619',
    summary: 'Conflito que redesenhou as fronteiras do continente e fragmentou as antigas alianças.',
    notes: 'Quebrar em campanhas, batalhas, tratados, personagens e consequências.',
    icon: '✦',
    relations: ['asterion', 'vhalor', 'ordem-cinzas'],
  },
  {
    id: 'cristal-eco',
    name: 'Cristal do Eco',
    kind: 'item',
    subtitle: 'Relíquia mineral viva',
    summary: 'Armazena fragmentos de memória e reage à presença das bestas antigas.',
    notes: 'Criar regras: formação, uso, corrupção, valor político e efeito sobre bestas.',
    icon: '◆',
    relations: ['leviata-nhar', 'umbra', 'ordem-cinzas'],
  },
  {
    id: 'ordem-cinzas',
    name: 'Ordem das Cinzas',
    kind: 'ordem',
    subtitle: 'Guardiões do pacto antigo',
    summary: 'Uma ordem dividida entre preservar o equilíbrio e usar as bestas como instrumento de poder.',
    notes: 'Separar facção pública, círculo interno e arquivos secretos.',
    icon: '☼',
    relations: ['asterion', 'vhalor', 'guerra-sete-luas', 'cristal-eco'],
  },
]

const initialNodes: Node[] = seedEntities.map((entity, index) => {
  const positions = [
    { x: 40, y: 55 },
    { x: 650, y: 90 },
    { x: 310, y: 25 },
    { x: 630, y: 320 },
    { x: 275, y: 330 },
    { x: 900, y: 230 },
    { x: 385, y: 185 },
  ]
  return {
    id: entity.id,
    position: positions[index],
    data: { label: `${entity.icon}  ${entity.name}` },
    className: `world-node node-${entity.kind}`,
  }
})

const initialEdges: Edge[] = [
  { id: 'e1', source: 'asterion', target: 'vhalor' },
  { id: 'e2', source: 'asterion', target: 'guerra-sete-luas' },
  { id: 'e3', source: 'asterion', target: 'ordem-cinzas' },
  { id: 'e4', source: 'leviata-nhar', target: 'umbra' },
  { id: 'e5', source: 'leviata-nhar', target: 'cristal-eco' },
  { id: 'e6', source: 'vhalor', target: 'umbra' },
  { id: 'e7', source: 'vhalor', target: 'guerra-sete-luas' },
  { id: 'e8', source: 'ordem-cinzas', target: 'cristal-eco' },
  { id: 'e9', source: 'ordem-cinzas', target: 'guerra-sete-luas' },
].map((edge) => ({ ...edge, animated: true, className: 'world-edge' }))

const atlasPins = [
  { id: 'vhalor', x: '23%', y: '52%' },
  { id: 'umbra', x: '67%', y: '33%' },
  { id: 'leviata-nhar', x: '81%', y: '69%' },
  { id: 'ordem-cinzas', x: '48%', y: '72%' },
]

export default function Home() {
  const [entities, setEntities] = useState(seedEntities)
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)
  const [selectedId, setSelectedId] = useState('asterion')
  const [mode, setMode] = useState<ViewMode>('grafo')
  const [query, setQuery] = useState('')

  const selected = entities.find((entity) => entity.id === selectedId) ?? entities[0]
  const filteredEntities = useMemo(() => {
    const normalized = query.trim().toLowerCase()
    if (!normalized) return entities
    return entities.filter((entity) =>
      `${entity.name} ${entity.subtitle} ${entity.summary} ${kindLabel[entity.kind]}`.toLowerCase().includes(normalized),
    )
  }, [entities, query])

  const onConnect = useCallback(
    (connection: Connection) => setEdges((current) => addEdge({ ...connection, animated: true }, current)),
    [setEdges],
  )

  const updateNotes = (notes: string) => {
    setEntities((current) => current.map((entity) => (entity.id === selected.id ? { ...entity, notes } : entity)))
  }

  const addEntity = () => {
    const id = `entidade-${Date.now()}`
    const entity: WorldEntity = {
      id,
      name: 'Nova entidade',
      kind: 'personagem',
      subtitle: 'Rascunho',
      summary: 'Comece pelo conceito e conecte esta entidade ao restante do mundo.',
      notes: '',
      icon: '✧',
      relations: [],
    }
    setEntities((current) => [...current, entity])
    setNodes((current) => [
      ...current,
      {
        id,
        position: { x: 180 + Math.random() * 520, y: 120 + Math.random() * 260 },
        data: { label: '✧  Nova entidade' },
        className: 'world-node node-personagem',
      },
    ])
    setSelectedId(id)
    setMode('grafo')
  }

  const handleImage = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => {
      const image = typeof reader.result === 'string' ? reader.result : undefined
      setEntities((current) => current.map((entity) => (entity.id === selected.id ? { ...entity, image } : entity)))
    }
    reader.readAsDataURL(file)
  }

  const focusEntity = (id: string) => {
    setSelectedId(id)
    setMode('grafo')
  }

  return (
    <main className="app-shell">
      <aside className="sidebar">
        <div className="brand-block">
          <div className="brand-mark">BW</div>
          <div>
            <strong>BEASTWORLD</strong>
            <span>WORLD OS · ALPHA</span>
          </div>
        </div>

        <button className="new-button" onClick={addEntity}>＋ Novo elemento</button>

        <label className="search-box">
          <span>⌕</span>
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar no mundo..." />
        </label>

        <nav className="entity-nav" aria-label="Tipos de entidade">
          {(Object.keys(kindLabel) as EntityKind[]).map((kind) => {
            const count = entities.filter((entity) => entity.kind === kind).length
            return (
              <button key={kind} onClick={() => setQuery(kindLabel[kind])}>
                <span>{kindLabel[kind]}</span><b>{count}</b>
              </button>
            )
          })}
        </nav>

        <div className="sidebar-footer">
          <span className="pulse" />
          <div><strong>{entities.length} entidades</strong><small>{edges.length} vínculos ativos</small></div>
        </div>
      </aside>

      <section className="workspace">
        <header className="topbar">
          <div>
            <p>CONTINENTE PRINCIPAL / VISÃO DE AUTOR</p>
            <h1>Atlas Vivo</h1>
          </div>
          <div className="mode-switcher">
            {([
              ['grafo', 'Grafo'],
              ['atlas', 'Atlas'],
              ['arquivo', 'Arquivo'],
              ['timeline', 'Cronologia'],
            ] as [ViewMode, string][]).map(([value, label]) => (
              <button key={value} className={mode === value ? 'active' : ''} onClick={() => setMode(value)}>{label}</button>
            ))}
          </div>
        </header>

        <div className="canvas-area">
          {mode === 'grafo' && (
            <ReactFlow
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              onNodeClick={(_, node) => setSelectedId(node.id)}
              fitView
              minZoom={0.25}
              maxZoom={2.2}
            >
              <MiniMap pannable zoomable />
              <Controls />
              <Background gap={28} size={1} />
            </ReactFlow>
          )}

          {mode === 'atlas' && (
            <div className="atlas-view">
              <div className="map-title"><span>MAPA CONCEITUAL</span><strong>Terras de Aethel</strong></div>
              <div className="continent continent-a" />
              <div className="continent continent-b" />
              <div className="continent continent-c" />
              {atlasPins.map((pin) => {
                const entity = entities.find((item) => item.id === pin.id)
                if (!entity) return null
                return (
                  <button key={pin.id} className="map-pin" style={{ left: pin.x, top: pin.y }} onClick={() => setSelectedId(pin.id)}>
                    <span>{entity.icon}</span><em>{entity.name}</em>
                  </button>
                )
              })}
            </div>
          )}

          {mode === 'arquivo' && (
            <div className="archive-view">
              <div className="archive-heading"><p>ARQUIVO MESTRE</p><h2>Conhecimento do mundo</h2></div>
              <div className="card-grid">
                {filteredEntities.map((entity) => (
                  <button key={entity.id} className="entity-card" onClick={() => setSelectedId(entity.id)}>
                    <div className="card-art">{entity.image ? <img src={entity.image} alt="" /> : <span>{entity.icon}</span>}</div>
                    <small>{kindLabel[entity.kind]}</small>
                    <strong>{entity.name}</strong>
                    <p>{entity.summary}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {mode === 'timeline' && (
            <div className="timeline-view">
              <div className="archive-heading"><p>CRONOLOGIA</p><h2>Era das Fraturas</h2></div>
              <div className="timeline-line">
                {[
                  ['602', 'Primeiro Eco', 'cristal-eco'],
                  ['611', 'Guerra das Sete Luas', 'guerra-sete-luas'],
                  ['616', 'Queda do Porto Negro', 'vhalor'],
                  ['619', 'Pacto das Cinzas', 'ordem-cinzas'],
                  ['627', 'Despertar em Nhar', 'leviata-nhar'],
                ].map(([year, label, id]) => (
                  <button key={year} onClick={() => setSelectedId(id)}><b>{year}</b><span>{label}</span></button>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <aside className="inspector">
        <div className="hero-art">
          {selected.image ? <img src={selected.image} alt={`Imagem de ${selected.name}`} /> : <span>{selected.icon}</span>}
          <label className="image-action">＋ imagem<input type="file" accept="image/*" onChange={handleImage} /></label>
        </div>

        <div className="inspector-content">
          <small>{kindLabel[selected.kind]}</small>
          <h2>{selected.name}</h2>
          <h3>{selected.subtitle}</h3>
          <p>{selected.summary}</p>

          <div className="section-title"><span>VÍNCULOS</span><b>{selected.relations.length}</b></div>
          <div className="relations">
            {selected.relations.map((id) => {
              const relation = entities.find((entity) => entity.id === id)
              if (!relation) return null
              return <button key={id} onClick={() => focusEntity(id)}>{relation.icon} {relation.name}<span>→</span></button>
            })}
          </div>

          <div className="section-title"><span>OBSERVAÇÕES DO AUTOR</span></div>
          <textarea value={selected.notes} onChange={(event) => updateNotes(event.target.value)} placeholder="Registre contradições, ideias e segredos..." />

          <div className="status-row"><span>● CANON</span><span>Privado</span></div>
        </div>
      </aside>
    </main>
  )
}
