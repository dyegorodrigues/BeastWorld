# BeastWorld World OS Web

Phase 0 safety scaffold: visual, deployable and intentionally **read-only**.

## Safety default

`WORLD_OS_PRIVATE_DATA_ENABLED=false` ships by default. The deployed app shows only synthetic demo nodes. Do not enable private data until the Worker is protected by Cloudflare Access.

## Development

```bash
npm install
npm run dev
npm run check
```

## Deployment

Target: Cloudflare Workers + Static Assets. The app can use the free `*.workers.dev` URL. Configure the project root as `apps/world-os` when connecting the Git repository.

## Secrets

Never commit tokens. Add the Notion token as a Worker secret:

```bash
npx wrangler secret put NOTION_TOKEN
```

The configured Entity Atlas data source ID is non-secret metadata. After Cloudflare Access protects the Worker, set `WORLD_OS_PRIVATE_DATA_ENABLED=true` in the deployment environment and redeploy.

## Phase 0 contract

- reads Entity Atlas only;
- does not return `Author-Only Truth`;
- no Notion writes;
- no GitHub writes;
- no mutation endpoint exists;
- private mode fails closed when a Cloudflare Access JWT assertion is absent;
- demo mode contains only synthetic data.

Editing is intentionally deferred until the lossless `ChangeEnvelope` workflow, idempotency, retry queue, drift detection and post-write verification are implemented and audited.

## Future activation sequence

1. deploy in demo mode;
2. protect Worker with Cloudflare Access;
3. create a dedicated Notion integration and share only the required BeastWorld sources;
4. store `NOTION_TOKEN` as an encrypted Worker secret;
5. verify `/api/health`;
6. enable private data;
7. audit read projection against Notion;
8. only then implement Phase 1 exploratory editing.
