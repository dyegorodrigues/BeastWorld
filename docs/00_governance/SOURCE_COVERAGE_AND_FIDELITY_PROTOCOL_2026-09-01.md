# BeastWorld — Source Coverage & Fidelity Protocol — 01/09/2026

**Status:** GOVERNANCE / ACTIVE PROCESS / NOT LORE

## Purpose
Prevent the author from having to repeatedly ask whether a long brainstorm, PDF, audio transcript, image set or source was fully captured. This protocol governs deep-review tasks from 01/09/2026 onward.

## Core rule
A source review is **not allowed to be called complete** until a coverage matrix exists.

## Required coverage matrix
For every substantive source, extract atomic items with stable IDs and track:

| Field | Meaning |
|---|---|
| `SOURCE-ID` | page/line/timestamp/image reference |
| `AUTHOR ITEM` | what the author actually said or showed |
| `TYPE` | assertion / preference / hypothesis / correction / rejection / question / visual cue |
| `INTERPRETATION` | model understanding, clearly separated from source wording |
| `RESPONSE COVERAGE` | explicit / implicit / omitted |
| `PROJECT STATUS` | STRONG DIRECTION / LAB / OPEN / REJECTED / PARKED / CANON where already established |
| `IMPACT` | engine / character / story / civilization / visual / governance |
| `ACTION` | preserve / model / stress-test / defer / reject / research |
| `TRACE TARGET` | file/page/gate where the item was incorporated |

## Completion gates
Before reporting “I reviewed everything”:
1. source is preserved or citable;
2. all pages/audio segments/images were inspected;
3. coverage matrix has no unexplained omissions;
4. explicit author corrections and rejections are separately flagged;
5. unresolved ambiguity is marked `UNKNOWN/UNRESOLVED`, never silently guessed;
6. response is cross-checked against the matrix;
7. major deltas are written to a durable checkpoint;
8. a regression check identifies older models that are now incompatible;
9. no hypothesis is promoted merely because it appears repeatedly.

## Regression guard
When the author explicitly prefers a newer model and says not to regress, record that as a **directional precedence rule**, not automatic canon:
- newer author-endorsed direction has priority for ongoing laboratory work;
- older incompatible hypotheses remain preserved for provenance but must not be reintroduced as current without being labeled historical/obsolete-for-current-pass;
- true CANON/WORKING-CANON still requires normal promotion governance.

## Response discipline
For long creative sources, the visible answer should not dump the matrix. It should present:
- core synthesis;
- important deltas;
- risks/collisions;
- open forks;
- next workflow.
The detailed coverage matrix remains backstage/versioned.

## Why this protocol exists
This adopts the logic of bidirectional traceability used in systems engineering: every important source expectation should be traceable forward into design/review outputs, and every design claim should trace backward to a source, inference or proposal. BeastWorld applies the principle to creative provenance rather than treating author brainstorm as formal engineering requirements.

## Owner
ChatGPT integrator is responsible for maintaining the matrix when it claims comprehensive review.
