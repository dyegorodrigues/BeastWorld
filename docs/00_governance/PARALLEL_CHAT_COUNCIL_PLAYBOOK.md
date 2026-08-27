# BeastWorld — Parallel Chat Council Playbook

**Status:** governance / multi-agent workflow  
**Complementa:** `EXTERNAL_AGENT_QUARANTINE.md`

## Finalidade

Permitir que duas ou mais conversas/IA façam pesquisa, red-team e brainstorm em paralelo sem criar versões concorrentes do BeastWorld.

> **Múltiplos cérebros; uma única integração.**

---

# 1. Papéis

## MAIN INTEGRATOR

Uma única conversa ChatGPT atua como integrador da rodada.

Responsabilidades:

- reancorar V5;
- definir missões;
- preservar proveniência;
- comparar resultados;
- descartar duplicação/erro;
- produzir gate autoral;
- escrever superfícies compartilhadas após decisão.

## AUXILIARY RESEARCH CHAT

Cada conversa paralela recebe **uma missão estreita**.

Pode:

- ler repo/Notion;
- pesquisar web;
- calcular;
- criar alternativas;
- red-team;
- entregar relatório.

Não pode por iniciativa:

- promover lore;
- alterar Bible;
- alterar `V5_RECONCILIATION_STATE.md`;
- alterar `START_HERE_FOR_AI.md`;
- atualizar Resume/Handoff canônico;
- resolver conflito entre fontes silenciosamente.

---

# 2. Branch ou não branch?

## Pesquisa curta ou média

**Preferência: sem branch.**

Entregar o relatório no chat; o autor traz o resultado ao Integrador.

## Dossiê grande e reutilizável

Branch temporária de quarentena é aceitável:

`agent/<agent-or-chat>-<mission-id>-YYYY-MM-DD`

ou

`chatgpt/review-<mission-id>-YYYY-MM-DD`

Regras:

- somente `docs/09_reviews/...` e fontes da própria missão;
- não tocar superfícies de integração;
- não abrir árvore paralela de lore;
- branch é embalagem de consultoria, não ancestral da próxima V5.

---

# 3. Blind review padrão

Para reduzir anchoring/groupthink:

### Fase 1
Cada agente lê:

- Author Source relevante;
- estado V5;
- gate;
- constraints já decididos.

Não lê propostas de outros agentes.

### Fase 2
Entrega análise independente.

### Fase 3
Integrador compara:

- convergências;
- divergências;
- evidência;
- premissas ocultas;
- riscos;
- ideias únicas.

### Fase 4
Somente se necessário, agentes recebem o delta e fazem segunda rodada.

---

# 4. Formato mínimo de missão

Cada missão deve conter:

```text
MISSION ID:
ROLE:
STATUS: READ-ONLY CONSULTANT / NOT-CANON
QUESTION:
FILES TO READ:
AUTHOR CONSTRAINTS:
OPEN ASSUMPTIONS:
RESEARCH REQUIRED:
ANTI-GOALS:
DELIVERABLE:
STRESS TESTS:
CITATION REQUIREMENT:
HANDOFF RULE:
```

---

# 5. Formato mínimo do relatório auxiliar

1. Context Read Receipt;
2. pergunta resolvida;
3. fatos/source-derived;
4. pesquisa externa;
5. inferências;
6. 2–4 alternativas;
7. red-team;
8. Impact Cones;
9. recomendação do agente;
10. o que continua aberto;
11. source map.

Toda afirmação precisa carregar um dos rótulos quando houver risco de confusão:

- `AUTHOR SOURCE`;
- `SOURCE-DERIVED`;
- `EXTERNAL EVIDENCE`;
- `INFERENCE`;
- `PROPOSAL`;
- `RISK`;
- `OPEN QUESTION`.

---

# 6. Três chats paralelos — configuração recomendada

Quando três auxiliares forem úteis, não mandar os três fazerem “crie o mundo”.

Exemplo para o cluster civilizacional:

## Chat A — História / instituições

Missão:

- Estado composto;
- aristocracia;
- jurisdição sobreposta;
- sucessão;
- fiscalidade;
- legitimidade.

## Chat B — Quantitativo / logística / ecologia

Missão:

- população;
- cidades;
- viagem;
- alimento;
- exército;
- Bestas;
- carrying capacity;
- Sangue em escala.

## Chat C — Narrativa / red-team

Missão:

- testar A/B como story engines;
- personagens;
- contradições;
- exposição;
- cenas;
- risco de derivação;
- audience comprehension.

O Integrador faz uma quarta análise independente antes de ler as três respostas quando possível.

---

# 7. Regra de não contaminação

Nunca copiar proposta de um agente para outro na primeira rodada.

Nunca dizer:

> “o outro ChatGPT concluiu B; prove que B está certo.”

Dizer:

> “compare A/B/C sob estes constraints e tente quebrá-los.”

---

# 8. Regra de integração

O Integrador não faz majority vote.

Três agentes concordarem não transforma hipótese em verdade.

Critérios de seleção:

- fidelidade à fonte autoral;
- evidência;
- coerência causal;
- ausência de contradição forte;
- capacidade de gerar história;
- reversibilidade;
- custo de exposição;
- impacto sistêmico;
- originalidade funcional;
- robustez a stress-test.

---

# 9. Limpeza de branches

Enquanto uma branch contém pesquisa única ainda não capturada, mantê-la.

Depois de integração/rejeição:

- registrar o resultado;
- marcar branch como `RETIRED/QUARANTINE` no índice/handoff;
- não continuar escrevendo nela;
- exclusão é opcional e nunca necessária para preservar clareza se o status estiver explícito.

Nunca manter várias branches ativas tentando ser a “V5 verdadeira”.

---

# 10. Prompt universal curto para um auxiliar

```text
Reancore BeastWorld somente para leitura. Você é CONSULTOR READ-ONLY, não integrador e não pode promover lore. Leia START_HERE_FOR_AI.md, V5_RECONCILIATION_STATE.md e os arquivos específicos da missão. Preserve AUTHOR SOURCE separado de inferência. Faça pesquisa independente, cite fontes, produza alternativas e tente quebrá-las. Não altere Bible, Lore Registry, Decision Log, START_HERE, PROJECT_STATE, HANDOFF ou Notion canônico. Entregue um dossiê com Context Read Receipt, evidência, propostas, riscos, Impact Cones e handoff ao integrador.
```

Depois acrescentar a pergunta específica.

---

# 11. Invariante final

> **Chats auxiliares multiplicam hipóteses. O Integrador reduz hipóteses. O autor decide. O sistema registra.**
