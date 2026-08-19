# Source Index

## BW-SRC-2026-08-19-GREAT-BEASTS-20-VERBATIM

**Arquivo:** `conversations/2026-08-19-assistant-response-verbatim-great-beasts.md`  
**Tipo:** transcrição arquivística da resposta que originou a reconstrução  
**Status:** CAPTURED  
**Uso:** fonte fria/autoral; consultar quando houver dúvida sobre formulação, nuance, exemplo ou argumento originalmente apresentado.

## BW-SRC-2026-08-19-GREAT-BEASTS-20

**Arquivo:** `conversations/2026-08-19-great-beasts-20-points.md`  
**Tipo:** captura estruturada da mesma resposta  
**Status:** CAPTURED  
**Uso:** preserva os 20 pontos em estrutura navegável e serve de ponte entre transcrição e módulos semânticos.

## BW-SRC-2026-08-19-METAAI-BRAINSTORM

**Manifest/record:** `conversations/2026-08-19-metaai-brainstorm-source-record.md`  
**PDF original:** `Ideias bagunçadas (1).pdf`  
**SHA-256 do original:** `f6fa4e046e38c944ebf4a4871689ea258b3ef6588a206a2db60eede7705f051e`  
**Tipo:** histórico de brainstorm Autor ↔ Meta AI  
**Status:** CAPTURED  
**Autoridade:** mixed — falas do autor = primary; respostas Meta AI = secondary/exploratory.

### Transcrição extraída

- `conversations/2026-08-19-metaai-brainstorm-raw-part-01-pages-01-06.txt`
- `conversations/2026-08-19-metaai-brainstorm-raw-part-02-pages-07-12.txt`
- `conversations/2026-08-19-metaai-brainstorm-raw-part-03-pages-13-18.txt`

A divisão em três partes é técnica. A ordem 01 → 02 → 03 corresponde às 18 páginas do PDF.

### Derivados semânticos

- `docs/06_research/2026-08-19-metaai-brainstorm-critical-intake.md`
- `docs/06_research/2026-08-19-open-questions-wave.md`
- `docs/03_entities/characters/DRAGON_DYNASTY_PILLAR_PROTAGONIST.md`
- `docs/05_visual/DRAGON_DYNASTY_VISUAL_DEVELOPMENT.md`
- `docs/04_story/THEMATIC_SPINE.md`

Esses arquivos **não substituem a fonte**. Eles organizam e auditam o material.

## BW-SRC-2026-08-19-CHATGPT-METAAI-AUDIT

**Arquivo:** `conversations/2026-08-19-chatgpt-metaai-audit-response-high-fidelity.md`  
**Tipo:** archive de resposta substantiva do ChatGPT após estudar o PDF  
**Status:** CAPTURED  
**Uso:** preservar explicações, inferências e rationale produzidos na etapa de auditoria. UI-only citations/links não são tratados como parte da redação substantiva.

## BW-SRC-2026-08-19-WORKFLOW-REQUEST

**Arquivo:** `conversations/2026-08-19-workflow-request-verbatim.md`  
**Tipo:** instrução autoral sobre memória, compactação, handoff, GitHub/Notion e método de entrevista  
**Status:** CAPTURED  
**Uso:** autoridade primária para o protocolo de memória/handoff.

## Regra

Source Records preservam formulações históricas. Não editar uma fonte para parecer que o passado sempre correspondeu ao cânone atual. Correções surgem em novos registros e ADRs.

Transcrição e captura estruturada coexistem deliberadamente: a primeira maximiza fidelidade; a segunda maximiza recuperação e análise.

Quando a origem é um documento externo grande:

1. preservar hash do original quando possível;
2. armazenar transcrição/captura de alta fidelidade;
3. criar manifest;
4. produzir intake separado;
5. nunca promover propostas de terceiros/IA pelo tom afirmativo da fonte.

Quando uma conversa produzir um bloco substantivo:

1. preservar turnos de alto valor quando necessário;
2. criar checkpoint semântico;
3. atualizar `HANDOFF.md`;
4. não arquivar cada frase trivial se ela não muda entendimento, estado, autoria ou decisão.