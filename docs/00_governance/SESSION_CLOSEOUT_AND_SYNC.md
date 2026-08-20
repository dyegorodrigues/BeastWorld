# BeastWorld — Session Closeout & Sync Protocol

**Status:** governance candidate / isolated integration branch  
**Purpose:** ensure every substantive session ends with durable state, explicit drift and a usable handoff instead of relying on chat memory.

## 1. When this protocol is mandatory

Run it whenever a session:

- writes GitHub or Notion;
- creates/revises a structural concept;
- adds source material or external research;
- changes status, causal relations or timeline state;
- produces a council report worth preserving;
- is likely to be continued in another conversation/agent;
- touches shared HOT or canonical state.

Read-only Q&A that creates no durable project delta may close as `NO-WRITE`.

## 2. Start-of-session receipt

Before writing, record:

- actor/agent;
- mission / Council ID when available;
- mode (`READ-ONLY`, `QUARANTINE`, `INTEGRATION`, `MAINTENANCE`, `CANONIZATION`);
- repo visibility;
- base branch and HEAD;
- PR state if relevant;
- semantic scope/IDs;
- Notion pages/databases in scope;
- whether another concurrent session is active or suspected;
- intended write surfaces.

A session that discovers concurrency after starting must downgrade to isolated writes until it can reanchor.

## 3. Session & Sync Ledger

Every substantive writing session gets one row in Notion database **BEASTWORLD — Session & Sync Ledger**.

Required fields at close:

- Session ID / title;
- actor;
- mode;
- status;
- scope;
- GitHub branch;
- Base SHA;
- Final HEAD;
- GitHub paths;
- Notion scope;
- artifacts;
- lifecycle result;
- canonical-change flag;
- shared-state-touched flag;
- handoff-ready flag;
- security status;
- drift;
- started/closed dates.

The ledger is an index and closeout dashboard. Git history remains the versioned record.

## 4. Closeout sequence

### Gate 1 — Reanchor remote again

Do not assume the branch/head seen at session start is still current.

Verify:

- repository identity and private visibility;
- current target/shared branch HEAD;
- own branch HEAD;
- PR state;
- reviews/review threads/status checks when applicable.

If shared state moved, compare the delta before integration.

### Gate 2 — Inventory writes

List exactly:

- files created;
- files modified;
- files intentionally not touched;
- Notion pages created;
- Notion pages updated;
- database records created/updated;
- transient artifacts not persisted.

### Gate 3 — Classify lifecycle result

Use the highest state actually proven:

- `CAPTURED`;
- `MODELED`;
- `PARTIAL-SYNC`;
- `SYNCED`;
- `AUDITED`;
- `PROMOTED`;
- `NO-WRITE`.

Never call a session `SYNCED` merely because both systems were edited. They must agree for the checked scope.

### Gate 4 — Provenance

Check:

- author words are distinguishable from AI interpretation;
- external evidence has source links;
- external AI output is labeled as such;
- option sets and author responses are preserved together when decisions use letters/numbers;
- temporary artifact URLs are not the only surviving copy of substantive work.

### Gate 5 — Semantic coverage

For new structural content:

- Concept/Entity/Question/Decision IDs exist or the gap is explicitly `UNMODELED`;
- dependencies and dependents are known or flagged;
- Impact Cone exists when the change is structural;
- timeline/relationship implications are checked when relevant.

### Gate 6 — GitHub ↔ Notion reconciliation

For each shared concept touched:

- compare status;
- compare IDs;
- compare authoritative wording at the right abstraction level;
- compare source/decision links;
- set `SYNCED`, `PARTIAL`, `DRIFT`, `NOT-IN-GIT` or `N/A` truthfully.

A Notion research hypothesis may validly be `NOT-IN-GIT`. A canonical rule may not.

### Gate 7 — HOT memory

If the consolidated project state changed, the designated Integrator updates as one serialized operation:

- `PROJECT_STATE.md`;
- `HANDOFF.md`;
- `RETOMADA.md` when onboarding changed;
- Notion Resume Packet / equivalent shared operational page.

Parallel research sessions do **not** update these project-wide HOT surfaces. They instead produce a local handoff for the Integrator.

### Gate 8 — Security

Verify private-repo requirement before persisting sensitive IP. Record `OK`, `UNVERIFIED` or `HOLD`; absence of a value is not verification.

### Gate 9 — Handoff

A handoff must answer:

- what was attempted;
- what was completed;
- what was not completed;
- branch/HEAD;
- exact outputs;
- decisions made vs not made;
- drift/blockers;
- next best action;
- context packet needed to resume.

### Gate 10 — Close the ledger row

Only after the above:

- set session `CLOSED`;
- set close date;
- mark `Handoff Ready` when true;
- record lifecycle result and drift.

## 5. Concurrent-session rule

If another conversation/agent is working simultaneously:

- never update shared HOT/canonical surfaces from both sessions;
- use separate branches;
- use separate Notion pages/rows instead of replacing shared page bodies;
- record semantic targets in the ledger;
- reanchor before integration;
- if the same semantic target changed in both sessions, synthesize; do not resolve by timestamp or last writer.

## 6. Crash/interrupt recovery

If a session is interrupted before normal closeout:

1. preserve unique source/output first;
2. create/update a Session Ledger row as `BLOCKED` or `OPEN`;
3. record last known branch/HEAD and touched paths;
4. mark uncertain sync as `DRIFT`/`PARTIAL`, never `SYNCED`;
5. next session reanchors and audits before continuing.

## 7. Cleanup policy

At closeout, every temporary artifact must become one of:

- **promoted to durable source/model**;
- **linked from a durable record**;
- **explicitly disposable process noise**.

No substantive idea should be left in an unindexed scratch artifact merely because the session ended.

## 8. Canonization requires a separate claim

A session may be fully `AUDITED` without promoting any lore. `PROMOTED` requires explicit status/authority change and its decision trail.

## 9. Closeout receipt format

Use this compact receipt in PR comments, handoffs or reports:

```text
BEASTWORLD SESSION CLOSEOUT
Actor:
Mission/Council ID:
Mode:
Base shared HEAD:
Own branch:
Final HEAD:
GitHub writes:
Notion writes:
Lifecycle result:
Canonical change: yes/no
Shared state touched: yes/no
Sync scope/result:
Drift:
Security:
Handoff:
Next action:
```

## 10. Final invariant

> **A session is not finished when the prose is finished. It is finished when the next agent can prove where the work lives, what it means, what authority it has and what remains unresolved.**