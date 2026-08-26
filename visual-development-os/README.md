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

## Current dragon state — STRUCTURAL RESET 2026-08-26

The latest grounded generations are **rejected**. The image model regressed into an invalid topology by separating independent front support limbs from the wings. Those outputs must not be reused as parents, topology references, Masters or 3D seeds.

Current mandatory sequence:
1. `Topology Proof Anchor v2`
2. `Ground Kinematic Proof v1`
3. `Air Kinematic Proof v1`
4. `Cross-Pose Skeleton Consistency Gate`
5. `Adult Mass Blockout`
6. `Hero Base Adult Dragon Master`
7. morphology / identity variants
8. model sheet / 3D / rig

Hard topology rule for this dragon family:
- exactly four limbs total;
- two wing-forelimbs;
- two hind limbs;
- no independent front legs;
- a grounded front contact must come from the same wing-forelimb chain;
- wing-forelimbs must remain mechanically plausible in flight and terrestrial support.

Read before resuming generation:
- `RESUME_NEXT_SESSION.md`
- `incidents/2026-08-26-ground-anchor-topology-regression.md`
- `specs/shared-dragon-chassis.v2.json`

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

Draft PR: `#6 — Visual Development OS — architecture bootstrap`

Do not merge to `main` until the architecture and first dragon structural/cross-pose gates are reviewed.