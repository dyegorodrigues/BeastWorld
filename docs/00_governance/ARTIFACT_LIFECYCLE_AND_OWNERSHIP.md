# BeastWorld — Artifact Lifecycle & Write Ownership

**Status:** governance candidate / isolated integration branch  
**Purpose:** define what is temporary, what becomes durable, who may write each surface and how ideas move without polluting canon.

## 1. Artifact lifecycle

Every substantive artifact has a lifecycle state. Do not treat all documents as equivalent.

### E0 — EPHEMERAL

Examples: scratchpad thought, tool output, transient chat draft, unsaved visual experiment.

Rules:
- may disappear;
- cannot be cited as durable project memory;
- if it affects a decision, promote it to E1/E2 before session close.

### E1 — SCRATCH

Examples: exploratory notes, raw brainstorm, temporary comparison table.

Home:
- local/tool workspace;
- temporary Notion lab page;
- agent review branch under a clearly temporary namespace.

Rules:
- not integrated;
- may be reorganized freely;
- must have owner/mission when more than trivial.

### E2 — CAPTURED SOURCE

Examples: author conversation, external AI report, PDF, image reference, research article, high-value rationale.

Home:
- `docs/08_sources/` or quarantined review source;
- Notion Source Library record.

Rules:
- provenance preserved;
- author/AI/external evidence explicitly distinguished;
- capture is append-preserving: later correction supersedes but does not rewrite history.

### E3 — MODELED

Examples: Concept ID, Entity ID, Open Question, timeline event candidate, relation, structured research note.

Home:
- lore/entity/research modules;
- graph candidate;
- Notion registries.

Rules:
- semantic representation exists;
- may remain `HYPOTHESIS`, `OPEN`, `PARKED`, `REJECTED` or other noncanonical state;
- source links required for structural claims.

### E4 — REVIEWED / ACCEPTED

The council/author has reviewed a proposal and accepted its direction.

Rules:
- acceptance is a decision state, not necessarily integration;
- Impact Cone and affected surfaces must be known before shared-state write;
- if structural, create/update ADR or Decision Log record.

### E5 — INTEGRATED

Accepted change is represented in the proper GitHub modules and reconciled in Notion.

Rules:
- regression completed for impacted nodes;
- shared HOT state updated when required;
- `Sync Status` verified, not assumed.

### E6 — PROMOTED

Material becomes `WORKING-CANON` or `CANON` through explicit authority.

Rules:
- promotion must be discoverable in Git history and Decision Log/ADR;
- canonical graph/timeline/status must match;
- old versions are `SUPERSEDED`, not erased.

### E7 — ARCHIVED / SUPERSEDED

Artifact is no longer active but remains recoverable.

Rules:
- keep provenance and reason;
- do not surface by default in HOT context;
- can be retrieved to understand prior architecture or rejected alternatives.

## 2. No-delete-by-default rule

Substantive creative history is rarely truly disposable. Prefer:

- `REJECTED` for considered but declined ideas;
- `SUPERSEDED` for formerly active models;
- `PARKED` for intentionally deferred possibilities;
- `ARCHIVED` for historical operational material.

Deletion is reserved for duplicates, accidental secrets, corrupted files or clearly valueless noise and should never destroy decision provenance.

## 3. Write ownership matrix

| Surface | Default writer | External agent | Parallel writes? | Notes |
|---|---|---|---|---|
| `docs/08_sources/` | Archivist / Integrator | append in own branch | yes, isolated | provenance first |
| `docs/09_reviews/<agent>/...` | owning agent | yes | yes | quarantine namespace |
| `docs/06_research/` | Research Analyst / Integrator | proposal branch | yes, isolated | external evidence != canon |
| `docs/02_lore/` hypothesis modules | Lore Architect / Integrator | proposal branch | limited | semantic conflicts require synthesis |
| `docs/03_entities/` | Lore Architect / Integrator | proposal branch | limited | IDs stable |
| `docs/04_story/` | Narrative Engineer / Integrator | proposal branch | limited | must respect Author Truth |
| `docs/05_visual/` | Visual/Narrative team | proposal branch | yes, isolated | no silent lore changes |
| `graph/` canonical relations | Integrator | patch proposal only | no | single-writer at integration |
| `docs/01_bible/` | Integrator after author gate | no direct edit | no | promotion surface |
| ADR/Decision Log | Integrator / Canon Curator | proposal only | no | authority record |
| `PROJECT_STATE.md` | Integrator | no direct parallel write | no | HOT single-writer |
| `HANDOFF.md` | Integrator | external agent owns local handoff only | no | project handoff single-writer |
| `RETOMADA.md` | Integrator | no direct parallel write | no | onboarding contract |
| `START_HERE_FOR_AI.md` | Integrator | no direct parallel write | no | universal entry point |
| Notion editorial pages | Integrator / assigned curator | create isolated page okay | no shared overwrite | reader layer |
| Notion registries | Curator / Integrator | suggestions or scoped records | field-dependent | canonical status is restricted |
| AI Council Queue | coordinator + assigned agent | yes, own mission row | yes | operational coordination |
| Session & Sync Ledger | every writing session | own session row | yes | closeout evidence |

## 4. Semantic locks

A file lock is insufficient because two agents can edit different files that represent the same truth. Use a **semantic lock** whenever integrating a structural target.

Lock identity should be one or more of:

- Concept ID;
- Entity ID;
- Question ID;
- Decision ID;
- timeline event family;
- named subsystem.

Example: an agent editing `Bênção` physiology and another editing `Bênção Artificial` are semantically overlapping even if paths differ. Their changes require synthesis before integration.

## 5. Temporary work policy

Temporary work must answer three questions before session close:

1. **Does it contain unique author/source information?** If yes → CAPTURE.
2. **Does it introduce a reusable concept/decision/risk?** If yes → MODEL or register an Open Question.
3. **Is it merely process noise?** If yes → allow expiration.

No important idea should survive only because someone remembers which chat contained it.

## 6. Naming conventions

### Agent review branch

`agent/<agent>-<mission>-YYYY-MM-DD`

### Review directory

`docs/09_reviews/<agent>/YYYY-MM-DD/<mission>/`

### Research note

`docs/06_research/YYYY-MM-DD-<topic>-research-note.md`

### Author source

`docs/08_sources/conversations/YYYY-MM-DD-author-<topic>-verbatim.md`

### AI rationale/source

`docs/08_sources/conversations/YYYY-MM-DD-<agent>-<topic>-rationale.md`

### Session records

Notion Session & Sync Ledger is the operational index. Git commits remain the immutable version history.

## 7. Required metadata for durable external work

Every durable agent report should state:

- agent/model/service when known;
- date;
- mission;
- branch and base HEAD;
- context scope;
- spoiler scope;
- source map;
- whether peer proposals were seen before independent analysis;
- files created;
- proposals vs source-derived findings;
- unresolved questions;
- handoff.

## 8. Rejected proposal retention

When the Author rejects a proposal:

- Council Queue → `REJECTED`;
- preserve the report;
- record rationale when meaningful;
- remove it from active context routing unless needed for contrast;
- never let a later agent rediscover and silently reintroduce it as if new.

## 9. Parked idea retention

`PARKED` is not rejection. Parked material remains searchable but is excluded from ordinary priority queues and context packets until an explicit trigger reactivates it.

## 10. Integration rule

> **An artifact changes status only when the evidence for the next lifecycle state exists.**

Writing a polished page does not make it modeled; modeling does not make it accepted; acceptance does not make it synced; sync does not make it canon.