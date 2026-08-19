# PROJECT_STATE — BeastWorld

**Data de referência:** 2026-08-19  
**Marco:** Worldbuilding OS v0.1 — bootstrap GitHub + profissionalização da Wiki Notion.

## Estado geral

O BeastWorld possui agora duas camadas operacionais complementares:

- **GitHub privado** como fonte versionada/auditável;
- **Notion privado** como Wiki relacional, sistema de pesquisa, timeline e interface de estudo.

A infraestrutura está sendo consolidada no draft PR #2. O lore das Grandes Bestas continua em revisão; documentação não equivale a canonização.

## GitHub — estado verificado

- repo: `dyegorodrigues/BeastWorld` — private;
- `main`: `8b0b54691fac646d0874fe51c98d6b5d7821eb92`;
- branch: `agent/worldbuilding-os-bootstrap`;
- draft PR: `#2 — Bootstrap BeastWorld Worldbuilding OS`;
- PR: open + draft + unmerged + mergeable;
- antes desta atualização de governança, HEAD era `d131518a8bba2b986b56a94213509f331046e00a`;
- nenhum review ou review thread pendente;
- nenhum workflow/status check configurado no bootstrap.

## Notion — arquitetura operacional

Hub: `BEASTWORLD — Worldbuilding OS & Wiki Hub`  
Command Center: `12 — BeastWorld Command Center`

### Databases

1. **Lore Registry** — 20 nós nucleares, dependências, fontes, perguntas, verdade/spoiler, Git path e sync.
2. **Decision Log** — ADRs e decisões operacionais, supersession e sync.
3. **Source Library** — proveniência de conversa, documentos, GitHub e pesquisa.
4. **Research & Open Questions** — fila de lacunas com prioridade e decision gate.
5. **Entity Atlas** — espécies, Bestas individuais, personagens futuros, instituições, lugares, culturas e línguas.
6. **Master Timeline** — ordem causal, era, truth layer e spoiler layer.

### Auditoria quantitativa — 19/08/2026

- Lore Registry: **20 total / 20 HYPOTHESIS / 20 SYNCED / 0 DRIFT / 6 Author-Only**.
- Open Questions: **12 total / 7 P0 / 5 P1 / 12 OPEN**.
- Entity Atlas: **8 total / 1 WORKING-CANON / 6 HYPOTHESIS / 1 UNRESOLVED / 8 SYNCED**.
- Master Timeline: **13 eventos / 12 HYPOTHESIS / 1 UNRESOLVED / 9 Author-Only**.
- Source Library: **5 fontes / 2 NEEDS-REVIEW / 1 CITED / 1 ARCHIVED**.
- Decision Log: **6 decisões / 6 ACCEPTED / 5 ADRs SYNCED / 1 decisão operacional N/A / 0 DRIFT**.

## Decisões arquiteturais aceitas

1. `BW-ADR-0001` — Source Archive, Semantic Lore Layer e Curated Canon são camadas separadas.
2. `BW-ADR-0002` — a leva de 20 pontos das Grandes Bestas permanece `HYPOTHESIS`.
3. `BW-ADR-0003` — GitHub é source of truth versionado; Notion é Wiki/interface cognitiva.
4. `BW-ADR-0004` — Bíblia mestra é síntese; detalhes vivem em módulos menores.
5. `BW-ADR-0005` — alterações conceituais estruturais passam por regressão de lore.

`BW-OPS-DEC-001` registra a decisão histórica de não depositar BeastWorld nos repositórios públicos existentes antes da criação do repo dedicado; é operacional, não ADR de arquitetura permanente.

## Núcleo causal em estudo

```text
Ressonância Profunda
        ↓
Grandes Espécies
   ↙           ↘
populações     populações
selvagens      de Santuário
                   ↓
              Guardiões
                   ↓
       monopólio dinástico
                   ↓
       narrativa de sangue
             escolhido
```

Relação individual:

```text
coexistência → tolerância → Reconhecimento → Vínculo → Bênção
                                                      ↓
                                              humano alterado
                                                      ↓
                                             Eco hereditário?
```

História:

```text
Antes dos Homens
      ↓
Cinza Longa
      ↓
Primeiros Acordos
      ↓
Guardiões
      ↓
apropriação dos Santuários
      ↓
Crime Fundador / reescrita histórica
      ↓
ordem dinástica madura
      ↓
declínio ecológico/reprodutivo
```

## 20 conceitos nucleares

- BW-BIO-GSPEC-001 — Grande Espécie
- BW-BIO-GBEAST-001 — Grande Besta
- BW-BIO-ANCIENT-001 — Ancião/Anciã
- BW-ECO-WILD-001 — População Selvagem
- BW-ECO-SANCT-001 — Santuário
- BW-HB-GUARD-001 — Guardiões de Santuário
- BW-HB-RECOG-001 — Reconhecimento
- BW-HB-BOND-001 — Vínculo
- BW-HB-BLESS-001 — Bênção
- BW-BIO-ECHO-001 — Eco
- BW-MET-RESON-001 — Ressonância Profunda
- BW-HIS-ASH-001 — Cinza Longa
- BW-HIS-ACCORD-001 — Primeiros Acordos
- BW-HIS-CRIME-001 — Crime Fundador
- BW-ECO-DECLINE-001 — Declínio das Grandes Bestas
- BW-POL-MONOP-001 — Monopólio Dinástico de Acesso
- BW-HB-WILDBLESS-001 — Bênção Selvagem
- BW-BIO-CULTMEM-001 — Memória Cultural das Bestas
- BW-POL-ICONBEAST-001 — Besta Icônica de Santuário
- BW-HB-ARTBLESS-001 — Bênção Artificial

Todos permanecem `HYPOTHESIS` nesta leva.

## Fila intelectual — P0

1. `BW-Q-MET-001` — natureza mínima da Ressonância na verdade do autor.
2. `BW-Q-HB-002` — mecanismo mínimo da Bênção e papel causal da oferta voluntária.
3. `BW-Q-BIO-003` — herança, diluição e concentração do Eco.
4. `BW-Q-POL-004` — prova jurídica de Reconhecimento.
5. `BW-Q-ECO-005` — por que Santuários não são facilmente replicáveis.
6. `BW-Q-ECO-006` — causalidade composta do Declínio.
7. `BW-Q-HIS-007` — forma concreta do Crime Fundador.

P1: Cinza Longa; bestiário/nichos; motivo do Reconhecimento do protagonista; cognição das Bestas; Bênção Artificial.

## Bíblia pré-canônica v0.1

Foi registrada como fonte histórica e recebeu intake/migration map no Notion. O conteúdo ainda pouco atomizado — geopolítica, motor de personagens, combate, linguagem, cultura, economia das Bestas, mistério, testes de público e adaptação — não deve ser perdido; será migrado conforme entrar no ciclo ativo.

## Não fazer ainda

- não congelar nomes provisórios;
- não criar sete espécies só para sete Dinastias;
- não tornar todas as Bestas ovos/dragões retexturizados;
- não explicar tudo por um deus único;
- não criar elemento universal por criatura em lógica de classe;
- não transformar Vínculo em montaria/telepatia automática;
- não expandir dezenas de Casas antes do núcleo causal estar estável.

## Próximo passo recomendado

Resolver a fila P0 por blocos de pesquisa/decisão. Cada bloco deve terminar em: fontes → alternativas → Devil's Advocate → decision gate → ADR se necessário → atualização de lore/grafo → regressão → PR → sync Notion.