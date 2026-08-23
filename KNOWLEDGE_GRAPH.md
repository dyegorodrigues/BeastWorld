# KNOWLEDGE_GRAPH — BeastWorld

## Objetivo

O grafo existe para recuperar contexto seletivamente e detectar efeitos colaterais de mudanças de lore.

## Tipos de nós

### Mundo e história
`ERA`, `EVENT`, `MYSTERY`, `RELIGIOUS_BELIEF`, `PROPAGANDA_CLAIM`.

### Biologia
`GREAT_SPECIES`, `BEAST_INDIVIDUAL`, `POPULATION`, `LIFE_STAGE`, `PHENOTYPE`, `REPRODUCTIVE_MECHANISM`, `BEHAVIORAL_MECHANISM`.

### Relação humano-Besta
`SANCTUARY`, `GUARDIAN_TRADITION`, `RECOGNITION`, `BOND`, `BLESSING`, `ECHO`.

### Metafísica
`METAPHYSICAL_MECHANISM`.

### Política
`DYNASTY`, `HOUSE`, `STATE`, `OFFICE`, `LAW`, `SUCCESSION_RULE`, `MONOPOLY`.

### Geografia
`REGION`, `HABITAT`, `MIGRATION_CORRIDOR`, `CITY`, `FORTRESS`.

### Narrativa
`CHARACTER`, `ARC`, `SCENE`, `REVEAL`, `CONFLICT`.

### Produção
`VISUAL_RULE`, `LANGUAGE_RULE`, `COMBAT_RULE`, `ADAPTATION_CONSTRAINT`.

## Relações

`INSTANCE_OF`, `IS_A`, `PART_OF`, `LIVES_IN`, `MIGRATES_THROUGH`, `CONTROLS_ACCESS_TO`, `PROTECTS`, `DEPENDS_ON`, `RECOGNIZES`, `BONDED_TO`, `BESTOWS_BLESSING_ON`, `DESCENDS_FROM`, `MAY_INHERIT_ECHO_FROM`, `CLAIMS_OWNERSHIP_OF`, `LEGITIMIZES`, `CONTRADICTS`, `BELIEVES`, `PROPAGATES`, `CAUSED_BY`, `CONTRIBUTES_TO`, `THREATENS`, `REVEALS`, `SUPERSEDES`.

### Distinção importante

`INSTANCE_OF` liga indivíduo a espécie; `IS_A` liga categoria a categoria. Uma Grande Besta individual é **instância** de uma Grande Espécie, não uma subespécie dela.

## Subgrafo das Grandes Bestas

```text
Grande Espécie
  ├─ possui instâncias → Grande Besta
  │                       ├─ pode ser → Ancião
  │                       ├─ pode viver em → População Selvagem
  │                       └─ pode integrar → Santuário
  └─ manifesta? → Ressonância Profunda

Santuário
  ├─ mantido por → Guardiões
  ├─ acesso controlado por → Dinastia/Estado
  └─ aumenta oportunidade de → Reconhecimento

Reconhecimento → Vínculo → Bênção → Eco

Eco + acesso + tradição → aparência de legitimidade biológica

População Selvagem → Bênção Selvagem → contradiz exclusividade dinástica

Cinza Longa → Primeiros Acordos → Guardiões/Santuários → Monopólio → Crime Fundador → Declínio
```

## Regra de recuperação

Uma pergunta local deve carregar no máximo o nó alvo, seus pais, dependências diretas, ADRs pertinentes e um ou dois saltos de impacto. Fonte bruta só é reaberta quando necessário.

## Teste de regressão

Antes de promover mudança, consultar relações `DEPENDS_ON`, `LEGITIMIZES`, `CONTRADICTS`, `CAUSED_BY`, `CONTRIBUTES_TO`, `AFFECTS` e `SUPERSEDES`.

---

## Creator OS / grafo operacional no Notion — 2026-08-23

A especificação acima continua válida. A partir de 23/08/2026, o Notion possui também uma implementação operacional aditiva do grafo.

### Relation Edge Registry

Data source Notion:

`collection://f874ef52-beca-4d50-8e55-985c563523e9`

Página:

`https://app.notion.com/p/a2afbdfaa43e4ceeb95977b93df05609`

O Edge Registry trata uma relação semântica forte como registro próprio, com:

- origem Lore/Entity;
- tipo de relação;
- destino Lore/Entity;
- Canon Status;
- Strength;
- Truth Layer;
- Spoiler Layer;
- Source Records;
- Decision Records;
- estado ativo e revisão.

Ele **não substitui** `Related Concepts`, `Dependencies` ou `Dependents`. Serve para relações que precisam ser consultadas, filtradas, auditadas e visualizadas como arestas de primeira classe.

A primeira migração possui `BW-EDGE-001..040`.

### Incoming / Outgoing Edges

As relações DUAL do Edge Registry adicionaram ao Lore Registry:

- `Outgoing Edges`;
- `Incoming Edges`.

Para análise de impacto, consultar esses campos junto de `Dependencies`, `Dependents`, `Entity Links`, `Open Questions`, `Decision Records` e `Source Records`.

### Living Knowledge Graph

Página de operação visual:

`https://app.notion.com/p/3c542424cdbc81db8ba2d444f1fdedcb`

Ela contém um snapshot HTML/SVG interativo do grafo para navegação humana. O embed **não é fonte da verdade**: a fonte relacional são os databases.

### World Graph × Story Graph

Não misturar:

- **World Graph**: o que existe/é verdade/depende de quê;
- **Story Graph**: quando, por quem e como essa verdade é apresentada ao público.

O Story Graph vive no database `BEASTWORLD — Story Architecture`:

`collection://11c4a517-6079-44ee-9890-8740317e5137`

### Documentação integral

Ver:

`docs/00_governance/NOTION_CREATOR_OS_2026-08-23.md`
