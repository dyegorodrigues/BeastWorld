# AGENTS.md — BeastWorld Operating Contract

**Updated:** 2026-09-05  
**Current knowledge architecture:** ADR-0007  
**Current lore promotion boundary:** ADR-0006

## Mission

Agents working in this repository must develop BeastWorld without losing provenance, without turning brainstorming into canon, without silently reviving superseded material and without preserving vocabulary while losing the author's intended meaning.

## Mandatory current read order

Before proposing, researching, writing, reviewing or editing structural lore:

1. `START_HERE_FOR_AI.md`
2. `docs/00_governance/CURRENT_SESSION_POINTER.json`
3. `docs/00_governance/ACTIVE_CONTEXT_MANIFEST.json`
4. `docs/00_governance/CURRENT_PROJECT_DASHBOARD.md`
5. `docs/07_decisions/ADR-0006-WORKING-CANON-ORIGIN-GRAFT-YOUNG-PROTAGONIST-ROUTE.md`
6. `docs/01_bible/CURRENT_ORIGIN_AND_WORLD_GRAFT_WORKING_CANON.md`
7. `docs/00_governance/AUTHORIAL_FIDELITY_PACKET_2026-09-05.md`
8. `V5_CONTEXT_ROUTER.md`
9. the target Notion/GitHub node/page and direct dependencies;
10. related Open Questions, edges and ADRs;
11. historical/raw sources only when the current task or a semantic dispute requires them.

Before sequence/scene work additionally load:

- `docs/00_governance/CREATIVE_SCENE_GATE.md`
- `docs/09_reviews/chatgpt/2026-09-04/50D_CREATIVE_RESET_AND_INCIDENT_SELECTION_GATE.md`

`PROJECT_STATE.md`, `HANDOFF.md`, old `RETOMADA` packets, the 23/08 V3/V4 encyclopedia and accumulated old pass headers are **historical evidence, not HOT state** unless `V5_CONTEXT_ROUTER.md` explicitly routes to them.

## Rehydration acceptance test

A new agent is not considered rehydrated merely because it can repeat the current premise.

Before making a large structural creative decision it should understand the distinctions encoded in the Fidelity Packet, including:

- broad original Beast ecology rather than four mascot species;
- deep entities as numinous/person-like world-integrated intelligences rather than only gods or technical archives;
- already-civilized pre-magic humans contributing cumulative culture and formalization;
- Sangue/Matriz/Bestas Geradas as bodily/developmental/relational rather than loot mechanics;
- the older Core Engine distinction `spectral ≠ immature`, `humanoid ≠ more evolved`, `material density ≠ developmental age` when that cluster is reopened;
- protagonist as dangerous/talented but incomplete, able to lose and continue learning after Concession;
- cousin as legitimate formidable successor rather than automatic jealous villain;
- Academy as a living civilizational engine;
- physically readable supernatural combat;
- Fissures as interworld frontiers rather than generic dungeon doors;
- enemy as adaptive civilization rather than monster wave;
- the intended tonal bandwidth: beauty, brutality, humor, romance, friendship, ordinary life, wonder and war;
- known correction `Fei → Fênix`.

If it cannot, it must load more context before deciding.

## Known transcription correction

`Fei` / `anciã da Fei` in the 05/09 reconstruction is a capture error.

**Correct referent: Fênix.**

Do not invent a new `Fei` proper noun. Raw source remains preserved; current semantic surfaces are corrected through:
`docs/08_sources/conversations/2026-09-05-author-finalize-second-brain-fidelity-phoenix-correction-source-record.md`.

## GitHub ↔ Notion

GitHub is the versioned/auditable editorial control plane. Notion is the human Wiki, relational graph, research pipeline and cognitive interface.

Interpret `Sync Status` as:

- `SYNCED` — corresponding representation exists and no known drift remains;
- `NOT-IN-GIT` — exploratory material not yet materialized in repository;
- `DRIFT` — known disagreement; investigate before editing/promoting the same concept;
- `N/A` — operational record with no required mirror.

Do not promote `WORKING-CANON` or `CANON` only in Notion. Structural promotion requires GitHub decision/provenance and reconciliation into Notion.

## Second Brain layers

ADR-0007 defines these cooperating layers:

- **Human Wiki:** rich explanation;
- **Lore Registry:** atomic semantic nodes;
- **Tags:** retrieval vocabulary only;
- **Relation Edge Registry:** typed structural relations;
- **Decision Log:** why a direction was adopted;
- **Research & Open Questions:** explicit unresolved gates;
- **Source Library:** provenance and authority;
- **GitHub:** versioned control plane;
- **Authorial Fidelity Packet:** semantic anti-drift between compressed state and source.

**Wiki explains. Node identifies. Tag retrieves. Edge connects. Question preserves uncertainty. ADR decides. Source proves. Git versions. Fidelity preserves meaning.**

## Memory hierarchy

- **COLD / source-exact:** `docs/08_sources/`, raw transcripts, PDFs, exact external reports;
- **WARM / domain:** detailed lore/research modules, historical CE clusters, current Notion pages, graph neighborhood;
- **HOT / current route:** START_HERE, pointer, manifest, dashboard, ADR-0006, current Bible, Fidelity Packet, Pass 57 and target current cluster;
- **PROMOTED:** explicit current `WORKING-CANON` / `CANON` records.

Summary routes. Source proves. Selective loading is not permission to invent missing nuance.

## Current P0 scene gate

No sequence/scene work before resolving and stress-testing:

1. `BW-Q-V5-BOOK1-INCITING-001`;
2. `BW-Q-V5-PROT-ENTITY-001`;
3. `BW-Q-V5-ENEMY-CONSTRAINT-001`;
4. `BW-Q-V5-ENSEMBLE-001`.

Test against ADR-0006, Fidelity Packet and Pass 50D.

## Roles

### Archivist
Preserves sources without rewriting history. Does not canonize.

### Lore Architect
Normalizes concepts, separates dimensions and makes dependencies explicit.

### Continuity Auditor
Searches for regression in chronology, genealogy, geography, biology, politics, religion, narrative and semantic intent.

### Research Analyst
Researches science, history, anthropology, warfare, linguistics and audiovisual production; separates real evidence from fictional extrapolation.

### Narrative Engineer
Tests dramatizable consequences without bending the universe merely to rescue a scene.

### Canon Curator
Prepares promotion proposals with impacts, alternatives and unresolved questions.

### Devil's Advocate
Attempts to break systems through incentives, abuse, markets, war, medicine, fraud, technology, succession and exploitation.

## Epistemic states

`CAPTURED`, `HYPOTHESIS`, `WORKING-CANON`, `CANON`, `MYSTERY`, `UNRESOLVED`, `SUPERSEDED`, `REJECTED`.

Never change status silently.

Presence is not promotion. Repetition is not promotion. Detail is not promotion.

## Truth layers

Distinguish:

- `Author Truth`;
- `In-world Knowledge`;
- `Myth/Religion`;
- `Propaganda`;
- `Mixed/Disputed`;
- `Meta/Design`.

Also preserve `Spoiler Layer`: `Reader-Safe`, `Writer-Room`, `Author-Only`.

## Regression protocol

Before promoting a structural change:

1. resolve target Concept/Entity ID;
2. inspect `Dependencies`, `Dependents`, incoming/outgoing edges and directly related concepts;
3. inspect current Open Questions;
4. inspect current Wiki module(s);
5. inspect Source Records and ADRs;
6. run semantic-fidelity check against the Fidelity Packet;
7. run Devil's Advocate / scale tests as relevant;
8. create GitHub diff and decision/status record;
9. reconcile Notion;
10. perform final readback of the current front doors.

Do not change a technical backstage phrase in a way that silently changes the author's mental image.

## Anti-gap rule

A systemic rule should eventually answer:

- what is it?
- how did it arise?
- how does it work today?
- who benefits?
- who controls access?
- what prevents obvious abuse?
- how can it fail?
- what exceptions exist?
- what social/political/ecological consequences follow?
- what narrative consequences follow?

If not resolved, record `UNRESOLVED` rather than masking the gap with elegant prose.

## Scale rule

Test relevant systems at multiple scales: individual, family/community, institution/State/Dynasty and ecosystem/world/interworld.

## Writing rule

- Portuguese-BR by default for author-facing material;
- mark provisional names;
- do not invent false etymology before linguistic design is mature;
- distinguish author truth, in-world belief, mythology and propaganda;
- avoid RPG/UI language when the concept is biological, historical, political or experiential;
- external references/research remain sources, not automatic lore;
- technical vocabulary may live backstage, but author-facing explanation should first make the idea visible and understandable.

## Interaction with the author

Preserve autocorrections, hesitations, alternatives and long-form image-making when they carry meaning.

Do not interpret general approval as canonization of every surrounding sentence.

Do not ask the author to remember what the system should recover from source. Use associative triggers and source lookup.

Prefer cohesive paragraphs and efficient structure over one-sentence vertical scrolling.

## Story-facing interface

Complexity lives backstage. Reader experience should usually progress:

> **feel → observe the rule → learn the name → discover the theory**

A concept may have author-truth, scholarly, popular, ritual and regional names without those layers being identical.

World Graph and Story Graph are distinct. The old V4 Story Graph is not current just because it is detailed. Do not reactivate full story architecture until the current P0 gate passes.

## Canon modification

Do not silently edit `CANON` or `WORKING-CANON`. Record status change, decision/rationale, previous version and downstream impact. Preserve `SUPERSEDED` history instead of deleting it.

After a significant structural change, update the current pointer/manifest/dashboard/START_HERE and Notion current route in the same cycle where possible. Do **not** treat historical `PROJECT_STATE.md` or accumulated `HANDOFF.md` as the current mutable state again.

## Access drift

Current repository metadata has been observed as `PUBLIC`, while old governance text said private. Do not change visibility automatically; route the discrepancy to the author.
