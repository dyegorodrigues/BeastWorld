# Notion Wiki Architecture — BeastWorld

**Status:** governance / operational architecture  
**Last reviewed:** 2026-08-19

## Função

O Notion é a camada relacional e cognitiva do BeastWorld: leitura humana, pesquisa, relações, timeline, dashboards e navegação. Ele **não substitui o GitHub** como fonte versionada da verdade editorial.

## Portas de entrada

- Wiki Hub: https://app.notion.com/p/3c142424cdbc81cd9f8bd269c3674224
- Command Center: https://app.notion.com/p/3c142424cdbc817da8b8fcc2d32d5470

## Databases

### Lore Registry

- database: `BEASTWORLD — Lore Registry`
- data source: `collection://552bb61b-b295-4737-a3b6-2ea251ed701e`
- função: conceitos, mecanismos, sistemas e claims reutilizáveis.
- propriedades críticas: `Concept ID`, `Canon Status`, `Domain`, `Truth Layer`, `Spoiler Layer`, `GitHub Path`, `Sync Status`, `Reader Order`, `Dependencies`, `Dependents`, `Source Records`, `Open Questions`, `Decision Records`, `Entity Links`, `Timeline Events`.
- views: Ordem de Leitura, Hipóteses por Domínio, Author-Only, Drift, Mapa do Cânone, Mapa por Domínio.

### Decision Log

- data source: `collection://7a357191-245e-4be6-b7b1-64d987443818`
- função: ADRs, decisões operacionais, rationale, consequências e supersession.
- ADRs Git sincronizados: `BW-ADR-0001` a `BW-ADR-0005`.
- decisão operacional: `BW-OPS-DEC-001`.

### Source Library

- data source: `collection://8d4db4fe-93ab-40a2-b2dc-0e128cbb3b28`
- função: proveniência; conversa, documento interno, artefato GitHub, pesquisa web, artigo/livro, referência visual e draft histórico.
- nenhuma fonte vira cânone automaticamente.
- views: Intake/Needs Review e Todas as Fontes.

### Research & Open Questions

- data source: `collection://e0635daf-54b6-4f43-8fc8-8af0a8377a11`
- função: tornar lacunas explícitas e priorizáveis.
- propriedades: `Question ID`, `Status`, `Priority`, `Domain`, `Why It Matters`, `Decision Gate`, `Research Needed`, `Working Direction`, relações para lore/fontes/decisões.
- views: P0 — Blocking e Research Pipeline.

### Entity Atlas

- data source: `collection://81c9a4b6-5bd8-4516-9572-b946cc4e512f`
- função: personagens, Bestas individuais, Grandes Espécies, Dinastias, Casas, instituições, lugares, culturas, línguas e religiões.
- IDs permanecem estáveis mesmo que nomes ficcionais mudem.
- separa `Public Identity` de `Author-Only Truth`.
- views: Atlas por Tipo e Entidades por Cânone.

### Master Timeline

- data source: `collection://404668eb-5e2e-4450-bc95-dac771a0130f`
- função: ordem causal/histórica sem forçar datas absolutas prematuramente.
- propriedades: `Era`, `Relative Order`, `Event Type`, `Canon Status`, `Truth Layer`, `Spoiler Layer`, relações para lore/entidades/fontes.
- views: Ordem Causal e Eras.

## Páginas editoriais

- `00` Charter / Canon Governance;
- `01` Source Snapshot — Grandes Bestas;
- `02` Sistema das Grandes Bestas;
- `03` Mitologia Histórica;
- `04` Knowledge Graph;
- `05` GitHub Architecture;
- `06` AI Orchestration;
- `07` Open Questions (página histórica; database é a fila operacional);
- `08` Current State & Resume Packet;
- `09` Como Ler, Estudar e Operar;
- `10` Bíblia Pré-Canônica v0.1 — Intake/Migration Map;
- `11` Contrato GitHub ↔ Notion;
- `12` Command Center.

## Modos de uso

### Reader / Study
Usar `Reader Order` e `Reader-Safe`; evita abrir segredos automaticamente.

### Writer Room
Inclui `Writer-Room`, relações, timeline e entidades relevantes.

### Author Truth
Inclui `Author-Only`; usado para causalidade real, revelações e final.

### Continuity Audit
Abrir dependências, dependentes, fontes, perguntas, decisões, entidades e eventos antes de promover mudança.

## Regra de granularidade

Criar nó quando algo possuir identidade/regras próprias, relações reutilizáveis, status variável ou impacto em múltiplos módulos. Não transformar cada frase em registro.

Páginas longas explicam; databases indexam; fontes preservam; Git versiona.

## Estado auditado em 19/08/2026

- 20 Lore nodes; 20 synced; zero drift.
- 12 Open Questions: 7 P0 / 5 P1.
- 8 Entities.
- 13 Timeline events.
- 5 Source records.
- 5 ADRs Git sincronizados + 1 decisão operacional.

Esses números são checkpoint, não metas permanentes.