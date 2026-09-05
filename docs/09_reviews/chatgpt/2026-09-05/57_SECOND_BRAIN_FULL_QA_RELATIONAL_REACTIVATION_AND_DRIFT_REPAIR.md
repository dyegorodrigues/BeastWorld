# Pass 57 — Second Brain full QA, relational reactivation and drift repair

**Date:** 2026-09-05  
**Status:** `KNOWLEDGE-ARCHITECTURE QA / SEMANTIC-FIDELITY REPAIR / NO NEW LORE PROMOTION`  
**Primary sources:**
- `docs/08_sources/conversations/2026-09-05-author-second-brain-full-qa-relational-graph-source-record.md`
- `docs/08_sources/conversations/2026-09-05-author-finalize-second-brain-fidelity-phoenix-correction-source-record.md`

**Decisions:**
- `ADR-0006` remains the lore-promotion boundary.
- `ADR-0007` governs Second Brain architecture.

## 1. Why Pass 57 exists
Pass 56 solved the largest readability problem by rebuilding the human-facing Notion into a current encyclopedia with a clean HOME and 00–05 navigation. A second QA showed that this was necessary but insufficient.

The prose layer was strong vertically, page by page, but the relational layer underneath was still largely frozen in V3/V4. A new conversation could therefore read a current article and still retrieve stale atomic nodes, decisions or old current-route headers later.

The author also raised a deeper acceptance criterion: **technical preservation is not enough if later reconstruction no longer feels like what the author meant.**

Pass 57 therefore closes two classes of drift:

1. **relational drift** — current prose disconnected from current nodes/edges/questions/decisions;
2. **semantic drift** — wording or compression preserving nouns while changing the actual mental model.

## 2. Notion relational reactivation
The existing databases were preserved and reused rather than replaced.

### Lore Registry
Added a `Wiki Page` property and extended the controlled tag vocabulary for V5 retrieval.

Created 20 current V5 nodes for:

1. Mundo-Besta original;
2. civilização predatória intermundos;
3. remanescente vivo refugiado;
4. mundo humano pré-enxerto;
5. Enxerto dos Mundos;
6. BeastWorld composto;
7. Quintessência;
8. entidades profundas integradas ao mundo;
9. Fissuras intermundos;
10. coevolução recíproca humano–Besta–mundo;
11. Sangue bestial;
12. Matriz;
13. Bestas Geradas;
14. Dinastias Fundadoras;
15. Academia interdinástica;
16. protagonista — rota jovem ao futuro Diretor;
17. Concessão Direta;
18. primo — sucessor legítimo;
19. reciprocidade vs incorporação forçada;
20. eixo do Livro 1 — Concessão na primeira campanha coordenada.

These nodes summarize and route. They do not replace the detailed encyclopedia.

### Relation Edge Registry
Created `BW-EDGE-041..070`, thirty current typed relations connecting origin, graft, coevolution, Quintessence, Blood, Matrix, Generated Beasts, Dynasties, Academy, Fissures, enemy return, Direct Concession, protagonist and Book 1 axis.

The goal is regression awareness: changing Matrix should expose impact on Generated Beasts; changing Fissures should expose Academy/war/Book 1 consequences; changing the graft should expose the whole causal spine.

### Decision Log
Mirrored:
- ADR-0006 — current structural Working Canon;
- ADR-0007 — Human Wiki + relational graph architecture.

### Source Library
Mirrored the 05/09 author promotion source and second-QA source. The final fidelity/Fênix correction source is added by this closeout.

### Research & Open Questions
Created current V5 gates rather than leaving the Laboratory prose disconnected from the queryable pipeline.

Current P0 gates:
- `BW-Q-V5-BOOK1-INCITING-001`;
- `BW-Q-V5-PROT-ENTITY-001`;
- `BW-Q-V5-ENEMY-CONSTRAINT-001`;
- `BW-Q-V5-ENSEMBLE-001`.

Additional P1/P2 questions cover protagonist limitation, Direct Concession mechanics, remnant physics, deep entities, Fissure rules, Oceanic genealogy, Dynastic government, ethics of other Worlds and Generated-Beast personhood.

## 3. Human navigation repair
Created:

`06 — GRAFO & REGISTROS — Nós, tags e relações`

Added live views for:
- current V5 nodes;
- active Working-Canon edges;
- decisions/ADRs;
- research pipeline;
- current P0 gates;
- superseded/rejected lore;
- recent sources.

Every current encyclopedia module A–L gained a human-facing `Conexões no Segundo Cérebro` section so the article explains upstream causes, downstream effects and where to continue reading.

The current encyclopedia index also gained question-based navigation so future reading does not require remembering module letters.

## 4. Historical V4 contamination repair
High-risk V4 nodes were not deleted or silently rewritten. They were explicitly demoted as historical where they conflict with the current route.

Examples include the old:
- Academia Marcial Central;
- Quase-Primordial / Sucessor Potencial;
- Guardião Primordial;
- Cinco Assentos Primordiais;
- Nova Geração da Academia;
- Diretor-Guardião Dracônico.

Their old IDs remain evidence. New V5 concepts use new IDs.

## 5. GitHub routing drift found
The second QA found a real contradiction:

- current START_HERE/Dashboard/Manifest/Pointer already knew ADR-0006 had been accepted;
- `V5_RECONCILIATION_STATE.md` and `V5_CONTEXT_ROUTER.md` still began with Pass 55 text saying author validation was required and nothing was promoted.

This could regress a new agent simply by entering through the wrong file.

Repair policy:

- `V5_RECONCILIATION_STATE.md` becomes a compact current Pass 57 door;
- `V5_CONTEXT_ROUTER.md` becomes a compact current router rather than a stack of historical 'current route' headers;
- historical states remain in Git history and individual pass/source files.

## 6. Semantic correction discovered — Fênix, not Fei
The author's final readback caught a capture error introduced during reconstruction:

`Fei` / `anciã da Fei` was not a new name or culture. The intended referent is **Fênix**.

The corrected semantic form is the already-existing provisional **Fênix Anciã Gerada / anciã da Fênix** concept.

Pass 57 repairs current semantic/editorial surfaces. Raw/verbatim sources are not falsified; the correction is recorded through a new author-source record.

## 7. Authorial Fidelity layer
Created:

`docs/00_governance/AUTHORIAL_FIDELITY_PACKET_2026-09-05.md`

This is not another Bible and not new lore. It exists for a failure mode the project had not explicitly guarded against: a new conversation may know the factual summary but lose the intended image.

The packet preserves:

- the felt shape of the original Beast World;
- why deep entities must remain numinous/person-like rather than being flattened to technical functions;
- what humans and Bestas each contribute to co-development;
- the anti-loot meaning of Sangue/Matriz/Bestas Geradas;
- the earlier important distinction `spectral ≠ immature`, `humanoid ≠ more evolved`, `material density ≠ developmental age` when that lab cluster is reopened;
- protagonist appetite, vulnerability and earned Director trajectory;
- family/cousin nuance;
- Academy as a civilizational learning engine;
- physically readable supernatural combat;
- Fissures as real interworld frontiers;
- enemy civilization as an adaptive civilization rather than monster waves;
- resonant notation as a live design thread;
- tone: beauty, brutality, romance, humor, friendship, ordinary life, wonder and war;
- known transcription correction `Fei → Fênix`;
- source hierarchy for semantic disputes.

## 8. Recovery rule going forward
A future agent is not considered fully rehydrated merely because it can recite the premise.

Before making structural creative changes it must be able to distinguish:

- adopted Working Canon;
- preserved strong directions;
- unresolved questions;
- superseded/rejected history;
- semantic intent and known transcription corrections.

If a compressed summary and a source seem inconsistent, do not silently choose the cleaner formulation. Reopen the source and name the discrepancy.

## 9. No lore promotion
Pass 57 promotes no new story/world mechanism. ADR-0006 remains the current promotion boundary.

The Fênix correction repairs reference identity; it does not promote the provisional character's final name, office, age, romance or exact configuration.

## 10. Closeout target
Pass 57 closes only after:

- Notion `Fei` contamination is removed from current reconstructed pages;
- current GitHub semantic surfaces use `Fênix`;
- compact V5 router/state agree with current Working Canon;
- Knowledge Graph documents the V5 overlay;
- START_HERE/Dashboard/Manifest/Pointer include the Fidelity Packet and Pass 57;
- a new Notion human lane exposes authorial memory/fidelity;
- final remote readback proves the active branch is internally consistent.
