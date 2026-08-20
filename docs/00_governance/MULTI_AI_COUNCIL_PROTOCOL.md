# BeastWorld — Multi-AI Council Operating Protocol

**Status:** governance candidate / isolated integration branch  
**Purpose:** let ChatGPT, Claude, Grok, Gemini, Kimi and future agents collaborate as a disciplined creative council without silent canon drift, context poisoning, duplicated work or concurrent-write collisions.

## 1. Core model

BeastWorld uses a **council + integrator** model, not a shared editable notebook.

- **Author:** final creative authority.
- **Integrator / Showrunner:** reconciles sources, competing analyses and accepted decisions into shared state.
- **Council agents:** produce independent research, critique, alternatives, continuity analysis and narrative consequences.
- **Archivist:** preserves source fidelity and provenance.
- **Canon Curator:** prepares promotion packages; does not self-promote lore.

No model becomes authoritative because it is more confident, newer, or repeated by another model.

## 2. Source-of-truth hierarchy

1. GitHub promoted governance / ADR / Bible / canonical module.
2. Explicit author decision with recoverable provenance.
3. Working-canon material reconciled in GitHub and Notion.
4. Structured hypothesis / lab material.
5. Open question / research gate.
6. Author source / raw conversation.
7. AI rationale / external review.
8. External evidence.

When two layers disagree, do not resolve silently. Create a conflict record or `DRIFT` state and route it to synthesis.

## 3. Council work phases

### Phase A — Reanchor

Every agent must begin from `START_HERE_FOR_AI.md` and verify current remote state. A copied SHA in a prompt is a hint, not authority.

### Phase B — Context Packet

The coordinator supplies or constructs the smallest sufficient packet:

- mission / Question IDs;
- target Concept/Entity IDs;
- current status (`CANON`, `WORKING-CANON`, `HYPOTHESIS`, `OPEN`, `PARKED`);
- direct dependencies and dependents;
- relevant ADRs;
- source records;
- spoiler scope;
- explicit non-goals;
- output contract.

### Phase C — Independent work

For high-value structural questions, prefer **blind-first review**. Agents read source/current state before reading peer proposals to reduce anchoring and groupthink.

### Phase D — Cross-examination

Agents may review other agents only after their independent pass. Every critique must distinguish:

- `SOURCE-DERIVED`;
- `INFERENCE`;
- `EXTERNAL EVIDENCE`;
- `PROPOSAL`;
- `RISK / CONTRADICTION`.

### Phase E — Synthesis

The Integrator produces a decision package with:

- shared findings;
- genuine disagreements;
- 2–4 viable architectures where useful;
- trade-offs;
- Impact Cones;
- recommendation and confidence;
- questions that actually require the Author.

### Phase F — Author gate

The Author may accept, modify, combine, reject, park or request research. General enthusiasm is not automatic canonization.

### Phase G — Integration

Only after the decision gate may shared GitHub/Notion state be changed. Research and integration are separate operations.

## 4. Context Router — our Saliency Engine

Never load the entire world by default. Select context by relevance.

### Temperature

- **HOT:** `PROJECT_STATE`, `HANDOFF`, `RETOMADA`, mission target.
- **WARM:** related lore/entities/timeline/decisions and one or two graph hops.
- **COLD:** raw conversations, PDFs, historical drafts and full research.
- **CANON:** promoted Bible/ADRs/modules when authoritative constraints are needed.

### Relevance score

Prefer material with one or more of:

- direct Concept/Entity relation;
- same Question/Decision ID;
- upstream/downstream dependency;
- timeline overlap;
- same character/faction/location;
- explicit source relation;
- recent structural delta.

### Visibility scope

Every mission declares one of:

- `READER-SAFE`;
- `WRITER-ROOM`;
- `AUTHOR-ONLY`.

An agent must not be fed spoiler material beyond the mission scope merely because it exists. This mirrors trait/card visibility systems used by specialist writing tools and prevents accidental revelation in downstream drafting.

## 5. Council Queue

Operational missions are registered in Notion database **BEASTWORLD — AI Council Queue**.

Minimum fields:

- Council ID;
- mission;
- status;
- priority;
- mode;
- primary agent and contributors;
- scope;
- decision-needed flag;
- branch/path/output;
- related Open Questions, Decisions, Sources and Lore Concepts;
- sync status.

Status flow:

`BACKLOG → READY → ASSIGNED → IN-REVIEW → WAITING-AUTHOR → ACCEPTED/REJECTED/PARKED → CLOSED`

`ACCEPTED` means the proposal passed the author/review gate; it does **not** mean shared state was already integrated.

## 6. Concurrency protocol

When two sessions may work simultaneously:

1. reanchor before any write;
2. do not write shared HOT or canonical files from parallel sessions;
3. create an isolated branch or review namespace;
4. use additive Notion pages/databases rather than overwriting shared pages;
5. register touched scope in Session & Sync Ledger;
6. before integration, reanchor again and diff against current shared state;
7. if another session changed the same semantic target, mark `DRIFT` and synthesize rather than last-write-wins;
8. integrate only from one designated Integrator session.

### Single-writer surfaces

The following are **single-writer at integration time**:

- `PROJECT_STATE.md`;
- `HANDOFF.md`;
- `RETOMADA.md`;
- `START_HERE_FOR_AI.md`;
- Canon Policy / status model;
- Bible/promoted lore;
- canonical graph/timeline representation;
- Notion Resume Packet and canonical status fields.

External agents may propose patches for them, but must not independently reconcile them in parallel.

## 7. Recommended role allocation

Agents are not permanently typecast; roles are mission assignments.

- **ChatGPT / Integrator:** synthesis, architecture, cross-source reconciliation, author-facing decision framing.
- **Claude / Continuity Auditor:** long-context consistency, contradiction hunting, structural review.
- **Grok / Adversarial Researcher:** web/X research when relevant, counterexamples, unconventional hypotheses, adversarial stress tests.
- **Gemini / Multimodal Researcher:** visual/reference analysis, broad Google ecosystem research when useful.
- **Kimi or other long-context agent:** independent long-document review and alternative synthesis.

Always judge outputs by evidence and fit, never by brand assignment.

## 8. Mission modes

- `RESEARCH` — evidence and analogues; no integration.
- `BLIND-REVIEW` — independent diagnosis before peer exposure.
- `CONTINUITY` — regression and contradiction analysis.
- `NARRATIVE` — dramatizability, character consequences, exposition burden.
- `DEVILS-ADVOCATE` — exploit and break the system.
- `SYNTHESIS` — reconcile council outputs.
- `INTEGRATION` — materialize accepted decision.
- `AUDIT` — verify sync/provenance/security/coverage.

A mission should normally have one primary mode; secondary roles can be named in its packet.

## 9. Decision quality rules

A structural proposal must be tested across four scales:

1. individual;
2. family/community;
3. State/dynasty/institution;
4. ecology/world.

It must also answer, where applicable:

- what mechanism produces it;
- who benefits and who loses;
- access/control;
- failure mode;
- exploitability;
- exceptions;
- historical consequences;
- narrative consequences;
- visual/live-action consequences;
- cost and reversibility.

## 10. Patterns extracted from specialist worldbuilding software

BeastWorld adopts concepts, not platform dependency:

- **interlinked Codex/Wiki:** stable IDs + relations + backlinks;
- **maps × timelines:** geography and chronology must be connectable rather than maintained as unrelated prose;
- **family/diplomacy/relationship webs:** relationships are first-class graph edges;
- **templates by entity type:** Character, Species, Culture, Religion, Institution, Place, System, Event and Story Beat use typed schemas;
- **research attached to story elements:** evidence must link to the concepts it informs;
- **context saliency:** only relevant lore enters model context;
- **AI visibility controls:** spoiler-sensitive or author-only fields can be excluded from a mission;
- **boards/labs:** free-form exploration remains separate from curated canon;
- **custom calendars and parallel timelines:** time representation can evolve without forcing premature absolute dates;
- **version history:** superseded ideas remain recoverable.

## 11. Council anti-patterns

Forbidden by default:

- multiple agents editing the same canonical file concurrently;
- copying one agent's report into another prompt and calling the result independent review;
- accepting consensus as evidence;
- deleting rejected ideas that matter to provenance;
- exposing all Author-Only truth to every drafting task;
- using chat-only artifacts as durable project memory;
- letting a review branch modify Bible + graph + HOT memory while still researching;
- marking Notion `SYNCED` because a similar paragraph exists somewhere in Git.

## 12. Integration invariant

> **Parallelize discovery; serialize authority.**

Research, critique and ideation can fan out. Canon/status/HOT-state updates converge through one integration path with evidence, regression and sync verification.