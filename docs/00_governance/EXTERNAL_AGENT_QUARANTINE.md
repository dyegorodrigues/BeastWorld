# BeastWorld — External Agent Quarantine Protocol

**Status:** governance / multi-agent workflow  
**Purpose:** let Claude, Gemini, Grok, Kimi, ChatGPT or other agents research and create aggressively without silently rewriting the integrated world model.

## 1. Default rule

External-agent research is **not integrated lore**.

When an external agent is authorized to write, it must use its own branch and its own review namespace. It may not write directly into `agent/worldbuilding-os-bootstrap` unless the author explicitly overrides this rule for a specific maintenance task.

Recommended branch pattern:

`agent/<agent>-<mission>-YYYY-MM-DD`

Recommended path pattern:

`docs/09_reviews/<agent>/YYYY-MM-DD/`

## 2. Required contents of an external review

At minimum:

1. `CONTEXT_READ_RECEIPT.md`;
2. `REPORT_FULL.md` — complete technical report;
3. `AUTHOR_FRIENDLY.md` — long-form explanation in readable PT-BR when appropriate;
4. `PROPOSALS.md` — each proposal separated from source-derived findings;
5. `RESEARCH.md` — external evidence and bibliography;
6. `IMPACT_CONES.md` — systemic impact of structural proposals;
7. `HANDOFF.md` — exact work completed, branch, HEAD, unresolved items and things intentionally not changed.

Optional mission-specific files may include combat, geography, visual language, economics, linguistics, mythology or production notes.

## 3. Impact Cone

Every structural proposal should declare:

- problem;
- proposal;
- source/evidence;
- assumptions;
- affected Concept IDs;
- upstream dependencies;
- downstream consequences;
- cosmology impact;
- biology/ecology impact;
- politics/economy impact;
- history/timeline impact;
- character/story impact;
- combat/visual/live-action impact;
- contradictions/risks;
- alternatives;
- confidence;
- reversibility.

A local improvement that breaks a stronger global invariant is not an improvement.

## 4. Status language

External-agent files must distinguish:

- `SOURCE-DERIVED`;
- `AUTHOR SOURCE`;
- `EXTERNAL EVIDENCE`;
- `INFERENCE`;
- `<AGENT> PROPOSAL`;
- `RISK / CONTRADICTION`;
- `OPEN QUESTION`.

No proposal receives `WORKING-CANON` or `CANON` inside an external-review branch.

## 5. Integration phase is separate

After the external agent finishes:

1. integrated agent reanchors remote;
2. reads the external review branch/PR;
3. verifies research where necessary;
4. compares proposals with current BeastWorld state and other agents;
5. translates the decision set for the author;
6. author accepts/rejects/modifies or requests more research;
7. only then is an integration change prepared against the integrated branch;
8. lore regression and GitHub↔Notion reconciliation occur after the decision.

Research and integration must not be collapsed into one step.

## 6. Blind review mode

For high-value questions, an agent may be instructed to perform a blind independent review:

- read Author Sources + current state + open gates;
- do **not** read prior AI rationales at first;
- produce independent analysis;
- only then read ChatGPT/Claude/other AI proposals and produce a delta.

Purpose: reduce anchoring bias and groupthink.

## 7. Artifact durability

Links to Claude Artifacts, temporary canvases or chat-only documents are not durable project sources.

Before a session ends, any substantive external report must be exported to Markdown in its review branch or otherwise copied into the Source Archive with clear provenance.

## 8. Merge rule

External review PRs should be opened as draft when useful and clearly labeled:

> **EXTERNAL REVIEW / PROPOSALS ONLY — DO NOT MERGE**

Merging an external review branch into the integrated branch does **not** itself promote the proposals, but default practice is to keep research quarantined until the author/integrator has reviewed it.
