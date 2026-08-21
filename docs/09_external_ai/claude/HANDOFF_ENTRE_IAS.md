# Passe de bastão entre IAs — o que o Claude fez e onde parou

**Data:** 20/08/2026
**Base auditada:** branch `agent/worldbuilding-os-bootstrap`, HEAD `72f46e1`, PR #2 aberto e em draft.
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
