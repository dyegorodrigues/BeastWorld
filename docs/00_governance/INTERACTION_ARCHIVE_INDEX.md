# BeastWorld — Índice-Mestre de Interações, Fontes e Artefatos

**ID:** `BW-GOV-ARCHIVE-INDEX-001`  
**Versão:** 1.0  
**Data de atualização:** 2026-08-22  
**Status:** `AUDITED-PARTIAL`  
**Política:** `INTERACTION_ARCHIVE_AND_PROVENANCE_POLICY.md`

## 1. Como usar este índice

Uma nova sessão não deve começar lendo todo o repositório. Ela deve começar por `docs/00_governance/RETOMADA.md`, `PROJECT_STATE.md`, `HANDOFF.md` e este índice. Depois, deve abrir somente o Source Record e os artefatos relacionados ao assunto atual.

A ordem de autoridade é:

```text
anexo ou transcrição bruta
→ Source Record
→ síntese/normalização
→ decisão ou ADR
→ módulo de lore/roteiro
→ cânone promovido
```

Quando houver conflito, a fonte bruta e a decisão autoral explícita têm precedência sobre uma síntese de IA.

## 2. Índice por camada

| Camada | Diretório | Conteúdo | Regra |
|---|---|---|---|
| Governança | `docs/00_governance/` | políticas, status, handoffs, auditorias e índices | organiza autoridade, não substitui fontes |
| Cânone | `docs/01_bible/` | verdade editorial promovida | só recebe decisões aprovadas |
| Lore | `docs/02_lore/` | hipóteses e modelos de mundo | status deve ser explícito |
| Entidades | `docs/03_entities/` | personagens, Bestas, Casas e instituições | ligar ao Source Record |
| História | `docs/04_story/` | arcos, cenas, pressão sucessória e livros | proposta ou cânone conforme status |
| Visual | `docs/05_visual/` | linguagem visual, combate e referências | registrar origem dos assets |
| Pesquisa | `docs/06_research/` | fontes externas e sínteses | evidência, não autoridade autoral |
| Decisões | `docs/07_decisions/` | ADRs e decisões promovidas | preservar alternativas completas |
| Fontes | `docs/08_sources/` | anexos, conversas, respostas e registros brutos | memória fria, alta fidelidade |
| Quarentena externa | `docs/09_external_ai/` | Claude, Grok, Manus e outras propostas | nunca promover automaticamente |

## 3. Sessões de interação registradas

| ID | Data | Assunto | Fonte bruta | Resposta visível | Estado |
|---|---|---|---|---|---|
| `BW-SESSION-2026-08-22-001` | 2026-08-22 | governança do arquivo + novo delta de Azhara, dragão descendente, pai, família, liberdade e artes marciais | `docs/08_sources/conversations/2026-08-22-author-governance-and-dragon-descendant-verbatim.md` + anexos | resposta visível capturada no mesmo Source Record | `AUDITED-PARTIAL` |
| `BW-SESSION-2026-08-21-001` | 2026-08-21 | auditoria de captura multi-IA | `docs/08_sources/conversations/2026-08-21-author-multi-ai-capture-audit-request-verbatim.md` | respostas e auditoria em `docs/09_reviews/multi_ai/` | `CAPTURED / HISTORICAL` |
| `BW-SESSION-2026-08-21-002` | 2026-08-21 | especialização ecológica e centralidade do Núcleo | `docs/08_sources/conversations/2026-08-21-author-ecological-specialization-core-centrality-verbatim.md` | sínteses e checkpoint da governança | `CAPTURED / INTEGRATED-PARTIAL` |
| `BW-SESSION-2026-08-20-001` | 2026-08-20 | ecologia, geografia, dinastias e logística | `docs/08_sources/conversations/2026-08-20-author-ecological-balance-geography-dynasties-verbatim.md` | resposta/síntese de alta fidelidade disponível em fontes relacionadas | `CAPTURED` |
| `BW-SESSION-2026-08-20-002` | 2026-08-20 | cosmologia e polaridade | `docs/08_sources/conversations/2026-08-20-author-cosmology-polarity-exposition-verbatim.md` | `chatgpt-cosmology-polarity-review-high-fidelity.md` | `CAPTURED / MODELED` |
| `BW-SESSION-2026-08-20-003` | 2026-08-20 | ameaça mítica e expansão mágica | `docs/08_sources/conversations/2026-08-20-author-mythic-threat-magic-expansion-verbatim.md` | `chatgpt-mythic-threat-magic-synthesis-high-fidelity.md` | `CAPTURED / MODELED` |
| `BW-SESSION-2026-08-19-001` | 2026-08-19 | brainstorm inicial de sangue, dinastias, combate e linguagem | `2026-08-19-metaai-brainstorm-source-record.md` + partes raw 01–03 | respostas/sínteses separadas em `docs/08_sources/conversations/` | `CAPTURED / MEDIATED-MIXED` |

A lista acima é um índice de sessões substantivas já identificadas. O manifesto de arquivos e hashes é a referência mecânica completa.

## 4. Respostas de IA e sínteses existentes

As respostas visíveis preservadas no repositório devem permanecer explicitamente separadas das falas do autor. Os grupos atuais incluem:

| Grupo | Local | Classificação |
|---|---|---|
| respostas literais ou quase literais do ChatGPT | `docs/08_sources/conversations/*assistant-response*` e `*chatgpt-*` | `AI-RESPONSE-RAW` ou `AI-RESPONSE-HIGH-FIDELITY`, conforme o cabeçalho |
| respostas e propostas de Claude | `docs/09_external_ai/claude/` e `docs/09_reviews/claude/` | `AI-RESPONSE-RAW/PROPOSAL`, em quarentena |
| respostas e propostas de Grok | `docs/09_external_ai/grok/` quando presentes | `AI-RESPONSE-RAW/PROPOSAL`, em quarentena |
| sínteses Manus | `docs/09_external_ai/manus/working/` | `PROPOSAL` ou `INFERENCE`, não cânone automático |
| pesquisa externa | `docs/06_research/` e `docs/09_external_ai/*/research/` | `EXTERNAL-EVIDENCE` |

Quando o arquivo disser `high-fidelity`, isso não deve ser reinterpretado como uma transcrição literal. O cabeçalho de cada fonte define o grau real de fidelidade.

## 5. Anexos e imagens

Os anexos novos desta sessão estão em:

- `docs/08_sources/attachments/2026-08-22/pasted_content.txt`
- `docs/08_sources/attachments/2026-08-22/pasted_content_2.txt`

As imagens de referência anteriores foram analisadas e descritas em documentos, mas a auditoria histórica registra que nem todos os binários foram versionados nas quarentenas externas. Portanto, o arquivo de assets deve distinguir `BINARY-PRESENT`, `BINARY-MISSING`, `DESCRIPTION-ONLY` e `REFERENCE-URL`.

## 6. Branches e autoridade

| Branch | Função | Autoridade |
|---|---|---|
| `main` | linha compartilhada | estado integrado do projeto |
| `manus/reconstruction-spine-2026-08-21` | reconstrução e proposta Manus | quarentena de proposta |
| branches Claude/Grok | consultoria externa | não promovem cânone |

A branch Manus contém o Documento-Mestre v2, a recuperação de detalhes, o registro funcional de Bestas, a cosmologia, as relações, combate, portais, saga e validação adversarial. Esses arquivos representam direção de trabalho, não decisão final.

## 7. Lacunas conhecidas

O repositório não contém, até esta atualização, uma exportação contínua e verificável de todas as mensagens anteriores do chat com cada resposta visível em ordem absoluta. Existem fontes brutas, respostas preservadas, registros de alta fidelidade, handoffs, auditorias e sínteses. A cobertura é ampla, mas não deve ser descrita como `LOSSLESS` para períodos em que o transcript original não foi arquivado.

O protocolo futuro passa a fechar cada sessão com Source Record, resposta visível, handoff, asset index, hashes e commit. Isso torna a perda progressivamente menos provável e permite declarar cobertura com precisão.
