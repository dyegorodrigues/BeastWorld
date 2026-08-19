# HANDOFF — BeastWorld

**Atualizado:** 2026-08-19  
**Função:** memória quente para retomada entre conversas. Ler junto de `PROJECT_STATE.md` e `docs/00_governance/RETOMADA.md`.

## Remoto confirmado

- repo: `dyegorodrigues/BeastWorld`;
- visibilidade: **private**;
- base `main`: `8b0b54691fac646d0874fe51c98d6b5d7821eb92`;
- branch ativa do bootstrap: `agent/worldbuilding-os-bootstrap`;
- PR #2: **open + draft + unmerged + mergeable**;
- reviews: 0;
- review threads: 0;
- nenhum workflow/status check configurado neste bootstrap.

O repo esteve temporariamente público durante a sessão de 19/08; o autor corrigiu a visibilidade para private antes de qualquer ingestão sensível posterior. O incidente permanece documentado.

## Arquitetura de memória

- **M0 / COLD:** `docs/08_sources/` — fontes brutas e alta fidelidade;
- **M1 / WARM:** módulos semânticos, research, graph e registries Notion;
- **M2 / HOT:** `PROJECT_STATE.md` + `HANDOFF.md` + `RETOMADA.md`;
- **M3 / CANON:** Bíblia, ADRs e módulos explicitamente promovidos.

Princípio: **compactar para recuperar, nunca compactar para apagar nuance**.

## Marco anterior — brainstorm Meta AI

Foi incorporado o PDF de 18 páginas `Ideias bagunçadas (1).pdf` com:

- hash do original;
- transcrição raw em 3 partes;
- source record;
- intake crítico;
- Character Lab;
- Visual Development;
- perguntas BW-Q-013 a BW-Q-022.

Regra: fala do autor = fonte primária de intenção; resposta Meta = proposta secundária. Nomes/números Meta não são cânone.

## NOVO MARCO — longevidade, Luz e renascimento

Fonte autoral integral:

`docs/08_sources/conversations/2026-08-19-author-longevity-light-rebirth-verbatim.md`

Intake crítico:

`docs/06_research/2026-08-19-longevity-light-rebirth-critical-intake.md`

Módulo semântico:

`docs/02_lore/mythology/LIGHT_AND_REBIRTH_HYPOTHESIS.md`

### Direções autorais fortes

1. **Eco** pode prolongar moderadamente a vida e carregar fenótipos/aptidões acima da média de forma variável.
2. **Vínculo** é o principal determinante da longevidade excepcional.
3. Fertilidade tende a durar mais que em humanos comuns, mas cai brutalmente com idade; em média o declínio feminino é muito mais severo; esterilidade existe em ambos os sexos.
4. Existe uma continuidade individual provisoriamente chamada **Luz** — consciência + memória + identidade/existência do indivíduo.
5. Após morte de um parceiro vinculado, a Luz pode potencialmente permanecer ancorada no sobrevivente.
6. Essa permanência é voluntária. A Besta/humano pode recusar e retornar à Grande Consciência.
7. Forçar a permanência pode danificar/destruir a Luz.
8. Um parceiro sobrevivente pode tentar **reconstituição** do morto por enorme transferência de sangue/material vital + formação de receptáculo/casulo + dormência/coma de aproximadamente um ano como duração provisória.
9. O preço imaginado pelo autor não é perda permanente de essência vital: é vulnerabilidade, tempo, gasto metabólico, dependência e risco de interrupção.
10. Se ambos morrem, a via normal de ancoragem recíproca desaparece; ambos retornam à Grande Consciência. Recuperação posterior, se existir, é outro mecanismo e deve ser excepcional.
11. A Grande Consciência pode permitir **reencarnação** distinta da reconstituição — inicialmente imaginada para Bestas retornando desde filhote, com parte da consciência/memória preservada.
12. Humanos podem vir a acessar algo semelhante mais tarde na saga, especialmente em perda narrativa de alto impacto, mas isso não está definido.
13. O autor abriu hipótese de cosmologia especial do mundo e citou tabuinhas sumérias, alienígenas e um suposto arquivo FBI/Matrix como referências a pesquisar — **inspiração, não evidência aceita**.
14. O autor abriu mecanismo de **sangue vital**: Vinculado/Abençoado pode doar sangue a cônjuge/família/filhos; doador enfraquece mas recupera volume; Besta pode doar sangue vital ao humano; propriedades e limites ainda não definidos.
15. Existe hipótese de alimentação/predação ajudando recuperação e talvez absorção de algo além de nutrientes; isso permanece aberto e não deve virar sistema universal de “absorver poder” sem auditoria.
16. A distribuição de longevidade deve ser **long-tail**: grande variação, com casos extraordinários muito acima da média em vez de número universal.

## Hipótese arquitetural mais promissora

> **O Vínculo cria ancoragem ressonante recíproca entre duas Luzes vivas. A mesma arquitetura pode explicar longevidade, preservação temporária após morte e reconstituição.**

Possível cadeia:

```text
Reconhecimento → Vínculo → Bênção
                     ↓
          ancoragem ressonante recíproca
             ↙             ↓             ↘
     longevidade     Luz após morte    reconstituição
```

Isso ainda é HYPOTHESIS, mas é preferível a criar uma magia independente para cada fenômeno.

## Dois retornos que NÃO devem ser confundidos

### Reconstituição vinculada

- um parceiro morre;
- o outro vive;
- Luz aceita ancoragem;
- sobrevivente forma receptáculo por sacrifício biológico;
- longa dormência/vulnerabilidade;
- indivíduo retorna como continuidade forte do mesmo ser.

### Reencarnação pela Grande Consciência

- Luz já retornou ao substrato universal;
- inicia novo ciclo corporal;
- pode voltar desde filhote;
- memória/consciência podem ser apenas parciais;
- identidade jurídica/metafísica “é a mesma pessoa?” permanece aberta.

## Axioma-candidato

A nova fala reforça uma coerência com a Bênção:

> **Ressonância profunda estabiliza aquilo que é oferecido/aceito; coerção tende a produzir instabilidade ou ruptura.**

Relacionar a:

> **Sangue tomado é apenas sangue. Sangue oferecido muda sangue.**

Não promover sem testar coerção indireta, fraude, incapacidade, abuso e exceções.

## Sangue vital — risco sistêmico

Se sangue de Vinculados transfere poder facilmente, o mundo gera automaticamente:

- mercado negro;
- escravidão/captura de Abençoados;
- bancos de sangue dinásticos;
- doping militar;
- medicina exclusiva;
- cultos;
- assassinato por colheita;
- política de compatibilidade.

Direção de teste: distinguir **sangue comum**, **sangue fisiologicamente alterado pela Bênção** e **oferta vital em estado ressonante**. O terceiro pode ter efeito maior sem reproduzir Vínculo/Bênção.

## Novas perguntas a formalizar

- **BW-Q-023:** propriedades, compatibilidade e economia do sangue vital;
- **BW-Q-024:** duração/limite da ancoragem da Luz após morte;
- **BW-Q-025:** condição cosmológica especial do mundo;
- **BW-Q-026:** repetibilidade da reconstituição sem transformar morte em reset tático.

## Protagonista / visual continuam válidos como Character Lab

- personagem-ímã;
- justiça sem suavidade;
- regime social magnético;
- regime de ameaça frio e cirúrgico;
- sexualidade seletiva e politicamente explorável;
- talento + disciplina;
- falha precisa nascer das virtudes.

## Não fazer ainda

- não nomear definitivamente Luz/Grande Consciência;
- não transformar “Grande Mãe” em deusa criadora sem decidir Author Truth;
- não afirmar origem alienígena;
- não usar FBI/Suméria como prova sem verificar fonte primária;
- não fixar um ano como constante universal antes de testar escala;
- não tornar toda morte reversível;
- não transformar sangue em poção universal;
- não tornar todas as Grandes Espécies hematófagas;
- não aceitar absorção de “poder de vítimas” como regra geral sem consequências;
- não promover qualquer hipótese apenas porque ganhou um arquivo detalhado.

## Próxima interação recomendada com o autor

Antes de abandonar o bloco de morte/consciência, fechar por entrevista guiada as decisões estruturais mínimas:

1. natureza da **Luz** versus Ressonância versus Grande Consciência;
2. quanto tempo uma Luz pode permanecer ancorada;
3. como exatamente funciona a reconstituição e o que a interrompe;
4. o que volta igual e o que pode voltar diferente;
5. frequência/repetibilidade do processo;
6. propriedades do sangue vital e compatibilidade;
7. só então calcular faixas de longevidade/fertilidade.

Depois retornar aos demais blocos: ameaça comum → marcialidade → ecossistemas → protagonista → casamento/Eco → língua → visual.
