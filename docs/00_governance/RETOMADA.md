# RETOMADA — Porta de Entrada

## Reancoragem obrigatória

Antes de editar:

1. confirmar `dyegorodrigues/BeastWorld` privado;
2. confirmar PR #2 open + draft + unmerged enquanto o bootstrap não tiver sido mergeado;
3. confirmar branch `agent/worldbuilding-os-bootstrap` e HEAD remoto atual;
4. confirmar que `main` não avançou inesperadamente;
5. conferir reviews, review threads e workflows/status checks;
6. se houver deriva, o remoto vence este documento.

## Leia primeiro

1. `AGENTS.md`
2. `PROJECT_STATE.md`
3. `docs/00_governance/CANON_POLICY.md`
4. `docs/00_governance/GITHUB_NOTION_SYNC.md`
5. `graph/entities.yaml`
6. `graph/relations.yaml`
7. somente os módulos relacionados à tarefa

Se Notion estiver conectado, use o Command Center/Lore Registry para recuperar os registros ligados aos IDs em trabalho. Não carregue toda a Wiki por padrão.

## Estado de referência — 19/08/2026

A fundação de Grandes Bestas foi capturada e normalizada, porém permanece `HYPOTHESIS`.

O Notion possui Lore Registry, Decision Log, Source Library, Research & Open Questions, Entity Atlas, Master Timeline, guia de leitura, intake da Bíblia v0.1, contrato de sync e Command Center.

### Correntes causais

**Biológica/relacional:** Grande Espécie → Grande Besta → Reconhecimento → Vínculo → Bênção → Eco.

**Socioecológica:** População → Santuário → Guardiões → controle de acesso → Dinastia.

**Histórica:** Cinza Longa → Primeiros Acordos → Guardiões → apropriação → Crime Fundador → ordem dinástica → declínio.

**Disruptiva:** População Selvagem → Reconhecimento fora do monopólio → Bênção Selvagem → crise de legitimidade.

## Fila P0

- BW-Q-MET-001 — Ressonância: propriedades causais mínimas e limites.
- BW-Q-HB-002 — Bênção: mecanismo e oferta voluntária.
- BW-Q-BIO-003 — Eco: herança/diluição/concentração.
- BW-Q-POL-004 — Reconhecimento: prova jurídica.
- BW-Q-ECO-005 — Santuários: barreiras reais à replicação.
- BW-Q-ECO-006 — Declínio: causalidade composta.
- BW-Q-HIS-007 — Crime Fundador: forma histórica concreta.

Não expandir dezenas de Casas antes de resolver o núcleo causal que pode invalidá-las.

## Fontes brutas obrigatórias

- alta fidelidade: `docs/08_sources/conversations/2026-08-19-assistant-response-verbatim-great-beasts.md`;
- snapshot estruturado: `docs/08_sources/conversations/2026-08-19-great-beasts-20-points.md`.

A primeira preserva nuance; a segunda otimiza recuperação semântica. Nenhuma é cânone por existir.

## Protocolo de uma mudança estrutural

1. identificar Concept/Entity ID;
2. recuperar Source Records e Open Questions;
3. estudar alternativas e evidências;
4. testar abuso/incentivos/escala;
5. registrar decisão/ADR quando necessário;
6. atualizar módulo + grafo + timeline/entidades impactadas;
7. executar regressão de lore;
8. atualizar `PROJECT_STATE.md` se o estado mudou;
9. atualizar Notion `Sync Status`;
10. manter Source Archive imutável.