# BeastWorld — Worldbuilding & Agent Platform Patterns — 2026-08-20

**Status:** external research / architecture rationale / NOT CANON  
**Purpose:** capture which patterns were extracted from specialist worldbuilding/writing platforms and current agent infrastructure, and how BeastWorld internalizes them without becoming dependent on one vendor.

## 1. Research question

What useful architectural patterns should BeastWorld adopt from current worldbuilding/writing software and multi-agent platforms to support a long-lived book/series universe developed by the Author with ChatGPT, Claude, Grok and other models?

## 2. Specialist worldbuilding/writing patterns

### World Anvil

Official references:
- https://www.worldanvil.com/learn
- https://www.worldanvil.com/features/timelines
- https://www.worldanvil.com/features/chronicles
- https://www.worldanvil.com/features/maps

Observed patterns:
- timelines as first-class continuity objects;
- multiple/parallel timelines;
- custom calendars;
- map + timeline coupling (`Chronicles`);
- family trees and faction/diplomacy relationships;
- world articles cross-linked to entities and events.

**Adopt in BeastWorld:** timeline/entity/relationship relations and future map-time views in Notion/graph. Avoid copying UI or taxonomy mechanically.

### LegendKeeper

Official reference:
- https://www.legendkeeper.com/features/

Observed patterns:
- deep wiki nesting;
- automatic page linking;
- templates;
- rich maps with nested maps and pins;
- linked timelines;
- whiteboards/boards;
- granular permissions/secrets;
- private-by-default collaboration.

**Adopt:** explicit backlinks/relations, typed templates, lab/board space separate from canon, spoiler/visibility scopes and map nesting when geography matures.

### Sudowrite Story Bible / Saliency Engine

Official references:
- https://docs.sudowrite.com/using-sudowrite/1ow1qkGqof9rtcyGnrWUBS/what-is-story-bible/jmWepHcQdJetNrE991fjJC
- https://docs.sudowrite.com/using-sudowrite/1ow1qkGqof9rtcyGnrWUBS/saliency-engine/4KL8gFeLZNvk8CEeXpfwB2
- https://docs.sudowrite.com/using-sudowrite/1ow1qkGqof9rtcyGnrWUBS/visibility-settings/4KL8gFeLZP6ep8keUhKVGp

Observed patterns:
- story/world elements live in a structured Bible;
- relevant context is selected for the current generation task instead of always passing everything;
- per-card/per-trait visibility can hide information from AI;
- structured context feeds outline/scenes/prose.

**Adopt:** BeastWorld `Context Router`: HOT/WARM/COLD/CANON + graph relevance + mission spoiler scope. Use `READER-SAFE / WRITER-ROOM / AUTHOR-ONLY` as explicit model-visibility constraints.

### Novelcrafter

Official reference:
- https://www.novelcrafter.com/

Observed pattern:
- Codex as interconnected wiki for characters, places, lore and other reusable context;
- Codex integrated into brainstorming/writing/review rather than functioning as a detached encyclopedia.

**Adopt:** stable IDs + reusable entity/concept records + context packets based on semantic links.

### Campfire Writing

Official references:
- https://www.campfirewriting.com/write
- https://www.campfirewriting.com/worldbuilding-tools
- https://campfirewriting.com/timeline-maker
- https://campfirewriting.com/interactive-maps

Observed patterns:
- typed modules for Characters, Cultures, Species, Religions, Languages, Magic, Systems, Research and more;
- configurable templates/panels;
- relationships as webs;
- timelines connected to custom calendars and character arcs;
- research links/PDFs/images attached to story elements;
- maps with nested locations and linked story elements.

**Adopt:** schemas/templates by entity type; relations and research provenance as first-class data; future relation/map/calendar views derived from one semantic model.

## 3. Current multi-agent infrastructure

### Notion

Official references:
- https://www.notion.com/pt/releases/2026-07-01
- https://www.notion.com/help/notion-mcp
- https://developers.notion.com/guides/mcp/overview
- https://www.notion.com/pt/help/guides/connect-custom-agents-to-mcp-integrations

As of August 2026, Notion supports:
- External Agents in a shared work interface (Claude/Cursor first, more agents expected);
- Notion MCP for AI tools including Claude and ChatGPT;
- Custom Agents with MCP connections to external systems such as GitHub on eligible plans;
- read/write access subject to workspace permissions and connection configuration.

**Implication:** Notion can be BeastWorld's human-visible coordination surface, but BeastWorld governance must still enforce authority because technical write access is not semantic permission.

### Claude

Official references:
- https://claude.com/connectors/notion
- https://claude.com/docs/connectors/github/index
- https://claude.com/docs/connectors/overview

Observed capabilities:
- Notion connector advertises read/write capabilities;
- GitHub integration provides repository context;
- connectors are MCP-based.

**Implication:** Claude can participate without copy/paste, but default BeastWorld role remains read-only/quarantine until an integration gate authorizes shared writes.

### Grok / xAI

Official references:
- https://x.ai/news/grok-connectors
- https://docs.x.ai/grok/connectors
- https://x.ai/news/grok-build-open-source

Observed capabilities as of August 2026:
- Grok connectors include Notion and GitHub;
- Notion connector can search/edit workspace content;
- GitHub connector can work with repositories/issues/PRs/code;
- custom MCP connectors are supported;
- Grok Build exposes skills, plugins, hooks, MCP servers and subagents.

**Implication:** Grok can be a real council member with direct shared-context access. It should not receive unrestricted integration rights merely because the connector can technically write.

## 4. Architecture extracted for BeastWorld

### A. One semantic model, many views

Do not maintain separate disconnected truths for encyclopedia, timeline, graph, maps and story. Keep IDs/relations stable and derive different views from them.

### B. Context saliency over context dumping

Use graph + mission scope to retrieve the smallest sufficient context. Full-source retrieval happens only when provenance/nuance requires it.

### C. Visibility is a model input constraint

Reader-safe, writer-room and author-only information must be selectable at mission level. Avoid feeding final twists/secrets to routine drafting agents.

### D. Typed but extensible entity schemas

Characters, species, cultures, religions, institutions, places, systems, events and story beats need consistent core fields but flexible specialist sections.

### E. Research lives beside the claim it informs

External evidence should link to Concept/Entity/Question IDs. Do not create a giant unstructured bibliography detached from decisions.

### F. Exploration and canon are different surfaces

Boards/labs/scratch can be aggressive and visual; canon remains curated/versioned.

### G. Parallel discovery, serialized authority

Direct Notion/GitHub access enables collaboration but also makes corruption easier. Multiple agents may research simultaneously; one integration path updates shared truth.

## 5. Features deliberately not copied

- vendor-specific RPG stat blocks as a core ontology;
- hundreds of mandatory fields just because a platform exposes them;
- AI-generated prose as automatic source of truth;
- platform-native status as a substitute for Git provenance;
- one giant Story Bible passed wholesale to every agent;
- public/player-facing features before the authoring system is stable.

## 6. Resulting BeastWorld components

Materialized in this architecture wave:

- `MULTI_AI_COUNCIL_PROTOCOL.md`;
- `ARTIFACT_LIFECYCLE_AND_OWNERSHIP.md`;
- `SESSION_CLOSEOUT_AND_SYNC.md`;
- `COUNCIL_MISSION_PACKET.md`;
- Notion `AI Council Queue`;
- Notion `Session & Sync Ledger`;
- Notion human page `15 — Conselho de IAs — Orquestração, Concorrência e Sincronização`.

## 7. Research conclusion

The strongest approach is **not** to move BeastWorld into World Anvil, Sudowrite, Novelcrafter, LegendKeeper or Campfire. The project can reproduce their high-value structural ideas using GitHub + Notion while gaining something those products do not natively provide together: auditable multi-model governance with explicit epistemic status, source provenance, semantic regression and controlled canonization.