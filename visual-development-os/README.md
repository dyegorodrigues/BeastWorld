# BeastWorld Visual Development OS

> Status: experimental architecture branch. Nothing here changes BeastWorld canon or `main` until explicitly reviewed/merged.

## What this is

This is not lore. It is a **versioned visual-development operating system** for generating, evaluating, preserving and later rebuilding BeastWorld assets across AI image generators and 3D tools.

Working name: **BeastWorld Visual Development OS (BVDO)**.

The system is designed for:
- dragons and other creatures;
- ultra-realistic human characters;
- costumes, props and environments;
- consistent pose changes without accidental redesign;
- image-to-3D / sculpt / rig pipelines;
- provider-independent generation where possible.

## Core rule

A prompt is never the source of truth.

The source of truth is a **versioned asset specification + approved references + pose/structure controls + generation provenance + QA result**.

## Division of responsibility

### Notion — human-facing visual lab
- creative decisions;
- reference boards;
- current gate/status;
- research notes;
- visual review;
- easy continuation from a new conversation.

### GitHub — machine-facing source of truth
- schemas;
- JSON asset specifications;
- prompt templates;
- provider/workflow configurations;
- generation-run manifests;
- QA rules;
- scripts and future application code;
- change history via branches/PRs.

### Binary asset storage
Large images/videos/models should not be treated like normal source code. Keep their **manifest, IDs, hashes, roles and lineage** in GitHub. Store binaries in a suitable asset store (Notion attachments for review, Drive/object storage/Git LFS when appropriate).

## Production flow

```text
Research / references
        ↓
Asset Specification
        ↓
Topology / identity / pose controls
        ↓
Generation workflow
        ↓
Automated + visual QA
        ↓
Candidate
        ↓
Approved Master
        ↓
Cross-pose consistency tests
        ↓
Model sheet / multiview
        ↓
3D / retopo / sculpt / rig
        ↓
Scene generation / animation
```

## Current dragon state

The old idea of one attractive generic dragon base is deprecated.

Current system:
1. `Shared Dragon Chassis v2`
2. `Neutral Ground Support Anchor`
3. `Neutral Air Anchor`
4. `Cross-Pose Consistency Gate`
5. `Hero Base Adult Dragon Master`
6. morphology / identity variants such as Caraxes-like extremes or original BeastWorld species

Hard topology rule for this dragon family:
- exactly four limbs total;
- two wing-forelimbs;
- two hind limbs;
- no independent front legs;
- wing-forelimbs must remain mechanically plausible in flight and terrestrial support.

## What "consistency" means

Every approved asset receives a stable `asset_id`. Every generated result records:
- parent asset/version;
- generator/provider;
- exact model/snapshot if available;
- prompt template version;
- input reference IDs;
- structure/pose controls;
- seed/workflow where supported;
- output hash;
- QA report;
- edit lineage.

This makes outputs auditable and reproducible when the underlying model permits it.

## Important limitation

No stochastic image generator can promise **absolute pixel-perfect consistency for every unseen pose**. The system's job is to reduce drift systematically and detect failures before they become Masters.

For production-level consistency, the long-term path is:
**approved 2D identity → canonical multiview → canonical 3D/rig → render structural guides (depth/normal/pose) → conditioned image generation/editing**.

That changes the problem from “please imagine the same creature again” to “render this same structure in a new pose and preserve its identity.”

## Current working branch

`codex/visual-development-os`

Do not merge to `main` until the architecture and first dragon cross-pose gate are reviewed.