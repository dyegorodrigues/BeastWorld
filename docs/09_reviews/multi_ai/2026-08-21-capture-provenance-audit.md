# Auditoria de captura e proveniência — Claude, Grok e linha integrada

**Data:** 2026-08-21  
**Status:** AUDIT / operational review.  
**Canon impact:** NONE.  
**Objetivo:** verificar se falas autorais, respostas, pesquisas, propostas, imagens e handoffs das sessões externas estão realmente preservados e corretamente classificados.

## Snapshot auditado

### Linha integrada
- Repo: `dyegorodrigues/BeastWorld` — PRIVATE.
- Branch compartilhada auditada antes desta onda: `agent/worldbuilding-os-bootstrap` @ `011492179ed13b56745a9eb5112c0a1feb2861ab`.
- PR #2: open + draft + unmerged.

### Claude
- Branch: `claude/beastworld-external-consultant-by4q63`.
- No snapshot de comparação, merge-base = shared HEAD `011492179...`.
- 11 commits à frente / 0 atrás.
- 18 arquivos adicionados, todos em `docs/09_external_ai/claude/`.
- Nenhuma edição do shared state.

### Grok
- Branch: `grok/beastworld-external-consultant-2026-08-21`.
- No snapshot de comparação, merge-base = shared HEAD `011492179...`.
- 1 commit à frente / 0 atrás.
- 8 arquivos adicionados, todos em `docs/09_external_ai/grok/`.
- Nenhuma edição do shared state.

> Depois desta auditoria a branch compartilhada naturalmente avançará; isso não invalida a quarentena. Antes de qualquer handoff final ou integração, agentes externos devem apenas reancorar e produzir delta — nunca mergear por iniciativa própria.

---

# Veredito executivo

## Claude — BOM, mas não é export bruto

O Claude fez um trabalho de captura substancialmente melhor que o mínimo esperado. Ele preservou:

- auditoria independente;
- pesquisa externa;
- estudo de sucesso narrativo;
- combate/câmera;
- arquiteturas das Trevas;
- propostas criativas;
- ecologia/equilíbrio;
- ponto ótimo de worldbuilding;
- Núcleo Bestial;
- visual/dinastias;
- nichos/casas/Vínculo;
- dois sistemas/taxonomia/naming;
- hereditariedade;
- handoff;
- uma reconstrução extensa das falas do autor;
- um registro comentado de conversa.

Ele também registra e corrige os próprios erros, em especial núcleo, escada do Vínculo, Attack on Titan e leitura de “pureza”. Isso é bom comportamento epistêmico.

**Mas:** `FONTE-AUTORAL-INTEGRAL.md` não é um export bruto da plataforma. O próprio arquivo declara que foi reconstruído pela janela de contexto do Claude. Portanto a classificação tecnicamente correta é `AUTHOR-SOURCE-VIA-CLAUDE`, não fonte primária lossless.

### Gaps / riscos Claude

1. **Metadata inconsistente:** o cabeçalho chama a fonte de `Authority: Primary`, enquanto o próprio texto afirma que é reconstrução via Claude e que não deve substituir export bruto. A segunda classificação é a correta.
2. **“Integral” é relativo:** as falas substantivas estão muito bem preservadas, mas alguns turnos são resumidos e as respostas completas do Claude não estão todas em transcript verbatim sequencial. O conteúdo/rationale existe nos arquivos 01–14, porém a redação exata de cada resposta não está garantida.
3. **Ações/rationale aparecem dentro da fonte autoral:** estão claramente marcados, mas um arquivo realmente RAW deveria conter apenas transcript/fonte + metadata.
4. **Propostas superseded continuam em arquivos anteriores:** por exemplo, interpretações do arquivo 12 são corrigidas no 13. O sistema precisa ler correções posteriores; retrieval isolado de um arquivo velho pode recuperar uma proposta já desautorizada pelo próprio Claude.
5. **Imagem ≠ decisão autoral:** algumas regras visuais foram inferidas de imagens geradas e depois chamadas de “author-sourced visual”. Isso deve permanecer `IMAGE-DERIVED HYPOTHESIS` salvo quando o autor explicitamente endossar a regra.
6. **Imagens não estão arquivadas como assets no repo.** O dossier descreve imagens e suas leituras, mas a própria auditoria do Claude encontrou zero arquivos de imagem no repositório. Se essas imagens só existem na UI da conversa, continuam vulneráveis.

**Nota geral Claude:** captura criativa/rationale = forte; captura verbatim autoral = forte reconstrução; captura lossless/raw = ainda não.

---

## Grok — governança boa, captura autoral insuficiente para o requisito “cada palavra”

O Grok respeitou a quarentena e criou uma estrutura pequena e limpa:

- `00-HANDOFF.md`;
- `01-AUTHOR-SPEECH-CAPTURE.md`;
- `02-IMAGE-ANALYSIS.md`;
- `03-DYNASTY-ARCHITECTURE.md`;
- `04-CROSS-AI-SYNTHESIS.md`;
- `05-WORLD-SKELETON-NEXT.md`;
- `06-GOVERNANCE-AND-BEHAVIOR.md`;
- `README.md`.

As propostas estão marcadas como `GROK RATIONALE` / `NEW PROPOSAL`, sem promoção de cânone. A cross-AI synthesis separa convergência de prova e mantém decisões abertas.

### Gaps / riscos Grok

1. **O próprio arquivo de fala autoral admite que NÃO é transcript integral:** `High-fidelity paraphrase + key verbatim fragments. Not a full transcript dump.` Portanto ele não satisfaz o requisito do autor de preservar cada palavra/hesitação/nuance.
2. **README inconsistente:** o índice descreve `01-AUTHOR-SPEECH-CAPTURE.md` como “verbatim + context”, mas o arquivo real declara paráfrase + fragmentos verbatim. O arquivo real prevalece.
3. **Provenance bleed no HANDOFF:** a seção “Critical author directions captured” mistura direções diretamente faladas ao Grok com material herdado da sessão Claude e com inferências de IA. Exemplos que exigem separação explícita:
   - “visual identity should come from territory materials, not animal logos” = proposta Claude;
   - “Body = Bond; Clothing = political loyalty” = síntese Claude/Grok;
   - “two systems: Connection × Blood Integration” = fala autoral preservada via Claude, não necessariamente fala direta desta sessão Grok;
   - “each generation must re-earn deep bond / power is not fully heritable” = consequência inferida pelo Claude, não citação autoral direta.
4. **As respostas completas do Grok não foram preservadas em transcript sequencial.** Os 8 arquivos preservam o produto organizado, mas não garantem cada insight/interação/resposta original da UI.
5. **Imagens também não foram arquivadas como assets no branch.** Há descrição e análise, não os arquivos visuais originais.
6. **Algumas premissas da análise visual são tratadas como author-sourced quando a evidência é a imagem.** Até endosso verbal, classificar como `IMAGE-DERIVED`.

**Nota geral Grok:** estrutura, cenário e governança = bons; preservação lossless da conversa = insuficiente.

---

# Linha integrada ChatGPT / bootstrap

## O que está realmente seguro

As grandes ondas autorais recentes têm preservação bem mais forte no Source Archive. Exemplos verificados:

- `2026-08-20-author-ecological-balance-geography-dynasties-verbatim.md` — preserva integralmente o grande brainstorm sobre ecossistema, abundância, Dinastias, mobilidade, continentes, bestas insetoides, referências e regra anti-filler;
- `2026-08-21-author-ecological-specialization-core-centrality-verbatim.md` — preserva integralmente o turno seguinte sobre especialização sem exclusividade, Guardiões, crises ecológicas, Núcleo Bestial, coexistência, capital comum, teletransporte, artrópodes e diversidade senciente;
- waves de 19/08 e 20/08 já possuem vários arquivos `author-...-verbatim` e vários `chatgpt-...-high-fidelity`;
- o PDF MetaAI foi preservado em partes RAW além do intake e rationale;
- fonte, intake, hipótese e canon continuam separados.

A linha integrada também materializou esses deltas em World Skeleton, research/intakes, Open Questions, Source Library/Notion e checkpoints sem promover brainstorm a canon.

## O que NÃO posso afirmar

Não existe hoje um **export bruto e contínuo de cada mensagem desta conversa inteira do ChatGPT**. As ondas importantes foram capturadas seletivamente em verbatim/high-fidelity, mas não devo dizer “todas as palavras de todos os turnos e todas as minhas respostas desde o começo estão arquivadas”. Isso seria falso.

Portanto o estado correto é:

- **conteúdo criativo substantivo e decisões/gates:** cobertura alta;
- **últimos grandes brainstorms autorais:** cobertura verbatim muito alta;
- **todas as respostas ChatGPT palavra por palavra:** cobertura parcial;
- **conversa inteira como log bruto contínuo:** inexistente.

---

# Correções obrigatórias antes de tratar os dossiers como memória lossless

## Claude

1. Trocar semanticamente `Authority: Primary` por `Proxy / Author-via-Claude` no arquivo reconstruído, sem apagar a informação de que a fala é atribuída ao autor.
2. Marcar explicitamente seções superseded nos arquivos antigos ou criar um `CORRECTION_MAP.md` que aponte 12 → 13, núcleo inicial → adendo corrigido etc.
3. Não chamar inferência de imagem de decisão autoral sem endosso textual.
4. Se a plataforma permitir, exportar transcript bruto. Se não permitir, manter a reconstrução atual como melhor proxy disponível.
5. Arquivar as imagens-fonte quando houver forma técnica segura de exportá-las.

## Grok

1. Criar equivalente a `FONTE-AUTORAL-INTEGRAL.md` com toda fala recuperável da janela de contexto, mantendo hesitação e ordem, **ou** export bruto se a plataforma permitir.
2. Criar um registro das respostas/resultados do Grok com fidelidade maior, não apenas síntese temática.
3. Separar no HANDOFF três classes:
   - `AUTHOR-DIRECT-IN-GROK`;
   - `AUTHOR-VIA-OTHER-SOURCE`;
   - `AI-SYNTHESIS / INFERENCE`.
4. Corrigir README: não chamar o capture de “verbatim” enquanto ele for paráfrase + fragmentos.
5. Arquivar imagens-fonte quando tecnicamente possível.

---

# Regra operacional recomendada daqui para frente

Para qualquer IA externa, toda sessão substantiva deve produzir no mínimo quatro artefatos separados:

1. `AUTHOR_SOURCE` — transcript bruto ou reconstrução explicitamente marcada como proxy;
2. `AI RESPONSE / RATIONALE` — resultado completo ou high-fidelity, separado da fala autoral;
3. `HANDOFF` — síntese HOT com provenance em cada afirmação;
4. `ASSET INDEX` — imagens/PDFs/anexos efetivamente arquivados ou marcados como `MISSING-ASSET`.

E o fechamento da sessão deve responder explicitamente:

- tudo que o autor disse está RAW, proxy ou resumo?
- tudo que a IA respondeu está RAW/high-fidelity ou só síntese?
- os anexos existem fora da UI?
- quais propostas foram corrigidas/superseded?
- qual conteúdo é autoral, qual é inferência, qual é pesquisa externa?

> **Preservar não significa canonizar. E “está organizado” não significa “está lossless”.**

---

# Conclusão

Nenhum dos dossiers externos está “uma merda” ou inutilizável. Pelo contrário: ambos estão úteis e a arquitetura de quarentena funcionou. O problema restante é mais preciso: **a organização está boa, mas a fidelidade de proveniência ainda não é uniforme.**

- Claude: perto de um bom arquivo de sessão, mas é reconstrução e precisa metadata/correction-map.
- Grok: bom dossier de consultoria, mas ainda não é arquivo integral da conversa.
- Shared ChatGPT/bootstrap: melhor cobertura das grandes ondas autorais, mas também não possui transcript bruto contínuo de toda a história da conversa.

A solução não é recomeçar o BeastWorld. É fortalecer a camada COLD de proveniência e continuar usando WARM/HOT compactos para criação.
