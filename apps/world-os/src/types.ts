export type WorldNode = {
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

export type WorldEdge = {
  id: string;
  source: string;
  target: string;
  relationType: string;
  status: string;
  strength?: string;
  spoilerLayer?: string;
};

export type GraphResponse = {
  mode: 'demo' | 'live';
  readOnly: true;
  source: string;
  nodes: WorldNode[];
  edges: WorldEdge[];
  warning?: string;
};
