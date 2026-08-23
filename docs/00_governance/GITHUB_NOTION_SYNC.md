# GitHub ↔ Notion Sync Contract

**Status:** governance  
**Last reviewed:** 2026-08-23

## Assimetria intencional

**GitHub = fonte versionada da verdade editorial.**  
**Notion = Wiki relacional, pesquisa, navegação, dashboards, Story/World Graph e interface cognitiva.**

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
regressão de lore / Impact Cone
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
- relações de navegação;
- snapshots visuais do grafo;
- Story Graph ainda hipotético;
- Visual Asset Atlas em `RAW`/`DIRECTION`;
- AI Skills de operação;
- relações tipadas exploratórias do Edge Registry enquanto `HYPOTHESIS`.

## O que deve chegar ao GitHub

- regras adotadas;
- Bíblia mestra;
- cronologia consolidada;
- entidades promovidas;
- ADRs;
- Source Records importantes;
- governança;
- schemas e grafo canônico;
- documentação da arquitetura operacional do Notion que uma IA precisa conhecer para reancorar.

## Política de conflito

Para `WORKING-CANON`/`CANON`, se Git e Notion divergirem: marcar `DRIFT`; ler histórico/ADR/fonte; não escolher silenciosamente a versão conveniente.

Para `HYPOTHESIS`, Notion pode estar deliberadamente à frente; `NOT-IN-GIT` é válido.

## Creator OS — regra de não duplicação

Desde 23/08/2026, o Notion possui uma camada `Creator OS / Second Brain`.

Princípio:

> **uma informação, uma fonte verdadeira, múltiplas visualizações.**

Portanto:

- linked views não criam novo registro;
- dashboards não são fonte de verdade;
- o HTML do Living Knowledge Graph é um snapshot de leitura, não um banco;
- o `Relation Edge Registry` complementa relações antigas e não autoriza apagar `Related Concepts`, `Dependencies` ou `Dependents`;
- `Story Architecture` descreve ordem narrativa e não modifica automaticamente o World Graph;
- `Visual Asset Atlas` descreve produção/aprovação visual e não modifica automaticamente o cânone.

Documentação completa:

`docs/00_governance/NOTION_CREATOR_OS_2026-08-23.md`

## Entradas atuais do Notion

- Wiki Hub: `https://app.notion.com/p/3c142424cdbc81cd9f8bd269c3674224`
- Enciclopédia: `https://app.notion.com/p/3c142424cdbc8100bd1bf72591c4288d`
- Creator OS: `https://app.notion.com/p/3c542424cdbc81ad8160f9e3dfe797d7`
- Living Knowledge Graph: `https://app.notion.com/p/3c542424cdbc81db8ba2d444f1fdedcb`
- Writer's Room: `https://app.notion.com/p/3c542424cdbc818ab1ede862d0d2a59a`
- Visual Atlas: `https://app.notion.com/p/3c542424cdbc81d4b776c01294163c4b`
- Canon & Research Control: `https://app.notion.com/p/3c542424cdbc81b4ae55f056fa2ec2cd`
- Command Center: `https://app.notion.com/p/3c142424cdbc817da8b8fcc2d32d5470`

Databases novos:

- Edge Registry: `collection://f874ef52-beca-4d50-8e55-985c563523e9`
- Story Architecture: `collection://11c4a517-6079-44ee-9890-8740317e5137`
- Visual Asset Atlas: `collection://381e6631-9c37-409d-85a5-ad436b34c9c3`

## Estado histórico do bootstrap

O bloco abaixo é preservado como referência histórica, não como ordem para forçar branch antiga:

Repo: `dyegorodrigues/BeastWorld` — private.  
PR histórico de fundação: `#2 — Bootstrap BeastWorld Worldbuilding OS`.  
Branch histórica: `agent/worldbuilding-os-bootstrap`.

O bootstrap só deveria deixar draft depois de:

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
