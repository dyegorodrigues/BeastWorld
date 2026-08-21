# Auditoria independente — o que está quebrado e por quê

**Status:** `AI RATIONALE`.
**Base:** branch `agent/worldbuilding-os-bootstrap`, HEAD `72f46e1`, PR #2 aberto e em draft.
**Método:** onboarding completo pelo `START_HERE_FOR_AI.md`, leitura de 88 arquivos, consulta por SQL às seis bases do Notion, conferência linha a linha entre Git e Notion.

Cada achado abaixo tem três partes: **o que é**, **por que isso importa para a história**, e **o que fazer**. Escrevi em linguagem simples de propósito — a versão técnica está na conversa original.

---

## Primeiro, o que está certo

Não vou listar problema sem dizer o que está bom, porque isso distorce a leitura.

**O sistema de governança está funcionando de verdade.** Testei num ponto sensível. Na fonte de 20/08 o autor disse que a regeneração exigiria "uma pureza genética muito alta". Isso é fala autoral, autoridade primária, alta confiabilidade — e o intake **recusou promover**, classificou como linguagem exploratória e propôs "fidelidade ressonante" no lugar, justificando pela coerência com o Crime Fundador.

Um sistema que impede o próprio autor de canonizar por acidente uma frase que destruiria o tema da obra é um sistema que está fazendo trabalho real. Poucos projetos têm isso, e vale defender.

**O guardrail contra explicação retroativa também está certo.** As Trevas não podem ser a causa secreta da Cinza Longa, do Crime Fundador ou de toda crueldade humana. Isso está escrito em quatro documentos diferentes e é o que separa fantasia adulta de fantasia adolescente.

---

## Os problemas, em ordem de gravidade

### F-01 — O grafo não cobre a camada nova, e isso desliga o teste de regressão

**O que é.** O projeto tem um grafo de conhecimento em `graph/entities.yaml` e `graph/relations.yaml`. Ele serve para responder "se eu mudar isto, o que mais quebra?". Hoje ele tem 20 nós e 26 relações, **todos da camada Grandes Bestas**. Não existe nó nenhum para Luz, assinatura ressonante, Grande Consciência, Trevas, breach, Oco, ancoragem, alquimia, magia, reconstituição ou regeneração. O arquivo de ontologia nem sequer tem tipos de nó para essas coisas.

**Por que isso importa.** O `ADR-0005` manda consultar as dependências do grafo antes de promover qualquer coisa. O `AGENTS.md` manda abrir `relations.yaml` no passo 7 da leitura. Só que, para toda a camada nova — que é a que mais cresce e a que mais depende de outras coisas — **essa consulta devolve vazio**. Ou seja: o teste de segurança passa no verde porque não tem dado, não porque não tem impacto.

Na prática: se você mudar a Bênção hoje, o grafo avisa corretamente sobre Vínculo, Eco e Bênção Selvagem. E fica calado sobre Luz, ancoragem, reconstituição, regeneração e sangue vital — que dependem dela de um jeito muito mais frágil.

**O que fazer.** Criar os tipos de nó novos e registrar os conceitos novos com as dependências que já existem escritas em prosa nos módulos. É trabalho mecânico de poucas horas e é o maior ganho de segurança disponível hoje.

---

### F-02 — Um conceito está marcado como decidido sem ter sido decidido

**O que é.** No Entity Atlas do Notion, "Dragões — família de Grandes Espécies" está com status `WORKING-CANON` e marcado como `SYNCED` com o Git. Mas o arquivo do Git para o qual ele aponta diz, literalmente: *"Nenhuma lista final de espécies está canonizada"*, e lista dragões como **candidata**. Não existe ADR promovendo. O Decision Log tem seis registros e nenhum trata de espécies.

**Por que isso importa.** O `AGENTS.md` e o contrato de sincronização proíbem em termos expressos promover algo a `WORKING-CANON` só no Notion. Este é o **primeiro precedente** disso no projeto — e precedente é copiado. Substantivamente a promoção até é defensável, já que a Bíblia afirma que dragões existem. O problema é de processo, e é o tipo de coisa que, em seis meses, produz duas versões incompatíveis da verdade.

**O que fazer.** Duas saídas legítimas, e a escolha é do autor: abrir um `ADR-0006` promovendo formalmente, ou rebaixar o registro do Notion para `HYPOTHESIS` e marcar `DRIFT` até haver decisão. O que não é legítimo é deixar como está.

---

### F-03 — Decisões registradas como letras, sem as opções

**O que é.** Quando uma IA apresenta alternativas ao autor, ele responde "letra D". O turno de 20/08 registra "letra D", "letra D", "C mais D". Na pergunta 1 o autor reenunciou o conteúdo da opção, então dá pra auditar. Nas perguntas 2 e 4 — *como as Trevas surgiram* e *é possível usar o poder delas sem cair* — **o texto das alternativas não existe em arquivo nenhum do repositório**. Eu procurei no corpus inteiro.

O mesmo problema vem da onda anterior. O `PROJECT_STATE` registra "Luz ancorada B+D, comunicação B+D, janela C, repetibilidade B+C+D, sangue em terceiros A+B". Nenhuma dessas listas de opções está preservada.

**Por que isso importa.** O protocolo de memória do projeto tem um princípio central: quando houver dúvida ou disputa sobre nuance, **volte à fonte**. Aqui não há fonte para voltar. A única reconstrução dessas decisões é a paráfrase da IA que escreveu o intake depois — que é inferência de IA circulando com autoridade de direção autoral.

Daqui a seis meses, quando alguém discordar de uma dessas direções, não vai haver como verificar o que o autor realmente escolheu.

**O que fazer.** Instituir a regra: **o enunciado completo das alternativas entra no arquivo junto com a resposta**. E tentar recuperar, das conversas originais que ainda existirem, as listas de `BW-Q-024`, `026`, `028`, `029` e das perguntas 2 e 4 da onda das Trevas. Se as conversas não existirem mais, marcar essas decisões como proveniência não resolvida em vez de deixá-las passando por direção autoral consolidada.

---

### F-04 — Quatro sistemas de letras A–D competindo no mesmo texto

**O que é.** O corpus tem, ao mesmo tempo: Camadas A–F (a ontologia: Corpo, assinatura, Luz, Ressonância, Grande Consciência, polo), Modelos A–D (por que a ameaça surge agora), Categorias A–F (o bestiário) e opções A–D (as alternativas de decisão).

**Por que isso importa.** Somado ao F-03, "o autor aceitou D" pode significar três coisas diferentes. Isso quase deu problema: o intake escreve *"preferir arquitetura B+C"* e o módulo escreve *"a direção autoral aceita D"* — é a mesma coisa, porque D **era** B+C, mas eu só descobri isso lendo o verbatim inteiro. Uma IA com pressa concluiria que são duas decisões conflitantes.

**O que fazer.** Dar nome às coisas em vez de letra. Neste conjunto de arquivos eu já faço isso: as arquiteturas das Trevas se chamam LIMIAR, PORTAL e NEGATIVO.

---

### F-09 — A cosmologia nova ameaça derrubar o motor político

Este é, na minha opinião, o achado mais perigoso, e ele não está registrado em lugar nenhum.

**O que é.** Um dos modelos favoritos para explicar "por que a ameaça surge agora" diz que ecossistemas íntegros e Grandes Espécies contribuem para a estabilidade do mundo. O intake registra um risco disso: fazer as Bestas parecerem torres de defesa cósmicas.

Mas existe uma consequência bem pior. **Se as Grandes Bestas estabilizam o mundo contra as Trevas, então acumular Bestas foi a coisa certa a fazer.** "Nós guardamos as Bestas, e é por isso que o mundo não caiu" vira uma defesa legítima do monopólio dinástico. A propaganda deixa de ser propaganda e vira política de defesa nacional.

**Por que isso importa.** O motor central da obra — a inversão causal, a mentira que é estatisticamente verdadeira, o Crime Fundador como apropriação injustificável — **se inverte**. As Dinastias passam a ter razão. A obra perde o melhor argumento que tem.

**O que fazer.** A saída está em `05-propostas-criativas.md`, item P1, e ela vem de ecologia real: uma espécie-chave funciona por processo de paisagem — movimento pelo território, corredores, transporte de nutrientes. Portanto **uma espécie-chave engaiolada não é uma espécie-chave.** O estabilizador não são as Bestas de Santuário sob controle dinástico; são as populações selvagens, os corredores e a ecologia íntegra. Aí o açambarcamento não protegeu o mundo — foi exatamente o que quebrou o estabilizador.

---

### F-10 — A reconstituição está comendo as apostas da obra

**O que é.** Reconstituição vinculada — a Luz fica ancorada, forma-se um casulo, leva cerca de um ano, e não existe contador de vidas. A trava atual é "repetir aumenta o risco e deixa cicatrizes".

**Por que isso importa.** Isso é um limite **mole**, e público lê limite mole como ausência de limite. A partir do momento em que a plateia entende que um par vinculado pode voltar, toda morte de vinculado vira provisória — e os protagonistas são, por construção, vinculados. Uma obra em que a morte não cobra perde o mecanismo descrito em `02-segredo-do-sucesso.md`, item 5, que é justamente o que faz o público se importar.

Tem também um efeito de segunda ordem que ninguém registrou: **se reconstituição existe, capturar um par em casulo é a operação militar mais valiosa do mundo.** Isso deveria ser doutrina conhecida, deveria existir arquitetura de cripta nos Santuários, e deveriam existir guerras travadas por causa de gente dormindo. Nada disso está no projeto.

**O que fazer.** Proposta em `05-propostas-criativas.md`, item P2.

---

### F-11 — "Luz" e "Trevas" estão trabalhando contra o próprio sistema

**O que é.** Os dois termos estão marcados como provisórios e existe um guardrail contra canonizar nome por repetição. Mas "Trevas" já aparece mais de quarenta vezes no corpus.

**Por que isso importa.** O problema é maior que o de um nome provisório qualquer. Esses dois termos **carregam para dentro do sistema exatamente o binário moral que o eixo A/B foi construído para destruir**. Toda vez que alguém escreve "Trevas", empurra o leitor — e a próxima IA — de volta para "escuro igual a mau". O módulo de cosmologia já gasta um parágrafo inteiro se defendendo disso.

**O que fazer.** Manter os dois como **nomes in-world** — populares, religiosos, de propaganda, que é onde eles são ótimos — e dar à verdade do autor nomes que descrevam o mecanismo, não a cor.

---

### F-12 — A magia tem seis famílias e nenhuma restrição

**O que é.** O gate `BW-Q-044` lista Artes de Vínculo, Guarda, alquimia, contemplativas, ritos de morte e artes corruptivas.

**Por que isso importa.** Isso é uma lista de efeitos, não um envelope. Envelope é definido pelo que o sistema **não pode fazer**. Hoje a única restrição real é negativa e estética ("não criar classes elementais"). Sem uma escassez dura, as seis famílias crescem sem limite e a magia passa a resolver o que o roteiro precisar — que é como sistemas mágicos matam tensão.

**O que fazer.** Proposta de restrição única em `04-arquiteturas-das-trevas.md`, seção final.

---

## Lacunas menores, todas verificadas

**F-05 — A cronologia não tem a ameaça.** A Master Timeline tem 13 eventos, todos do arco Bestas e dinastias. Nenhum da camada de ameaça. E `BW-Q-042` — "por que a ameaça surge agora" — é P0 e é, por definição, uma pergunta de cronologia. Ela não tem onde ser respondida. Isso não é esquecimento, é sintoma de que falta uma camada, não raciocínio.

**F-06 — A Enciclopédia pula um capítulo.** O índice lista 10C e 10D mas não 10B, que existe e está atualizada. Um leitor humano seguindo a rota recomendada pula a camada Luz e cai direto na cosmologia que a pressupõe.

**F-07 — Higiene de fontes.** Quatro dos vinte Source Records estão com o campo de segurança vazio, não com "OK". E a Bíblia v0.1 está marcada como precisando de revisão **e sem caminho no Git** — ou seja, ela é citada como material de origem em vários pontos do sistema e não é auditável a partir do repositório.

**F-08 — O laço do bootstrap.** O projeto inteiro vive dentro de um PR em draft, sobre uma `main` de duas linhas, sem CI e sem proteção de branch. O contrato de sincronização lista as condições para sair de draft e quase todas estão satisfeitas — exceto "nenhum drift estrutural conhecido", que F-01 e F-02 violam. O bootstrap não deve mergear porque há drift, e o drift persiste porque nada força a reconciliação. Registro sem propor ação: merge é decisão do autor.

---

## O diagnóstico de fundo, que não é um achado isolado

`INFERENCE` — juntando tudo, aparece um padrão único.

Das 46 perguntas abertas, catorze são de Metafísica e doze de Biologia, contra duas de Política, duas de Ecologia e uma de Língua. Não existe um lugar nomeado, um mapa, uma Dinastia com nome ou um personagem com nome. A Master Timeline diz "datas absolutas ainda não definidas".

**O projeto está construindo a física de um mundo que ainda não tem geografia.** E metafísica é a camada mais sedutora e menos falsificável de um mundo: cada resposta gera três perguntas novas, e não existe ponto de parada natural. A onda das Trevas sozinha abriu sete gates.

Isso não é crítica estética. É a explicação de F-05: `BW-Q-042` está travada porque breaches acontecem *em algum lugar*, Santuários ficam *em algum lugar* e a degradação ecológica tem *um mapa*. Você pode pensar mais seis meses sobre a topologia das Trevas e ela vai continuar sem resposta.

**Minha recomendação central:** não abandone a ordem topologia → breaches → por que agora → magia. Execute ela **sobre um mapa**. O mínimo viável fecha numa sessão: um continente esquemático, três a cinco regiões, dois Santuários com bioma, três Dinastias com base territorial e um recurso econômico cada, e seis a oito pontos fracos marcados.

A geografia é o freio que a fila de perguntas não tem.
