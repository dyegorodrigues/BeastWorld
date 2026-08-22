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
| `BW-SESSION-2026-08-21-001` | 2026-08-21 | Autor + Manus | auditoria multi-IA e preservação de fala autoral | auditoria | linha Manus da época | registrado nos commits históricos | registrado nos commits históricos | `RAW-PARTIAL` / fontes segmentadas | `AUDITED-PARTIAL` | respostas externas mediadas e lacuna de imagens binárias | comparar com novos exports caso apareçam |
| `BW-SESSION-2026-08-20-001` | 2026-08-20 | Autor + Manus | ecologia, geografia, dinastias e logística | captura + modelagem | shared/Manus | registrado em fontes | registrado em fontes | `RAW-AVAILABLE` para fonte verbal | `CAPTURED / MODELED` | nomes e arquitetura ainda provisórios | consultar Source Record e gates de geografia |
| `BW-SESSION-2026-08-19-001` | 2026-08-19 | Autor + MetaAI + Manus | brainstorm inicial de sangue, Bestas, combate e linguagem | captura + síntese | shared/external | registrado em fontes | registrado em fontes | `RAW-PARTIAL` / mistura autor-IA em alguns trechos | `CAPTURED / MEDIATED-MIXED` | separar fala autoral da proposta MetaAI | usar como fonte fria, nunca como cânone automático |

## 3. Regra de atualização

O próximo agente deve acrescentar uma linha, nunca reescrever retroativamente uma linha histórica. Correções entram em uma coluna de nota ou em um novo registro de correção que aponta para o registro anterior.

Uma sessão só pode usar `SYNCED` quando o commit remoto foi verificado e os arquivos declarados estão presentes. `PROMOTED` exige decisão autoral e fluxo de canonização separado.

## 4. Relação com Notion

Se o projeto utilizar o `BEASTWORLD — Session & Sync Ledger` no Notion, este arquivo continua sendo a referência versionada. O Notion pode exibir uma cópia relacional, mas deve apontar para o commit e para o Source Record correspondente. Divergências recebem `DRIFT`, nunca são resolvidas silenciosamente.
