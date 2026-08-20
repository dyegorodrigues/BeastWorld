# BeastWorld — External Agent Quarantine Protocol

**Status:** governance / multi-agent workflow  
**Purpose:** let Claude, Gemini, Grok, Kimi, ChatGPT or other agents research and create aggressively without silently rewriting the integrated world model or creating permanent branch sprawl.

## 1. Default rule

External-agent research is **not integrated lore**.

Default mode is `READ-ONLY CONSULTANT`.

A research/review mission that can be completed by reading GitHub/Notion, researching externally and delivering a report **does not require a Git branch or PR**.

The preferred operational path is:

```text
Council Queue mission
      ↓
read-only / isolated research
      ↓
agent output page/report
      ↓
integrator comparison + author gate
      ↓
durable capture/integration only if useful
```

The project must not maintain permanent branches named after individual AI systems.

## 2. When an external branch is justified

Create an external branch only when the agent has explicit permission and needs to write **durable Git artifacts** itself.

Examples:

- large external review that must be preserved verbatim;
- structured research package too large for a Notion output page;
- proposed patch to schemas/governance/lore for later review;
- specialized artifact set that benefits from Git version history.

Recommended branch pattern:

`agent/<agent>-<mission>-YYYY-MM-DD`

Recommended review namespace:

`docs/09_reviews/<agent>/YYYY-MM-DD/`

The branch is **temporary quarantine**, not a second line of BeastWorld truth. After handoff/integration/rejection it should be closed/retired.

## 3. Notion-only isolated output

If the author permits an external agent to write to Notion, the agent may use its **own mission/output page** associated with `BEASTWORLD — AI Council Queue`.

It must not directly rewrite shared editorial/canonical pages, Resume Packet, canonical status fields or integrated databases unless acting as the authorized Integrator.

Notion output pages are proposal/research surfaces; GitHub remains the versioned editorial source of truth.

## 4. Minimum durable review package

Do not create seven files merely because a checklist exists.

Default is **one dossier Markdown** containing, as applicable:

1. Context Read Receipt;
2. current-state map;
3. diagnostic/research;
4. alternatives/proposals;
5. Impact Cones;
6. recommendation;
7. author-friendly explanation;
8. source map;
9. handoff.

Split into `REPORT_FULL.md`, `RESEARCH.md`, `PROPOSALS.md`, `IMPACT_CONES.md`, etc. only when size, independent reuse or review ergonomics justify separation.

## 5. Impact Cone

Every structural proposal should declare the dimensions it materially affects, including as applicable:

- problem/proposal;
- evidence and assumptions;
- Concept/Entity/Question/Decision IDs;
- upstream/downstream dependencies;
- cosmology/metaphysics;
- biology/ecology;
- geography/timeline/history;
- culture/religion;
- politics/economy/institutions;
- character/story/relationships;
- plot/arcs/mystery/reveals;
- combat/visual/live-action/VFX;
- exposition burden;
- contradictions/risks;
- alternatives;
- confidence/reversibility.

A local improvement that breaks a stronger global invariant is not an improvement.

## 6. Status language

External-agent output must distinguish:

- `SOURCE-DERIVED`;
- `AUTHOR SOURCE`;
- `EXTERNAL EVIDENCE`;
- `INFERENCE`;
- `<AGENT> PROPOSAL`;
- `RISK / CONTRADICTION`;
- `OPEN QUESTION`.

No external review promotes itself to `WORKING-CANON` or `CANON`.

## 7. Integration is a separate phase

After the external agent finishes:

1. Integrator reanchors remote;
2. reads the report/output;
3. verifies important evidence where needed;
4. compares it with current BeastWorld state and other agents;
5. runs continuity / Devil's Advocate / Impact Cone as needed;
6. translates real trade-offs for the author;
7. author accepts, modifies, combines, rejects, parks or requests more research;
8. only then does the Integrator change shared GitHub/Notion state;
9. lore regression and GitHub↔Notion reconciliation follow.

Research and integration must not be collapsed into one step.

## 8. Blind review mode

For high-value questions, prefer independent first pass:

- read Author Sources + current state + open gate;
- do **not** read prior AI rationales initially;
- produce independent analysis;
- only then inspect peer proposals and produce a delta.

Purpose: reduce anchoring bias and groupthink.

## 9. Artifact durability

Chat-only outputs, Claude Artifacts, temporary canvases or similar links are not durable project memory by themselves.

Before a substantive output becomes decision-relevant, either:

- capture it in Source Archive/review Markdown;
- place it in an isolated Notion mission/output page with provenance;
- or have the Integrator capture the essential high-fidelity source.

Preservation does not imply acceptance.

## 10. PR rule

A draft PR for external review is **optional, not default**.

Use one when a Git diff materially improves review. Label it clearly as external review/proposals and do not merge by initiative.

Do not open PRs simply to signal that an agent performed research.

## 11. Concurrency rule

Parallel agents may think and research simultaneously. They must not concurrently reconcile shared HOT/canonical surfaces.

Single-writer integration surfaces include:

- `PROJECT_STATE.md`;
- `HANDOFF.md`;
- `RETOMADA.md`;
- `START_HERE_FOR_AI.md`;
- Bible/promoted lore;
- canonical graph/timeline;
- Notion Resume Packet and canonical status fields.

If two agents touch the same semantic target, route to synthesis rather than last-write-wins.

## 12. Final invariant

> **External agents may multiply perspectives; they may not multiply sources of truth.**
