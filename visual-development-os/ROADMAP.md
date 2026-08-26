# Roadmap — BeastWorld Visual Development OS

## Phase 0 — Memory and source of truth
Status: **in progress**

- Notion visual lab established.
- GitHub architecture branch established.
- shared dragon chassis spec versioned.
- generation-run provenance schema established.
- technology radar started.

Exit criterion: a new agent/conversation can reconstruct the current visual-development state from Notion + GitHub without relying on chat memory.

## Phase 1 — Dragon consistency proof

Goal: prove that one neutral dragon chassis can survive pose changes without redesign.

1. Neutral Ground Support Anchor.
2. Neutral Air Anchor from the same chassis.
3. Canonical pose set: ground neutral, crouched support, takeoff, glide, bank, landing.
4. Cross-Pose Consistency QA.
5. Promote only after topology + proportions + identity remain stable.

Deliverable: `Hero Base Adult Dragon Master` + pose-control pack.

## Phase 2 — Dragon identity system

- morphology genome schema;
- original BeastWorld dragon templates;
- extreme-variant tests;
- Master Image lineage;
- character/creature reference-role compiler.

Deliverable: create a new original dragon by filling structured parameters rather than rewriting ad hoc prompts.

## Phase 3 — 3D control bridge

- canonical multiview;
- A/B image-to-3D draft generation;
- retopo/sculpt guidelines;
- canonical skeleton/rig;
- render depth, normals, masks, silhouette and pose guides;
- send those guides back into image-generation/edit workflows.

Deliverable: pose changes driven by geometry truth instead of model imagination.

## Phase 4 — Human Character Lab

- human asset schema;
- face identity module;
- body proportion module;
- hair, wardrobe and accessory lock;
- expression/pose separation;
- consent/likeness metadata for real-person references;
- multi-character scene isolation tests.

Deliverable: recurring ultra-realistic humans that can enter new scenes without silent redesign.

## Phase 5 — Visual Development Application

A simple interface on top of the system:

```text
Asset Library
→ Select Character / Creature
→ Select Pose or 3D Pose
→ Select Scene
→ Generate
→ Automatic QA
→ Candidate Comparison
→ Local Fix
→ Approve Master / Shot
```

The UI should hide model-specific jargon by default. Advanced controls expose provider, model, seed, workflow graph and conditioning.

## Phase 6 — Production / cinematic pipeline

- shot registry;
- storyboard-to-shot manifests;
- consistent locations/costumes;
- image-to-video tests;
- compositing / VFX / sound pipeline;
- export packages for YouTube visual storytelling;
- future handoff to professional live-action/VFX production.

## Non-goal

The system will not promise perfect outputs from one click. Its job is to make generation **controlled, repeatable, inspectable and progressively correctable**.