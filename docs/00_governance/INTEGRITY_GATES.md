# BeastWorld — Integrity Gates

**Status:** governance / operational harness  
**Purpose:** prevent an agent from saying “everything is synchronized” when only capture/documentation was completed.

## 1. Why this exists

On 2026-08-20 an external read-only audit found real drift after prior sessions had described the project as fully reconciled. The failure mode was not loss of lore; it was **insufficient post-write verification across layers**.

From now on, “saved”, “documented”, “synced”, “reconciled”, and “ready” are different claims and require different evidence.

## 2. Mandatory closeout after every substantive write wave

A substantive wave is any session that changes one or more of: causal model, status, dependencies, Source Archive, Open Questions, graph, Timeline, Entity Atlas, Notion editorial pages, HOT memory, PR/branch state.

Before declaring the wave closed, the acting agent must verify:

### Gate A — Remote state
- repo visibility and repository identity;
- branch and current remote HEAD;
- PR state/draft/merged status;
- base SHA;
- reviews/review threads when available;
- status checks/workflows, or explicitly state that none exist.

### Gate B — Provenance
- every high-value author turn has a recoverable source or explicit source pointer;
- AI rationale is not stored as author intent;
- external research is not stored as Author Truth;
- when choices are presented as A/B/C/D, **the complete option wording and the author response must be preserved together** or referenced by immutable source ID;
- no bare `D`, `B+C`, etc. may be treated as authoritative without its option set.

### Gate C — Semantic coverage
- every newly introduced structural concept has an addressable ID or is explicitly marked `UNMODELED`;
- graph nodes/relations reflect new dependencies before ADR-0005 can be claimed as usable;
- relation endpoints exist and statuses remain consistent with the underlying module.

### Gate D — GitHub ↔ Notion
- Notion status must not claim `SYNCED` when Git says otherwise;
- `WORKING-CANON` or `CANON` cannot exist only in Notion;
- any deliberate drift must be labeled `DRIFT` with rationale;
- editorial pages and databases may lag during a wave, but the agent must not call the wave reconciled until lag is cleared or explicitly recorded.

### Gate E — HOT memory
- `PROJECT_STATE`, `HANDOFF`, `RETOMADA` and Notion Resume Packet must either reflect the new conceptual checkpoint or explicitly point to a newer maintenance checkpoint;
- stale literal SHAs are allowed only when accompanied by the rule that remote wins and the stale state is visibly labeled historical;
- new external-agent protocol changes must be discoverable from `START_HERE_FOR_AI.md`.

### Gate F — Human navigation
- newly important editorial/lab pages must be reachable from the Encyclopedia/Hub or explicitly marked backstage-only;
- no prerequisite article should be orphaned from the recommended reading path.

### Gate G — Security
- private-repo requirement revalidated before writing sensitive IP;
- Source Records with security metadata should be `OK`, `HOLD-*`, or explicitly `UNVERIFIED`; null is not equivalent to verified;
- no external AI artifact URL is treated as durable source until copied into the project archive.

## 3. Evidence language

Agents must use precise closeout language:

- **CAPTURED** — source was preserved.
- **MODELED** — semantic representation exists.
- **SYNCED** — GitHub/Notion representations agree for the checked scope.
- **AUDITED** — the mandatory gates above were executed for the checked scope.
- **PROMOTED** — maturity/status changed through the proper decision path.

Never collapse these into “everything is perfect”.

## 4. External audit findings that triggered this gate

The 2026-08-20 Claude audit identified, among others:
- graph coverage gap for the new metaphysics/threat layer;
- Notion-only `WORKING-CANON` status for Dragons;
- incomplete provenance for letter-coded decisions;
- multiple A/B/C/D systems creating referential ambiguity;
- threat layer absent from the Master Timeline;
- page 10B missing from the human reading index;
- Source Records with null security status;
- bootstrap branch living entirely inside an unmerged draft PR.

These are **maintenance findings**, not automatic creative decisions.

## 5. Drift severity

- `D0` — cosmetic/navigation only.
- `D1` — stale operational metadata or missing link.
- `D2` — semantic representation incomplete; safe to brainstorm, unsafe to promote.
- `D3` — status/provenance conflict; promotion blocked.
- `D4` — security/source-of-truth breach; writing/promotion stops immediately.

## 6. Rule for future claims

> **No agent may say the BeastWorld state is fully synchronized or “all good” without naming the scope audited and the gates actually checked.**
