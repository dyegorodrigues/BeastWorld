# Token Economy & Retrieval Strategy

## Objetivo

Reduzir custo de contexto sem perder coerência, autoria ou nuance.

## Três temperaturas

### HOT — carregar por padrão

- `docs/00_governance/RETOMADA.md`;
- `PROJECT_STATE.md`;
- `HANDOFF.md`;
- nó/Question ID alvo;
- dependências diretas;
- ADRs imediatamente relacionados.

### WARM — carregar quando o alvo exigir

- módulos de lore relacionados;
- Entity Atlas;
- Open Questions;
- timeline relevante;
- módulos narrativos/visuais ligados ao problema;
- um ou dois saltos no grafo.

### COLD — fonte histórica

- transcrições completas;
- PDFs/documentos externos;
- brainstorms antigos;
- pesquisas extensas;
- versões superseded/rejected.

COLD não é descartado. Apenas não entra no contexto por padrão.

## Regras

### Retrieval orientado por grafo
Carregar o nó alvo, dependências diretas, ADRs recentes e no máximo dois saltos de impacto.

### Summaries hierárquicos
Cada módulo deve conter definição curta, resumo executivo, conteúdo profundo, relações e perguntas abertas.

### Fonte ≠ resumo
Resumo serve para roteamento. Quando houver dúvida sobre autoria, wording, intenção ou nuance, reabrir Source Record/COLD source.

### IDs estáveis
Buscar IDs, não depender de nomes temporários.

### Delta-first
Em revisão, priorizar o diff semântico e dependências afetadas, não recomputar todo o mundo.

### Handoff-first entre conversas
Ao abrir nova thread, ler `HANDOFF.md` antes de carregar módulos profundos.

### Compactação periódica
Quando uma conversa gerar bloco conceitual relevante, fonte externa ou várias perguntas novas:

1. preservar source;
2. gerar intake/delta;
3. atualizar `HANDOFF.md`;
4. atualizar `PROJECT_STATE.md` apenas se estado consolidado mudou.

### Não duplicar cânone
A Bíblia mestra aponta para módulos; não copia todas as regras detalhadas.

### Não duplicar fonte bruta
Uma transcrição completa deve ter um único Source Record e paths claros. Derivados devem apontar para ela, não reproduzi-la integralmente.

## Objetivo de carga mínima

Uma pergunta local idealmente deve ser respondível com:

```text
RETOMADA
+ PROJECT_STATE
+ HANDOFF
+ alvo
+ dependências diretas
+ 1–3 decisões/fontes relevantes
```

Só escalar para fontes frias quando necessário.

## Princípio

> **Preservar tudo que pode mudar o entendimento; carregar apenas o que é necessário para a decisão atual.**