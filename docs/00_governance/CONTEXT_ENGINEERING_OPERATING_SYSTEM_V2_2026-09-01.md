# BeastWorld — Context Engineering Operating System v2 — 01/09/2026

**Status:** WORKING-GOVERNANCE / ACTIVE PROCESS  
**Revision:** v2.1 raw-transcript amendment after PDF recovery  
**Scope:** conversations, research, creative models, GitHub, Notion, handoffs and canonization  
**Trigger:** D3 provenance regression discovered in Passes 39–40 (`mixed/temporary biological soma` attributed to the author without source support).

## 1. Audit verdict

The BeastWorld already had strong governance principles, but execution drifted:

- V5 advanced through many passes/labs while the Session Archive Ledger and Interaction Archive Index stopped at 22/08;
- generic `HANDOFF.md` and `RETOMADA.md` retained historical branch/checkpoint instructions while V5 created newer HOT files;
- GitHub research passes and Notion labs existed, but exact source→interpretation trace was not enforced on every author correction;
- a good-sounding AI synthesis was copied forward into Pass 39, Pass 40, Lab 13 and the Creative Checkpoint before a coverage regression detected that the author never proposed it.

Classification: **D3 provenance/status conflict**. Canon promotion is blocked for the affected cluster until corrected; creative laboratory work may continue with explicit labels.

## 2. Design principles

1. **Immutable source, revisable models.** Never rewrite what the author said; correct the derived model and link an erratum.
2. **Event-sourced creativity.** Every substantive turn is an event with provenance, delta and trace targets.
3. **Bidirectional traceability.** Every important author item points forward to where it was modeled; every model claim points backward to source/inference/proposal.
4. **Progressive disclosure.** Load HOT pointers first, WARM models next and COLD source only when needed.
5. **One authority, multiple views.** GitHub is versioned editorial truth; Notion is relational/human navigation. Dashboards never become a second truth.
6. **No summary without recoverability.** Compact context routes to details; it never replaces them.
7. **Closeout is a transaction.** A session is not `SYNCED` because one page or one commit exists.
8. **Tests for knowledge.** Provenance, forbidden regressions, stale entrypoints and missing links receive automated checks like code.

These principles align with current long-horizon agent guidance: compact context, externalize durable state, use resumable artifacts and keep retrieval selective. Official references used as process analogies:

- https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents
- https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents
- https://www.anthropic.com/engineering/harness-design-long-running-apps
- https://www.notion.com/help/wikis-and-verified-pages
- https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/available-rules-for-rulesets

## 3. Six durable layers

### L0 — Raw evidence / COLD
Author messages, exports, attachments, images, PDFs, audio and visible AI answers. Preserve exact data when available; otherwise label `RAW-PARTIAL`, `SUMMARY-ONLY` or `MEDIATED-ONLY`.

### L1 — Source Record / COLD index
One record per substantive source bundle: ID, author/actor, fidelity, scope, attachments, selected excerpts, gaps and immutable path.

### L2 — Coverage and semantic delta / WARM
Atomic source items receive stable IDs and fields: type, interpretation, status, impact, action and trace target. Corrections/rejections are first-class events.

### L3 — Laboratory model / WARM
Passes, alternatives, stress-tests, Impact Cones, red-team results and open forks. AI reasoning is labeled `INFERENCE/PROPOSAL`; it is never stored as author intent.

### L4 — Operational pointer / HOT
Only current direction, active gate, recent deltas, dependencies, known drift, exact reading order and next action. It points to L1–L3 instead of copying all details.

### L5 — Decision/canon
ADR, decision record, Bible, promoted entity/graph/timeline. Nothing arrives here merely by repetition or author conversational agreement without the declared promotion path.

## 4. Atomic closeout transaction

A substantive wave cannot begin at `CAPTURED` if visible raw messages were technically available. It first passes `RAW-ARCHIVED`: each author message and substantive assistant response is preserved verbatim in an append-only transcript batch or receives an explicit unavailable/partial fidelity label.

Every substantive wave follows:

```text
OPEN
  → CAPTURED (L0/L1 exists)
  → COVERED (atomic matrix complete)
  → MODELED (L3 exists)
  → RECONCILED (collisions/older models handled)
  → HOT-UPDATED (L4 routes correctly)
  → NOTION-LINKED (human navigation and database record)
  → VERIFIED (automated + manual integrity gates)
  → SYNCED (scope-specific claim only)
```

If interrupted, `CURRENT_SESSION_POINTER.json` records the last completed state and remaining actions. A later agent resumes rather than guessing.

## 5. Standard session package

Minimum for a substantive creative round:

1. append-only raw transcript/export containing every visible author message and substantive assistant response available for the wave;
2. `docs/08_sources/conversations/<date>-<topic>-source-record.md` with hash/fidelity/backlink to raw evidence;
3. `docs/09_reviews/chatgpt/<date>/<NN>_<DELTA_OR_GATE>.md`;
4. coverage matrix inside the pass or a dedicated file;
5. update to `CURRENT_CREATIVE_CHECKPOINT` only when the active baseline changed;
6. update to `V5_CONTEXT_ROUTER` and `V5_RECONCILIATION_STATE` reading order;
7. Session Archive Ledger row;
8. Notion Source Library record;
9. Notion lab/source page and Session & Sync Ledger record;
10. integrity receipt with branch, HEAD, files and exact lifecycle claims.

Every substantive visible AI answer must be preserved verbatim alongside the author messages it answers. This includes structural reasoning, examples, rejected alternatives, explanations and operational commitments. Routine tool-progress commentary or acknowledgements may be omitted only when they contain no substantive reasoning or commitment. A summary/pass never substitutes for this raw layer.

## 6. Delta-first capture

Do not reprocess the whole project after every turn. Compare the new turn against:

1. current HOT checkpoint;
2. directly affected WARM passes/labs;
3. corrections/rejections ledger;
4. COLD source only where attribution or nuance is disputed.

Classify each item:

- `CONFIRMS` — reinforces current direction;
- `REFINES` — adds precision without changing causality;
- `CORRECTS` — active model is wrong and must change;
- `REJECTS` — proposal cannot remain active;
- `REOPENS` — closed/parked fork returns to study;
- `NEW` — new hypothesis/question;
- `OPERATIONAL` — workflow instruction, not lore.

## 7. Supersession without deletion

When a newer correction invalidates an older model:

- raw source remains immutable;
- derived file receives an erratum or `SUPERSEDED-IN-PART` header;
- current HOT text is corrected immediately;
- Notion page receives a visible correction and link to replacement;
- validator gains a regression fixture when the failure is likely to recur;
- rejected wording may remain only inside an explicitly labeled historical/erratum context.

## 8. GitHub–Notion sync rule

Every Notion lab/source page created from a GitHub package must expose:

- GitHub branch;
- exact paths;
- lifecycle status;
- `PROMOTED: yes/no`;
- source fidelity;
- related previous/next lab;
- final commit URL once closure completes.

The Session & Sync Ledger is mandatory for each substantive wave. Notion page verification should be used for stable governance/HOT pages where supported; exploratory labs remain unverified by design.

## 9. Context budgets

- **HOT target:** 1–3 compact entry files plus the active pointer; should answer “where are we and what next?”
- **WARM target:** only the active cluster, its dependencies and recent competing models.
- **COLD:** retrieved by Source ID/path, never dumped wholesale.
- large tool results must use range selection/search instead of repeated full reads.

The objective is not maximal context. It is maximal **relevant, trustworthy context per token**.

## 10. Validation suite

`scripts/verify_context_integrity_v2.py` checks at minimum:

- required entrypoints exist;
- `raw_transcripts` in the current pointer resolve and are non-empty for sessions claiming `RAW-ARCHIVED`;
- current pointer paths resolve;
- V5 branch appears in active entry documents;
- the current session appears in the Git ledger;
- rejected materialization wording is absent from active HOT files;
- current gate/pass references are reachable;
- `PROMOTED` is not claimed by the current pointer;
- stale historical branch instructions are visibly overridden.

CI should run this on relevant pushes/PRs. It does not replace human semantic audit or Notion verification.

## 11. Responsibility matrix

### ChatGPT role contract — author correction 01/09/2026

ChatGPT is simultaneously **coauthor, creative codirector, researcher, critical analyst, orchestrator, builder, archivist and governance/continuity operator**. Archival/governance work supports creative work; it does not reduce the agent to a passive secretary. ChatGPT must generate and stress-test proposals, research when needed, preserve provenance, maintain the workstation and present only genuine authorial forks. None of these roles permits silent canon promotion.

| Artifact | Primary authority | Update trigger |
|---|---|---|
| raw/source record | ChatGPT as archivist/integrator | substantive author/source turn |
| coverage matrix | integrator | claim of comprehensive response |
| laboratory pass | ChatGPT as coauthor/research/critical-analysis agent | new architecture or stress-test |
| HOT pointer | integrator | active baseline/next gate changes |
| Notion lab | integrator | Git package ready for human navigation |
| ADR/canon | author + canon curator | explicit promotion only |
| validator fixture | continuity auditor | repeatable regression discovered |

## 12. Precise closeout language

Always report the scope:

- `RAW-ARCHIVED`: available visible author/substantive-assistant messages are durably preserved with explicit span and fidelity;
- `CAPTURED`: source record exists;
- `COVERED`: atomic items traced;
- `MODELED`: pass/lab exists;
- `RECONCILED`: collisions repaired for named files/pages;
- `SYNCED`: GitHub/Notion agree for named artifacts;
- `AUDITED`: stated gates were executed;
- `PROMOTED`: status changed through explicit authority.

Never claim “everything is saved/perfect”.


## 13. Recovery amendment — session 003

The 71-page source `BW-SRC-TRANSCRIPT-2026-09-01-CE01-CE04-PDF-01` demonstrated that derived passes can be semantically strong while raw conversational fidelity is still missing. Future closure must therefore report two independent dimensions:

1. **semantic coverage** — were ideas modeled/traced?;
2. **raw fidelity** — can the exact visible exchange be recovered?

Neither dimension substitutes for the other. The author must not be required to recreate an available transcript manually again.
