# BeastWorld World OS Web

Phase 0 safety scaffold: visual, deployable and intentionally **read-only**.

## Safety default

`WORLD_OS_PRIVATE_DATA_ENABLED=false` ships by default. The deployed app shows only synthetic demo nodes. Do not enable private data until the Worker is protected by Cloudflare Access **and** JWT validation is configured.

## What Phase 0 reads

The live projection uses the existing Notion sources rather than inventing a new database:

- Entity Atlas;
- Lore Registry;
- Relation Edge Registry.

The browser receives a compact projection of nodes and typed relations. It does not receive `Author-Only Truth` fields or a general-purpose Notion proxy.

## Development

```bash
npm install
npm run dev
npm run check
```

## Deployment

Target: Cloudflare Workers + Static Assets. The app can use the free `*.workers.dev` URL. Configure the project root as `apps/world-os` when connecting the Git repository.

## Secrets and private variables

Never commit tokens. Add the Notion token as a Worker secret:

```bash
npx wrangler secret put NOTION_TOKEN
```

After creating the Cloudflare Access application, configure these deployment variables in Cloudflare (do not hard-code account-specific values in the repository):

- `TEAM_DOMAIN`, e.g. `https://your-team.cloudflareaccess.com`;
- `POLICY_AUD`, the Access Application Audience tag.

The Worker validates the `Cf-Access-Jwt-Assertion` signature, issuer and audience using Cloudflare's rotating JWKS before returning private lore.

The Notion data-source IDs in `wrangler.jsonc` are non-secret metadata. Only after Access + JWT validation + `NOTION_TOKEN` are working should `WORLD_OS_PRIVATE_DATA_ENABLED=true` be set.

## Phase 0 contract

- read-only projection of Entity Atlas + Lore Registry + Relation Edge Registry;
- typed relations are rendered only when their source and target resolve to real registry nodes;
- no `Author-Only Truth` field is returned;
- no Notion writes;
- no GitHub writes;
- no mutation endpoint exists;
- Notion reads use bounded retries, `Retry-After`, exponential backoff and jitter;
- private mode fails closed when Access validation is missing or invalid;
- demo mode contains only synthetic data.

Editing is intentionally deferred until the lossless `ChangeEnvelope` workflow, idempotency, durable retry/reconciliation, drift detection and post-write verification are implemented and audited.

## Activation sequence

1. deploy in demo mode;
2. protect the Worker with Cloudflare Access;
3. configure `TEAM_DOMAIN` and `POLICY_AUD`;
4. create a dedicated Notion integration and share only the required BeastWorld sources;
5. store `NOTION_TOKEN` as an encrypted Worker secret;
6. verify `/api/health`;
7. enable private data;
8. audit the node/edge counts and sample records against Notion;
9. only then begin Phase 1 exploratory editing.
