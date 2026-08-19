# PROJECT_STATE — BeastWorld

**Data de referência:** 2026-08-19  
**Marco:** Worldbuilding OS v0.3 — bootstrap + memória/handoff + ingestão Meta AI + onda Luz/Vínculo/renascimento.

## Estado geral

O BeastWorld opera com duas camadas complementares:

- **GitHub privado** como fonte versionada/auditável;
- **Notion privado** como Wiki relacional, sistema de pesquisa, timeline e interface de estudo.

A infraestrutura continua no draft PR #2. O lore das Grandes Bestas, o brainstorm Meta AI e a nova onda de longevidade/Luz/renascimento continuam em revisão; documentação não equivale a canonização.

## GitHub — estado operacional

- repo: `dyegorodrigues/BeastWorld` — **private**;
- `main`: `8b0b54691fac646d0874fe51c98d6b5d7821eb92`;
- branch: `agent/worldbuilding-os-bootstrap`;
- draft PR: `#2 — Bootstrap BeastWorld Worldbuilding OS`;
- PR: open + draft + unmerged + mergeable no último reanchor;
- reviews: 0;
- review threads: 0;
- nenhum workflow/status check configurado no bootstrap.

**Regra:** sempre reancorar remoto antes de escrita. O HEAD muda a cada checkpoint; `RETOMADA.md`/`HANDOFF.md` descrevem o conteúdo, enquanto GitHub remoto vence qualquer SHA textual antigo.

### Nota de segurança

Durante a sessão de 19/08 o conector reportou o repositório como público. A escrita de novo IP foi interrompida. O autor alterou a visibilidade; o remoto foi revalidado como **private** antes de qualquer ingestão sensível posterior. O incidente permanece preservado para evitar repetição.

## Arquitetura de memória

Formalizada em `docs/00_governance/MEMORY_HANDOFF_PROTOCOL.md`.

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

Páginas editoriais novas/relevantes:

- `13 — Intake Crítico — Brainstorm MetaAI + Visual/Personagem`;
- `14 — Memória, Handoff & Continuidade entre Conversas`;
- `10A — Entrevista de Retomada`;
- `10B — Laboratório Metafísico — Luz, Vínculo, Morte, Reconstituição e Reencarnação — v0.1`;
- `06A — Laboratório de Personagem — Pilar da Dinastia do Dragão`;
- `09A — Visual Development — Dinastia do Dragão e Personagens`.

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

## Source Records principais desta fase

### Grandes Bestas — 20 pontos

- `BW-SRC-2026-08-19-GREAT-BEASTS-20-VERBATIM`;
- `BW-SRC-2026-08-19-GREAT-BEASTS-20`.

### Brainstorm Meta AI

`BW-SRC-2026-08-19-METAAI-BRAINSTORM` — `Ideias bagunçadas (1).pdf`, 18 páginas, hash preservado, raw em 3 partes.

Regra:

- fala do autor = fonte primária de intenção/dúvida;
- resposta Meta AI = proposta secundária/exploratória;
- tom afirmativo da Meta não cria decisão.

### Memória/workflow

- `BW-SRC-2026-08-19-WORKFLOW-REQUEST` — requisito autoral de compactação/handoff;
- `BW-SRC-2026-08-19-CHATGPT-METAAI-AUDIT` — rationale de auditoria preservado.

### NOVO — Longevidade, Luz e renascimento

`BW-SRC-2026-08-19-LONGEVITY-LIGHT-REBIRTH`

GitHub:

- fonte verbatim: `docs/08_sources/conversations/2026-08-19-author-longevity-light-rebirth-verbatim.md`;
- intake: `docs/06_research/2026-08-19-longevity-light-rebirth-critical-intake.md`;
- módulo: `docs/02_lore/mythology/LIGHT_AND_REBIRTH_HYPOTHESIS.md`.

## Direções autorais fortes recuperadas na onda Luz/Vínculo

### Eco

- pode prolongar moderadamente a vida;
- pode carregar fenótipos e aptidões acima da média;
- manifestação é variável, não garantida;
- não equivale à potência integral do Vínculo.

### Vínculo

- principal candidato à longevidade excepcional;
- pode envolver uma ancoragem ressonante recíproca entre humano e Besta;
- essa arquitetura pode unificar longevidade, preservação pós-morte e reconstituição.

### Fertilidade

- tende a se prolongar;
- cai brutalmente com idade;
- declínio médio feminino deve ser muito mais severo;
- homens também podem tornar-se inférteis;
- causa ainda não definida.

### Luz

Termo provisório autoral para continuidade individual:

- consciência;
- memória;
- identidade;
- existência subjetiva.

Não equiparar automaticamente Luz a corpo, sangue, Ressonância ou Grande Consciência.

### Consentimento pós-morte

- parceiro morto pode aceitar permanecer ancorado no sobrevivente;
- pode recusar e retornar à Grande Consciência;
- retenção forçada pode danificar/destruir a Luz;
- isso reforça a coerência “oferta/aceitação” já presente na Bênção.

### Reconstituição vinculada

Hipótese autoral atual:

1. um parceiro morre;
2. Luz é ancorada pelo sobrevivente se aceitar;
3. grande transferência de sangue/material vital;
4. formação de receptáculo/casulo semelhante a ovo;
5. sobrevivente entra em coma/dormência;
6. duração aproximada de um ano como **número provisório**;
7. ambos ficam vulneráveis;
8. morto retorna fraco;
9. recuperação funcional posterior é relativamente rápida.

Preço preferido: **tempo + vulnerabilidade + recursos + risco + consentimento**, não perda automática de anos de vida.

### Reencarnação pela Grande Consciência

Separar de reconstituição.

- Luz já retornou ao substrato universal;
- pode iniciar novo ciclo;
- inicialmente imaginado para Bestas retornando como filhotes;
- parte de memória/consciência pode permanecer;
- identidade perfeita não está garantida;
- possibilidade humana posterior permanece hipótese de saga.

### Se ambos os vinculados morrem

- ancoragem recíproca normal deixa de existir;
- ambas as Luzes retornam à Grande Consciência;
- qualquer recuperação posterior deve ser outro mecanismo, muito mais excepcional.

### Sangue vital

Aberto pelo autor:

- Abençoado/Vinculado pode doar sangue a cônjuge/família/filhos;
- doador enfraquece, mas não perde automaticamente “essência vital” permanente;
- volume/estado recuperam com alimentação;
- Besta pode doar sangue vital ao humano;
- propriedades, compatibilidade, dose e permanência permanecem abertas.

**Risco sistêmico:** mercado negro, captura de doadores, bancos de sangue dinásticos, doping, medicina exclusiva, sequestro e biopoder.

### Alimentação / absorção

O autor abriu a possibilidade de recuperação por alimentação, sangue/presas e seres inimigos/monstros. “Absorver poder” literal NÃO foi aceito ainda. Testar metabolismo, assimilação espécie-específica e nutrição ressonante antes.

### Cosmologia

O autor abriu hipótese de uma condição cosmológica excepcional do mundo e citou Suméria, alienígenas, buraco branco/negro, Matrix e documento atribuído ao FBI.

**Regra:** referências entram como trilhas de pesquisa. Não tratar esoterismo/pop history como evidência sem verificar fonte primária e interpretação acadêmica.

## Hipótese estrutural central desta onda

```text
Reconhecimento
      ↓
   Vínculo
   ↙     ↘
Bênção   ancoragem ressonante recíproca?
             ├─ longevidade excepcional?
             ├─ preservação da Luz após morte?
             └─ reconstituição vinculada?
```

Isso é preferível, como hipótese, a criar uma magia independente para cada fenômeno.

## Axioma-candidato

> **Ressonância profunda estabiliza melhor aquilo que é oferecido/aceito do que aquilo que é tomado/coagido.**

Relaciona-se à frase:

> **Sangue tomado é apenas sangue. Sangue oferecido muda sangue.**

Ainda precisa de regressão: coerção indireta, fraude, incapacidade, relações abusivas e Bênção Artificial.

## Fila intelectual original — P0

1. `BW-Q-MET-001` — natureza mínima da Ressonância.
2. `BW-Q-HB-002` — mecanismo mínimo da Bênção.
3. `BW-Q-BIO-003` — herança/diluição do Eco.
4. `BW-Q-POL-004` — prova jurídica de Reconhecimento.
5. `BW-Q-ECO-005` — barreiras à replicação de Santuários.
6. `BW-Q-ECO-006` — causalidade do Declínio.
7. `BW-Q-HIS-007` — forma do Crime Fundador.

## Fila Meta AI — BW-Q-013 a BW-Q-022

### P0
- BW-Q-013 — longevidade;
- BW-Q-014 — persistência/Luz;
- BW-Q-015 — retorno/reconstituição/reencarnação — elevado a P0 após nova direção autoral.

### P1
- BW-Q-016 — ameaça comum;
- BW-Q-017 — marcialidade transversal;
- BW-Q-018 — mistura de Ecos/casamento;
- BW-Q-019 — quantidade de Grandes Espécies/produção;
- BW-Q-021 — falha estrutural do protagonista;
- BW-Q-022 — visual da futura Dinastia do Dragão.

### P2
- BW-Q-020 — arquitetura linguística.

## Novos gates — BW-Q-023 a BW-Q-026

### P0
- BW-Q-023 — sangue vital: propriedades, compatibilidade e economia;
- BW-Q-024 — duração/limite da ancoragem da Luz;
- BW-Q-026 — repetibilidade da reconstituição sem reset tático.

### P1
- BW-Q-025 — condição cosmológica especial do mundo.

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
- não transformar Ancião em tier/divindade;
- não criar sete espécies só para sete Dinastias;
- não tornar Bestas classes elementais;
- não reintroduzir “uma Anciã por família”;
- não explicar tudo por um deus único;
- não transformar Vínculo em montaria/telepatia automática;
- não fixar longevidade por número universal;
- não fixar um ano como constante cosmológica sem teste;
- não transformar morte em reset gratuito;
- não tornar sangue uma poção universal;
- não afirmar origem alienígena ou cosmologia FBI/Suméria sem pesquisa;
- não transformar língua em senha mágica;
- não transformar o protagonista em fantasia de poder sem custo;
- não expandir dezenas de Casas antes do núcleo causal estar estável.

## Próximo passo recomendado

Continuar entrevista autoral guiada **neste mesmo bloco metafísico** antes de mudar de assunto.

Ordem:

1. distinguir Luz / assinatura ressonante / Ressonância / Grande Consciência;
2. definir estado e janela da Luz ancorada;
3. definir reconstituição versus reencarnação e repetibilidade;
4. definir sangue vital e compatibilidade;
5. só então quantificar faixas de longevidade e fertilidade;
6. depois avançar ameaça comum, marcialidade, ecossistemas, protagonista, casamento/Eco, língua e visual.

Cada bloco: alternativas + consequências + `nenhuma / não sei / outra` → registro → regressão → só depois promoção.