# MEMORY & HANDOFF PROTOCOL — BeastWorld

**Status:** governance  
**Objetivo:** permitir desenvolvimento distribuído em muitas conversas/agentes sem perder nuance, sem exigir releitura integral e sem transformar resumo em substituto da fonte.

## Princípio central

O BeastWorld não depende da memória volátil de uma conversa. A memória operacional é **externa, versionada, hierárquica e recuperável por IDs**.

Nenhuma compactação pode apagar a fonte que lhe deu origem.

```text
interação bruta
    ↓
SOURCE ARCHIVE — memória fria, alta fidelidade
    ↓
INTAKE / NORMALIZAÇÃO — memória morna, semântica
    ↓
PROJECT_STATE + HANDOFF — memória quente, operacional
    ↓
LORE / ADR / CANON — somente após decisão explícita
```

## As quatro memórias

### M0 — Fonte bruta / memória de longo prazo
Local principal: `docs/08_sources/`.

Preserva:
- conversas substantivas;
- documentos enviados;
- respostas de outras IAs;
- pesquisas;
- versões antigas;
- redação e nuances que um resumo poderia destruir.

Regras:
- `CAPTURED` não significa verdadeiro;
- não reescrever retroativamente;
- quando uma fonte é grande, pode ser segmentada em partes numeradas + manifest;
- registrar hash do arquivo original quando possível;
- diferenciar claramente **fala do autor**, **fala de terceiros/IA** e **interpretação posterior**.

### M1 — Memória semântica / médio prazo
Locais:
- módulos em `docs/02_lore/`, `docs/03_entities/`, `docs/04_story/`, `docs/05_visual/`, `docs/06_research/`;
- `graph/`;
- Notion Lore Registry, Entity Atlas, Open Questions e Timeline.

Função:
- transformar material bruto em conceitos recuperáveis;
- preservar alternativas, contradições, dependências e status;
- permitir busca seletiva sem reler a fonte inteira.

Regra: M1 **não substitui M0**. Se nuance, autoria ou wording estiverem em disputa, voltar à fonte.

### M2 — Memória operacional / curto prazo
Locais:
- `PROJECT_STATE.md` — estado consolidado do projeto;
- `HANDOFF.md` — último checkpoint de trabalho e próxima ação;
- `docs/00_governance/RETOMADA.md` — protocolo de reancoragem.

Função:
- dizer onde estamos;
- o que foi decidido;
- o que continua aberto;
- quais fontes foram adicionadas;
- qual bloco deve ser retomado;
- quais riscos/holds estão ativos.

M2 deve ser curto o suficiente para uma nova conversa ler primeiro.

### M3 — Memória canônica
Locais:
- `docs/01_bible/`;
- módulos promovidos;
- ADRs;
- grafo e timeline reconciliados.

Somente `WORKING-CANON`/`CANON` entram aqui como verdade editorial adotada.

## Regra de compactação periódica

Compactar quando ocorrer qualquer um destes gatilhos:

1. uma conversa produziu um novo bloco conceitual relevante;
2. três ou mais decisões/open questions surgiram;
3. houve mudança de status ou causalidade;
4. uma conversa está ficando longa e haverá troca de thread;
5. um documento externo foi incorporado;
6. antes de encerrar um ciclo/PR;
7. antes de começar um bloco distante do assunto atual.

A compactação produz, no mínimo:

- **Source Record** apontando para a fonte bruta;
- **delta semântico**: o que apareceu de novo;
- classificação `KEEP / MODIFY / REJECT / RESEARCH` quando já houver avaliação;
- novas perguntas/IDs;
- impacto em conceitos existentes;
- atualização de `HANDOFF.md`;
- atualização de `PROJECT_STATE.md` apenas se o estado consolidado mudou.

## Não confundir compactação com apagamento

Resumo serve para **roteamento**, não para substituir evidência.

Portanto:
- fonte bruta permanece;
- propostas rejeitadas podem virar `REJECTED`/histórico, não desaparecer;
- alternativas superadas ficam rastreáveis;
- nomes provisórios permanecem na fonte mas não migram silenciosamente ao cânone.

## Pacote de handoff entre conversas

Uma nova conversa BeastWorld deve conseguir começar com este conjunto mínimo:

1. `docs/00_governance/RETOMADA.md`;
2. `PROJECT_STATE.md`;
3. `HANDOFF.md`;
4. módulo/Question ID alvo;
5. dependências diretas no grafo;
6. Source Records ligados ao alvo;
7. ADRs relacionados.

Só depois abrir fontes grandes.

## Estrutura recomendada para HANDOFF.md

```text
- remoto verificado
- último marco
- bloco intelectual ativo
- o que acabou de entrar
- decisões tomadas
- decisões NÃO tomadas
- perguntas prioritárias
- arquivos-fontes relevantes
- riscos/contradições
- próxima ação recomendada
```

## Entrevista autoral como mecanismo de recuperação

Quando o autor disser “eu tinha pensado algo, mas não lembro”, não pedir simplesmente para lembrar.

Usar **gatilhos semânticos** derivados das fontes:
- apresentar 2–5 interpretações plausíveis;
- permitir “nenhuma / não sei / outra”;
- citar qual ponto da fonte gerou a pergunta;
- não converter resposta hesitante em cânone;
- classificar resposta em `KEEP / MODIFY / REJECT / RESEARCH`.

Isso recupera memória associativa sem induzir falsas certezas.

## Orquestração de agentes

Papéis de `AGENTS.md` podem trabalhar em paralelo, mas nunca escrevem a mesma verdade sem reconciliação.

Fluxo recomendado:

```text
Archivist
  ↓ captura + provenance
Lore Architect
  ↓ conceitos + relações + alternativas
Research Analyst ─┐
Narrative Engineer ├─→ evidências / consequências
Devil's Advocate ─┘
  ↓
Continuity Auditor
  ↓ regressão
Canon Curator
  ↓ proposta de decisão
Autor
  ↓ decisão quando necessária
GitHub PR ↔ Notion sync
```

## GitHub ↔ Notion

GitHub guarda a versão auditável e os handoffs formais.
Notion oferece interface humana, relações, databases e navegação.

Uma nova conversa pode começar por qualquer uma das duas interfaces, mas deve reancorar no GitHub antes de modificar estado versionado.

## Proteção contra excesso de contexto

Não carregar “tudo sobre BeastWorld” para cada pergunta.

Usar três temperaturas:

- **HOT:** `HANDOFF`, `PROJECT_STATE`, alvo + dependências diretas;
- **WARM:** módulos relacionados, decisões e Open Questions;
- **COLD:** transcrições, PDFs, brainstorms antigos e pesquisas completas.

A fonte COLD nunca é descartada — apenas não é carregada por padrão.

## Regra final

> **Preservar tudo que pode mudar o entendimento; carregar apenas o que é necessário para a decisão atual.**

Isso é o equilíbrio entre fidelidade de longo prazo e economia de contexto.