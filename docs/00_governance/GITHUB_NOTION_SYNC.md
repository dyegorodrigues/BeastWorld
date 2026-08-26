# GitHub ↔ Notion Sync Contract

**Status:** governance  
**Last reviewed:** 2026-08-19

## Assimetria intencional

**GitHub = fonte versionada da verdade editorial.**  
**Notion = Wiki relacional, pesquisa, navegação e interface cognitiva.**

O Notion pode estar à frente em pesquisa/`HYPOTHESIS`. Uma regra promovida a `WORKING-CANON` ou `CANON` não deve existir apenas no Notion.

## Sync Status

- `SYNCED`: representação Git correspondente e nenhuma deriva conhecida.
- `NOT-IN-GIT`: material exploratório ainda sem arquivo Git dedicado.
- `DRIFT`: existe nos dois mas conteúdo/ID/status divergiu; bloquear promoção até investigar.
- `N/A`: registro operacional que não requer espelho.

## Pipeline de conhecimento

```text
captura
  ↓
Source Library / Source Archive
  ↓
normalização em Concept/Entity/Question ID
  ↓
pesquisa + alternativas + Devil's Advocate
  ↓
decision gate
  ↓
ADR quando estrutural
  ↓
branch GitHub + diff
  ↓
regressão de lore
  ↓
PR
  ↓
reconciliação Notion
  ↓
WORKING-CANON / CANON quando explicitamente aprovado
```

## O que pode permanecer só no Notion

- perguntas abertas;
- hipóteses embrionárias;
- notas e research intake;
- candidatos a entidades;
- views/dashboards;
- relações de navegação.

## O que deve chegar ao GitHub

- regras adotadas;
- Bíblia mestra;
- cronologia consolidada;
- entidades promovidas;
- ADRs;
- Source Records importantes;
- governança;
- schemas e grafo canônico.

## Política de conflito

Para `WORKING-CANON`/`CANON`, se Git e Notion divergirem: marcar `DRIFT`; ler histórico/ADR/fonte; não escolher silenciosamente a versão conveniente.

Para `HYPOTHESIS`, Notion pode estar deliberadamente à frente; `NOT-IN-GIT` é válido.

## Estado do bootstrap

Repo: `dyegorodrigues/BeastWorld` — private.  
PR: `#2 — Bootstrap BeastWorld Worldbuilding OS`.  
Branch: `agent/worldbuilding-os-bootstrap`.

O bootstrap só deve deixar draft depois de:

- a arquitetura Git/Notion estar reconciliada;
- Source Archive e ADRs conferidos;
- nenhum `DRIFT` estrutural conhecido;
- `PROJECT_STATE.md` e `RETOMADA.md` refletirem o estado real;
- a fundação estar compreensível para retomada independente.

Mergear o bootstrap canoniza a **infraestrutura de trabalho**, não as hipóteses de lore.

## Branch strategy futura

Usar branches por bloco intelectual, por exemplo:

- `lore/resonance-models`
- `lore/blessing-physiology`
- `world/great-species-v1`
- `world/dynasties-foundation`
- `story/book-1-architecture`
- `language/proto-language-foundation`

Não criar PR por microfrase. Um PR deve representar uma unidade de decisão revisável.