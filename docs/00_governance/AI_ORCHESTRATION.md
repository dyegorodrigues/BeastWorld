# AI Orchestration — BeastWorld

## 1. Princípio operacional

BeastWorld é um **multi-agent research + writer's-room system** com uma única autoridade autoral.

> **Paralelizar descoberta; serializar autoridade.**

Claude, Grok, Gemini, ChatGPT, Kimi e outros agentes podem pesquisar, criticar, quebrar hipóteses e propor alternativas em paralelo. Eles **não** mantêm versões paralelas do mundo como fontes de verdade.

Nenhuma proposta de IA vira intenção do autor, `WORKING-CANON` ou `CANON` por repetição, consenso entre modelos ou confiança retórica.

## 2. Topologia Git simples — anti-bagunça

A regra do BeastWorld é **poucas linhas de escrita, não uma branch permanente por IA**.

### Linha estável

- `main` = base estável/versionada quando a onda atual for integrada.

### Linha de integração

- manter **no máximo uma branch/PR de integração compartilhada por onda intelectual**;
- durante o bootstrap atual, essa função é exercida por `agent/worldbuilding-os-bootstrap` / PR #2 até sua conclusão;
- depois do bootstrap, branches de integração devem ser curtas e representar uma unidade coerente de decisão, não um modelo de IA.

### Agentes externos

Por padrão, agentes externos são `READ-ONLY CONSULTANT` e **não precisam de branch nem PR** para pesquisar, revisar ou propor.

Saídas podem viver em:

- resposta/artefato do próprio agente enquanto transitório;
- uma página/registro isolado ligado à **BEASTWORLD — AI Council Queue** no Notion;
- um relatório durável capturado posteriormente pelo Integrador no Source Archive/review namespace.

Uma branch externa só é criada quando existe **necessidade real de escrita Git durável**. Ela é temporária, de quarentena, e deve ser encerrada depois do handoff/revisão. Não existe “branch do Claude”, “branch do Grok” ou “branch do ChatGPT” de longa duração.

## 3. Fonte da verdade e superfícies

- **GitHub** = fonte versionada, auditável e editorial;
- **Notion** = Wiki relacional, navegação humana, databases, fila de trabalho e dashboards;
- **Source Archive** = proveniência e formulações históricas;
- **Council Queue** = coordenação de missões, não cânone;
- **Session & Sync Ledger** = recibos operacionais, não cânone.

No Notion:

- `06 — AI Orchestration — Research, Review, Canonization & Token Economy` = explicação/política humana;
- `15 — Painel Operacional do Conselho de IAs` = dashboard de missões e sessões;
- Lore Registry / Entity Atlas / Timeline / Decision Log continuam sendo as estruturas semânticas do mundo.

Não duplicar a mesma verdade em páginas independentes sem relação clara de autoridade.

## 4. Escopo criativo do Conselho

O Conselho pode trabalhar sobre qualquer disciplina necessária para um universo e uma obra de alto nível, incluindo:

### Worldbuilding / construção de mundo

- cosmologia, metafísica e mitologia;
- geografia, cartografia, clima, biomas e recursos;
- ecologia, espécies, Bestas e cadeias alimentares;
- povos, culturas, etnias ficcionais, costumes e material culture;
- religião, ritual, mito, filosofia e ideologia;
- política, instituições, sucessão, diplomacia, guerra e law/justice;
- economia, comércio, tecnologia, medicina, agricultura e infraestrutura;
- línguas, naming, etimologia controlada e sociolinguística;
- história, eras, cronologia, genealogia e migrações.

### Narrative Design / Story Architecture

- premissa, thematic spine e dramatic question;
- plot e subplots;
- story architecture;
- character arcs e relationship arcs;
- beats, scenes e sequences;
- conflito, stakes, tensão dramática e pacing;
- mistério e arquitetura de informação;
- setup, foreshadowing, payoff, reveal e reversal;
- plot twists e revelações estruturais;
- causalidade narrativa;
- POV, exposição e controle de spoilers;
- arquitetura de livro, temporada, episódio/capítulo e saga;
- continuidade entre worldbuilding e drama.

### Visual / Production Development

- visual development;
- art direction e production design;
- costume design / costume bible;
- material culture e silhouette language;
- arquitetura, armas, veículos/montarias e objetos;
- creature design;
- VFX/live-action feasibility;
- referências visuais sem cópia de IP existente.

Os agentes podem propor livremente dentro da missão; o Integrador é responsável por impedir que uma boa ideia local quebre invariantes globais.

## 5. Papéis possíveis

Papéis são **funções de missão**, não identidades fixas de uma marca/modelo:

- Archivist / Source Curator;
- Research Analyst;
- Worldbuilding Architect;
- Anthropological / Political-Economy Analyst;
- Lore Architect;
- Continuity Auditor;
- Narrative Engineer;
- Character / Story Analyst;
- Devil's Advocate;
- Visual / Production Researcher;
- Combat / Military Researcher;
- Canon Curator;
- Integrator / Showrunner.

Um agente pode executar vários papéis, mas deve separar `SOURCE-DERIVED`, `INFERENCE`, `EXTERNAL EVIDENCE`, `PROPOSAL` e `RISK / CONTRADICTION`.

## 6. AI Council Queue

Missões substantivas podem ser registradas no Notion database **BEASTWORLD — AI Council Queue**.

Ela serve para responder:

- qual pergunta estamos tentando resolver;
- prioridade P0–P3;
- modo da missão;
- agente primário e colaboradores;
- escopo semântico;
- fontes/conceitos/open questions relacionados;
- onde está a saída;
- se há decisão do autor pendente;
- estado de sincronização.

Fluxo recomendado:

`BACKLOG → READY → ASSIGNED → IN-REVIEW → WAITING-AUTHOR → ACCEPTED / REJECTED / PARKED → CLOSED`

`ACCEPTED` significa que a direção passou pelo gate intelectual/autoral. **Não significa integrada nem canonizada.**

## 7. Session & Sync Ledger

Toda sessão que realmente escreve estado durável pode registrar uma linha em **BEASTWORLD — Session & Sync Ledger** com:

- ator/agente;
- missão;
- modo;
- branch/base SHA/HEAD quando houver escrita Git;
- escopo GitHub e Notion;
- artefatos;
- drift;
- segurança;
- resultado (`CAPTURED`, `MODELED`, `PARTIAL-SYNC`, `SYNCED`, `AUDITED`, `PROMOTED`);
- handoff.

O Ledger é um **índice de operação**, não uma segunda memória canônica.

## 8. Context Router — contexto por saliência

Não carregar a Bíblia inteira para cada modelo.

Usar recuperação progressiva:

`HOT → WARM relevante → relações/databases → COLD sob demanda`

Selecionar contexto por:

- Concept/Entity/Question/Decision IDs;
- dependências upstream/downstream;
- personagens/facções/lugares envolvidos;
- overlap temporal;
- Source Records relacionados;
- delta recente.

Toda missão também pode declarar:

- `READER-SAFE`;
- `WRITER-ROOM`;
- `AUTHOR-ONLY`.

Assim uma tarefa de diálogo, por exemplo, não precisa receber automaticamente revelações Author-Only que poderiam vazar para o texto.

## 9. Independent / blind-first mode

Para questões estruturais de alto valor, preferir `BLIND-FIRST`:

1. agente lê Author Sources + estado atual + gate;
2. produz diagnóstico independente;
3. só depois lê propostas de outros modelos;
4. produz delta/crítica.

Isso reduz anchoring e groupthink.

Consenso entre IAs é sinal, não prova. Divergência fundamentada também é informação.

## 10. Pipeline intelectual

```text
author/source capture
        ↓
normalização / pergunta de mundo
        ↓
research + independent review(s)
        ↓
worldbuilding / narrative / visual alternatives
        ↓
continuity + Devil's Advocate + Impact Cone
        ↓
síntese do Integrador
        ↓
autor entende trade-offs
        ↓
autor aceita / modifica / combina / rejeita / estaciona
        ↓
integração única no shared state
        ↓
lore regression / graph / timeline / story impact
        ↓
GitHub ↔ Notion reconciliation
        ↓
promoção de status somente se explicitamente warranted
```

## 11. Impact Cone

Mudanças estruturais devem verificar, conforme aplicável:

- conceitos e entidades afetados;
- upstream/downstream dependencies;
- cosmologia/metafísica;
- biologia/ecologia;
- história/timeline;
- geografia;
- cultura/religião;
- política/economia/instituições;
- personagens e relationships;
- plot/subplots/arcs;
- combate/guerra;
- visual/live-action/VFX;
- exposição e burden cognitivo;
- riscos de cópia/anacronismo;
- reversibilidade.

Uma melhoria local que quebra um invariant global não é melhoria.

## 12. Concorrência e semantic locks

Dois arquivos diferentes podem representar a mesma verdade. Portanto o projeto usa **semantic scope**, não apenas file paths.

Antes de integração, identificar o alvo por um ou mais:

- Concept ID;
- Entity ID;
- Question ID;
- Decision ID;
- timeline family;
- subsystem.

### Single-writer no momento de integração

Somente uma sessão integradora deve reconciliar simultaneamente:

- `PROJECT_STATE.md`;
- `HANDOFF.md`;
- `RETOMADA.md`;
- `START_HERE_FOR_AI.md`;
- Bíblia/promoted lore;
- canonical graph/timeline;
- Notion Resume Packet e canonical status fields.

Se duas sessões tocarem o mesmo semantic scope, o resultado é `DRIFT + synthesis`, nunca `last-write-wins`.

## 13. Artifact lifecycle — versão simples

- **EPHEMERAL:** scratch/tool output; pode desaparecer.
- **CAPTURED:** fonte preservada com provenance.
- **MODELED:** conceito/entidade/pergunta/relação estruturada.
- **REVIEWED / ACCEPTED:** passou por conselho/autor, mas ainda pode não estar integrado.
- **INTEGRATED:** representação correta no shared GitHub + Notion para o escopo.
- **PROMOTED:** `WORKING-CANON`/`CANON` por decisão explícita.
- **ARCHIVED / SUPERSEDED / REJECTED / PARKED:** continua recuperável, mas sai do contexto ativo.

Regra:

> **Escrever bonito não promove status. Capturar não modela. Aceitar não sincroniza. Sincronizar não canoniza.**

## 14. External-agent quarantine sem explosão de branches

Default: `READ-ONLY CONSULTANT`.

Se a missão puder ser resolvida por leitura + pesquisa + relatório, **não abrir branch**.

Se escrita Notion isolada for autorizada, usar a própria mission/output page; não editar shared editorial/canonical pages.

Se escrita Git durável for realmente necessária, usar `EXTERNAL REVIEW QUARANTINE` conforme `EXTERNAL_AGENT_QUARANTINE.md`:

- branch temporária;
- namespace isolado;
- nenhuma edição de Bíblia/HOT/canonical graph durante research;
- sem merge por iniciativa do agente;
- fechar/aposentar a branch/PR depois do handoff ou integração.

Um relatório externo pode ser **um único dossier Markdown** contendo contexto, diagnóstico, pesquisa, propostas, Impact Cones e handoff. Dividir em vários arquivos é opcional quando o volume justificar; não é objetivo produzir arquivos por produzir.

## 15. Padrões extraídos de ferramentas especializadas

BeastWorld adota os mecanismos úteis sem depender dessas plataformas como source of truth:

- interlinked Codex/Wiki com IDs e backlinks;
- mapas ligados à timeline;
- relationship webs e genealogia como relações de primeira classe;
- templates por entidade/sistema;
- pesquisa ligada ao elemento que informa;
- context saliency para alimentar IA;
- visibility/spoiler scopes;
- boards/labs separados de canon;
- parallel timelines/calendars quando necessário;
- version history e supersession recuperável.

## 16. Integridade e fechamento

Depois de qualquer escrita substantiva, executar `INTEGRITY_GATES.md`.

Nunca colapsar:

`CAPTURED ≠ MODELED ≠ SYNCED ≠ AUDITED ≠ PROMOTED`

Antes de encerrar uma onda, o próximo agente deve conseguir descobrir:

- o que foi feito;
- onde vive;
- quem/qual fonte originou;
- que autoridade possui;
- o que continua aberto;
- qual é a próxima ação segura.

## 17. Invariante final

> **Muitas IAs podem pensar em paralelo. O BeastWorld possui uma única memória editorial integrada.**
