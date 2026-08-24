# BeastWorld — World OS

BeastWorld é um sistema visual e conectado para construir, navegar e manter um universo épico de grande escala.

## Visão

Em vez de separar o mundo em formulários rígidos, o projeto trata cada elemento como uma **entidade** e cada relação como um **vínculo**. Personagens, bestas, nações, locais, mapas, ordens, eventos, itens, religiões, culturas e qualquer categoria futura podem compartilhar o mesmo núcleo.

A interface inicial possui quatro modos sobre o mesmo conjunto de dados:

- **Grafo** — relações visuais arrastáveis entre entidades.
- **Atlas** — pontos do mundo ligados às mesmas entidades.
- **Arquivo** — exploração em cartões e busca global.
- **Cronologia** — eventos históricos vinculados ao restante do mundo.

O painel lateral funciona como inspetor contextual: resumo, relações, observações privadas e imagem da entidade selecionada.

## Stack da fundação

- Next.js (App Router)
- React + TypeScript
- React Flow / xyflow para o grafo interativo
- CSS próprio para o design system inicial

## Executar

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Arquitetura-alvo

### Núcleo de domínio

`worlds -> entities -> relations`

Uma entidade possui tipo, propriedades flexíveis, conteúdo rico, estado de cânone, visibilidade, tags e assets. Relações são tipadas e podem ter direção, período histórico, força, notas e visibilidade.

### Próximas camadas

1. Persistência PostgreSQL + autenticação e storage de assets.
2. Editor rico e templates por tipo de entidade.
3. Canvas infinito para quadros, árvores, fluxos e teorias.
4. Atlas de mapas em alta resolução, mapas aninhados, pins, regiões e camadas.
5. Calendários próprios, eras, eventos e múltiplas timelines.
6. Busca global, backlinks e autolink.
7. Controle de segredos/cânone e visões Autor / Leitor / Jogador.
8. Assistente de lore com contexto do próprio mundo, checagem de contradições e criação guiada.
9. Importadores para Markdown/JSON e exportação completa dos dados.
10. Modo local/offline e sincronização.

## Princípio do produto

**Criar uma vez, conectar em qualquer lugar.**

Uma besta adicionada ao bestiário deve poder aparecer imediatamente no mapa, no grafo de relações, numa batalha da cronologia, na página de uma nação e num quadro visual sem duplicar informação.
