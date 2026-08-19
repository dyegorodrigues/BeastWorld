# AGENTS.md — BeastWorld Operating Contract

## Missão

Agentes que trabalham neste repositório devem desenvolver o BeastWorld sem perder rastreabilidade, sem transformar brainstorming em cânone e sem criar contradições silenciosas.

## Ordem de leitura

Antes de propor ou editar lore:

1. `docs/00_governance/RETOMADA.md`
2. `PROJECT_STATE.md`
3. `HANDOFF.md`
4. `docs/00_governance/CANON_POLICY.md`
5. `docs/00_governance/MEMORY_HANDOFF_PROTOCOL.md`
6. página/nó alvo
7. dependências diretas em `graph/relations.yaml`
8. ADRs relacionados em `docs/07_decisions/`
9. fontes históricas apenas se houver dúvida, disputa ou necessidade de recuperar nuance

Se Notion estiver conectado, recuperar somente os registros relacionados no Lore Registry, Open Questions, Entity Atlas, Timeline e Source Library. Nunca reler toda a Bíblia ou toda a Wiki por padrão.

## GitHub ↔ Notion

GitHub é a fonte versionada da verdade editorial. Notion é a Wiki relacional e pode conter `HYPOTHESIS`, pesquisa e perguntas à frente do Git.

Interpretar `Sync Status` assim:

- `SYNCED` — representação correspondente existe no Git e não há deriva conhecida;
- `NOT-IN-GIT` — material exploratório ainda não materializado no repositório;
- `DRIFT` — conflito conhecido; investigar antes de promover/editar o mesmo conceito;
- `N/A` — registro operacional sem necessidade de espelhamento.

Não promover `WORKING-CANON` ou `CANON` apenas no Notion. Toda promoção estrutural deve aparecer em branch/PR no GitHub e depois ser reconciliada na Wiki.

Consulte `docs/00_governance/GITHUB_NOTION_SYNC.md` e `docs/00_governance/NOTION_WIKI_ARCHITECTURE.md`.

## Memória e handoff

A memória do projeto é externa e hierárquica; não depender da janela de contexto de uma conversa.

- **M0 / cold:** `docs/08_sources/` — fonte bruta e alta fidelidade;
- **M1 / warm:** lore, entities, research, grafo e databases Notion;
- **M2 / hot:** `PROJECT_STATE.md` + `HANDOFF.md` + `RETOMADA.md`;
- **M3 / canon:** Bíblia, módulos promovidos, ADRs, grafo/timeline reconciliados.

Resumo nunca substitui fonte. Compactação serve para roteamento e retomada.

Gatilhos para checkpoint/compactação:

- novo documento externo;
- novo bloco conceitual;
- três ou mais perguntas/decisões novas;
- mudança de causalidade/status;
- troca provável de conversa;
- antes de concluir PR/ciclo.

Após um checkpoint relevante, atualizar `HANDOFF.md`; atualizar `PROJECT_STATE.md` somente se o estado consolidado mudou.

## Papéis de orquestração

### Archivist
Preserva fontes sem reinterpretar. Não canoniza.

### Lore Architect
Normaliza conceitos, separa dimensões e explicita dependências.

### Continuity Auditor
Procura regressões em cronologia, genealogia, geografia, biologia, política, religião e narrativa.

### Research Analyst
Pesquisa ciência, história, antropologia, guerra, linguística e produção audiovisual; separa fato real de extrapolação ficcional.

### Narrative Engineer
Testa consequências dramatizáveis sem dobrar o universo apenas para servir uma cena.

### Canon Curator
Prepara proposta de promoção com impactos, alternativas e perguntas abertas.

### Devil's Advocate
Tenta quebrar o sistema: abuso estatal, mercado negro, incentivos, tecnologia, guerra, sucessão, medicina, fraude, exploração econômica.

## Estados epistemológicos

`CAPTURED`, `HYPOTHESIS`, `WORKING-CANON`, `CANON`, `MYSTERY`, `UNRESOLVED`, `SUPERSEDED`, `REJECTED`.

Nunca trocar status sem registrar decisão.

## Camadas de verdade

Distinguir explicitamente:

- `Author Truth` — realmente verdadeiro no universo;
- `In-world Knowledge` — aquilo que pessoas/instituições acreditam saber;
- `Myth/Religion` — interpretação cultural/teológica;
- `Propaganda` — versão politicamente útil/manipulada;
- `Mixed/Disputed` — versões concorrentes;
- `Meta/Design` — regra de modelagem/autoria, não fato in-world.

Também respeitar `Spoiler Layer`: `Reader-Safe`, `Writer-Room`, `Author-Only`.

## Regra de regressão de lore

Toda alteração conceitual deve revisar dependências. Exemplo: mudar a Bênção exige revisar Vínculo, Reconhecimento, Eco, Bênção Selvagem, Bênção Artificial, medicina, guerra, sucessão, casamento, religião e cenas dependentes.

Fluxo mínimo:

1. Concept/Entity ID alvo;
2. `DEPENDS_ON` e dependentes;
3. timeline e entidades relacionadas;
4. Open Questions;
5. Source Records;
6. ADRs;
7. Devil's Advocate;
8. diff GitHub;
9. reconciliação Notion.

## Regra anti-lacuna

Toda regra sistêmica deve responder:

- o que é?
- como surgiu?
- como funciona hoje?
- quem se beneficia?
- quem controla acesso?
- o que impede abuso óbvio?
- como falha?
- quais exceções existem?
- quais consequências sociais/políticas?
- quais consequências narrativas?

Se algo não estiver resolvido, registrar `UNRESOLVED`; não mascarar com prosa bonita.

## Regra de escala

Testar tudo em quatro escalas: indivíduo, família/comunidade, Estado/dinastia e ecossistema/mundo.

## Regra de escrita

- português-BR por padrão;
- nomes provisórios devem ser marcados;
- termos ficcionais não devem ganhar falsa etimologia antes da linguística estar madura;
- distinguir sempre verdade do autor, crença in-world, mito/religião e propaganda;
- evitar linguagem de RPG quando o conceito é biológico, histórico ou político;
- quando uma fonte externa usa nomes/soluções afirmativas, preservar como source-history até revisão explícita.

## Modificação de cânone

Não editar `CANON` silenciosamente. Criar/atualizar ADR, registrar versão anterior, impacto e rationale. `SUPERSEDED` preserva o passado; não apagar decisões antigas.

Depois de mudanças estruturais, atualizar `PROJECT_STATE.md`, `HANDOFF.md` e `RETOMADA.md` no mesmo PR quando aplicável.