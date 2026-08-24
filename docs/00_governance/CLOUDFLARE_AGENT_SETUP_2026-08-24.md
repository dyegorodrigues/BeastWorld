# Cloudflare Agent Setup — BeastWorld — 2026-08-24

**Scope:** infrastructure / deployment only. No lore content is changed by this checkpoint.

## Official setup path selected

Cloudflare Agent Setup was resolved to the OpenAI Codex workflow. The Cloudflare plugin is installed and provides Cloudflare Skills. Cloudflare's Codex guide states that the plugin also registers Cloudflare MCP servers; a fresh/restarted agent session is required for newly registered MCP servers to be loaded. The first Cloudflare account tool call should trigger OAuth authorization.

Primary platform pieces for this project:

- Cloudflare Skills — platform conventions and product guidance;
- Cloudflare Code Mode API MCP — authenticated account operations;
- Wrangler — local/CI validation and Worker deployment;
- Workers Builds / GitHub integration — optional automatic deploys and GitHub deployment status;
- Workers Observability — logs/traces after deployment.

## Current repository state

Correct integration PR: `#5 — feat: safe BeastWorld World OS web projection`

Correct branch: `feat/world-os-safe-web`

Base: `agent/worldbuilding-os-bootstrap`

App root: `apps/world-os`

Worker name: `beastworld-world-os`

Phase 0 remains read-only and demo-only by default.

## Cloudflare configuration decisions

`apps/world-os/wrangler.jsonc` is the Worker configuration source of truth.

Safety choices:

- `workers_dev: true` so the personal/hobby deployment gets a free `*.workers.dev` URL;
- `preview_urls: false` until Access protection is deliberately configured;
- `WORLD_OS_PRIVATE_DATA_ENABLED=false` remains committed;
- `ASSETS` is explicitly declared because the Worker calls `env.ASSETS.fetch()`;
- required deployment secrets are declared by name only: `NOTION_TOKEN`, `TEAM_DOMAIN`, `POLICY_AUD`;
- secret values must never be committed;
- observability logs are enabled at full sampling for the initial low-traffic phase;
- traces are enabled at 1% sampling;
- bindings are typed by `wrangler types`, not a handwritten `Env` interface.

## Pre-deploy verification completed

GitHub Actions `World OS Check` run `32780866450` (run #11) completed successfully on 2026-08-24.

Verified in that run:

- dependency installation;
- production-only vulnerability audit with `npm audit --omit=dev --audit-level=high`;
- `wrangler types` generated Cloudflare binding/secret types from `wrangler.jsonc`;
- strict TypeScript build;
- Vite production build;
- `wrangler deploy --dry-run`.

The production dependency audit passed. This branch is therefore ready for the first **demo-only** Cloudflare deployment. It is not yet a deployed service and private Notion projection has not yet been audited at the edge.

## Required account-side actions after MCP becomes available

1. OAuth the Cloudflare account when the MCP requests authorization.
2. Identify the target Cloudflare account and `workers.dev` account subdomain.
3. Create or deploy Worker `beastworld-world-os` from `apps/world-os`.
4. Keep private data disabled for the first deployment.
5. Test the public demo Worker and `/api/health`.
6. Create a Cloudflare Access application protecting the production `workers.dev` Worker URL.
7. Configure required secrets:
   - `NOTION_TOKEN`;
   - `TEAM_DOMAIN`;
   - `POLICY_AUD`.
8. Verify Access authentication and JWT validation.
9. Only then change `WORLD_OS_PRIVATE_DATA_ENABLED` to `true` in the deployment configuration.
10. Audit the live node/edge projection against Notion before enabling any write path.

## Optional Git integration

Workers Builds can connect the private GitHub repository and automatically build/deploy pushes. If enabled, configure the application root as `apps/world-os`. Keep PR #5 draft until the real deployment, Access gate and read-projection audit pass.

## Resume instruction for a fresh agent session

Read, in order:

1. `docs/00_governance/CLOUDFLARE_AGENT_SETUP_2026-08-24.md`
2. `docs/00_governance/MAINTENANCE_CHECKPOINT_2026-08-24_WORLD_OS.md`
3. `docs/00_governance/WORLD_OS_INTEGRATION_ARCHITECTURE_2026-08-24.md`
4. `docs/00_governance/GITHUB_NOTION_SYNC.md`
5. `docs/00_governance/INTEGRITY_GATES.md`
6. `apps/world-os/README.md`

Then re-anchor remote PR #5 and its current HEAD before any write or deployment action. Remote state wins over this checkpoint if it changed.

## Hard guardrail

A successful Cloudflare deployment does **not** authorize enabling lore edits. Phase 1 semantic writes remain blocked until the lossless `ChangeEnvelope`, idempotency, durable reconciliation, drift detection and post-write integrity gates are implemented and audited.
