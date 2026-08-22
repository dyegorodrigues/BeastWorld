# BeastWorld — Política de Arquivo de Interações e Proveniência

**ID:** `BW-GOV-ARCHIVE-001`  
**Versão:** 1.0  
**Data:** 2026-08-22  
**Status:** `WORKING-GOVERNANCE`  
**Autoridade:** governança do repositório  
**Escopo:** fontes autorais, anexos, conversas, respostas de IA, pesquisas, decisões, branches e artefatos.

## 1. Propósito

Este documento define como o BeastWorld preserva e recupera o trabalho intelectual produzido em conversas, arquivos, branches, pesquisas e revisões. O GitHub funciona como **arquivo versionado, auditável e editorial**; o Notion pode servir como interface relacional e painel operacional, mas não substitui as fontes brutas nem cria cânone paralelo.

O objetivo é evitar cinco perdas recorrentes: a perda da fala original do autor, a mistura entre ideia autoral e sugestão de IA, a promoção acidental de hipótese, a impossibilidade de rastrear por que uma decisão mudou e a falsa afirmação de que existe uma transcrição literal quando só existe um resumo.

## 2. Princípios obrigatórios

> **Preservar tudo que pode mudar o entendimento; carregar apenas o que é necessário para a decisão atual.**

> **Capturar não é reconciliar. Reconciliar não é promover. Promover não é canonizar.**

> **Paralelizar descoberta; serializar autoridade.**

Nenhum arquivo de síntese pode apagar ou substituir a fonte bruta que lhe deu origem. Nenhuma repetição entre IAs constitui aprovação autoral. Nenhuma resposta da IA deve ser arquivada como se fosse fala do autor. Nenhuma decisão pode ser registrada apenas por uma letra ou por um nome provisório sem a pergunta, as alternativas e a qualificação completa.

## 3. Taxonomia de proveniência

| Código | Tipo | Significado | Autoridade padrão |
|---|---|---|---|
| `AUTHOR-RAW` | fala autoral bruta | texto fornecido diretamente pelo autor, preservado sem reescrita | primária |
| `ATTACHMENT-RAW` | anexo original | arquivo enviado pelo autor, com nome, hash e data de captura | primária |
| `TRANSCRIPT-RAW` | transcrição literal | registro contínuo de uma interação com autor e IA identificados | primária para o registro, não para o cânone |
| `AI-RESPONSE-RAW` | resposta de IA | resposta literal de ChatGPT, Claude, Grok ou outra IA | secundária / proposta |
| `MEDIATED-AUTHOR` | fala atribuída por outra IA | autor citado ou reconstruído por uma IA externa, sem fonte direta local | pendente de verificação |
| `SOURCE-DERIVED` | derivação de fonte | afirmação extraída de fonte sem criação interpretativa relevante | depende da fonte |
| `EXTERNAL-EVIDENCE` | pesquisa externa | artigo, vídeo, dado, documento ou referência fora do projeto | evidência contextual |
| `INFERENCE` | inferência | conclusão analítica produzida a partir de uma ou mais fontes | proposta analítica |
| `PROPOSAL` | proposta criativa | arquitetura, personagem, regra ou texto criado pela IA | não cânone |
| `DECISION` | decisão autoral | escolha explicitamente aprovada pelo autor, com registro da pergunta | autoridade autoral |
| `CANON` | verdade editorial adotada | material promovido após o fluxo de decisão e validação | cânone vigente |
| `REJECTED` | proposta rejeitada | material preservado para histórico, mas não vigente | histórica |
| `SUPERSEDED` | material substituído | versão anterior preservada, porém superada por uma versão posterior | histórica |

## 4. Status epistemológico

Os tipos de fonte e os status não são a mesma coisa. Uma fonte `AUTHOR-RAW` pode conter brainstorming, dúvida e contradição. Um arquivo `PROPOSAL` pode ser muito bem desenvolvido e continuar não canonizado.

| Status | Uso |
|---|---|
| `CAPTURED` | foi preservado, mas ainda não foi interpretado integralmente |
| `MODELED` | foi organizado em uma proposta ou modelo |
| `INTEGRATED` | foi reconciliado com outras fontes e estruturas |
| `AUDITED` | passou por verificação de proveniência, coerência e integridade |
| `OPEN` | continua aguardando decisão ou pesquisa |
| `WORKING-CANON` | direção provisoriamente adotada para escrita/teste |
| `CANON` | decisão editorial formalmente promovida |
| `REJECTED` | rejeitado, mas preservado como histórico |
| `SUPERSEDED` | substituído por outra versão |
| `PARTIAL-SYNC` | apenas parte do pacote foi sincronizada |
| `SYNCED` | pacote versionado e sincronizado conforme o escopo declarado |

## 5. Estrutura de cada sessão durável

Toda sessão ou bloco que altere o estado do projeto deve possuir, quando possível, quatro artefatos:

1. **Source Record:** o que foi dito ou enviado, com proveniência.
2. **AI Response/Rationale:** resposta ou raciocínio da IA, separado da fala autoral.
3. **Handoff:** estado operacional, decisões, aberturas e próxima ação.
4. **Asset Index:** anexos, imagens, hashes, links, branches e artefatos produzidos.

Se a transcrição literal não estiver disponível, o registro deve usar uma das expressões exatas: `RAW-AVAILABLE`, `RAW-PARTIAL`, `MEDIATED-ONLY`, `SUMMARY-ONLY` ou `NOT-AVAILABLE`. Nunca usar “íntegra” ou “lossless” sem evidência de arquivo bruto completo.

## 6. Convenção cronológica

As interações duráveis recebem IDs no formato:

`BW-SESSION-YYYY-MM-DD-NNN`

Quando houver mais de uma mensagem relevante dentro da sessão:

`BW-TURN-YYYY-MM-DD-NNN-MMM`

O número sequencial é local ao dia e não deve ser reutilizado. Se a ordem histórica for recuperada depois, não reescrever IDs antigos; criar um registro de correção ou alias de proveniência.

## 7. Arquivo versus cânone

Fontes brutas, respostas de IA, propostas rejeitadas e branches externas devem permanecer recuperáveis mesmo quando não forem incorporadas à Bíblia. A pasta de governança registra o sistema de autoridade. A pasta `docs/08_sources/` registra a evidência. A pasta `docs/09_external_ai/` registra quarentena e propostas externas. A Bíblia e o grafo recebem somente conteúdo promovido pelo fluxo editorial.

## 8. Limite de completude

O sistema pode afirmar que uma interação foi preservada integralmente somente quando possui o arquivo bruto completo ou uma exportação verificável equivalente. Quando a conversa original não estiver disponível como arquivo, o sistema deve registrar o que existe: anexos, fontes diretas capturadas, resumos, respostas preservadas, commits e lacunas.

Para conversas anteriores ao início deste arquivo, a regra é reconstrução honesta: preservar todas as fontes já versionadas, registrar as lacunas conhecidas e não fabricar falas ausentes. A continuidade futura deve ser mais completa do que a histórica.

## 9. Regra de fechamento

Uma sessão só pode ser marcada como `AUDITED` quando tiver, no mínimo, proveniência, cobertura de fonte, status dos artefatos, hash dos anexos relevantes, branch/commit, estado de sincronização e handoff. A ausência de qualquer item deve ser explicitamente registrada como lacuna.
