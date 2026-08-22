# BeastWorld

**Private worldbuilding repository / source of truth** for the BeastWorld intellectual property.

> Rascunho não é cânone. Ideia boa não vira verdade do universo sem promoção explícita.
>
> **Para qualquer nova conversa:** leia primeiro `START_HERE_FOR_AI.md` e depois `docs/00_governance/CONTEXT_REHYDRATION_PACKET.md`. Esse pacote reúne o contexto criativo, autoral, operacional e de governança até a sessão mais recente. Antes de criar, devolva o `CONTEXT READ RECEIPT` exigido pelo bootstrap.

## O que este repositório é

Este repositório é a camada versionada, auditável e modular do BeastWorld. Ele existe para preservar fontes, estruturar lore, registrar decisões, controlar contradições e permitir que humanos e agentes de IA retomem o projeto sem depender da memória de um chat isolado.

A arquitetura possui três camadas:

1. **Source Archive** — preserva conversas, respostas, pesquisas e formulações originais sem reescrever o passado.
2. **Semantic Lore Layer** — converte material bruto em conceitos atômicos com IDs, status, versões, relações e dependências.
3. **Curated Canon** — contém apenas o que foi explicitamente promovido a `WORKING-CANON` ou `CANON`.

## GitHub ↔ Notion

- **GitHub:** fonte versionada e auditável da verdade editorial.
- **Notion:** Wiki relacional, leitura, pesquisa, timeline, dashboards e interface cognitiva.
- Hipóteses podem estar temporariamente à frente no Notion; conteúdo promovido não pode divergir silenciosamente.
- O contrato completo está em `docs/00_governance/GITHUB_NOTION_SYNC.md`.

### Notion

- **Wiki Hub:** https://app.notion.com/p/3c142424cdbc81cd9f8bd269c3674224
- **Enciclopédia:** https://app.notion.com/p/3c142424cdbc8100bd1bf72591c4288d
- **Resume Packet:** https://app.notion.com/p/3c142424cdbc8114bd07f15e9c5f92fe
- **Command Center:** https://app.notion.com/p/3c142424cdbc817da8b8fcc2d32d5470

A arquitetura e os data sources estão documentados em `docs/00_governance/NOTION_WIKI_ARCHITECTURE.md`.

## Entrada obrigatória para novas sessões e IAs externas

**IA/agente externo deve começar por `START_HERE_FOR_AI.md`.** Esse arquivo exige reancoragem, leitura progressiva GitHub↔Notion e um `CONTEXT READ RECEIPT` antes de qualquer brainstorm ou pesquisa independente.

Para sessões internas, a sequência operacional permanece:

1. `AGENTS.md`
2. `PROJECT_STATE.md`
3. `HANDOFF.md`
4. `docs/00_governance/RETOMADA.md`
5. `docs/00_governance/CONTEXT_REHYDRATION_PACKET.md`
6. `docs/00_governance/CONTEXT_INDEX.md`
7. `docs/00_governance/CANON_POLICY.md`
8. somente os módulos relacionados ao problema atual

Se o conector Notion estiver disponível, consulte o Resume Packet e os registros ligados aos IDs em trabalho; não carregue toda a Wiki por padrão.

## Estado do bootstrap

A fundação versionada está em `agent/worldbuilding-os-bootstrap` / draft PR #2. A infraestrutura está em consolidação; a reconstrução das Grandes Bestas permanece **HYPOTHESIS**, não cânone definitivo.

Consulte `PROJECT_STATE.md` para o estado corrente.