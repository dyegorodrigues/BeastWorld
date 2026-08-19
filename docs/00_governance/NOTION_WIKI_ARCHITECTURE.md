# Notion Wiki Architecture — BeastWorld

**Status:** governance / operational architecture  
**Last reviewed:** 2026-08-19

## Função

O Notion é a camada relacional e cognitiva do BeastWorld: leitura humana, pesquisa, relações, timeline, dashboards, entrevistas autorais e navegação. Ele **não substitui o GitHub** como fonte versionada da verdade editorial.

## Portas de entrada

- Wiki Hub: https://app.notion.com/p/3c142424cdbc81cd9f8bd269c3674224
- Command Center: https://app.notion.com/p/3c142424cdbc817da8b8fcc2d32d5470
- Resume Packet: `08 — Current State & Resume Packet — 19/08/2026`
- Intake Meta AI: `13 — Intake Crítico — Brainstorm MetaAI + Visual/Personagem — 19/08/2026`

## Databases

### Lore Registry

- database: `BEASTWORLD — Lore Registry`
- data source: `collection://552bb61b-b295-4737-a3b6-2ea251ed701e`
- função: conceitos, mecanismos, sistemas e claims reutilizáveis.
- propriedades críticas: `Concept ID`, `Canon Status`, `Domain`, `Truth Layer`, `Spoiler Layer`, `GitHub Path`, `Sync Status`, `Reader Order`, `Dependencies`, `Dependents`, `Source Records`, `Open Questions`, `Decision Records`, `Entity Links`, `Timeline Events`.

### Decision Log

- data source: `collection://7a357191-245e-4be6-b7b1-64d987443818`
- função: ADRs, decisões operacionais, rationale, consequências e supersession.
- ADRs Git sincronizados: `BW-ADR-0001` a `BW-ADR-0005`.

### Source Library

- data source: `collection://8d4db4fe-93ab-40a2-b2dc-0e128cbb3b28`
- função: proveniência; conversa, documento interno, artefato GitHub, pesquisa web, artigo/livro, referência visual e draft histórico.
- nenhuma fonte vira cânone automaticamente.
- o brainstorm Meta AI é registrado como `BW-SRC-2026-08-19-METAAI-BRAINSTORM`.

### Research & Open Questions

- data source: `collection://e0635daf-54b6-4f43-8fc8-8af0a8377a11`
- função: tornar lacunas explícitas e priorizáveis.
- propriedades: `Question ID`, `Status`, `Priority`, `Domain`, `Why It Matters`, `Decision Gate`, `Research Needed`, `Working Direction`, relações para lore/fontes/decisões.
- a leva Meta AI adicionou `BW-Q-013` a `BW-Q-022`.

### Entity Atlas

- data source: `collection://81c9a4b6-5bd8-4516-9572-b946cc4e512f`
- função: personagens, Bestas individuais, Grandes Espécies, Dinastias, Casas, instituições, lugares, culturas, línguas e religiões.
- IDs permanecem estáveis mesmo que nomes ficcionais mudem.
- separa `Public Identity` de `Author-Only Truth`.

### Master Timeline

- data source: `collection://404668eb-5e2e-4450-bc95-dac771a0130f`
- função: ordem causal/histórica sem forçar datas absolutas prematuramente.

## Páginas editoriais principais

- `00` Charter / Canon Governance;
- `01` Source Snapshot — Grandes Bestas;
- `02` Sistema das Grandes Bestas;
- `03` Mitologia Histórica;
- `04` Knowledge Graph;
- `05` GitHub Architecture;
- `06` AI Orchestration;
- `07` Open Questions — página histórica;
- `08` Current State & Resume Packet;
- `09` Como Ler, Estudar e Operar;
- `10` Bíblia Pré-Canônica v0.1 — Intake/Migration Map;
- `11` Contrato GitHub ↔ Notion;
- `12` Command Center;
- `13` Intake Crítico — Brainstorm MetaAI + Visual/Personagem.

Páginas especializadas adicionadas:

- `06A — Laboratório de Personagem — Pilar da Dinastia do Dragão — v0.1`;
- `09A — Visual Development — Dinastia do Dragão e Personagens — Referências 19/08/2026`;
- `10A — Entrevista de Retomada — Recuperar Ideias Esquecidas antes do próximo bloco`.

## Memória GitHub ↔ Notion

A memória é hierárquica:

- **COLD:** GitHub Source Archive; Notion Source Library aponta provenance;
- **WARM:** GitHub modules + Notion registries/relations;
- **HOT:** GitHub `HANDOFF.md`, `PROJECT_STATE.md`, `RETOMADA.md`; Notion Resume Packet/Command Center;
- **CANON:** GitHub Bible/ADRs/modules promovidos; Notion representa e navega, sem substituir a versão auditável.

O Notion não precisa duplicar transcrições gigantes quando GitHub possui a fonte. Pode manter Source Record + GitHub Path + resumo + relações.

## Entrevista autoral

A página `10A` é mecanismo de recuperação de contexto esquecido.

Princípios:

- perguntar por gatilho, não “o que você esqueceu?”;
- oferecer alternativas com consequências;
- permitir `nenhuma`, `não sei`, combinação e resposta livre;
- classificar em `KEEP / MODIFY / REJECT / RESEARCH`;
- registrar a resposta antes de canonizar.

## Modos de uso

### Reader / Study
Usar `Reader Order` e `Reader-Safe`; evita abrir segredos automaticamente.

### Writer Room
Inclui `Writer-Room`, relações, timeline e entidades relevantes.

### Author Truth
Inclui `Author-Only`; usado para causalidade real, revelações e final.

### Continuity Audit
Abrir dependências, dependentes, fontes, perguntas, decisões, entidades e eventos antes de promover mudança.

### Interview / Discovery
Abrir `10A` + Source Record relevante + Question IDs, uma área por vez.

## Regra de granularidade

Criar nó quando algo possuir identidade/regras próprias, relações reutilizáveis, status variável ou impacto em múltiplos módulos. Não transformar cada frase em registro.

Páginas longas explicam; databases indexam; fontes preservam; Git versiona.

## Estado de segurança

Se o GitHub não estiver `private`, bloquear ingestão de novo IP sensível e marcar drift/hold no Notion. Retomar somente após revalidação do remoto.

## Regra de retomada

Uma conversa nova não precisa reler toda a Wiki. Começar por:

1. Resume Packet/HANDOFF;
2. Question/Concept ID ativo;
3. relações diretas;
4. source records necessários;
5. fonte bruta apenas se nuance estiver em disputa.