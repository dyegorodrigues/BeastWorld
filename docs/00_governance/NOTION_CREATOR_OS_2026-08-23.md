# BeastWorld — Notion Creator OS / Second Brain

**Data:** 2026-08-23  
**Status:** infraestrutura editorial / governança  
**Canon change:** **nenhum**  
**Princípio:** refatoração aditiva e não destrutiva. Nenhuma fonte, página, hipótese, texto enciclopédico ou registro histórico foi apagado, compactado como substituição ou promovido silenciosamente.

## 1. Motivo

O Notion já funcionava como Wiki relacional e camada cognitiva do BeastWorld, mas a experiência ainda era mais próxima de um backend editorial robusto do que de um ambiente de criação visual. Esta onda adiciona uma camada de **Creator OS** sobre os mesmos dados existentes.

Objetivos:

- preservar 100% da memória e proveniência já existente;
- transformar relações implícitas em um grafo semântico navegável;
- separar **World Graph** de **Story Graph**;
- criar uma camada visual de produção sem confundir referência com cânone;
- melhorar navegação diária para o autor;
- tornar análise de impacto/regressão de lore explícita;
- deixar o estado compreensível para qualquer IA que reancore pelo GitHub.

## 2. Invariantes de segurança

1. GitHub continua fonte versionada/auditável editorial.
2. Notion continua Wiki relacional, interface cognitiva e pode estar à frente em `HYPOTHESIS`.
3. `WORKING-CANON`/`CANON` não podem existir somente no Notion.
4. Source Archive/Source Library preservam formulações originais; normalização não substitui fonte.
5. Nenhum campo, página, database ou texto legado foi removido nesta onda.
6. `Related Concepts`, `Dependencies`, `Dependents` e demais relações existentes continuam válidos; o novo Edge Registry **complementa**, não substitui.
7. Story Architecture não altera automaticamente a verdade do mundo.
8. Visual Asset Atlas não transforma imagem de referência em arte canônica.
9. Views são projeções dos databases verdadeiros; não duplicar registro só para aparência.
10. Toda mudança estrutural futura deve executar regressão/impacto antes de promoção.

## 3. Auditoria pré-refatoração

Snapshot quantitativo obtido antes de a cota SQL do conector Notion ser atingida:

- Lore Registry: **48 nós**;
  - 17 sem `Related Concepts`;
  - 17 sem `Dependencies`;
  - 18 sem `Source Records`;
  - 14 sem `Open Questions`;
  - 35 sem `Entity Links`.
- Entity Atlas: **13 entidades**; todas com Source Records e Related Lore no snapshot consultado.
- Research & Open Questions: **63 registros**; 62 ativos; 33 sem Related Lore; nenhum sem fonte no snapshot.
- Decision Log: **9 decisões**; 1 sem fonte; 7 sem Related Lore.
- Source Library: **42 fontes**; 35 sem Related Lore; 28 sem Related Decisions; 4 em `NEEDS-REVIEW`.
- Master Timeline: **17 eventos**; nenhum sem Related Lore e nenhum sem Source Records.

Esses números são diagnóstico de conectividade, não julgamento de qualidade: um nó pode legitimamente não possuir todas as relações.

## 4. Novas interfaces principais

### Creator OS — Home & Second Brain

Notion page:
`https://app.notion.com/p/3c542424cdbc81ad8160f9e3dfe797d7`

Função: tela inicial diária do criador, com dashboards/views para gates, distribuição de lore, pipeline canônico, Story Graph e Visual Atlas.

### Living Knowledge Graph — Cérebro Visual

Notion page:
`https://app.notion.com/p/3c542424cdbc81db8ba2d444f1fdedcb`

Função: interface do World Graph. Contém:

- grafo HTML/SVG interativo;
- busca por nó;
- filtro por domínio;
- filtro por tipo de relação;
- zoom/pan;
- drag de nós;
- painel lateral de entradas/saídas;
- click-through para a página original no Notion;
- linked view do Edge Registry.

O embed é um **snapshot visual**, não uma fonte de verdade. O banco relacional continua autoritativo.

### Writer's Room

Notion page:
`https://app.notion.com/p/3c542424cdbc818ab1ede862d0d2a59a`

Função: operar o **Story Graph**, separado do World Graph.

### Visual Atlas

Notion page:
`https://app.notion.com/p/3c542424cdbc81d4b776c01294163c4b`

Função: organizar referências, produção visual, iterações, entidades, paletas, materiais e approval state.

### Canon & Research Control

Notion page:
`https://app.notion.com/p/3c542424cdbc81b4ae55f056fa2ec2cd`

Função: gates P0/P1, Decision Log, drift, fontes `NEEDS-REVIEW` e segurança editorial.

## 5. Relation Edge Registry

Database:
`BEASTWORLD — Relation Edge Registry`

Data source:
`collection://f874ef52-beca-4d50-8e55-985c563523e9`

Database page:
`https://app.notion.com/p/a2afbdfaa43e4ceeb95977b93df05609`

Objetivo: registrar **arestas tipadas** como objetos de primeira classe.

Campos essenciais:

- Edge / Edge ID;
- Source Lore / Source Entity;
- Relation Type;
- Target Lore / Target Entity;
- Canon Status;
- Strength;
- Truth Layer;
- Spoiler Layer;
- Source Records;
- Decision Records;
- Active;
- Notes;
- GitHub Path;
- Last Reviewed.

Tipos de relação iniciais:

`DEPENDS_ON`, `PART_OF`, `IS_A`, `RECOGNIZES`, `BONDED_TO`, `BESTOWS_ON`, `PROTECTS`, `CONTROLS_ACCESS_TO`, `LEGITIMIZES`, `CONTRADICTS`, `CAUSED_BY`, `CONTRIBUTES_TO`, `THREATENS`, `REVEALS`, `DESCENDS_FROM`, `AFFECTS`, `LOCATED_IN`, `TRAINS_AT`, `GOVERNS`, `RELATED_TO`.

O database criou relações reversas `Outgoing Edges` e `Incoming Edges` no Lore Registry.

### Primeira migração

Foram registrados **40 edges** (`BW-EDGE-001` a `BW-EDGE-040`). Eles cobrem relações estruturais já documentadas e a primeira camada V4, incluindo:

- Grande Besta → Grande Espécie;
- Reconhecimento → Grande Besta/Santuário;
- Vínculo → Reconhecimento;
- Bênção → Vínculo;
- Eco → Bênção;
- Bênção Selvagem → dependências + contradição do Monopólio;
- Sangue Vital → Bênção/Ressonância;
- Magia → Ressonância;
- Domínio → Magia/Assinatura;
- Estrela Moribunda → Grande Consciência/Feridas;
- Academia → Arena/Bastilhas;
- Nova Geração → Academia;
- Quatro Coroas + Cinco Assentos → Assentos/Academia;
- Azhara → Diretor (`RECOGNIZES`, `BESTOWS_ON`);
- Diretor → dragão negro (`BONDED_TO`);
- dragão negro → hipótese Quase-Primordial.

Todos os edges novos permanecem no status compatível com suas fontes; a camada V4 continua `HYPOTHESIS`.

## 6. Story Architecture — Story Graph

Database:
`BEASTWORLD — Story Architecture`

Data source:
`collection://11c4a517-6079-44ee-9890-8740317e5137`

Database page:
`https://app.notion.com/p/569b9471a68b460dba1e9b98c5f470ab`

Níveis:

`Saga → Book/Season → Act → Arc → Chapter/Episode → Scene → Setup/Payoff/Reveal`.

Relações principais:

- Parent Node ↔ Children;
- POV;
- Characters;
- Locations;
- Lore Used;
- Timeline Events;
- Setups;
- Payoffs;
- Source Records;
- Decision Records.

Primeiro seed: **11 story nodes**, todos `HYPOTHESIS`, cobrindo:

- Saga Principal;
- Livro/Temporada 1 — Academia no Presente;
- especial/origem do Diretor;
- entrada na Academia;
- exame aberto do jovem;
- vida Academia/Arena/Bastilhas;
- Feridas mudando;
- infância do Diretor;
- resgate do dragão negro;
- crise de sucessão;
- payoff da Escolha pública de Azhara.

Regra operacional: **World Graph = o que é verdade. Story Graph = quando/como o público descobre.**

## 7. Visual Asset Atlas

Database:
`BEASTWORLD — Visual Asset Atlas`

Data source:
`collection://381e6631-9c37-409d-85a5-ad436b34c9c3`

Database page:
`https://app.notion.com/p/3acaecf1bdb249c494a06b50420a30df`

Campos incluem:

- Asset ID / tipo / status / Canon Status;
- Media;
- Source Records;
- Entities / Lore;
- Culture / Region;
- Palette / Materials / Silhouette;
- Use Case;
- Prompt/Brief e Negative Prompt/Avoid;
- Tool/Model, Iteration, Approval Notes.

Foram criados **7 registros `DIRECTION + HYPOTHESIS`** (`BW-VIS-V4-001` a `007`) apontando para as sete fontes visuais V4 já preservadas na Source Library.

Importante: o campo `Media` está preparado para binários futuros. As imagens originais desta conversa permanecem preservadas como Source Records; não foi fingido upload de binários não disponíveis ao conector. O board visual já existente continua na página de Direção Visual V4.

## 8. Native AI Skills

Quatro páginas foram marcadas como **Notion AI skills**:

1. `Skill — BeastWorld Canon-Safe Intake`;
2. `Skill — BeastWorld Lore Impact & Regression Review`;
3. `Skill — BeastWorld Entity Builder`;
4. `Skill — BeastWorld Story & Reveal Planner`.

Elas codificam o comportamento esperado para futuras operações dentro do Notion: preservação, proveniência, impacto, Story Graph e separação de hipótese/cânone.

## 9. Views e dashboards adicionados

A camada nova usa views nativas, não cópias de dados. Foram adicionadas views para:

- P0 blocking gates;
- lore por domínio (chart);
- pipeline de cânone (chart);
- Story Graph por tipo;
- Visual Atlas;
- Edge Registry ativo;
- arquitetura narrativa por tipo;
- ordem narrativa;
- galeria visual;
- gates P0/P1;
- Decision Log;
- drift de lore;
- fontes `NEEDS-REVIEW`.

O Hub e o antigo Command Center receberam apenas **callouts de navegação** para a nova camada; conteúdo histórico foi preservado.

## 10. Grafo visual interativo

O Notion recebeu um HTML embed `beastworld-living-knowledge-graph-v1.html`.

Snapshot inicial:

- **53 nós visuais** (48 Lore + 5 entidades V4);
- **40 relações tipadas**;
- filtro por domínio;
- filtro por relação;
- busca;
- zoom/pan;
- arraste de nós;
- inspeção de entradas/saídas;
- links diretos para páginas Notion.

O snapshot deve ser regenerado quando o Edge Registry mudar materialmente. Não usar o HTML como base para editar lore.

## 11. Limitação operacional encontrada

Durante a auditoria, a cota de `query_data_sources` do plano/workspace foi atingida.

Consequências:

- **nenhuma edição foi perdida ou revertida**;
- criação/edição de páginas, databases, relações, views, attachments e GitHub continuaram disponíveis;
- a auditoria quantitativa pós-refatoração por SQL precisa ser repetida quando a cota voltar ou se o plano liberar mais consultas.

Enquanto isso, auditoria estrutural deve usar `fetch`, busca e inspeção direta dos schemas/objetos criados.

## 12. Como uma IA deve operar daqui em diante

### Para leitura humana

Começar pela Enciclopédia.

### Para criação cotidiana

Começar por `Creator OS — Home & Second Brain`.

### Para alteração de lore

1. recuperar nó no Lore Registry;
2. consultar Incoming/Outgoing Edges;
3. consultar Source Records / Decision Records / Open Questions;
4. executar Impact Cone;
5. somente depois escrever proposta/decisão.

### Para roteiro

Operar Story Architecture sem alterar Lore por efeito colateral.

### Para visual

Preservar origem na Source Library e usar Visual Asset Atlas para produção/approval.

### Para promoção canônica

Seguir `CANON_POLICY.md` + `GITHUB_NOTION_SYNC.md`; `WORKING-CANON`/`CANON` exige espelho GitHub.

## 13. Estado final desta onda

- refatoração: **aditiva**;
- páginas apagadas: **0**;
- databases apagados: **0**;
- propriedades removidas: **0**;
- mudanças canônicas: **0**;
- nova infraestrutura: Creator OS + Edge Registry + Story Architecture + Visual Asset Atlas + AI Skills + dashboards + grafo interativo;
- auditoria estrutural pós-escrita: obrigatória antes do handoff final;
- auditoria SQL pós-escrita: pendente exclusivamente por limite de quota do Notion.
