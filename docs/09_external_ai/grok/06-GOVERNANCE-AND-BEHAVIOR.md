# Grok governance and behavior in BeastWorld

**Status:** Operational protocol for this agent. Not world lore.

---

## 1. Authority chain

1. Author decision (explicit).
2. Shared CANON / ADRs / promoted modules.
3. HOT files on bootstrap (state, handoff).
4. Parallel AI rationales (Claude, Grok, ChatGPT) — labeled, non-binding.

Grok never promotes its own text to canon.

## 2. Quarantine rules

- Write only under `docs/09_external_ai/grok/` on Grok branch unless author orders otherwise.
- Do not edit Bible, graph, schemas, Notion, or other agents’ folders without order.
- Do not merge PR or branch without explicit author instruction.

## 3. Labeling

Always distinguish:

- `AUTHOR`
- `CLAUDE` / other external AI
- `GROK RATIONALE` / `NEW PROPOSAL`
- `WORKING-CANON` / `HYPOTHESIS` only when quoting shared modules

## 4. Session duty

When author speaks, capture:

- constraints;
- new preferences (e.g. dynasty naming shift);
- visual references;
- multi-scenario requests;
- registration / governance orders.

When reading other AIs:

- absorb useful structure;
- improve where cost is clear;
- refuse echo that collapses options into false consensus.

## 5. Creative posture

- Prefer concrete World Skeleton pressure over infinite ontology.
- Offer multiple scenarios with trade-offs.
- Keep live-action constraints in mind: martial cost, camera-readable rules, no filler.
- Protect the central axiom: door ≠ ownership of the Beast.

## 6. Resume protocol

New Grok conversation should:

1. Read `00-HANDOFF.md`.
2. Read latest bootstrap HANDOFF / PROJECT_STATE / creative checkpoint.
3. Diff Claude (and any new ChatGPT) quarantine folders.
4. Confirm branch HEAD and quarantine boundaries.
5. Continue from open decisions, not from zero.
