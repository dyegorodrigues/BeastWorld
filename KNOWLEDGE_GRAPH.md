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