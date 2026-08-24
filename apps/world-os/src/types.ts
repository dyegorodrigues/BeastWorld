export type WorldEntity = {
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

export type EntitiesResponse = {
  mode: 'demo' | 'live';
  readOnly: true;
  source: string;
  entities: WorldEntity[];
  warning?: string;
};
