# BeastWorld — Session Archive Ledger

**ID:** `BW-GOV-LEDGER-001`  
**Status:** operational / non-canon  
**Purpose:** registrar recibos auditáveis de sessões que alteram ou ampliam o estado documental.

## 1. Contrato do ledger

Cada linha representa uma sessão ou pacote de escrita durável. O ledger não substitui Source Records, fontes brutas, handoffs ou decisões. Ele apenas informa onde procurar e qual foi o resultado operacional.

Campos obrigatórios:

| Campo | Descrição |
|---|---|
| `session_id` | ID cronológico `BW-SESSION-YYYY-MM-DD-NNN` |
| `date` | data da sessão |
| `actor` | autor, ChatGPT, Claude, Grok ou combinação |
| `mission` | objetivo operacional |
| `mode` | captura, análise, proposta, integração, auditoria ou publicação |
| `branch` | branch em que houve escrita |
| `base_sha` | base conhecida antes da escrita |
| `head_sha` | commit resultante, quando houver |
| `source_scope` | fontes consultadas |
| `artifact_scope` | arquivos criados/alterados |
| `fidelity` | RAW-AVAILABLE, RAW-PARTIAL, MEDIATED-ONLY, SUMMARY-ONLY ou NOT-AVAILABLE |
| `result` | CAPTURED, MODELED, INTEGRATED, AUDITED, PARTIAL-SYNC, SYNCED ou PROMOTED |
| `drift` | divergência ou risco de atribuição |
| `handoff` | próximo ponto de retomada |

## 2. Registros

| session_id | date | actor | mission | mode | branch | base_sha | head_sha | fidelity | result | drift | handoff |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `BW-SESSION-2026-08-22-001` | 2026-08-22 | Autor + Manus | arquivar interações, fontes, respostas e novo delta do universo | captura + governança | `manus/reconstruction-spine-2026-08-21` | `c4bc567` | `32c0b272ff89065997e870249eb55828622e43bd` | `RAW-AVAILABLE` para anexos; `RAW-PARTIAL` para histórico de chat | `SYNCED / AUDITED-PARTIAL` | histórico anterior não possui transcript contínuo verificável; o HEAD pode avançar por correções de metadados após este recibo, devendo ser verificado remotamente; pacote local `audit/` foi removido após cópia para o pacote Manus | ler `INTERACTION_ARCHIVE_INDEX.md`; usar `RETOMADA.md` e abrir o Documento-Mestre ou Source Record alvo |
| `BW-SESSION-2026-08-22-003` | 2026-08-22 | Autor + Manus | reidratar o contexto completo após falha de uma nova conversa | captura + governança + continuidade | `manus/reconstruction-spine-2026-08-21` | `730300a` | a confirmar no fechamento desta sessão | `RAW-AVAILABLE` para o pedido atual; `RAW-PARTIAL` para histórico anterior | `CAPTURED / IN-PROGRESS` | nova conversa não carregou branch, arquivos e contexto; solução é pacote HOT/WARM explícito e Context Read Receipt | ler `CONTEXT_REHYDRATION_PACKET.md`, `CONTEXT_INDEX.md`, `CONTEXT_TIMELINE_2026-08-22.md`; depois seguir a missão do autor |
| `BW-SESSION-2026-08-21-001` | 2026-08-21 | Autor + Manus | auditoria multi-IA e preservação de fala autoral | auditoria | linha Manus da época | registrado nos commits históricos | registrado nos commits históricos | `RAW-PARTIAL` / fontes segmentadas | `AUDITED-PARTIAL` | respostas externas mediadas e lacuna de imagens binárias | comparar com novos exports caso apareçam |
| `BW-SESSION-2026-08-20-001` | 2026-08-20 | Autor + Manus | ecologia, geografia, dinastias e logística | captura + modelagem | shared/Manus | registrado em fontes | registrado em fontes | `RAW-AVAILABLE` para fonte verbal | `CAPTURED / MODELED` | nomes e arquitetura ainda provisórios | consultar Source Record e gates de geografia |
| `BW-SESSION-2026-08-19-001` | 2026-08-19 | Autor + MetaAI + Manus | brainstorm inicial de sangue, Bestas, combate e linguagem | captura + síntese | shared/external | registrado em fontes | registrado em fontes | `RAW-PARTIAL` / mistura autor-IA em alguns trechos | `CAPTURED / MEDIATED-MIXED` | separar fala autoral da proposta MetaAI | usar como fonte fria, nunca como cânone automático |

## 3. Regra de atualização

O próximo agente deve acrescentar uma linha, nunca reescrever retroativamente uma linha histórica. Correções entram em uma coluna de nota ou em um novo registro de correção que aponta para o registro anterior.

Uma sessão só pode usar `SYNCED` quando o commit remoto foi verificado e os arquivos declarados estão presentes. `PROMOTED` exige decisão autoral e fluxo de canonização separado.

## 4. Relação com Notion

Se o projeto utilizar o `BEASTWORLD — Session & Sync Ledger` no Notion, este arquivo continua sendo a referência versionada. O Notion pode exibir uma cópia relacional, mas deve apontar para o commit e para o Source Record correspondente. Divergências recebem `DRIFT`, nunca são resolvidas silenciosamente.


## V5 catch-up — 01/09/2026

| Session ID | Scope | Branch | Fidelity | Lifecycle | Canon change | Notes |
|---|---|---|---|---|---|---|
| BW-SESSION-2026-09-01-001 | V5 reconciliation through Pass 40 / Notion Labs 01–13 | `chatgpt/beastworld-v5-reconciliation-2026-08-26` | RAW-PARTIAL + SUMMARY-ONLY | PARTIAL-SYNC / AUDIT-REQUIRED | no | Retrospective catch-up: substantive artifacts existed, but the ledger was not closed transactionally. This gap enabled a D3 provenance drift. |
| BW-SESSION-2026-09-01-002 | Author corrections; Passes 39–42; CE-04; Context Engineering OS v2 | `chatgpt/beastworld-v5-reconciliation-2026-08-26` | RAW-PARTIAL | CAPTURED / COVERED / MODELED / RECONCILED / HOT-UPDATED / NOTION-LINKED / VERIFIED / SYNCED / AUDITED | no | Final Git HEAD is resolved by the closeout receipt and stored in the Notion ledger; do not infer PROMOTED. |


## Raw-backup recovery — 01/09/2026

| Session ID | Scope | Branch | Fidelity | Lifecycle | Canon change | Notes |
|---|---|---|---|---|---|---|
| BW-SESSION-2026-09-01-003 | Recover 71-page CE-01→CE-04 conversation backup; reconcile active derivatives and raw-capture policy | `chatgpt/beastworld-v5-reconciliation-2026-08-26` | RAW-AVAILABLE FOR CAPTURED SPAN | RAW-ARCHIVED / CAPTURED / COVERED / MODELED / RECONCILED / HOT-UPDATED / NOTION-LINKED / VERIFIED / SYNCED / AUDITED | no | PDF SHA-256 `fee99baca17a5e37287c10681667165944011652e6d915728c7689bc104c2bb6`; exact span/limits in source manifest. |

Session 003 supersedes the **fidelity classification only** for the CE-01→CE-04 visible span previously summarized in sessions 001–002. It does not rewrite their historical lifecycle or claim recovery outside the PDF.


## CE-05 continuation — 01/09/2026

| Session ID | Scope | Branch | Fidelity | Lifecycle | Canon change | Notes |
|---|---|---|---|---|---|---|
| BW-SESSION-2026-09-01-004 | Author role correction; CE-05 autonomous birth, mass economy and biological transformation | `chatgpt/beastworld-v5-reconciliation-2026-08-26` | RAW-AVAILABLE FOR VISIBLE SESSION SPAN | RAW-ARCHIVED / CAPTURED / COVERED / MODELED / RECONCILED / HOT-UPDATED / NOTION-LINKED / VERIFIED / SYNCED / AUDITED | no | Pass 44 identifies a leader with an OPEN reentrant-living-anatomy hinge; no lore promoted. |
| BW-SESSION-2026-09-02-005 | CE-05 author corrections; approved second creative synthesis; dashboard; bounded roadmap | `chatgpt/beastworld-v5-reconciliation-2026-08-26` | VERBATIM assistant synthesis + HIGH-FIDELITY author derivative; full author RAW export deferred | CAPTURED / NORMALIZED / MODELED / RECONCILED / HOT-UPDATED / NOTION-LINKED / DASHBOARDED / SYNCED / VERIFIED / CHECKPOINT-OPEN | no | Passes 45–46; clean current entry; Phoenix fixed as Generated Beast; authorial signature and rounds 47–55 preserved. |

| BW-SESSION-2026-09-03-006 | CE-05 Pass 47 physical stress-test; latest author correction and research | `chatgpt/beastworld-v5-reconciliation-2026-08-26` | HIGH-FIDELITY author derivative + researched/modelled pass | CAPTURED / RESEARCHED / MODELED / RECONCILED / HOT-UPDATED / NOTION-LINKED / SYNCED / VERIFIED | no | Normal humanoid local weight; physical leader for death, interruption, anti-resonance, regeneration, reproduction and scale; Round 48 story proof next. |

| BW-SESSION-2026-09-03-007 | CE-05 Pass 48 narrative closure; regeneration, mythic Natural Beasts, combat and visual horizon | `chatgpt/beastworld-v5-reconciliation-2026-08-26` | HIGH-FIDELITY author derivative + researched/modelled pass | CAPTURED / RESEARCHED / MODELED / RECONCILED / HOT-UPDATED / NOTION-SYNC-PENDING | no | CE-05 laboratory closure; Round 49 Core Engine v0.9 synthesis next. |
