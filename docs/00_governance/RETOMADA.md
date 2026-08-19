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

1. `PROJECT_STATE.md`
2. `HANDOFF.md`
3. `AGENTS.md`
4. `docs/00_governance/CANON_POLICY.md`
5. `docs/00_governance/MEMORY_HANDOFF_PROTOCOL.md`
6. `docs/00_governance/GITHUB_NOTION_SYNC.md`
7. `graph/entities.yaml`
8. `graph/relations.yaml`
9. somente os módulos relacionados à tarefa

Se Notion estiver conectado, use o Command Center/Lore Registry para recuperar os registros ligados aos IDs em trabalho. Não carregue toda a Wiki por padrão.

## Memória operacional

O projeto usa quatro camadas:

- **M0 / COLD:** Source Archive — conversas, PDFs, pesquisas, históricos;
- **M1 / WARM:** módulos semânticos, grafo, entidades, perguntas, Notion databases;
- **M2 / HOT:** `PROJECT_STATE.md`, `HANDOFF.md` e esta porta;
- **M3 / CANON:** Bíblia, módulos promovidos, ADRs e estruturas reconciliadas.

Resumo não apaga nem substitui fonte. Ver `MEMORY_HANDOFF_PROTOCOL.md`.

## Estado de referência — 19/08/2026

A fundação de Grandes Bestas foi capturada e normalizada, porém permanece `HYPOTHESIS`.

O Notion possui Lore Registry, Decision Log, Source Library, Research & Open Questions, Entity Atlas, Master Timeline, guia de leitura, intake da Bíblia v0.1, contrato de sync, Command Center e intake crítico da conversa Meta AI.

O PDF `Ideias bagunçadas (1).pdf` foi incorporado como Source Record `BW-SRC-2026-08-19-METAAI-BRAINSTORM`, com transcrição de alta fidelidade segmentada em três partes e hash do original.

### Correntes causais

**Biológica/relacional:** Grande Espécie → Grande Besta → Reconhecimento → Vínculo → Bênção → Eco.

**Socioecológica:** População → Santuário → Guardiões → controle de acesso → Dinastia.

**Histórica:** Cinza Longa → Primeiros Acordos → Guardiões → apropriação → Crime Fundador → ordem dinástica → declínio.

**Disruptiva:** População Selvagem → Reconhecimento fora do monopólio → Bênção Selvagem → crise de legitimidade.

## Fila P0 original

- BW-Q-MET-001 — Ressonância: propriedades causais mínimas e limites.
- BW-Q-HB-002 — Bênção: mecanismo e oferta voluntária.
- BW-Q-BIO-003 — Eco: herança/diluição/concentração.
- BW-Q-POL-004 — Reconhecimento: prova jurídica.
- BW-Q-ECO-005 — Santuários: barreiras reais à replicação.
- BW-Q-ECO-006 — Declínio: causalidade composta.
- BW-Q-HIS-007 — Crime Fundador: forma histórica concreta.

## Novos gates do intake Meta AI

- BW-Q-013 — longevidade e consequências demográficas/políticas — P0;
- BW-Q-014 — persistência após a morte — P0;
- BW-Q-015 — retorno/ressurreição — P1;
- BW-Q-016 — ameaça comum original — P1;
- BW-Q-017 — marcialidade transversal sem homogeneização — P1;
- BW-Q-018 — mistura de Ecos/casamento — P1;
- BW-Q-019 — quantidade de Grandes Espécies / produção — P1;
- BW-Q-020 — arquitetura linguística — P2;
- BW-Q-021 — falha estrutural do protagonista — P1;
- BW-Q-022 — diferenciação visual da futura Dinastia do Dragão — P1.

Não expandir dezenas de Casas, nomes ou espécies antes de resolver o núcleo que pode invalidá-los.

## Fontes brutas obrigatórias

### Grandes Bestas — 20 pontos

- alta fidelidade: `docs/08_sources/conversations/2026-08-19-assistant-response-verbatim-great-beasts.md`;
- snapshot estruturado: `docs/08_sources/conversations/2026-08-19-great-beasts-20-points.md`.

### Brainstorm Meta AI

- manifest: `docs/08_sources/conversations/2026-08-19-metaai-brainstorm-source-record.md`;
- raw 01: `docs/08_sources/conversations/2026-08-19-metaai-brainstorm-raw-part-01-pages-01-06.txt`;
- raw 02: `docs/08_sources/conversations/2026-08-19-metaai-brainstorm-raw-part-02-pages-07-12.txt`;
- raw 03: `docs/08_sources/conversations/2026-08-19-metaai-brainstorm-raw-part-03-pages-13-18.txt`;
- intake: `docs/06_research/2026-08-19-metaai-brainstorm-critical-intake.md`.

Nenhuma fonte é cânone por existir.

## Regras recuperadas deste intake

- não transformar pergunta do autor em decisão automática;
- Ancião = idade, não tier/divindade;
- Dinastia controla acesso, não espécie;
- Eco continua variável;
- números de longevidade permanecem abertos;
- pós-vida/retorno permanecem abertos;
- nomes da Meta são source-history;
- “uma Anciã + sub-bestas por Dinastia” não substitui população/Santuário;
- marcialidade merece desenvolvimento como pilar cultural, sem sistema universal de níveis;
- protagonista e visual permanecem character/visual labs.

## Protocolo de uma mudança estrutural

1. identificar Concept/Entity/Question ID;
2. recuperar Source Records e Open Questions;
3. estudar alternativas e evidências;
4. testar abuso/incentivos/escala;
5. registrar decisão/ADR quando necessário;
6. atualizar módulo + grafo + timeline/entidades impactadas;
7. executar regressão de lore;
8. atualizar `PROJECT_STATE.md` se o estado consolidado mudou;
9. atualizar `HANDOFF.md` se o bloco ativo mudou;
10. atualizar Notion `Sync Status`;
11. manter Source Archive imutável.

## Próxima interação recomendada

Usar entrevista autoral guiada, uma decisão por bloco, com alternativas + consequências + opção `nenhuma / não sei / outra`.

Começar por longevidade e pós-vida antes de fechar nomes, Dinastias ou antagonista.