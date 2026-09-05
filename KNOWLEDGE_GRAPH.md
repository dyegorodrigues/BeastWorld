# KNOWLEDGE_GRAPH — BeastWorld

**Updated:** 2026-09-05  
**Status:** `GOVERNANCE / RELATIONAL MEMORY / NOT LORE`  
**Current architecture decision:** `ADR-0007`

## 1. Objective

The graph exists to:

- recover only the context relevant to a task;
- make causal/dependency structure explicit;
- detect downstream effects before changing lore;
- separate current truth from hypothesis and historical material;
- preserve provenance without forcing a new agent to reread the whole archive;
- connect the detailed human Wiki to atomic machine-retrievable concepts.

The graph does **not** replace the encyclopedia or author sources.

## 2. Current Second Brain layers

### Human Wiki
Long-form explanation of what a concept is, how it works, why it matters, how it feels in the world and what remains open.

Current Notion root:
`🌒 BEASTWORLD — Segundo Cérebro / HOME`

### Lore Registry
Atomic semantic nodes.

Each important current node should normally expose:
- stable `Concept ID`;
- `Canon Status`;
- `Domain`;
- `Node Type`;
- concise `Summary`;
- retrieval `Tags`;
- `Truth Layer` / `Spoiler Layer` where relevant;
- `Version` / `Last Reviewed`;
- `Source Records`;
- `Decision Records` when applicable;
- `GitHub Path`;
- `Wiki Page` pointing to the rich explanation.

### Relation Edge Registry
Strong typed relations as first-class records.

Fields include:
- source node/entity;
- relation type;
- target node/entity;
- canon status;
- strength;
- truth/spoiler layer;
- sources/decisions;
- active state;
- review date.

### Decision Log
Why a structural direction was accepted, rejected, revisited or superseded.

### Research & Open Questions
Explicit unresolved gates and research pipeline.

### Source Library
Provenance, authority, reliability, capture status and links to affected concepts/decisions.

## 3. Status is not a tag

Keep three jobs separate:

- **status:** is this adopted, hypothetical, unresolved, superseded or rejected?
- **tag:** how do I retrieve this?
- **edge:** how does this concept structurally relate to another?

A tag such as `v5-current` does not itself make a node Working Canon.

## 4. Current V5 overlay — Pass 57

The existing V3/V4 databases were retained and reactivated rather than replaced.

### Current V5 Lore nodes
Twenty current nodes were added for:

1. `BW-V5-WORLD-ORIGINAL-BEAST` — Mundo-Besta original;
2. `BW-V5-SYS-PREDATORY-CIVILIZATION` — civilização predatória intermundos;
3. `BW-V5-ORIGIN-SURVIVAL-REMNANT` — remanescente vivo refugiado;
4. `BW-V5-WORLD-HUMAN-HOST-PRE-GRAFT` — mundo humano pré-enxerto;
5. `BW-V5-EVENT-WORLD-GRAFT` — Enxerto dos Mundos;
6. `BW-V5-WORLD-COMPOSITE` — BeastWorld composto;
7. `BW-V5-MECH-QUINTESSENCE` — Quintessência;
8. `BW-V5-SYS-DEEP-ENTITIES` — entidades profundas integradas ao mundo;
9. `BW-V5-MECH-FISSURES` — Fissuras intermundos;
10. `BW-V5-SYS-RECIPROCAL-COEVOLUTION` — coevolução recíproca humano–Besta–mundo;
11. `BW-V5-MECH-BLOOD` — Sangue bestial;
12. `BW-V5-MECH-MATRIX` — Matriz;
13. `BW-V5-BIO-GENERATED-BEASTS` — Bestas Geradas;
14. `BW-V5-INST-FOUNDING-DYNASTIES` — Dinastias Fundadoras;
15. `BW-V5-INST-ACADEMY` — Academia interdinástica;
16. `BW-V5-NARR-YOUNG-PROTAGONIST` — protagonista, rota jovem ao futuro Diretor;
17. `BW-V5-MECH-DIRECT-CONCESSION` — Concessão Direta;
18. `BW-V5-NARR-COUSIN-HEIR` — primo, sucessor legítimo;
19. `BW-V5-CLAIM-RECIPROCITY-VS-FORCED` — reciprocidade vs incorporação forçada;
20. `BW-V5-NARR-BOOK1-AXIS` — eixo atual do Livro 1.

These summarize the current route and link to the detailed Wiki. They do not duplicate the encyclopedia.

### Current V5 edges
`BW-EDGE-041..070` add thirty current typed relations.

High-value examples:

```text
Civilização predatória --THREATENS--> Mundo-Besta original
Remanescente vivo --DESCENDS_FROM--> Mundo-Besta original
Mundo humano pré-enxerto --CONTRIBUTES_TO--> BeastWorld composto
Remanescente vivo --CONTRIBUTES_TO--> BeastWorld composto
BeastWorld composto --CAUSED_BY--> Enxerto dos Mundos
Coevolução recíproca --CAUSED_BY--> Enxerto dos Mundos
Quintessência --PART_OF--> BeastWorld composto
Quintessência --CONTRIBUTES_TO--> Coevolução recíproca
Sangue bestial --DEPENDS_ON--> Quintessência
Sangue bestial --DEPENDS_ON--> Coevolução recíproca
Matriz --DEPENDS_ON--> Quintessência
Matriz --DEPENDS_ON--> Coevolução recíproca
Bestas Geradas --DEPENDS_ON--> Matriz
Bestas Geradas --CONTRIBUTES_TO--> Coevolução recíproca
Dinastias Fundadoras --CAUSED_BY--> Coevolução recíproca
Academia --DEPENDS_ON--> Dinastias Fundadoras
Academia --DEPENDS_ON--> Fissuras
Academia --CONTRIBUTES_TO--> Coevolução recíproca
Civilização predatória --THREATENS--> BeastWorld composto
Fissuras --REVEALS--> Civilização predatória [story-facing current axis]
Entidades profundas --DESCENDS_FROM--> Mundo-Besta original
Entidades profundas --PART_OF--> BeastWorld composto
Concessão Direta --DEPENDS_ON--> Entidades profundas
Concessão Direta --AFFECTS--> Protagonista jovem
Eixo Livro 1 --DEPENDS_ON--> Concessão Direta
Eixo Livro 1 --DEPENDS_ON--> Fissuras
Eixo Livro 1 --REVEALS--> Civilização predatória
Primo sucessor --RELATED_TO--> Protagonista jovem
Reciprocidade vs incorporação forçada --RELATED_TO--> Coevolução
Reciprocidade vs incorporação forçada --RELATED_TO--> Civilização predatória
```

Where story-facing edges encode an adopted axis rather than world ontology, use `Truth Layer = Meta/Design` and appropriate spoiler layer.

## 5. Current retrieval tags

The V5 controlled vocabulary is additive and currently includes:

`v5-current`, `origin-graft`, `living-world`, `quintessence`, `fissures`, `deep-entities`, `blood`, `matrix`, `generated-beasts`, `academy`, `protagonist`, `book1`, `interworld-war`, `coevolution`, `second-brain`, `working-canon`, plus older domain tags such as `great-beasts`, `dynasties`, `ecology`, `history`, `succession`, `bond`, `blessing` and `sanctuary`.

Do not create near-synonym tags casually. Prefer an existing controlled term unless a genuinely new retrieval dimension appears.

## 6. Current open-question layer

Current P0 questions before sequence/scene work:

- `BW-Q-V5-BOOK1-INCITING-001`;
- `BW-Q-V5-PROT-ENTITY-001`;
- `BW-Q-V5-ENEMY-CONSTRAINT-001`;
- `BW-Q-V5-ENSEMBLE-001`.

P1/P2 questions also track:
- protagonist pre-Concession limitation;
- Direct-Concession mechanics;
- remnant physics;
- deep-entity count/function/embodiment;
- Fissure chronology/compatibility;
- Oceanic genealogy/formation;
- Dynastic government;
- other-World integration ethics;
- Generated-Beast personhood/maturation.

An unresolved question should stay explicit instead of being silently completed by a later summary.

## 7. Historical V3/V4 graph

The older graph remains valuable as history and research.

Examples include:
- Grande Espécie / Grande Besta;
- Santuário / Guardiões;
- Reconhecimento → Vínculo → Bênção → Eco;
- older Dynasty/monopoly/succession work;
- V4 Academia/Director/Primordial experiments.

Those nodes are **not automatically current**.

High-risk V4 nodes that materially conflict with the current route are explicitly marked `SUPERSEDED` rather than deleted or repurposed, including old variants of:

- Academia Marcial Central;
- Quase-Primordial / Sucessor Potencial;
- Guardião Primordial;
- Cinco Assentos Primordiais;
- Nova Geração da Academia;
- Diretor-Guardião Dracônico.

Use historical IDs for provenance only. Current concepts receive current IDs.

## 8. Relation types

Current registry includes relation types such as:

`DEPENDS_ON`, `PART_OF`, `IS_A`, `RECOGNIZES`, `BONDED_TO`, `BESTOWS_ON`, `PROTECTS`, `CONTROLS_ACCESS_TO`, `LEGITIMIZES`, `CONTRADICTS`, `CAUSED_BY`, `CONTRIBUTES_TO`, `THREATENS`, `REVEALS`, `DESCENDS_FROM`, `AFFECTS`, `LOCATED_IN`, `TRAINS_AT`, `GOVERNS`, `RELATED_TO`.

Prefer typed edges for relations that matter to regression or navigation. Do not turn every casual association into an edge.

## 9. Regression test

Before promoting a structural change:

1. load the target node;
2. inspect its `Dependencies`, `Dependents`, incoming/outgoing edges and related decisions;
3. check current Open Questions;
4. inspect affected Wiki modules;
5. consult source records if the change depends on wording/intent;
6. check `DEPENDS_ON`, `CAUSED_BY`, `CONTRIBUTES_TO`, `THREATENS`, `REVEALS`, `CONTRADICTS`, `LEGITIMIZES`, `AFFECTS` and `SUPERSEDES`-type impacts;
7. record an ADR or explicit status change when promotion occurs.

## 10. Semantic-fidelity regression test

Structural consistency is not enough.

Before a large rewrite, also ask:

- does the new wording preserve the author's mental image?
- did a technical backstage term replace a richer creative idea?
- did a speech-to-text error become a fake proper noun?
- did a strong possibility accidentally become fact?
- did an old detailed hypothesis look authoritative merely because it has more fields?

Use:
`docs/00_governance/AUTHORIAL_FIDELITY_PACKET_2026-09-05.md`.

Known correction:
`Fei → Fênix`.

## 11. World Graph × Story Graph

Do not mix:

- **World Graph**: what exists / is true / depends on what;
- **Story Graph**: when, through whom and how the audience learns it.

The existing Notion Story Architecture database is preserved, but older adult-Director/V4 story nodes are not automatically current story architecture.

Do not reactivate a full current Story Graph until the four P0 Book 1 gates are resolved.

## 12. Notion implementation

Lore Registry data source:
`collection://552bb61b-b295-4737-a3b6-2ea251ed701e`

Relation Edge Registry:
`collection://f874ef52-beca-4d50-8e55-985c563523e9`

Research & Open Questions:
`collection://e0635daf-54b6-4f43-8fc8-8af0a8377a11`

Decision Log:
`collection://7a357191-245e-4be6-b7b1-64d987443818`

Source Library:
`collection://8d4db4fe-93ab-40a2-b2dc-0e128cbb3b28`

Human current graph lane:
`06 — GRAFO & REGISTROS — Nós, tags e relações`

Semantic recovery lane:
`07 — MEMÓRIA AUTORAL — Visão, nuances e anti-drift`

## 13. Core operating rule

**Wiki explains. Node identifies. Tag retrieves. Edge connects. Question preserves uncertainty. ADR decides. Source proves. Git versions. Fidelity preserves meaning.**
