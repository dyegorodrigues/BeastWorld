# BeastWorld World OS — Integration Architecture

**Status:** design / implementation foundation  
**Date:** 2026-08-24  
**Safety:** additive only; does not promote or rewrite lore.

## Goal

Add a visual web interface to the existing BeastWorld knowledge system without creating a second source of truth and without losing author wording, alternatives, rationale, provenance, or superseded material.

## Source-of-truth hierarchy

1. **Raw/source evidence is immutable:** author turns, external research, imported files, option sets and AI rationale are preserved before normalization.
2. **Notion is the operational knowledge layer:** capture, hypotheses, relational navigation, dashboards, Entity Atlas, Lore Registry, Edge Registry, Timeline and research queues.
3. **GitHub is the versioned editorial ledger:** adopted rules, schemas, canonical graph, promoted entities, ADRs, governance and durable source records.
4. **World OS Web is a projection and command surface:** it reads and writes through adapters; it never becomes an independent lore database.

## Non-negotiable lossless-write rule

No semantic edit may overwrite the only surviving representation of prior text.

Every substantive mutation must create a `ChangeEnvelope` containing at least:

- unique mutation ID;
- actor and timestamp;
- target Entity/Concept/Question ID;
- exact user-authored input as submitted;
- before snapshot or immutable pointer;
- normalized/proposed after representation;
- source Notion page/data-source IDs;
- GitHub path/ref when applicable;
- canon status before and after;
- dependency impact summary;
- synchronization result (`PENDING`, `SYNCED`, `DRIFT`, `FAILED`);
- error/retry evidence when a partial write occurs.

Normalization is derivative. The verbatim input is never replaced by the normalized form.

## Write classes

### Class A — private UI state
Examples: node position, open panels, filters, zoom, layout. These are not lore and must not generate Git commits.

### Class B — exploratory knowledge
Examples: notes, hypotheses, candidate entities, visual references. Save to Notion with provenance. GitHub mirroring is optional until promotion.

### Class C — promoted editorial knowledge
`WORKING-CANON` and `CANON`. A mutation is incomplete until the Git representation, Notion representation and sync metadata are reconciled or explicitly marked `DRIFT`.

### Class D — structural decision
Any causal, chronological, hereditary, geopolitical, species, core-magic, central-mystery, story-arc or structural visual change follows `CHANGE_PROTOCOL.md`, including dependency loading and ADR when required.

## Request flow

```text
Browser
  -> World OS API (secret-bearing backend)
      -> validate identity + mutation
      -> capture ChangeEnvelope/verbatim evidence
      -> read current Notion/Git state
      -> calculate intended patch + dependency impact
      -> write eligible Notion changes
      -> if promotion/structural: create Git branch/diff/PR, never silent overwrite
      -> verify post-write state
      -> update sync status
  <- return exact result + evidence
```

## Secrets

Notion and GitHub credentials never enter browser JavaScript, repository files, images, exported HTML or localStorage. They live only as encrypted deployment secrets in the backend environment.

## Free deployment target

Primary target: **Cloudflare Workers + Static Assets**, using React/Vite for the browser and a Worker for `/api/*`. A free `*.workers.dev` URL is sufficient; a custom domain is optional.

The app must remain deployable elsewhere. Provider-specific code is isolated behind adapters.

## Adapters

- `NotionAdapter`: Entity Atlas, Lore Registry, Edge Registry, Timeline, Source Library and change capture.
- `GitHubAdapter`: versioned files, branches, diffs, PRs, current remote state.
- `ProjectionBuilder`: produces a compact graph/atlas/timeline model for the browser.
- `MutationService`: lossless change workflow and idempotency.
- `DriftDetector`: compares promoted Notion/Git representations and refuses silent conflict resolution.

## UI modules

1. Home / Creator OS
2. Entity explorer
3. Living knowledge graph
4. Visual atlas / maps
5. Timeline
6. Writer's Room
7. Sources / provenance
8. Canon & research control
9. Drift / impact review
10. Search / command palette

## Initial implementation phases

### Phase 0 — preservation gate
Read-only projection first. Validate IDs, schemas, relations and remote anchors. No lore editing from the web UI.

### Phase 1 — safe exploratory edits
Allow Class B changes through lossless capture. Before/after and verbatim evidence mandatory.

### Phase 2 — promoted changes
Implement Git branch/PR generation, dependency/regression checks and explicit promotion workflow.

### Phase 3 — advanced visual surfaces
Infinite canvas, nested fantasy maps, genealogies, diplomatic graphs and temporal map layers.

## Deployment boundary

The repository may remain private. Do not use GitHub Pages for sensitive BeastWorld content because Pages sites are public even when their source repository is private. The deployed World OS must also enforce authentication before exposing private lore; a non-authenticated public prototype may contain only synthetic/demo data.

## Definition of done for a write wave

A wave is not called `SYNCED` or `AUDITED` merely because an API returned 200. Apply `INTEGRITY_GATES.md`, with explicit evidence for remote state, provenance, semantic coverage, GitHub↔Notion, HOT memory, human navigation and security.
