# Maintenance Checkpoint — World OS Web — 2026-08-24

**Scope:** infrastructure and application product layer only. No lore proposition was promoted, rewritten, deleted, or semantically normalized by this wave.

## Why this checkpoint exists

A visual World OS is being added without creating a second source of truth. The implementation is isolated in `feat/world-os-safe-web`, derived from the real Worldbuilding OS foundation rather than the empty `main` baseline.

## Preservation decisions

- Source wording remains immutable evidence.
- Semantic writes are forbidden until the lossless `ChangeEnvelope` flow is implemented and audited.
- Phase 0 is read-only.
- The browser is a projection/command surface, never a new lore store.
- No fabricated relationship may be rendered as if it were sourced; live edges must resolve through the Relation Edge Registry.
- `Author-Only Truth` is not exposed by the Phase 0 projection endpoint.
- UX work may use `DEMO-*` synthetic records only while private projection is disabled.
- UX refactors must not delete Source Records, encyclopedia prose, decision history, superseded hypotheses, Git history, or provenance.

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

## Product slice now implemented

The original technical graph scaffold has been replaced by the first `World OS v2` product shell.

Implemented lenses:

1. Creator/World overview with world-pulse and integrity status;
2. Living Knowledge Graph with typed relations and contextual selection;
3. Entity & Lore Atlas with rich visual cards;
4. Chronology Engine proof-of-concept using synthetic event metadata;
5. Writer's Room proof-of-concept with setup / friction / payoff lanes;
6. Canon & Drift safety dashboard;
7. persistent contextual inspector showing metadata, relations and provenance;
8. global search and scope filtering;
9. tablet/mobile responsive navigation.

The richer demonstration world lives only in `apps/world-os/src/demoData.ts`. Every synthetic record is explicitly `DEMO-*` and none belongs to BeastWorld canon.

Product benchmark and roadmap are recorded separately in `apps/world-os/PRODUCT_DIRECTION.md` so market/product research does not contaminate lore documentation.

## Deployment gate

`WORLD_OS_PRIVATE_DATA_ENABLED=false` is the committed default. Private mode must not be enabled until all are true:

1. Cloudflare Access protects the permanent Worker;
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
- PR #5 must remain draft while permanent Cloudflare Access, private projection and read audits are incomplete.

## Verification status in this wave

GitHub Actions `World OS Check` run `32786423395` (run #23) completed successfully after:

- dependency installation;
- production dependency audit;
- Wrangler-generated environment types;
- strict TypeScript validation;
- Vite production build;
- `wrangler deploy --dry-run`.

A one-shot Cloudflare temporary preview was then produced from the v2 branch by `World OS Temporary Cloudflare Deploy` run `32786549053` (run #6). The runner verified over HTTPS:

- root application: PASS;
- `/api/health`: PASS;
- `/api/graph`: PASS;
- `privateDataEnabled=false`;
- `readOnly=true`;
- demo graph only;
- private lore disabled.

The automatic temporary-preview trigger was returned to `workflow_dispatch` only immediately after verification. No claim token is stored in Git.

This proves the v2 application builds and serves correctly on Cloudflare. It does **not** mean the permanent `fentanespcsc` Worker is configured, Cloudflare Access is active, or private Notion projection has been edge-audited.

## Resume rule

A future session working on the web layer should read, in order:

1. this checkpoint;
2. `apps/world-os/PRODUCT_DIRECTION.md`;
3. `WORLD_OS_INTEGRATION_ARCHITECTURE_2026-08-24.md`;
4. `GITHUB_NOTION_SYNC.md`;
5. `INTEGRITY_GATES.md`;
6. `CHANGE_PROTOCOL.md`.

Re-anchor PR #5 and the remote HEAD before any edit. Remote state wins over stale prompt or memory.
