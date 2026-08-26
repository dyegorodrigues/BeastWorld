# Architecture — BeastWorld Visual Development OS

## 1. Knowledge layer

**Notion** is the visual/creative control room. It answers:
- What are we building?
- What was approved/rejected and why?
- Which references matter?
- What is the next gate?

**GitHub** is the machine-readable source of truth. It answers:
- Which spec version is canonical?
- Which exact workflow/prompt/config produced an output?
- Which schema must an agent obey?
- What changed between versions?

The two layers should link to each other, but they must not silently overwrite one another.

## 2. Asset identity model

Every recurring entity gets a stable namespace:

```text
asset_id: beastworld:<type>:<slug>
version: semver-like revision
status: study | candidate | approved | master | rejected
```

Examples:

```text
beastworld:dragon:neutral-shared-chassis
beastworld:creature:ash-wolf
beastworld:character:protagonist-dragon-house
```

An asset specification separates:
- topology;
- proportions;
- identity morphology;
- material/surface;
- costume/ornament;
- pose;
- cinematography;
- negative constraints.

This prevents pose requests from becoming redesign requests.

## 3. Reference-role system

References are never dumped into a generator without role labels.

Each reference has one or more explicit roles:
- `topology`
- `proportion`
- `identity`
- `face_identity`
- `wing_mechanics`
- `musculature`
- `ground_pose`
- `air_pose`
- `surface`
- `costume`
- `lighting`
- `anti_reference`

The prompt/compiler is allowed to use only the attributes authorized by the reference role.

## 4. Generation provider abstraction

The application should expose one internal request format and translate it to provider-specific workflows.

```text
VisualRequest
 ├─ asset_spec
 ├─ target_pose
 ├─ reference_roles
 ├─ constraints
 ├─ provider_policy
 └─ output_requirements
```

Potential adapters:

### OpenAI Images
Use current image-generation/edit endpoints when programmatic access is desired. Favor edits of an approved Master over fresh regeneration when identity preservation is the goal.

### ComfyUI
Primary open/modular workflow engine candidate. Its workflows are graphs that can be saved as JSON and driven through API endpoints. It can combine open models, reference conditioning, ControlNet, masks, depth, LoRAs, adapters, image editing and 3D nodes.

### Other providers
Add adapters only when an API or controlled ingestion path exists. A provider without a stable programmable interface can still be used manually, but its results enter through the same `generation-run` manifest and QA gates.

## 5. Consistency stack

No single technique is enough. Use layers of control:

1. **Canonical asset spec** — textual/machine constraints.
2. **Approved Master images** — identity reference.
3. **Structure controls** — pose skeleton, depth, normals, masks or 3D renders.
4. **Image conditioning** — reference adapters / image editing.
5. **Identity specialization** — LoRA/ID adapter when justified.
6. **Local correction** — inpainting/editing instead of full regeneration.
7. **Cross-pose QA** — compare anatomy and identity against the Master.

For humans, face-identity techniques (for example identity adapters) are a separate module from body pose and wardrobe.

For creatures, a canonical 3D rig eventually becomes the strongest structure-control source.

## 6. QA engine

Each asset type owns blocking gates.

### Dragon example
- exact limb topology;
- wing/shoulder chain;
- axial proportions;
- pelvis/hind-limb insertion;
- tail-base continuity;
- ground support mechanics;
- air mechanics;
- cross-pose identity consistency;
- surface/ornament drift;
- cinematic realism.

A failed blocking gate cannot be compensated by a beautiful texture.

Future automated checks may include:
- landmark/segmentation comparison;
- silhouette ratios;
- perceptual similarity embeddings;
- face-ID similarity for consenting human references;
- image-text constraint verification through a vision model.

Human review remains the final promotion gate for Masters.

## 7. Provenance / lineage

Every run records:

```text
run_id
asset_id + asset_version
parent_output_id
provider
model + snapshot/version
workflow_id + workflow_version
prompt_template_version
reference asset IDs + hashes
pose/depth/normal controls
seed (when meaningful)
output hashes
QA result
review decision
```

An edit creates a child output; it never silently replaces the parent.

## 8. 3D bridge

Long-term high-consistency route:

```text
Approved Master
→ multiview / turntable specification
→ image-conditioned 3D draft
→ retopology / sculpt
→ canonical rig
→ pose library
→ depth / normals / masks / silhouette renders
→ conditioned image generation
```

The 3D model is not required to be the final photoreal render. It can be a **control skeleton and geometry truth** that prevents image models from inventing anatomy in every pose.

## 9. UI concept

The eventual app should hide technical complexity behind a simple flow:

```text
Choose Asset
→ Choose Pose / Scene
→ Choose Approved Look
→ Generate Candidates
→ Automatic QA
→ Compare
→ Approve / Correct
```

Advanced users can open the underlying reference roles, workflow graph, model settings and QA diagnostics.

## 10. Governance

- `main` remains protected conceptually; experimental work happens in branches.
- External franchise references are benchmark/research material, not BeastWorld canon.
- Every promotion to `master` should be explicit.
- Large binaries should be referenced by manifest/hash rather than duplicated blindly throughout Git history.
- Real-person likeness assets should carry consent/usage metadata before production use.