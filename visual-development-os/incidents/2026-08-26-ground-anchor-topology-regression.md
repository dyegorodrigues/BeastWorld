# Incident — Ground Anchor Topology Regression

Date: 2026-08-26
Status: CLOSED AS DIAGNOSIS / OPEN AS CORRECTIVE GATE
Severity: BLOCKING

## Summary

The latest grounded-anchor generations regressed into an invalid six-limb interpretation: the image model separated a front support arm/hand from the wing structure instead of preserving the required wing-forelimb topology.

This failure invalidates the latest grounded candidates. They must never be used as parent references, Masters, topology anchors, or 3D seeds.

## Non-negotiable topology

This dragon family is a winged tetrapod with exactly four limbs total:

1. left wing-forelimb
2. right wing-forelimb
3. left hind limb
4. right hind limb

The wing IS the forelimb. There is no independent foreleg under, beside, behind, or in front of either wing.

## Failure observed

The grounded generation visually resolved the support pose as:

- independent arm/foreleg touching the floor;
- plus a separate wing structure on the same side;
- asymmetric/twisted front limb architecture;
- unreliable continuity between ground and air poses.

This is a hard topology failure, not a cosmetic defect.

## Root-cause hypothesis

The generation prompt overloaded one stochastic pass with too many simultaneous objectives:

- preserve topology;
- solve terrestrial support;
- create adult mass;
- emulate cinematic family language;
- expand wings;
- preserve identity;
- produce polished sculpt detail.

The model collapsed toward a common fantasy prior: quadruped torso plus independent dorsal wings.

Repeated editing of an already contaminated candidate reinforced the wrong topology instead of repairing it.

## Corrective decision

Do NOT continue editing any failed grounded candidate.

Reset the image-generation sequence to structural proofs before aesthetic development.

### New mandatory gate order

1. `Topology Proof Anchor v2`
2. `Ground Kinematic Proof v1`
3. `Air Kinematic Proof v1`
4. `Cross-Pose Skeleton Consistency Gate`
5. `Adult Mass Blockout`
6. `Hero Base Adult Dragon Master`
7. surface / scales / identity / color

## Topology Proof Anchor v2 requirements

The next structural proof should intentionally minimize visual complexity:

- monochrome anatomical/blockout presentation;
- one individual only;
- low ornamentation;
- no dramatic lighting or environment;
- no named-dragon identity;
- exact four-limb inventory readable at a glance;
- left/right shoulder-to-wing chains visible;
- pelvis and both hind-limb insertions visible;
- no membrane or pose ambiguity that can be mistaken for another limb.

Do not optimize beauty at this stage.

## Ground Kinematic Proof requirements

Only after topology proof passes:

- same chassis/spec;
- both wing-forelimbs fold as a single continuous chain;
- if the front of the body touches the ground, contact must come from the wing-hand/wrist chain itself;
- zero independent front feet;
- thorax -> lumbar/abdomen -> pelvis remains readable;
- hind legs attach to pelvis;
- do not add surface identity.

## Hard rejection checks

Reject immediately if any of these are observed:

- more than four limbs;
- any independent foreleg in addition to a wing;
- wing root not continuous with shoulder/upper arm;
- hind limb appears attached to ribcage;
- pelvis is missing or visually collapsed into thorax;
- left/right wing chains use incompatible anatomy;
- pose changes redesign body proportions;
- a failed candidate is reused as the next parent image.

## Prompting/process correction

For iterative editing, change one structural variable at a time. Preserve everything else explicitly. Do not ask the image model to solve topology, identity, mass, style and pose in one pass.

The image generator is not the source of truth. The machine-readable chassis spec and QA gates are.

## Source-of-truth consequence

Until `Cross-Pose Skeleton Consistency Gate` passes, there is NO approved Neutral Ground Anchor, Neutral Air Anchor, or Hero Base Master.

All attractive prior generations remain evidence/experiments only.