# Auditoria de Reidratação de Contexto — BeastWorld

**ID:** `BW-GOV-AUDIT-CONTEXT-2026-08-22`  
**Data:** 2026-08-22  
**Status:** `AUDITED`  
**Escopo:** explicar por que uma nova conversa pode iniciar sem o conhecimento acumulado e definir a correção versionada.

## 1. Diagnóstico

O projeto já possuía governança, Source Archive, handoffs, uma branch Manus e documentos criativos detalhados. Porém, esses elementos estavam distribuídos em vários pontos e dependiam de uma nova conversa saber que deveria abrir `RETOMADA.md`, identificar a branch correta e seguir a cadeia de fontes. Um projeto compartilhado não implica, por si só, que toda conversa carregará automaticamente o conteúdo do GitHub, a branch Manus, os arquivos COLD ou a memória de outra conversa.

A falha, portanto, não foi necessariamente a ausência do trabalho. Foi a ausência de um **pacote de entrada obrigatório, explícito e autossuficiente**, com instruções curtas, ordem de leitura, resumo do estado vigente e links internos para as fontes de prova.

## 2. O que já existia antes desta correção

O repositório já possuía:

- regras de cânone, status, memória e quarentena de agentes externos;
- Source Records autorais de 19, 20, 21 e 22/08;
- respostas e sínteses de ChatGPT, Claude, Grok e Manus em camadas separadas;
- Documento-Mestre v2 e documentos de auditoria da branch Manus;
- delta autoral de 22/08 sobre Azhara, o dragão negro descendente, o pai, a família, a liberdade e os vínculos múltiplos;
- índice-mestre de interações, política de proveniência, auditoria de cobertura, ledger de sessões e manifesto de hashes;
- branches externas e branch `manus/reconstruction-spine-2026-08-21` separadas do cânone compartilhado.

Esse patrimônio estava documentado, mas não existia ainda uma porta de entrada única que dissesse a outra conversa: “pare; leia isto; esta é a verdade operacional; estas são as fontes; este é o estado não canonizado; não comece outra obra”.

## 3. Causa operacional da perda de contexto

A nova conversa provavelmente iniciou em uma destas condições: branch errada; contexto do projeto sem leitura automática dos arquivos; ausência de instrução de bootstrap no primeiro prompt; leitura apenas do README; leitura apenas da `main`; ou acesso a um subconjunto de arquivos sem seguir as referências internas.

O problema é agravado porque o BeastWorld possui muitos documentos provisórios, branches de Claude/Grok/Manus e hipóteses com nomes parecidos. Sem uma camada HOT clara, uma IA pode produzir uma proposta plausível, porém desconectada do trabalho acumulado.

## 4. Requisito da correção

A correção deve criar quatro portas, cada uma com função distinta:

| Porta | Função | Leitura |
|---|---|---|
| `START_HERE_FOR_AI.md` | bootstrap curto na raiz | primeira leitura obrigatória |
| `docs/00_governance/CONTEXT_REHYDRATION_PACKET.md` | contexto HOT completo até o último commit | segunda leitura obrigatória |
| `docs/00_governance/CONTEXT_INDEX.md` | mapa de assuntos e fontes | navegação seletiva |
| `docs/00_governance/SESSION_RESUME_TEMPLATE.md` | padrão para fechar a próxima sessão | uso em toda interação durável |

O pacote precisa declarar a branch correta, o HEAD, o status do cânone, os nomes rejeitados, os documentos de maior autoridade, as questões abertas, as proibições e o procedimento para confirmar que a reidratação foi concluída.

## 5. Regra de sucesso

Uma nova conversa só pode afirmar que entendeu o BeastWorld depois de responder, com base nos arquivos versionados:

1. qual é a branch de trabalho;
2. qual é o status do cânone;
3. qual é a diferença entre Azhara e o dragão negro descendente;
4. o que o protagonista quer e o que não quer;
5. por que o pai não deve ser morto ou destituído automaticamente;
6. quais nomes foram rejeitados;
7. o que é fonte autoral, proposta de IA e decisão;
8. quais arquivos deve consultar para o próximo objetivo;
9. quais assuntos ainda estão abertos;
10. qual foi o último commit verificado.

Se não conseguir responder a isso, deve parar e pedir reancoragem, não improvisar um novo universo.
