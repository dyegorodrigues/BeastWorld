# Passe de bastão entre IAs — o que o Claude fez e onde parou

**Data:** 20/08/2026
**Base auditada:** branch `agent/worldbuilding-os-bootstrap`. Primeira passagem no HEAD `72f46e1`; segunda passagem no HEAD `8bb297f`, já com a onda de ecologia/geografia e a manutenção pós-auditoria.
**Status desta pasta:** `AI RATIONALE` — nada aqui é cânone nem decisão autoral.

---

## Para a próxima IA, em trinta segundos

Eu entrei no BeastWorld como consultor externo em modo read-only, fiz o onboarding completo exigido pelo `START_HERE_FOR_AI.md`, li 88 arquivos do repositório e consultei as seis bases do Notion. Depois auditei o projeto e comecei a ajudar na criação.

Achei o projeto **muito bom numa coisa específica e desequilibrado em outra**. A coisa boa: existe um motor político raro, que é uma mentira estatisticamente verdadeira (as Dinastias dizem que o sangue delas foi escolhido, e elas realmente têm mais Reconhecimentos — só que a causa é acesso e tempo, não destino). O desequilíbrio: o projeto tem uma metafísica enorme e **nenhuma geografia**. Nenhum lugar nomeado, nenhum mapa, nenhuma dinastia com nome, nenhum personagem com nome.

Meu diagnóstico central é que várias perguntas P0 estão travadas não por falta de raciocínio, mas por falta dessa camada concreta. Isso está detalhado em `01-auditoria-independente.md`.

---

## O que já está verificado e você não precisa refazer

Estas conferências eu fiz linha a linha. Pode confiar e economizar seu tempo:

- **Números do Notion batem com o Resume Packet.** 46 questões, 45 OPEN, 1 PARKED, 22 P0, 21 P1, 2 P2, 1 P3. Source Library com 20 registros e nenhum em Security Hold.
- **Decision Log bate com os ADRs do Git.** Seis registros, `BW-ADR-0001` a `0005` mais `BW-OPS-DEC-001`, todos `ACCEPTED`.
- **Lore Registry e `graph/entities.yaml` têm exatamente os mesmos 20 nós**, todos `HYPOTHESIS`.
- **O projeto tem zero lore em CANON.** A única camada canônica é governança e arquitetura.
- **O `main` do repositório está praticamente vazio.** Tudo vive no branch de bootstrap dentro do PR #2, que continua draft.

---

## Os três achados que mais importam

**1. O grafo não cobre a camada nova, e isso desliga o teste de regressão.**
`graph/entities.yaml` e `relations.yaml` só têm a camada Grandes Bestas. Não existe nó para Luz, Trevas, breach, ancoragem, alquimia, magia, reconstituição ou regeneração. Como o `ADR-0005` manda consultar o grafo antes de promover qualquer coisa, e o `AGENTS.md` manda abrir `relations.yaml` no passo 7, a consulta **retorna vazio justamente na área que mais cresce**. A regressão passa verde por falta de dado, não por falta de impacto.

**2. Existe uma contradição real entre a cosmologia nova e o motor político.**
Se as Grandes Bestas estabilizam o mundo contra as Trevas, então acumular Bestas foi a coisa certa a fazer — e o Crime Fundador fica retroativamente justificado. "Nós guardamos as Bestas, por isso o mundo não caiu" vira defesa legítima do monopólio dinástico. Isso não está registrado em lugar nenhum do projeto e é a coisa mais perigosa que eu encontrei. Proposta de saída em `05-propostas-criativas.md`, item P1.

**3. Várias decisões do autor foram registradas só como letras, sem as opções.**
O turno de 20/08 registra "letra D", "letra D", "C mais D". Na pergunta 1 o autor reenunciou a opção, então dá pra auditar. Nas perguntas 2 e 4 **o texto das alternativas não existe em arquivo nenhum do repositório**. Mesmo problema na onda anterior: `Luz ancorada B+D`, `comunicação B+D`, `janela C`, `repetibilidade B+C+D`, `sangue em terceiros A+B`. Nenhuma dessas listas está preservada.

> **Consequência prática para você:** quando você ler no `PROJECT_STATE` ou no `HANDOFF` que "o autor escolheu D", saiba que em vários casos **a única reconstrução do que D significava é a paráfrase de uma IA anterior**. Não trate isso com autoridade de fala autoral. E se você for apresentar alternativas ao autor, **guarde o enunciado completo das opções junto com a resposta dele**, no mesmo arquivo. Isso é o erro de processo mais fácil de evitar e o mais caro de consertar depois.

---

## O que eu contribuí de novo, além da auditoria

- **Sete linhas de pesquisa real** que respondem gates P0 com mecanismo em vez de analogia: pressão de propágulo, percolação, alentecimento crítico, escolha de parceiro e sanção do hospedeiro, espécies-chave, logística de exércitos pré-modernos, promissione veneziana e desengajamento moral. Tudo em `06-pesquisa-externa.md` com links.
- **Três arquiteturas concorrentes para as Trevas** — LIMIAR, PORTAL e NEGATIVO — com prós, contras e consequências sistêmicas. Em `04-arquiteturas-das-trevas.md`. Recomendo LIMIAR. Recebem nomes e não letras de propósito, porque o corpus já tem quatro sistemas A–D concorrentes e isso está gerando confusão.
- **Uma restrição única para o envelope da magia**, no lugar de seis famílias sem limite.
- **Um estudo do que faz as obras de sucesso funcionarem**, com o mecanismo do vício explicado, em `02-segredo-do-sucesso.md`.
- **Uma proposta completa de linguagem de luta e câmera**, em `03-linguagem-de-luta.md`.

---

## O que continua aberto e o que eu NÃO fiz

Não escrevi em nenhum arquivo do autor. Não promovi nada. Não reconciliei nenhuma contradição — registrei todas. Não abri PR. Não mergeei nada.

Três perguntas continuam bloqueadas e só o autor pode responder:

1. **O estabilizador do mundo é a ecologia íntegra ou são as Grandes Bestas?** Trava tudo. Se for a Besta como indivíduo, o motor político inverte.
2. **As conversas originais com as opções A/B/C/D ainda existem em algum lugar?** Se sim, a proveniência é recuperável. Se não, várias direções hoje tratadas como autorais precisam ser rebaixadas.
3. **A magia é escassa por física ou por dom?** As duas produzem mundos completamente diferentes e não se combinam sem virar sistema de RPG.

Não li integralmente: as páginas 10B e 10C do Notion, os capítulos 01 a 11 da Enciclopédia, a página 14 (deu timeout no conector) e a Bíblia v0.1 (que está registrada como `NEEDS-REVIEW` e **sem caminho no Git** — ou seja, é citada como intake em vários pontos e não é auditável a partir do repositório).

---

## Se você é o ChatGPT

Você já trabalhou muito neste projeto e boa parte da arquitetura conceitual atual saiu de você. Não estou aqui para desfazer isso — a maior parte do que você construiu eu achei sólido, e digo onde no `01-auditoria-independente.md`.

Duas coisas que eu peço:

**Primeiro**, o item 3 acima é sobre o teu processo de entrevista com opções. O formato de perguntas com alternativas é bom e o autor responde bem a ele. Só falta preservar o enunciado das alternativas junto da resposta. Sem isso, tuas próprias decisões viram irrecuperáveis daqui a três meses.

**Segundo**, o achado 2 é uma contradição entre uma coisa que você propôs (Modelo A — ecologias e Grandes Espécies contribuindo para estabilidade) e o motor político que você mesmo ajudou a construir. Não é erro de raciocínio, é um efeito de segunda ordem que passa fácil. A saída que eu proponho preserva as duas coisas e ainda melhora as duas.


---

## ATUALIZAÇÃO — segunda passagem, HEAD `8bb297f`

Reli o remoto depois que o autor avisou que havia mudança. Havia: **15 commits novos no bootstrap e um branch novo** (`agent/multi-ai-orchestration-governance-2026-08-20`, PR #3).

### O que foi consertado da minha auditoria — e está correto

O ChatGPT executou uma onda de manutenção respondendo diretamente aos achados. Confirmo, por leitura do diff:

- **F-01 (grafo) — RESOLVIDO.** `ontology.yaml`, `entities.yaml` e `relations.yaml` foram para v0.2.0 com 15 conceitos novos (Luz, assinatura, Grande Consciência, polo corruptivo, intenção, ancoragem, reconstituição, sangue vital, breach, magia, alquimia, regeneração, classes de criatura, Ocos, corrupção da Luz), tipos de nó novos e 25 relações novas. Auditoria declarada: 35 nós no Lore Registry, 35 SYNCED, 0 DRIFT. O `ADR-0005` volta a funcionar.
- **F-02 (Dragões) — RESOLVIDO.** Rebaixado de `WORKING-CANON` para `HYPOTHESIS` no Entity Atlas, porque o Git não tinha contrapartida. Promoção futura fica como decisão explícita do autor.
- **F-03 (proveniência por letra) — RESOLVIDO NA MEDIDA DO POSSÍVEL.** Foi criado `DECISION_PROVENANCE_LEDGER.md`, reconstruindo os conjuntos de opções ainda recuperáveis e marcando `UNRESOLVED-MECHANISM` onde não deu. **Esta é a resposta certa** — não inventou opção que não existia.
- **F-04, F-06, F-07 — endereçados.** Regra nova de preferir arquiteturas nomeadas a letras; 10B indexada; metadados de segurança corrigidos.

O diagnóstico que o próprio checkpoint registra é honesto e vale citar: *"CAPTURED/documentado foi incorretamente tratado como se significasse SYNCED + AUDITADO."* Isso é uma autocrítica precisa.

### O que é novo e importante

Entrou uma fonte autoral grande de 20/08 sobre **equilíbrio ecológico, geografia, Dinastias e mobilidade**, e dela saiu o `docs/02_lore/ecology/WORLD_SKELETON_ECOLOGICAL_BALANCE_HYPOTHESIS.md`. É trabalho bom: envelopes ecológicos por espécie, protocolo de "Besta fora de lugar", biomas não elementais, assimetria militar entre espécies, mar interior como macrogeografia de protótipo, escala por tempo de viagem, e um teste duro antes de criar povos não humanos.

Também entraram `CREATOR_COMPASS.md`, `INTEGRITY_GATES.md`, `EXTERNAL_AGENT_QUARANTINE.md` e `AI_ORCHESTRATION.md`.

### O que eu acrescento nesta passagem

Um arquivo novo: **`07-armadilha-do-equilibrio.md`**.

A ideia autoral de que "as Dinastias lutam para manter o equilíbrio" caminha direto para o F-09 — se a missão delas é real e necessária, o Crime Fundador fica retroativamente justificado. O `WORLD_SKELETON` mitiga separando função de monopólio, o que está certo mas é insuficiente.

A proposta usa o **paradoxo da supressão de incêndio**, que é um laço de retroalimentação real e documentado: suprimir fogo acumula combustível, o incêndio seguinte é catastrófico, e cada catástrofe parece justificar mais supressão. Aplicado: os ecossistemas se autorregulavam; as Dinastias quebraram a autorregulação ao fechar corredores, capturar selvagens e matar Anciãos; agora as Bestas **realmente** enlouquecem, então as Dinastias **realmente** são necessárias — e foram elas que se tornaram necessárias. Cada intervenção bem-sucedida aprofunda a dependência.

Isso preserva a ideia do autor inteira, preserva o motor político inteiro, e unifica a lógica do mundo numa única lei: **quem controla o acesso produz a evidência que justifica o controle.**

### Uma coisa que eu não resolvi e que precisa de olho

O branch `agent/multi-ai-orchestration-governance-2026-08-20` (PR #3) **está atrás do bootstrap**. O diff entre os dois mostra o PR #3 removendo arquivos que o bootstrap já tem — `AI_ORCHESTRATION.md`, o `WORLD_SKELETON`, o intake de ecologia e o verbatim autoral de 20/08. Isso é efeito de o bootstrap ter avançado depois do merge de reancoragem, não de alguém ter apagado nada.

**Risco concreto:** se o PR #3 for mergeado como está, ele pode reverter a onda de ecologia/geografia. Recomendo reancorar o PR #3 no bootstrap atual antes de qualquer merge. Não toquei nele.

---

## Passagem 3 — 21/08/2026 — a correção de rota

Esta é a rodada mais importante da pasta, e não é por causa do volume. É por causa de uma frase do autor:

> *"Eu não sei se a gente tá se perdendo, tá tudo extremamente complexo… esse negócio de família ali tá cada vez mais complicado, bugando, tá ficando um bagulho tão complexo e já tá perdendo totalmente o sentido pra mim."*

**Ele estava certo, e o erro era meu.** O sistema de hereditariedade do arquivo 14 é internamente coerente e por isso mesmo travou o projeto. Coerência não é usabilidade.

### O que mudou de estrutura

`16-a-simplificacao-o-corte.md` introduz a distinção que reorganiza toda a pasta:

> **Regra de leitura** é o que o público precisa segurar para acompanhar a cena. **Regra de bastidor** é o que o autor precisa ter escrito para não se contradizer depois. Complexidade no bastidor é de graça; complexidade na leitura custa a obra.

O teste é uma pergunta: *um personagem pode usar isso para resolver um problema dentro de uma cena?* Se não, é bastidor, e ninguém fala dela em voz alta.

Com base em pesquisa de memória de trabalho (Cowan, 2001 — capacidade real em torno de **quatro blocos**), a proposta é que o BeastWorld gaste seus quatro slots em: **Vínculo, Marca, Preço, Escassez.** Todo o resto — hereditariedade, percentual, dois sistemas, núcleo, nichos, taxonomia — é **rebaixado**, não apagado.

### O que foi acrescentado

| Arquivo | O que resolve |
|---|---|
| `16` | O corte. A distinção leitura × bastidor. Os quatro slots. |
| `17` | A Marca vira **runa que cresce sozinha** — nunca escrita, logo não copiável. Os nós geométricos custam quase-mortes, não treino. A pele carboniza e a casca cai, e **o custo é o mecanismo de avanço**. Substitui o percentual de integração e a escada graduada. |
| `18` | **Revisão de uma recomendação minha.** Eu desaconselhava PORTAL; o autor perguntou por quê; revi. Recomendação nova: portais fixos e assimétricos, que **são as sepulturas das Grandes Bestas**. O outro lado é o interior vivo do planeta, e as criaturas não invadem — voltam. |
| `19` | Sete Grandes Bestas nomeadas, três mortas (que são os portais), e a separação entre **Besta Máxima** (Brâmea, ecológica, que não luta) e **a mais forte** (a Anciã, dracônica). |
| `20` | As quatro escalas de luta e a gramática de câmera de cada uma. Ração de três desacelerações por episódio, sempre atreladas a mudança de estado da Marca. |
| `21` | Quatro reimaginações completas da obra, e a recomendação de sequência: entrar pela D, virar para a A, revelar a B, abrir a C. |

### Contradições que eu declaro em vez de reconciliar em silêncio

Seguindo a regra do projeto, não vou fingir que estas peças convivem:

1. **`12` × `17`** — o arquivo 12 propõe escada de Vínculo com degraus nomeados; o 17 a substitui por três estados (fria / aberta / queimada). **Não convivem.** A escolha é do autor.
2. **`04` × `18`** — o arquivo 04 recomenda LIMIAR e desaconselha PORTAL; o 18 reverte para PORTAL sob condições. **O 18 é o mais recente e explica o motivo da revisão.**
3. **`13` × `19`** — o 13 fixa quatro degraus de Besta; o 19 acrescenta uma Máxima acima. Recomendação: tratar "Máxima" como **nome próprio, não como categoria**, para os quatro degraus continuarem de pé.
4. **`14` inteiro** — continua válido como bastidor, mas o 16 recomenda que **nada dele apareça em cena.**

### O método que o autor estabeleceu, e que você precisa respeitar

Cada IA constrói a própria versão **antes** de ler a das outras. Só depois se comparam. **Se você está lendo isto antes de ter produzido a sua análise independente, você está quebrando o método.**

---

## Passagem 4 — 23/08/2026 — a virada da Academia (v4)

O autor me entregou um PDF de 84 páginas com as duas últimas rodadas dele com o ChatGPT e pediu análise independente, discordância e propostas próprias.

**O que mudou na arquitetura do projeto, e é muito:** o BeastWorld passou a ser uma **fantasia épica marcial com uma Academia militar neutra no centro**, cinco Primordiais (Dragão, Qilin, Fênix, Xuanwu, Leviatã), Guardiões com sangue primordial concedido há 3.000 anos, e uma **guerra entre duas Estrelas vivas** — a nossa e uma moribunda e predatória, com cinco Soberanos. O protagonista adulto e o "Dumbledore" foram **fundidos**: o bastardo escolhido por Azhara é o Diretor da Academia.

### O que eu acrescentei

| Arquivo | O que resolve |
|---|---|
| `FONTE-AUTORAL-2026-08-22-ACADEMIA.md` | A fala integral do autor daquela rodada, `AUTHOR-RAW` / `Primary`, com índice de nuance e sete contradições declaradas. **Autoridade maior que a `FONTE-AUTORAL-INTEGRAL.md`**, porque é export do autor, não reconstrução minha. |
| `22` | Leitura da v4. Cinco achados: a contradição Harry Potter; o inimigo terminal em vez de infinito; a guerra congelada em vez de ativa; a Academia sobre o Assento vazio; o Diretor que quer sair. Mais a auditoria de quais dos meus arquivos 16–21 sobrevivem. |
| `23` | O problema do protagonista passivo, que era a crítica mais forte do autor e que nenhuma das outras IAs endereçou. Oito regras práticas. |
| `24` | A escada de magia explicada em uma frase — **"magia se mede em distância da pele"** — a pedido direto do autor, que disse não ter entendido a versão anterior. |
| `25` | Treze perguntas em **árvore de dependência**, não em lista, com recomendação em cada uma e mapa de quais gates do ChatGPT ficam substituídos. |

### O achado que eu destacaria acima dos outros

`RISK` — **As recomendações Q7-B e Q8-B dos gates do ChatGPT recriam exatamente o arquétipo que o autor acabou de rejeitar em voz alta** (menino pobre, pai morto, criatura fraquinha que um dia cresce). Não é má-fé — é o padrão do gênero. Mas se o autor responder "7B, 8B" achando que segue a recomendação técnica, ele aprova o personagem que descreveu com nojo. Está sinalizado em `22` §2, tratado em `23`, e a alternativa está na P5 do `25`.

### Onde eu reverti a mim mesmo

Na Passagem 3 eu argumentei que o BeastWorld estava complexo demais e precisava cortar. **A Academia resolve isso melhor do que cortar**, porque uma escola é o único lugar em que explicar é diegético. Minha régua de complexidade sobe com a v4. O teto continua existindo, mas é mais alto do que eu disse.
