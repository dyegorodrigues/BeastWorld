---
id: ADR-0007
status: ACCEPTED
accepted: 2026-09-05
scope: knowledge-architecture / notion / github-sync / relational-graph
canon_change: none
---

# ADR-0007 — Human Wiki + relational graph as one Second Brain

## Context
Pass 56 created a clean human-first Notion entry and a detailed twelve-module current encyclopedia. A second author-requested QA found that the prose layer was strong but the structured relational layer remained largely frozen in V3/V4: current Pass 56 concepts were absent from the Lore Registry, Decision Log did not yet contain ADR-0006, the Source Library did not contain the promotion/QA sources, and operational pages described databases without projecting them into the new human route.

The author explicitly requested nodes, tags, connections and best practices while preserving explanatory richness and provenance.

## Decision
Operate BeastWorld as a **single Second Brain with distinct cooperating layers**:

1. **Human Wiki / Encyclopedia** — long-form explanation: what a concept is, how it works, why it exists, how it feels in the world, narrative consequences and open questions.
2. **Lore Registry** — atomic semantic nodes for retrieval and impact analysis. A node summarizes; it does not duplicate the encyclopedia article.
3. **Tags** — retrieval vocabulary only. Tags never replace `Canon Status`, `Truth Layer`, `Spoiler Layer`, source authority or explicit relations.
4. **Typed relations / Edge Registry** — first-class causal, dependency and semantic connections between important nodes.
5. **Decision Log** — authoritative decision index mirrored to GitHub ADRs.
6. **Research & Open Questions** — explicit unresolved gates and research pipeline.
7. **Source Library** — provenance, authority, reliability and capture status.
8. **Historical archive** — superseded/rejected nodes and pages remain preserved and searchable but are visually and relationally demoted from the current route.
9. **GitHub** — versioned/auditable authority for promoted structure, ADRs, source records and operational routing.

## Current-node rule
A current high-value Lore Registry node should normally have:

- stable `Concept ID`;
- `Canon Status`;
- `Domain` and `Node Type`;
- concise `Summary`;
- retrieval `Tags`;
- `Truth Layer` and `Spoiler Layer` when relevant;
- `Version` and `Last Reviewed`;
- `Source Records`;
- `Decision Records` when a structural decision governs it;
- `GitHub Path`;
- `Wiki Page` linking to the detailed current encyclopedia article;
- typed edges for structural relationships that matter to regression analysis.

Not every old or minor node must have every relation. The goal is useful semantic connectivity, not bureaucratic completeness.

## Tag rule
Tags answer **“how do I retrieve this?”** They do not answer **“is this true?”**

Current V5 retrieval vocabulary is additive and includes categories such as `v5-current`, `origin-graft`, `living-world`, `quintessence`, `fissures`, `deep-entities`, `blood`, `matrix`, `generated-beasts`, `dynasties`, `academy`, `protagonist`, `book1`, `interworld-war`, `coevolution` and `second-brain`.

## Historical-node rule
When an old node materially conflicts with the current route, mark it `SUPERSEDED` or `REJECTED` rather than deleting it. Its original page/content remains provenance. New current nodes receive new stable IDs rather than rewriting historical IDs into a different meaning.

## Human navigation
The new Notion Second Brain gains a dedicated lane:

`06 — GRAFO & REGISTROS — Nós, tags e relações`

The human-facing pages for Authority, Laboratory, Archive and Sources should embed or link live views of the existing relational databases rather than duplicating records.

## GitHub routing rule
`V5_RECONCILIATION_STATE.md` and `V5_CONTEXT_ROUTER.md` are compact current doors, not ever-growing stacks of stale “current route” headers. Git history and individual pass files already preserve earlier states.

## Consequences
### Positive
- detailed prose remains readable;
- agents can retrieve atomic current context without loading entire wiki pages;
- stale V4 nodes stop masquerading as present truth;
- source → decision → lore → edge → open question becomes traceable;
- Notion and GitHub become complementary rather than competing stores.

### Cost
- meaningful current concepts require relational maintenance after promotion;
- tags and edges need periodic pruning to prevent semantic entropy;
- a final readback must verify that current views actually expose current nodes.

## Non-decision
This ADR changes **knowledge architecture only**. It promotes no new lore and does not alter ADR-0006.

## Source
`docs/08_sources/conversations/2026-09-05-author-second-brain-full-qa-relational-graph-source-record.md`
