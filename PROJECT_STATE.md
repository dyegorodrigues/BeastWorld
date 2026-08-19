# PROJECT_STATE — BeastWorld

**Data de referência:** 2026-08-19  
**Marco:** Worldbuilding OS v0.2 — bootstrap + memória/handoff + ingestão crítica Meta AI.

## Estado geral

O BeastWorld opera com duas camadas complementares:

- **GitHub privado** como fonte versionada/auditável;
- **Notion privado** como Wiki relacional, sistema de pesquisa, timeline e interface de estudo.

A infraestrutura continua no draft PR #2. O lore das Grandes Bestas e as novas ideias do brainstorm Meta AI continuam em revisão; documentação não equivale a canonização.

## GitHub — estado reancorado nesta leva

- repo: `dyegorodrigues/BeastWorld` — **private**;
- `main`: `8b0b54691fac646d0874fe51c98d6b5d7821eb92`;
- branch: `agent/worldbuilding-os-bootstrap`;
- draft PR: `#2 — Bootstrap BeastWorld Worldbuilding OS`;
- PR: open + draft + unmerged + mergeable;
- HEAD antes desta ingestão: `65ebb78dfe74c303ff1bf9781a408ac7dd5cb6f3`;
- reviews: 0;
- review threads: 0;
- nenhum workflow/status check configurado no bootstrap.

### Nota de segurança

Durante a sessão de 19/08 o conector reportou o repositório como público. A escrita de novo IP foi interrompida. O autor alterou a visibilidade; antes desta ingestão o remoto foi revalidado como **private**. Nenhum material novo sensível foi gravado durante o hold.

## Arquitetura de memória

Foi formalizado `docs/00_governance/MEMORY_HANDOFF_PROTOCOL.md`.

### M0 — memória fria / fonte
`docs/08_sources/` — conversas, PDFs, pesquisas e históricos em alta fidelidade.

### M1 — memória semântica
Lore, entities, research, story, visual, graph e databases do Notion.

### M2 — memória quente
`PROJECT_STATE.md` + `HANDOFF.md` + `RETOMADA.md`.

### M3 — memória canônica
Bíblia, módulos promovidos, ADRs, grafo/timeline reconciliados.

Princípio: **compactar para recuperar, nunca compactar para apagar**.

## Notion — arquitetura operacional

Hub: `BEASTWORLD — Worldbuilding OS & Wiki Hub`  
Command Center: `12 — BeastWorld Command Center`

Databases:

1. Lore Registry;
2. Decision Log;
3. Source Library;
4. Research & Open Questions;
5. Entity Atlas;
6. Master Timeline.

Além disso, a Wiki possui intake da Bíblia v0.1, contrato GitHub↔Notion, pacote de retomada, laboratório de personagem, visual development e entrevista guiada de recuperação.

## Decisões arquiteturais aceitas

1. `BW-ADR-0001` — Source Archive, Semantic Lore Layer e Curated Canon são camadas separadas.
2. `BW-ADR-0002` — a leva de 20 pontos das Grandes Bestas permanece `HYPOTHESIS`.
3. `BW-ADR-0003` — GitHub é source of truth versionado; Notion é Wiki/interface cognitiva.
4. `BW-ADR-0004` — Bíblia mestra é síntese; detalhes vivem em módulos menores.
5. `BW-ADR-0005` — alterações conceituais estruturais passam por regressão de lore.

`BW-OPS-DEC-001` registra a decisão histórica de não depositar BeastWorld nos repositórios públicos existentes antes do repo dedicado.

## Núcleo causal das Grandes Bestas

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

## Novo Source Record — Meta AI

`BW-SRC-2026-08-19-METAAI-BRAINSTORM`

Origem: `Ideias bagunçadas (1).pdf`, 18 páginas.

Hash do PDF original:
`f6fa4e046e38c944ebf4a4871689ea258b3ef6588a206a2db60eede7705f051e`

A transcrição extraída foi dividida em três arquivos raw. A divisão é técnica; nenhum trecho deve ser tratado isoladamente como conclusão.

### Regra de autoridade

- fala do autor = fonte primária de intenção/dúvida;
- resposta Meta AI = proposta secundária/exploratória;
- tom afirmativo da Meta não cria decisão;
- intake crítico separa `KEEP / MODIFY / REJECT / RESEARCH`.

## Elementos fortes recuperados do brainstorm

- marcialidade como valor civilizacional;
- disciplina e treino acima de talento bruto;
- pessoas sem Eco podem ser extraordinárias;
- combate rápido, técnico e corporal;
- arma curva original do protagonista como pista visual;
- várias Grandes Espécies por ecossistema/Santuário;
- filhotes e vínculos de longa duração como possibilidade;
- longevidade humana como hipótese de alto impacto;
- pós-vida/consciência universal como eixo metafísico a pesquisar;
- retorno/ressurreição como questão, não regra;
- Besta-Árvore distinta da consciência universal;
- ameaça comum deve transcender guerra dinástica sem apagá-la;
- protagonista da futura Dinastia do Dragão como character lab;
- casamento e mistura de Ecos como política;
- língua íntima/ritual/manejo como problema sociolinguístico;
- necessidade de controlar biodiversidade visual e budget live action.

## Soluções Meta AI que NÃO foram promovidas

Não aceitar automaticamente:

- `Rhaek`, `Veyra`, `Saelith`, `Lith'an` e nomes dinásticos;
- três gotas de sangue no coração;
- uma Anciã primária por Dinastia;
- cinco classes elementais;
- `Puros/Natos/Legados/Quimera` como taxonomia oficial;
- mãe=fenótipo / pai=aptidão;
- 7 Círculos;
- máximo de 2 vínculos;
- números fixos de longevidade;
- preços fixos de ressurreição;
- Ocos/Vãos/Ruína/Fome no Fundo como antagonista final.

## Fila intelectual original — P0

1. `BW-Q-MET-001` — natureza mínima da Ressonância.
2. `BW-Q-HB-002` — mecanismo mínimo da Bênção.
3. `BW-Q-BIO-003` — herança/diluição do Eco.
4. `BW-Q-POL-004` — prova jurídica de Reconhecimento.
5. `BW-Q-ECO-005` — barreiras à replicação de Santuários.
6. `BW-Q-ECO-006` — causalidade do Declínio.
7. `BW-Q-HIS-007` — forma do Crime Fundador.

## Fila nova — BW-Q-013 a BW-Q-022

### P0
- BW-Q-013 — longevidade;
- BW-Q-014 — persistência após a morte.

### P1
- BW-Q-015 — retorno/ressurreição;
- BW-Q-016 — ameaça comum;
- BW-Q-017 — marcialidade transversal;
- BW-Q-018 — mistura de Ecos/casamento;
- BW-Q-019 — quantidade de Grandes Espécies/produção;
- BW-Q-021 — falha estrutural do protagonista;
- BW-Q-022 — visual da futura Dinastia do Dragão.

### P2
- BW-Q-020 — arquitetura linguística.

## Três tensões temáticas emergentes

- **herança × disciplina**;
- **posse × cuidado**;
- **morte × continuidade**.

Pergunta-síntese:

> **O que recebemos, o que merecemos, o que realmente possuímos e o que apenas recebemos para cuidar e transmitir?**

Status: hipótese de meta-design, não cânone.

## Character Lab — protagonista

Núcleo atual:

- personagem-ímã;
- extraordinária competência marcial;
- justiça sem suavidade;
- regime social magnético;
- regime de ameaça frio e cirúrgico;
- não berserker;
- sexualidade intensa e seletiva;
- alto valor político e de aliança;
- falha deve nascer das próprias virtudes.

Pergunta:

> **E se ele estiver certo sobre quase tudo, menos sobre a única coisa que realmente importa?**

Nenhum nome, casamento, número de parceiros, espécie vinculada ou posição sucessória foi definido.

## Não fazer ainda

- não congelar nomes provisórios;
- não criar sete espécies só para sete Dinastias;
- não tornar Bestas classes elementais;
- não reintroduzir “uma Anciã por família”;
- não explicar tudo por um deus único;
- não transformar Vínculo em montaria/telepatia automática;
- não fechar longevidade antes de modelar demografia;
- não fechar ressurreição antes de proteger stakes;
- não transformar língua em senha mágica;
- não transformar o protagonista em fantasia de poder sem custo;
- não expandir dezenas de Casas antes do núcleo causal estar estável.

## Próximo passo recomendado

Realizar entrevista autoral guiada em blocos. Cada bloco oferece alternativas + consequências + `nenhuma / não sei / outra`, produz classificação `KEEP / MODIFY / REJECT / RESEARCH` e só então altera módulos.

Ordem sugerida:

1. longevidade;
2. pós-vida/retorno;
3. ameaça comum;
4. marcialidade;
5. ecossistemas/espécies/produção;
6. protagonista;
7. casamento/herança;
8. língua;
9. visual.