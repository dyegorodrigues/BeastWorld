import type { GraphResponse } from './types';

export type DemoUiMeta = {
  icon: string;
  accent: 'ember' | 'tide' | 'frost' | 'verdant' | 'violet' | 'gold' | 'steel';
  eyebrow: string;
  tags: string[];
  era?: string;
  timelineYear?: number;
  timelineLabel?: string;
  writerLane?: 'setup' | 'friction' | 'payoff';
  signal?: string;
};

/**
 * Synthetic projection used only while private BeastWorld data is disabled.
 * All IDs are DEMO-prefixed by design. None of these records belong to BeastWorld canon.
 */
export const demoGraph: GraphResponse = {
  mode: 'demo',
  readOnly: true,
  source: 'synthetic demo',
  warning: 'Ambiente de demonstração. O lore real continua protegido e não é carregado no navegador.',
  nodes: [
    {
      id: 'DEMO-CHAR-001', kind: 'entity', name: 'Kael Ardan', type: 'Character', status: 'HYPOTHESIS',
      summary: 'Comandante sintético usado para testar fichas, relações políticas e foco narrativo.', region: 'Ash Coast', tier: 'Primary', syncStatus: 'DEMO', spoilerLayer: 'Public',
    },
    {
      id: 'DEMO-CHAR-002', kind: 'entity', name: 'Mira Voss', type: 'Character', status: 'HYPOTHESIS',
      summary: 'Diplomata sintética ligada a três facções rivais. Existe apenas para validar a experiência visual.', region: 'Glass Marches', tier: 'Primary', syncStatus: 'DEMO', spoilerLayer: 'Public',
    },
    {
      id: 'DEMO-BEAST-001', kind: 'entity', name: 'Varkesh', type: 'Beast Individual', status: 'HYPOTHESIS',
      summary: 'Besta sintética de grande porte. Testa vínculo, ameaça, territorialidade e dependências.', region: 'Ash Coast', tier: 'Apex', syncStatus: 'DEMO', spoilerLayer: 'Public',
    },
    {
      id: 'DEMO-BEAST-002', kind: 'entity', name: 'Nerith', type: 'Beast Individual', status: 'HYPOTHESIS',
      summary: 'Criatura marinha sintética usada para validar atlas, relações ecológicas e iconografia.', region: 'Drowned Reach', tier: 'Apex', syncStatus: 'DEMO', spoilerLayer: 'Public',
    },
    {
      id: 'DEMO-FACTION-001', kind: 'entity', name: 'House Aurel', type: 'Faction', status: 'HYPOTHESIS',
      summary: 'Casa sintética com disputa sucessória. Serve para demonstrar diplomacia, legitimidade e conflito.', region: 'Ash Coast', tier: 'Major', syncStatus: 'DEMO', spoilerLayer: 'Public',
    },
    {
      id: 'DEMO-FACTION-002', kind: 'entity', name: 'The Salt Compact', type: 'Faction', status: 'HYPOTHESIS',
      summary: 'Coalizão mercantil sintética que testa redes de influência e dependência econômica.', region: 'Drowned Reach', tier: 'Major', syncStatus: 'DEMO', spoilerLayer: 'Public',
    },
    {
      id: 'DEMO-PLACE-001', kind: 'entity', name: 'Cinderhold', type: 'Location', status: 'HYPOTHESIS',
      summary: 'Fortaleza vulcânica sintética. Demonstra navegação espacial, território e eventos históricos.', region: 'Ash Coast', tier: 'Capital', syncStatus: 'DEMO', spoilerLayer: 'Public',
    },
    {
      id: 'DEMO-PLACE-002', kind: 'entity', name: 'Veyra Deep', type: 'Location', status: 'HYPOTHESIS',
      summary: 'Cidade portuária sintética construída sobre plataformas negras. Não pertence ao universo real.', region: 'Drowned Reach', tier: 'City', syncStatus: 'DEMO', spoilerLayer: 'Public',
    },
    {
      id: 'DEMO-INST-001', kind: 'entity', name: 'The Meridian Academy', type: 'Institution', status: 'HYPOTHESIS',
      summary: 'Instituição sintética criada para testar hierarquias, alunos, mestres e linhas de pesquisa.', region: 'Glass Marches', tier: 'Major', syncStatus: 'DEMO', spoilerLayer: 'Public',
    },
    {
      id: 'DEMO-LORE-001', kind: 'lore', name: 'Resonance Bond', type: 'Magic Principle', status: 'UNRESOLVED',
      summary: 'Princípio mágico sintético usado para validar relações causais sem tocar no sistema real.', domain: 'Power System', syncStatus: 'DEMO', spoilerLayer: 'Author',
    },
    {
      id: 'DEMO-LORE-002', kind: 'lore', name: 'The Ember Accord', type: 'Historical Pact', status: 'UNRESOLVED',
      summary: 'Tratado sintético que encerrou uma guerra fictícia do dataset de demonstração.', domain: 'Politics', syncStatus: 'DEMO', spoilerLayer: 'Public',
    },
    {
      id: 'DEMO-LORE-003', kind: 'lore', name: 'Black Tide Event', type: 'Historical Event', status: 'UNRESOLVED',
      summary: 'Evento sintético que conecta geografia, criatura, facção e consequências narrativas.', domain: 'History', syncStatus: 'DEMO', spoilerLayer: 'Public',
    },
    {
      id: 'DEMO-LORE-004', kind: 'lore', name: 'Succession Fracture', type: 'Narrative Conflict', status: 'UNRESOLVED',
      summary: 'Conflito sintético para testar setups, payoffs, facções e dependências de roteiro.', domain: 'Story', syncStatus: 'DEMO', spoilerLayer: 'Author',
    },
    {
      id: 'DEMO-LORE-005', kind: 'lore', name: 'The Silent Witness', type: 'Mystery', status: 'UNRESOLVED',
      summary: 'Mistério sintético usado para validar camadas de spoiler e planejamento de reveals.', domain: 'Mystery', syncStatus: 'DEMO', spoilerLayer: 'Author',
    },
  ],
  edges: [
    { id: 'DEMO-EDGE-001', source: 'DEMO-CHAR-001', target: 'DEMO-BEAST-001', relationType: 'RECOGNIZES', status: 'HYPOTHESIS', strength: 'Structural' },
    { id: 'DEMO-EDGE-002', source: 'DEMO-BEAST-001', target: 'DEMO-LORE-001', relationType: 'DEPENDS_ON', status: 'HYPOTHESIS', strength: 'Structural' },
    { id: 'DEMO-EDGE-003', source: 'DEMO-CHAR-002', target: 'DEMO-FACTION-002', relationType: 'LEGITIMIZES', status: 'HYPOTHESIS' },
    { id: 'DEMO-EDGE-004', source: 'DEMO-FACTION-001', target: 'DEMO-LORE-004', relationType: 'CAUSED_BY', status: 'HYPOTHESIS', strength: 'Structural' },
    { id: 'DEMO-EDGE-005', source: 'DEMO-FACTION-002', target: 'DEMO-PLACE-002', relationType: 'DEPENDS_ON', status: 'HYPOTHESIS' },
    { id: 'DEMO-EDGE-006', source: 'DEMO-BEAST-002', target: 'DEMO-PLACE-002', relationType: 'THREATENS', status: 'HYPOTHESIS', strength: 'Structural' },
    { id: 'DEMO-EDGE-007', source: 'DEMO-LORE-003', target: 'DEMO-FACTION-002', relationType: 'CAUSED_BY', status: 'HYPOTHESIS' },
    { id: 'DEMO-EDGE-008', source: 'DEMO-LORE-002', target: 'DEMO-FACTION-001', relationType: 'LEGITIMIZES', status: 'HYPOTHESIS' },
    { id: 'DEMO-EDGE-009', source: 'DEMO-INST-001', target: 'DEMO-LORE-001', relationType: 'DEPENDS_ON', status: 'HYPOTHESIS' },
    { id: 'DEMO-EDGE-010', source: 'DEMO-LORE-005', target: 'DEMO-CHAR-002', relationType: 'THREATENS', status: 'HYPOTHESIS' },
    { id: 'DEMO-EDGE-011', source: 'DEMO-CHAR-001', target: 'DEMO-FACTION-001', relationType: 'LEGITIMIZES', status: 'HYPOTHESIS' },
    { id: 'DEMO-EDGE-012', source: 'DEMO-PLACE-001', target: 'DEMO-LORE-002', relationType: 'RELATED_TO', status: 'HYPOTHESIS' },
  ],
};

export const demoMeta: Record<string, DemoUiMeta> = {
  'DEMO-CHAR-001': { icon: 'K', accent: 'ember', eyebrow: 'Character · Command', tags: ['bonded', 'military', 'succession'], writerLane: 'friction', signal: 'High narrative gravity' },
  'DEMO-CHAR-002': { icon: 'M', accent: 'violet', eyebrow: 'Character · Diplomacy', tags: ['diplomacy', 'secret', 'faction'], writerLane: 'setup', signal: 'Three unresolved ties' },
  'DEMO-BEAST-001': { icon: 'V', accent: 'ember', eyebrow: 'Apex Beast', tags: ['apex', 'bond', 'territory'], signal: 'Structural dependency' },
  'DEMO-BEAST-002': { icon: 'N', accent: 'tide', eyebrow: 'Apex Beast', tags: ['sea', 'threat', 'migration'], signal: 'Regional threat' },
  'DEMO-FACTION-001': { icon: 'A', accent: 'gold', eyebrow: 'Major Faction', tags: ['dynasty', 'succession', 'war'], writerLane: 'friction', signal: 'Legitimacy unstable' },
  'DEMO-FACTION-002': { icon: 'S', accent: 'tide', eyebrow: 'Coalition', tags: ['trade', 'ports', 'influence'], writerLane: 'setup', signal: 'Economic dependency' },
  'DEMO-PLACE-001': { icon: 'C', accent: 'steel', eyebrow: 'Capital Fortress', tags: ['volcanic', 'capital', 'history'], signal: '4 connected records' },
  'DEMO-PLACE-002': { icon: 'D', accent: 'tide', eyebrow: 'Port City', tags: ['port', 'trade', 'threat'], signal: 'Active pressure point' },
  'DEMO-INST-001': { icon: 'A', accent: 'violet', eyebrow: 'Institution', tags: ['academy', 'research', 'power'], signal: 'Research bottleneck' },
  'DEMO-LORE-001': { icon: 'R', accent: 'violet', eyebrow: 'Power System', tags: ['magic', 'bond', 'cost'], writerLane: 'payoff', signal: '2 structural dependencies' },
  'DEMO-LORE-002': { icon: 'E', accent: 'gold', eyebrow: 'Historical Pact', tags: ['history', 'law', 'peace'], era: 'Age of Ash', timelineYear: -41, timelineLabel: 'The pact is signed', writerLane: 'setup' },
  'DEMO-LORE-003': { icon: 'T', accent: 'tide', eyebrow: 'Historical Event', tags: ['disaster', 'sea', 'migration'], era: 'Age of Ash', timelineYear: -18, timelineLabel: 'The black tide reaches Veyra', writerLane: 'friction' },
  'DEMO-LORE-004': { icon: 'F', accent: 'ember', eyebrow: 'Narrative Conflict', tags: ['succession', 'claim', 'fracture'], era: 'Present', timelineYear: 0, timelineLabel: 'Succession fractures', writerLane: 'friction' },
  'DEMO-LORE-005': { icon: '?', accent: 'verdant', eyebrow: 'Author Mystery', tags: ['mystery', 'reveal', 'witness'], era: 'Present', timelineYear: 1, timelineLabel: 'Witness surfaces', writerLane: 'payoff' },
};
