# BeastWorld — START HERE FOR AI

> Porta universal de onboarding para qualquer IA/agente externo que entre no projeto.
>
> **Não confie em memória de chats anteriores. Reancore no estado remoto atual. Rascunho não é cânone. Hipótese não vira verdade por repetição.**

## 1. Identidade e fontes de verdade

- Repositório: `dyegorodrigues/BeastWorld` (**privado**).
- Branch/PR de trabalho: descubra no remoto atual; não confie em SHA copiado de prompt antigo.
- GitHub = fonte versionada, auditável e editorial.
- Notion = Wiki relacional, interface de leitura, pesquisa, timeline, databases e operação cognitiva.
- Source Archive = preserva proveniência e formulações históricas; não é automaticamente cânone.

Se você não possui acesso ao GitHub privado e/ou ao Notion informado abaixo, **pare e declare exatamente qual acesso está faltando**. Não finja ter lido o projeto e não substitua o contexto por conhecimento geral.

## 2. Ordem obrigatória de onboarding

### Fase HOT — estado operacional

Leia integralmente, nesta ordem:

1. `START_HERE_FOR_AI.md` — este contrato.
2. `AGENTS.md` — comportamento esperado de agentes.
3. `PROJECT_STATE.md` — snapshot corrente e decisões/direções mais recentes.
4. `HANDOFF.md` — continuidade e ponto exato de trabalho.
5. `docs/00_governance/RETOMADA.md` — porta operacional de retomada.
6. `docs/00_governance/CANON_POLICY.md` — autoridade/cânone.
7. `docs/00_governance/STATUS_MODEL.md` — significado dos status.
8. `docs/00_governance/MEMORY_HANDOFF_PROTOCOL.md` — COLD/WARM/HOT/CANON.
9. `docs/00_governance/GITHUB_NOTION_SYNC.md` — contrato GitHub ↔ Notion.
10. `docs/00_governance/INTEGRITY_GATES.md` — prova obrigatória de fechamento após escrita.
11. `docs/00_governance/EXTERNAL_AGENT_QUARANTINE.md` — regras para pesquisa multiagente.
12. `docs/00_governance/MAINTENANCE_CHECKPOINT_2026-08-20.md` — última reconciliação estrutural conhecida; remoto continua vencendo.
13. `KNOWLEDGE_GRAPH.md` — mapa macro de dependências.

Se a missão for criativa e o autor demonstrar sobrecarga/confusão, leia também:

- `docs/00_governance/CREATOR_COMPASS.md`.

Não faça brainstorm nem recomendações criativas antes de concluir a fase HOT.

### Fase WARM — compreensão do mundo

No Notion, localize e leia:

- `08 — Current State & Resume Packet — 19/08/2026` (o título pode manter data histórica; use conteúdo/Last Edited atuais e compare com o remoto);
- `BEASTWORLD — Enciclopédia do Mundo — LEIA AQUI`;
- `09 — Como Ler, Estudar e Operar o BeastWorld`;
- `14 — Memória, Handoff & Continuidade entre Conversas`;
- `06 — AI Orchestration — Research, Review, Canonization & Token Economy`.

Depois consulte somente os capítulos/laboratórios ligados à missão atual. Para o estado recente de cosmologia/ameaça, exemplos incluem 10B/10C/10D, mas **descubra a versão atual no Notion em vez de assumir que estes números são os últimos**.

### Fase RELATIONAL — databases

Quando precisar verificar estado, relações ou lacunas, consulte no Notion:

- Lore Registry;
- Research & Open Questions;
- Decision Log;
- Source Library;
- Entity Atlas;
- Master Timeline.

Use os databases como índice/grafo e as páginas editoriais como explicação longa.

### Fase COLD — proveniência e nuance

Abra `docs/08_sources/` e fontes históricas apenas quando precisar:

- verificar o que o autor realmente disse;
- recuperar nuance perdida por síntese;
- resolver contradição de interpretação;
- auditar uma proposta de outra IA;
- entender a evolução de uma hipótese.

Uma fonte COLD pode conter ideias rejeitadas, autocorreções, erros de outra IA e material pré-canônico. **Preservação não significa aprovação.**

Para decisões antigas registradas por letras, consulte também:

- `docs/00_governance/DECISION_PROVENANCE_LEDGER.md`.

## 3. Hierarquia de autoridade

Nunca misture estas categorias:

1. `CANON` / decisão explicitamente promovida — autoridade mais alta para lore publicado/estável.
2. `WORKING-CANON` / direção explicitamente promovida — forte, mas ainda revisável conforme política.
3. `STRONG DIRECTION` / working model — direção preferida, não cânone.
4. `HYPOTHESIS` / `LAB` — espaço de teste.
5. `OPEN` / P0-P3 — questão ainda não resolvida.
6. `PARKED` — deliberadamente adiada; não reintroduzir como prioridade sem motivo.
7. `AUTHOR SOURCE` — registro primário do que o autor disse; pode conter brainstorming e não equivale a canonização.
8. `AI RATIONALE` / `EXTERNAL AI` — proposta ou interpretação de IA; nunca atribuir automaticamente ao autor.
9. `EXTERNAL RESEARCH` — evidência/analogia do mundo real; não é verdade interna do BeastWorld.

Se duas fontes conflitam, **não escolha silenciosamente uma**. Registre o conflito, compare autoridade/data/status e explique a divergência.

## 4. Context Fingerprint — prova de que você está no estado certo

Antes de produzir análise profunda, devolva um `CONTEXT READ RECEIPT` contendo:

- repo confirmado e visibilidade acessível;
- branch/PR/HEAD remotos atuais;
- arquivos HOT efetivamente lidos;
- páginas Notion efetivamente lidas;
- versão/snapshot corrente de `PROJECT_STATE` e Resume Packet;
- 5–10 direções mais fortes que você entendeu;
- principais P0/P1 relacionados à missão;
- itens que identificou como `CANON`, `HYPOTHESIS`, `OPEN` e `PARKED`;
- qualquer acesso ausente, drift ou contradição encontrada.

Não copie apenas títulos. Demonstre compreensão causal suficiente para provar que leu.

Se encontrar drift, classifique-o usando `INTEGRITY_GATES.md` e **não trate drift operacional como prova de que o lore é ruim**.

## 5. Modo padrão para IA externa: READ-ONLY CONSULTANT

Salvo autorização expressa do autor, você pode:

- ler GitHub/Notion;
- pesquisar web/literatura;
- auditar consistência;
- comparar alternativas;
- criticar decisões;
- gerar brainstorms;
- propor modelos concorrentes;
- escrever relatório independente.

Você **não pode**, por padrão:

- alterar CANON;
- promover hipótese;
- editar Notion;
- fazer commit/push;
- abrir/mergear PR;
- apagar fonte histórica;
- reconciliar contradições sem registrá-las.

Se o autor autorizar escrita, o modo padrão muda para **EXTERNAL REVIEW QUARANTINE**, não para integração direta:

1. crie branch própria a partir do HEAD integrado atual;
2. escreva sob `docs/09_reviews/<agent>/<date>/`;
3. não altere Bíblia, grafo, Timeline, Notion, HOT memory ou Canon Status na mesma fase de pesquisa;
4. entregue `Impact Cones` para propostas estruturais;
5. siga `docs/00_governance/EXTERNAL_AGENT_QUARANTINE.md`;
6. nunca mergeie por iniciativa própria.

Somente o integrador autorizado pode, em etapa posterior, transformar propostas aprovadas em mudanças do modelo compartilhado.

## 6. Como pesquisar e contribuir intelectualmente

A missão de uma IA externa não é concordar. É produzir valor independente sem perder o projeto existente.

Separe sempre:

- **SOURCE-DERIVED:** o que os documentos do BeastWorld sustentam;
- **INFERENCE:** dedução sua a partir dessas fontes;
- **EXTERNAL EVIDENCE:** pesquisa externa citada;
- **PROPOSAL:** ideia nova;
- **RISK / CONTRADICTION:** problema identificado.

Quando propor mudança estrutural, apresente idealmente 2–4 arquiteturas concorrentes, trade-offs, efeitos sobre nós dependentes e recomendação justificada. Não sobrescreva o modelo existente só porque sua alternativa parece melhor localmente.

Se usar opções A/B/C/D, preserve o **enunciado completo das opções junto com a resposta do autor**. Preferir nomes para arquiteturas (`LIMIAR`, `PORTAL`, etc.) em vez de letras soltas.

## 7. Formato obrigatório de relatório independente

Entregue, nesta ordem:

1. **Context Read Receipt** — prova de reancoragem/leitura.
2. **Mapa do estado atual** — o que está decidido, forte, hipotético, aberto e parked.
3. **Diagnóstico independente** — pontos fortes, fraquezas, incoerências, microlacunas e riscos.
4. **Pesquisa externa** — apenas quando pertinente, com fontes e distinção clara entre ciência/história/mitologia e ficção.
5. **Alternativas** — opções de arquitetura, não uma solução única precipitada.
6. **Impacto sistêmico** — quais conceitos/personagens/timeline/story/produção mudariam.
7. **Recomendação** — prioridade P0/P1 e motivo.
8. **Ideias/brainstorms adicionais** — explicitamente marcados como propostas novas.
9. **Perguntas realmente bloqueadoras** — somente as que não puderem ser resolvidas lendo as fontes.
10. **Source Map** — arquivos GitHub, páginas Notion e fontes externas usadas.

Para proposta estrutural, acrescente o `Impact Cone` definido no protocolo de quarentena.

Se houver incerteza, diga `UNKNOWN` / `UNRESOLVED`. Não preencha lacunas fingindo memória.

## 8. Economia de contexto

Não despeje o repositório inteiro no contexto por padrão.

Use recuperação progressiva:

`HOT → WARM relevante → databases → COLD sob demanda`.

A memória curta pode ser compacta **porque a memória longa permanece íntegra e ligada**. Nunca resuma uma nuance importante sem manter referência recuperável para a fonte integral.

## 9. Fechamento obrigatório se você escreveu

Se recebeu permissão de escrita, **não diga apenas “salvei tudo”**.

Antes de encerrar:

1. execute os gates aplicáveis de `INTEGRITY_GATES.md`;
2. informe branch e HEAD finais;
3. informe arquivos criados/alterados;
4. informe o que foi `CAPTURED`, `MODELED`, `SYNCED`, `AUDITED` ou `PROMOTED` — são estados diferentes;
5. liste qualquer drift restante;
6. preserve relatórios externos em Markdown durável; link de artifact/chat não basta.

## 10. Notion — pontos de entrada atuais

- Wiki Hub: https://app.notion.com/p/3c142424cdbc81cd9f8bd269c3674224
- Enciclopédia: https://app.notion.com/p/3c142424cdbc8100bd1bf72591c4288d
- Resume Packet: https://app.notion.com/p/3c142424cdbc8114bd07f15e9c5f92fe
- Command Center: https://app.notion.com/p/3c142424cdbc817da8b8fcc2d32d5470
- Memória/Handoff: https://app.notion.com/p/3c142424cdbc81db9d43efcbb5e57d8d
- AI Orchestration: https://app.notion.com/p/3c142424cdbc81de8d51f077179a2b15

Se links mudarem, procure pelos títulos no workspace BeastWorld.

## 11. Prompt mínimo que o autor pode enviar a qualquer IA

> Entre no projeto BeastWorld como consultor externo READ-ONLY. Acesse o repositório privado `dyegorodrigues/BeastWorld` e comece obrigatoriamente por `START_HERE_FOR_AI.md`. Siga integralmente o protocolo de onboarding, incluindo GitHub + Notion, e não confie em memória de conversas anteriores. Antes de pesquisar ou sugerir qualquer coisa, devolva o `CONTEXT READ RECEIPT` exigido pelo arquivo. Depois execute a missão que eu passar, distinguindo claramente fonte do projeto, inferência sua, pesquisa externa e proposta nova. Não altere GitHub, Notion ou cânone sem minha autorização explícita.

---

Este arquivo é uma **porta**, não uma cópia da Bíblia. Ele deve permanecer pequeno o suficiente para onboarding e apontar para o conhecimento vivo em vez de tentar duplicá-lo.
