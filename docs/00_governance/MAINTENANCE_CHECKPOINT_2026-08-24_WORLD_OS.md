# Maintenance Checkpoint — World OS Web — 2026-08-24

**Scope:** infrastructure only. No lore proposition was promoted, rewritten, deleted, or semantically normalized by this wave.

## Why this checkpoint exists

A visual World OS is being added without creating a second source of truth. The implementation is isolated in `feat/world-os-safe-web`, derived from the real Worldbuilding OS foundation rather than the empty `main` baseline.

## Preservation decisions

- Source wording remains immutable evidence.
- Semantic writes are forbidden until the lossless `ChangeEnvelope` flow is implemented and audited.
- Phase 0 is read-only.
- The browser is a projection/command surface, never a new lore store.
- No fabricated relationship may be rendered as if it were sourced; live edges must resolve through the Relation Edge Registry.
- `Author-Only Truth` is not exposed by the Phase 0 projection endpoint.

## Current web architecture

Path: `apps/world-os/`

- React + Vite UI;
- React Flow graph renderer;
- Cloudflare Worker backend;
- Cloudflare Static Assets deployment target;
- demo-only fail-safe by default;
- live projection from Entity Atlas + Lore Registry + Relation Edge Registry;
- bounded Notion retries with `Retry-After`, exponential backoff and jitter;
- Cloudflare Access JWT verification (signature + issuer + audience) required before private data;
- tokens remain deployment secrets, never repository/browser data.

## Deployment gate

`WORLD_OS_PRIVATE_DATA_ENABLED=false` is the committed default. Private mode must not be enabled until all are true:

1. Cloudflare Access protects the Worker;
2. `TEAM_DOMAIN` and `POLICY_AUD` are configured;
3. `NOTION_TOKEN` is stored as a Worker secret;
4. `/api/health` reports Access + Notion configuration;
5. the live graph is compared against Notion node/edge samples.

## Editing gate

No web editing is allowed until:

- `ChangeEnvelope` capture is implemented before mutation;
- idempotency keys exist;
- before-state snapshot/pointer exists;
- retry/reconciliation is durable;
- partial failures surface as `FAILED`/`DRIFT` rather than being hidden;
- structural edits route through `CHANGE_PROTOCOL.md`;
- post-write checks satisfy `INTEGRITY_GATES.md`.

## Branch hygiene

- PR #2 remains the draft Worldbuilding OS foundation.
- `feat/world-os-safe-web` is the correct visual integration branch.
- PR #4 is preserved only as a superseded visual spike and must not be merged.

## Verification limits in this wave

Repository structure, Notion schemas and source relationships were inspected through connected services. A local dependency install/build could not be completed in the current execution environment, so the web scaffold must not be called CI/build-verified yet. Deployment remains disabled until the Cloudflare account is connected and the build succeeds there or in CI.

## Resume rule

A future session working on the web layer should read this checkpoint, `WORLD_OS_INTEGRATION_ARCHITECTURE_2026-08-24.md`, `GITHUB_NOTION_SYNC.md`, `INTEGRITY_GATES.md`, and `CHANGE_PROTOCOL.md` before enabling any write path.
