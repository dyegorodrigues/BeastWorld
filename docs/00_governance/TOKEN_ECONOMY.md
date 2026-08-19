# Token Economy & Retrieval Strategy

## Objetivo

Reduzir custo de contexto sem perder coerência sistêmica.

## Regras

### Retrieval orientado por grafo
Carregar o nó alvo, dependências diretas, ADRs recentes e no máximo dois saltos de impacto.

### Summaries hierárquicos
Cada módulo deve conter definição curta, resumo executivo, conteúdo profundo, relações e perguntas abertas.

### Fontes frias, conceitos quentes
Conversas históricas não são relidas por padrão. Elas são abertas quando há disputa, perda de nuance ou auditoria.

### IDs estáveis
Buscar IDs, não depender de nomes temporários.

### Delta-first
Em revisão, priorizar o diff semântico e dependências afetadas, não recomputar todo o mundo.

### Não duplicar cânone
A Bíblia mestra aponta para módulos; não copia todas as regras detalhadas.