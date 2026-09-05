# BeastWorld

**Versioned, auditable worldbuilding repository and provenance layer for the BeastWorld intellectual property.**

> **Current entry for any human or AI:** `START_HERE_FOR_AI.md`.
>
> **Do not use `PROJECT_STATE.md`, `HANDOFF.md`, old V3/V4 Notion pages or an older Pass header as the current state.** They preserve history. The current route is resolved by the session pointer, active manifest, current dashboard, ADRs, current Bible and fidelity packet.

## Core rule

**Rascunho não é cânone. Repetição não é promoção. Detalhe não é autoridade. Resumo não substitui fonte.**

The repository exists to let the project evolve without deleting how it got there.

## Current architecture

The Second Brain uses cooperating layers rather than one giant document:

1. **Source Archive** — author conversations, verbatim material, research and historical evidence.
2. **Human Wiki / Notion Encyclopedia** — rich explanation designed to be readable and memorable.
3. **Semantic Lore Layer** — atomic nodes, tags and typed relations for retrieval/regression analysis.
4. **Decision Layer** — ADRs and Notion Decision Log record why a structural direction was adopted.
5. **Research/Open Questions** — known gaps remain queryable instead of being silently filled.
6. **Curated current route** — only explicit `WORKING-CANON` / `CANON` promotions lead current development.
7. **Authorial Fidelity Layer** — preserves the intended mental model and later recovered nuances so a new conversation cannot keep the nouns while losing the meaning.

Architecture decision:
`docs/07_decisions/ADR-0007-SECOND-BRAIN-HUMAN-WIKI-RELATIONAL-GRAPH.md`

## GitHub ↔ Notion

- **GitHub:** versioned/auditable editorial control plane and source provenance.
- **Notion:** detailed human Wiki, relational graph, dashboards, research pipeline and cognitive interface.
- `HYPOTHESIS` may exist in Notion ahead of GitHub.
- promoted structural truth must not silently diverge.

### Current human Notion entry

`🌒 BEASTWORLD — Segundo Cérebro / HOME`

Current lanes:

- `00 — AGORA — Estado Atual e Próximo Passo`
- `01 — ENCICLOPÉDIA ATUAL — Wiki Humana`
- `02 — AUTORIDADE & CÂNONE — O que vale hoje`
- `03 — LABORATÓRIO — Hipóteses, Passos e Pesquisa`
- `04 — ARQUIVO HISTÓRICO — Versões antigas e caminhos superados`
- `05 — FONTES AUTORAIS — Brainstorms, transcrições e proveniência`
- `06 — GRAFO & REGISTROS — Nós, tags e relações`
- `07 — MEMÓRIA AUTORAL — Visão, nuances e anti-drift`

The old 23/08 V3/V4 encyclopedia and old Command Center remain historical/provenance surfaces, not current entry points.

## Mandatory current load

Start at `START_HERE_FOR_AI.md`.

Its current minimal route resolves to:

1. `docs/00_governance/CURRENT_SESSION_POINTER.json`
2. `docs/00_governance/ACTIVE_CONTEXT_MANIFEST.json`
3. `docs/00_governance/CURRENT_PROJECT_DASHBOARD.md`
4. `docs/07_decisions/ADR-0006-WORKING-CANON-ORIGIN-GRAFT-YOUNG-PROTAGONIST-ROUTE.md`
5. `docs/01_bible/CURRENT_ORIGIN_AND_WORLD_GRAFT_WORKING_CANON.md`
6. `docs/00_governance/AUTHORIAL_FIDELITY_PACKET_2026-09-05.md`
7. `docs/09_reviews/chatgpt/2026-09-05/57_SECOND_BRAIN_FULL_QA_RELATIONAL_REACTIVATION_AND_DRIFT_REPAIR.md`
8. only the domain cluster needed for the task.

For exact wording or disputed nuance, escalate to semantic/raw author sources rather than loading the whole archive by habit.

## Current state in one paragraph

The author has explicitly validated the structural route in which a surviving living continuity from an older Beast-inhabited World, nearly destroyed by a predatory interworld civilization, grafted into an initially non-magical but already civilized human world. Present BeastWorld is the third composite reality produced by millennia of reciprocal human–Beast/world development. The old predator eventually reaches the refuge again. The protagonist’s main lived arc begins around age fifteen; the future adult Director is earned. Direct Concession during the first coordinated Fissure campaign is the current Book 1 axis. This structure is `WORKING-CANON` through ADR-0006; fine mechanisms and scene choices remain separately open.

## Semantic recovery matters

A new agent that can repeat the paragraph above may still be insufficiently rehydrated.

Read:
`docs/00_governance/AUTHORIAL_FIDELITY_PACKET_2026-09-05.md`

That packet preserves broad Beast ecology, the numinous nature of deep entities, the reciprocal human/Beast contribution, anti-loot Sangue/Matriz/Generated-Beast meaning, protagonist/cousin/family nuance, Academy as a civilizational engine, physically readable combat, Fissures as real interworld frontiers, enemy-as-civilization, resonant notation, tone and known semantic corrections.

### Known correction

`Fei` / `anciã da Fei` in the 05/09 reconstruction was a capture error. The correct referent is **Fênix**. Do not invent a new `Fei` concept from the error.

## Current creative gate

Before sequence/scene work, resolve the four P0 questions:

- `BW-Q-V5-BOOK1-INCITING-001`
- `BW-Q-V5-PROT-ENTITY-001`
- `BW-Q-V5-ENEMY-CONSTRAINT-001`
- `BW-Q-V5-ENSEMBLE-001`

Then stress-test against ADR-0006, the Fidelity Packet and Pass 50D.

## Historical files

`PROJECT_STATE.md`, `HANDOFF.md`, old `RETOMADA` packets and accumulated Pass files are not deleted. They are evidence and regression history.

**If a historical file says “CURRENT” but conflicts with the current pointer/START_HERE, the pointer/START_HERE wins.**

## Repository visibility drift

Current GitHub metadata reports this repository as **PUBLIC**. Older documentation described it as private. No automatic visibility change has been made. See:
`docs/00_governance/ACCESS_DRIFT_2026-09-05_GITHUB_VISIBILITY.md`.
