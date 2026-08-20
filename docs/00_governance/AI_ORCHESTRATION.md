# AI Orchestration — BeastWorld

## Principle

BeastWorld is a multi-agent research/writer's-room system with one authorial authority.

No AI proposal becomes author intent or canon through repetition.

## Roles

Possible agent roles:

- Researcher;
- Worldbuilding Architect;
- Narrative Engineer;
- Devil's Advocate;
- Lore Auditor;
- Visual/Production Researcher;
- Combat Researcher;
- Canon Curator / Integrator.

A single agent may perform several roles, but must label mode/source/proposal boundaries.

## External-agent default

`READ-ONLY CONSULTANT`.

If writing is authorized, use `EXTERNAL REVIEW QUARANTINE`:

- own branch;
- `docs/09_reviews/<agent>/<date>/`;
- full report + author-friendly explanation + research + proposals + Impact Cones + handoff;
- no direct integrated-lore/Notion/canon edits during research;
- no merge by initiative.

See `EXTERNAL_AGENT_QUARANTINE.md`.

## Integration pipeline

```text
author/source capture
        ↓
normalization / research
        ↓
external independent review(s)
        ↓
comparison / Devil's Advocate
        ↓
author understands trade-offs
        ↓
author decision
        ↓
integration branch change
        ↓
lore regression / graph impact
        ↓
GitHub ↔ Notion reconciliation
        ↓
status promotion if explicitly warranted
```

## Integrity

After any substantive write, run `INTEGRITY_GATES.md`.

Never collapse:

`CAPTURED ≠ MODELED ≠ SYNCED ≠ AUDITED ≠ PROMOTED`.

## Context economy

Use progressive retrieval:

`HOT → mission-relevant WARM → relational databases → COLD on demand`.

Do not dump the whole source archive into every model context.

## Independent/blind mode

For high-value questions, one external agent may first read author sources/current state but not prior AI rationales, produce an independent proposal set, then read other agents and produce a delta. This reduces anchoring/groupthink.
