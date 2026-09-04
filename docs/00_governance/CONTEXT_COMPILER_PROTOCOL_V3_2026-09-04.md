# BeastWorld — Context Compiler & Creative Execution Protocol v3

**Data:** 2026-09-04  
**Status:** `WORKING-GOVERNANCE / ACTIVE PROCESS / NON-LORE`  
**Supersedes in execution:** the practice of feeding a creator the accumulating V5 history. It preserves Context OS v2 as provenance architecture and adds an enforceable creative runtime.

## 1. Verdict

The BeastWorld does not need one ever-growing prompt. It needs a **compiled context per task**.

> Archive everything. Retrieve narrowly. Compile deliberately. Create in a clean room. Verify against external state. Commit only the semantic delta.

The objective is not to promise that a language model never errs. The objective is to make errors bounded, detectable, reversible and unable to poison the next creative cycle.

## 2. Why v2 was insufficient

Context OS v2 correctly separated COLD/WARM/HOT, but execution still allowed:

- active entry files to accumulate historical pass summaries;
- governance, rejected drafts, research and creative instructions to coexist in the same generation context;
- a scene writer to see every old mechanism and try to satisfy all of them;
- local self-revision to continue after the scene vehicle had already failed;
- a summary to route correctly while the live chat still carried contaminated attempts.

The failure was not absence of memory. It was failure to separate **memory storage** from **creative working memory**.

## 3. Four isolated execution roles

These are process roles. One AI may execute them sequentially, but their context packets must remain separate.

### A. Archivist

May load raw conversation and source history. Produces immutable source record and atomic delta. Does not write scene prose or decide canon.

### B. Integrator

Loads current HOT state, delta and directly affected models. Resolves provenance/status conflicts and writes the active manifest. Does not patch rejected creative vehicles.

### C. Creator

Receives only the compiled creative packet: one objective, current story state, relevant characters, local world rules, hard exclusions and desired output. It does not receive raw chats, rejected attempts, full governance or unrelated research.

### D. Validator

Receives the proposed output plus authoritative constraints and tests it independently for continuity, competence, causal clarity, status leakage, genericity and prose quality. It must be able to reject the vehicle instead of rewriting it.

## 4. Active Context Manifest

Every substantive task starts from `docs/00_governance/ACTIVE_CONTEXT_MANIFEST.json`. It declares:

- one task and one output type;
- one primary story/worldbuilding axis;
- exact included files;
- exact excluded clusters;
- current authorial locks;
- hypotheses allowed for testing;
- unknowns that must remain unknown;
- token budget;
- stop/reset conditions;
- promotion status.

If a file is not included, it is not loaded merely because it exists.

## 5. Context budgets

Targets are operational guardrails, not claims about model limits.

| Packet | Target | Hard stop |
|---|---:|---:|
| HOT router + manifest | 3,000 tokens | 5,000 |
| active WARM cluster | 8,000 tokens | 15,000 |
| COLD excerpts for a disputed fact | 4,000 tokens | 8,000 |
| creator packet total | 12,000 tokens | 20,000 |
| validator packet | draft + 6,000 tokens of checks | 12,000 checks |

When a packet crosses its hard stop, the Integrator must compact by semantic priority or split the task. It must not silently increase context because the model technically accepts more tokens.

## 6. Creative packet schema

For book architecture:

1. audience promise and genre experience;
2. protagonist desire, contradiction and irreversible risk;
3. primary conflict axis;
4. opening state and target ending state;
5. only the institutions/rules that directly cause choices;
6. known exclusions and unresolved forks;
7. requested deliverable.

For a scene:

1. exact position in book/sequence;
2. POV and current knowledge;
3. immediate desire and resistance;
4. participant competence floor;
5. physical location and relevant affordances;
6. relationship state before the scene;
7. one primary dramatic burden and at most one secondary revelation;
8. causal spine of five or fewer visible actions;
9. state change;
10. prose/style profile.

The full world bible is never a scene prompt.

## 7. Reset triggers

A new clean conversation/context is mandatory when any one occurs:

- primary domain changes;
- two structural failures hit the same creative vehicle;
- three local patch rounds accumulate without a new causal spine;
- rejected prose occupies more attention than the current brief;
- COLD material exceeds roughly one third of the working packet;
- an authority/status conflict is discovered;
- the creator packet exceeds its hard stop;
- the active objective cannot be stated in one sentence.

Opening a new chat is not loss of continuity. The repository manifest is the continuity boundary.

## 8. Verification must be external to generation

Self-revision is insufficient. Validate with explicit conditions:

### Provenance

- Which claims are AUTHOR SOURCE, INFERENCE, PROPOSAL, OPEN and CANON?
- Did any repeated hypothesis become fact by wording?

### Narrative

- Does the event exist because a character wants something?
- Was anyone made incompetent so another character could shine?
- Is the threat proportionate and physically visible?
- Does the output change story state?

### Continuity

- Do timeline, relationships, injuries, knowledge and institutional authority match the state before the output?
- Are old rejected vehicles absent?

### Quality

- Could the output belong to another generic fantasy if names were removed?
- Does dialogue sound like adult people rather than thesis delivery?
- Is action readable without abstract rescue verbs?

Failure returns to architecture, not automatic patching.

## 9. Long-form book workflow

The book is compiled hierarchically:

```text
Series state
  → Book packet
    → Sequence packet
      → Scene packet
        → Draft
          → Continuity delta
```

After each accepted scene, update only:

- story state;
- character/relationship state;
- revealed information;
- injuries/resources/locations;
- promises planted or paid off;
- new contradiction or open question.

The next scene receives that delta, not the entire preceding manuscript plus the whole repository.

## 10. ChatGPT / GitHub / Notion responsibilities

- ChatGPT Work conversation: live co-creation and exact visible interaction.
- GitHub: versioned source, models, manifests, validators and authoritative operational state.
- Notion: human navigation, relational views, dashboards and readable labs.
- Raw archives: provenance only; never automatic creative input.
- Graph/index: retrieval routing; never a permission to load every neighbor.

## 11. Current implementation

The first v3 manifest selects only:

- Pass 50D safeguards;
- the new author delta on dynastic state/Director;
- the Book 1 dynastic-legitimacy pass;
- directly relevant protagonist/story records.

It explicitly excludes Passes 50A–50C, the rejected Academy rescue, unrelated Core Engine details and full historical dossiers.

## 12. Research basis

- OpenAI, memory and compaction: https://developers.openai.com/cookbook/examples/agents_sdk/building_reliable_agents_memory_compaction
- OpenAI, short-term sessions and context trimming: https://developers.openai.com/cookbook/examples/agents_sdk/session_memory
- OpenAI, durable project memory for long-horizon Codex work: https://developers.openai.com/blog/run-long-horizon-tasks-with-codex
- Anthropic, effective context engineering: https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents
- Anthropic, compaction versus clean reset: https://www.anthropic.com/engineering/harness-design-long-running-apps
- Liu et al., long-context position sensitivity: https://aclanthology.org/2024.tacl-1.9/
- Huang et al., limits of intrinsic self-correction: https://arxiv.org/abs/2310.01798
- Wu et al., key-condition verification: https://aclanthology.org/2024.emnlp-main.714/

**PROMOTED LORE:** none.
