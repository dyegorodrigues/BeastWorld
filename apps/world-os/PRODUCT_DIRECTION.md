# BeastWorld World OS — Product Direction

Date: 2026-08-24
Scope: application/product layer only. This document does not modify or reinterpret BeastWorld lore.

## Non-negotiable preservation invariant

The Web is a projection and command surface over the existing Worldbuilding OS. It is never a second source of lore truth.

- No UX refactor may delete, overwrite, compact, summarize-away, or silently replace source records, encyclopedia prose, historical decisions, superseded hypotheses, Git history, or provenance.
- Phase 0 remains read-only.
- Synthetic demo records must use `DEMO-*` identifiers and must never be promoted into real registries.
- Private Notion projection remains disabled until Cloudflare Access and edge read audits are complete.
- Future mutation surfaces remain blocked until ChangeEnvelope, idempotency, reconciliation, drift detection, and regression gates are implemented and audited.

## Current market benchmark

### World Anvil
Strongest ideas to learn from:
- interactive maps;
- timelines and custom calendars;
- Chronicles combining map + time;
- family trees and diplomacy webs;
- whiteboards and broad wiki tooling;
- global content search across content types.

Opportunity for BeastWorld:
- reduce feature fragmentation;
- make causal graph, provenance, author-only truth, and narrative planning first-class rather than separate utilities.

### Campfire
Strongest ideas to learn from:
- modular worldbuilding surfaces;
- highly configurable panels;
- relationship webs;
- timeline/story-arc connection;
- interactive maps with linked story elements;
- manuscript-side contextual reference.

Opportunity for BeastWorld:
- one shared world model instead of a module-first mental model;
- native canon/drift controls and typed causal edges;
- better tablet workspace density and navigation.

### LegendKeeper
Strongest ideas to learn from:
- fast wiki creation;
- private-by-default projects;
- deep map/wiki integration;
- whiteboards connected to pages;
- full-text search;
- low-friction, visually coherent workspace.

Opportunity for BeastWorld:
- richer editorial governance;
- explicit story/reveal planning;
- dependency and regression intelligence over a living knowledge graph.

## BeastWorld product thesis

**One world model, many lenses.**

The same underlying entities, lore records, events, relations, sources, decisions, and story structures should be explorable through specialized lenses without duplication:

1. **Creator Home** — world pulse, blockers, integrity, shortcuts.
2. **Living Knowledge Graph** — typed relations, causality, dependency and impact.
3. **Atlas** — visual cards for characters, beasts, factions, places, institutions and concepts.
4. **Chronology Engine** — events, eras, parallel perspectives, consequence chains; later map+time fusion.
5. **Writer's Room** — setups, friction, reveals, payoffs, arcs, chapters and scenes without silent canon promotion.
6. **Canon & Drift Control** — provenance, truth layer, spoiler layer, sync state, impact and regression gates.
7. **Future Map Studio** — world/region/location layers with entity pins, routes and historical overlays.
8. **Future Boards** — freeform visual reasoning using cards backed by real records, never copied lore.

## Interaction principles

- Tablet-first, touch-friendly hit targets and responsive density.
- Search from anywhere; opening a result should not destroy current context.
- Inspector stays contextual while the main lens changes.
- All relation types should be understandable in both directions.
- Author-only data must be impossible to leak through public projection.
- Read-only and demo state must be visually unmistakable.
- Rich visuals should clarify structure, not decorate it.
- No mandatory forms for casual exploration; progressive disclosure for deep metadata.

## V2 implementation slice

Implemented first:
- premium application shell;
- global search;
- six working navigation lenses;
- richer synthetic demo projection;
- graph exploration;
- atlas cards;
- synthetic chronology;
- setup/friction/payoff Writer's Room;
- contextual inspector;
- integrity/canon guardrail dashboard;
- tablet/mobile adaptations.

Next slices:
- custom graph nodes, neighborhood isolation and relation-type filters;
- map studio proof-of-concept with synthetic geography;
- richer timeline zoom/scales and causal jumps;
- command palette and saved lenses;
- visual boards proof-of-concept;
- read-only private Notion projection after Access;
- only much later, audited write workflows.
