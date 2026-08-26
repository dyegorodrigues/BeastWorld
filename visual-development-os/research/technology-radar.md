# Technology Radar — Visual Development OS

Last reviewed: 2026-08-26

This file tracks technologies worth testing. Inclusion here does **not** mean adoption.

## Adopt as architectural concepts

### ComfyUI — workflow/orchestration candidate
Repository: https://github.com/Comfy-Org/ComfyUI

Why it matters:
- modular node-graph engine;
- workflows can be saved as JSON;
- API integration;
- reusable subgraphs/templates and simplified App Mode;
- supports image generation/editing, masks, ControlNets, adapters, LoRAs, depth/vision and 3D workflows;
- current ecosystem includes Flux, Qwen Image/Edit, Hunyuan Image, Flux Kontext and Hunyuan3D paths.

Decision: **strong candidate for the local/open workflow engine**, while the BeastWorld application remains provider-agnostic.

### Reference conditioning + structural conditioning
IP-Adapter: https://github.com/tencent-ailab/IP-Adapter
ControlNet: https://github.com/lllyasviel/ControlNet

Important pattern:
- image reference can carry appearance/identity;
- ControlNet/pose/depth can carry structure;
- these controls can be combined rather than asking a text prompt to do both jobs.

Decision: adopt the **separation of identity from pose/structure** as a core system principle, even when using other models/providers.

## Evaluate for human identity

### PuLID
Repository: https://github.com/ToTheBeginning/PuLID

Purpose: identity-preserving image customization, including FLUX implementations.

Potential BeastWorld use:
- consenting recurring human characters;
- separate facial identity from pose, costume, lighting and scene.

Caution: identity tools solve face consistency, not full-body/costume continuity by themselves.

### InstantID
Repository: https://github.com/instantX-research/InstantID

Potential role: alternate/tune-free human ID conditioning benchmark.

## Evaluate for 3D control assets

### TRELLIS
Repository: https://github.com/microsoft/TRELLIS

Capabilities relevant to us:
- image-conditioned 3D generation;
- output as meshes / 3D Gaussians / radiance fields;
- local editing and variants;
- multi-image conditioning exists;
- project itself recommends image-conditioned generation for better performance than text-only 3D.

Potential use: first-pass geometry from approved multiview references. Never assume generated topology is production-ready without inspection/retopo.

### Hunyuan3D 2.1
Repository: https://github.com/Tencent-Hunyuan/Hunyuan3D-2.1

Capabilities relevant to us:
- image-to-shape;
- PBR texture generation;
- full weights/training code;
- production-oriented asset generation pipeline.

Potential use: A/B test against TRELLIS for BeastWorld creature drafts and PBR starting points.

## Evaluate as image-provider adapter

### OpenAI GPT-Image family
Current API docs: https://developers.openai.com/api/docs/models

Architecture implications:
- programmatic image generation and editing are available;
- high-fidelity image inputs are supported by current image models;
- dated model snapshots can be recorded in run provenance when available.

Decision: build an OpenAI adapter only behind the common `VisualRequest` / `generation-run` format. Do not hard-wire the whole lab to one vendor.

## Community signal — use cautiously

Recent ComfyUI community discussions still report that strict same-character consistency across large pose changes is difficult if every image is regenerated from scratch. Common recommendations increasingly favor **editing a canonical reference into a new pose** and/or combining identity conditioning with pose control.

This is anecdotal evidence, but it aligns with our dragon failures and reinforces the architecture: **Master + structure control + targeted edit**, not prompt-only regeneration.

## Not selected as the source of truth

- one giant prose prompt;
- one static reference image pretending to define every pose;
- a single image generator provider;
- image files without provenance;
- a beautiful output that has not passed anatomy/identity gates.

## Research backlog

1. Benchmark edit-first workflows for the same creature across 6 canonical poses.
2. Benchmark open-model identity + pose stacks in ComfyUI.
3. Design Blender/3D control-render bridge (depth, normals, silhouettes, masks).
4. Test multi-view image-to-3D on a deliberately simple neutral chassis.
5. Define human-character identity/consent schema.
6. Define binary asset storage strategy (Notion review + object storage or Git LFS/DVC where useful).
7. Build automatic visual QA prototypes for topology, proportions and cross-pose drift.