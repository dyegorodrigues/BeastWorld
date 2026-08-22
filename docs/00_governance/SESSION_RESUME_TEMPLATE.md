# BeastWorld — Session Resume Template

Copiar este modelo para cada sessão substantiva. O arquivo final deve ser salvo em `docs/08_sources/conversations/` ou em `docs/00_governance/` conforme a função, e deve ser ligado ao `SESSION_ARCHIVE_LEDGER.md`.

## Metadados

- `session_id:` `BW-SESSION-YYYY-MM-DD-NNN`
- `turn_range:` `BW-TURN-YYYY-MM-DD-NNN-MMM` até `BW-TURN-YYYY-MM-DD-NNN-MMM`
- `date:` `YYYY-MM-DD`
- `actor:` Autor + agente(s)
- `mission:` descrição curta
- `mode:` captura / pesquisa / análise / proposta / revisão / roteiro / desenvolvimento / governança / auditoria
- `repo:` `dyegorodrigues/BeastWorld`
- `branch:`
- `base_sha:`
- `head_sha:`
- `fidelity:` RAW-AVAILABLE / RAW-PARTIAL / MEDIATED-ONLY / SUMMARY-ONLY / NOT-AVAILABLE
- `status:` CAPTURED / MODELED / INTEGRATED / AUDITED / SYNCED / PARTIAL-SYNC / PROMOTED

## 1. Fonte autoral bruta

Registrar o texto autoral relevante sem reescrever. Se houver anexo, preservar o arquivo original e apontar o caminho. Se o texto estiver apenas na interface, declarar que a captura é parcial.

## 2. Anexos e assets

| Arquivo original | Caminho versionado | Tipo | SHA-256 | Observação |
|---|---|---|---|---|
|  |  |  |  |  |

## 3. Respostas visíveis da IA

Preservar separadamente o que foi respondido ao autor. Não misturar com fala autoral, não incluir raciocínio privado e não chamar uma síntese de transcrição literal.

## 4. Delta semântico

| ID | O que apareceu ou mudou | Fonte | Classificação | Status |
|---|---|---|---|---|
| `BW-{DOMAIN}-{CONCEPT}-{NNN}` |  |  | SOURCE-DERIVED / AUTHOR-DIRECTION / INFERENCE / PROPOSAL / RISK |  |

## 5. Decisões e não decisões

### Decisões explicitamente aprovadas

- `DECISION-ID:` pergunta completa, escolha completa, data e evidência.

### Direções fortes ainda não canonizadas

- descrição e fonte.

### Questões abertas

- `OPEN-ID:` pergunta bloqueadora ou não bloqueadora.

### Rejeitados/superados

- proposta, motivo e documento que a substituiu.

## 6. Impacto

Explicar quais módulos, entidades, timeline, visual, roteiro, política, produção ou pesquisa são afetados. Se a mudança for estrutural, anexar `Impact Cone`.

## 7. Próxima retomada

- arquivo HOT a ler primeiro:
- arquivo WARM relevante:
- fonte COLD necessária:
- próxima ação:
- pergunta que precisa do autor:
- risco de drift:

## 8. Validação de fechamento

- [ ] `git diff --check` passou;
- [ ] branch e HEAD remoto foram verificados;
- [ ] anexos relevantes possuem hash;
- [ ] links internos apontam para arquivos versionados;
- [ ] fonte autoral está separada de resposta de IA;
- [ ] nenhum cânone foi promovido sem autorização;
- [ ] status epistemológico foi declarado;
- [ ] linha adicionada ao `SESSION_ARCHIVE_LEDGER.md`;
- [ ] `HANDOFF.md` ou `RETOMADA.md` foi atualizado quando o estado HOT mudou;
- [ ] limitações de cobertura foram registradas;
- [ ] Notion, se usado, não diverge silenciosamente do GitHub.

## 9. Linguagem proibida sem evidência

Não escrever “está tudo salvo”, “transcrição integral”, “sincronizado”, “cânone” ou “entendi tudo” sem indicar o arquivo, hash, commit e escopo que sustentam a afirmação. Preferir: “preservado no escopo declarado”, “captura parcial”, “síntese de alta fidelidade”, “proposta em quarentena” ou “sincronização verificada”.
