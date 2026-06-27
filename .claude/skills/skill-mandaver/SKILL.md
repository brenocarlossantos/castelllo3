---
name: skill-mandaver
description: Use esta skill quando o usuário quiser executar o projeto com base em tudo que foi planejado na skill-rabisco. Esta skill deve ler docs/RABISCO.md, executar apenas itens ainda não executados, atualizar status, testar e apresentar o resultado.
argument-hint: "[opcional: foco da execução]"
---

# skill-mandaver — Modo de Execução

Você está no **modo de execução**. Seu trabalho é transformar o planejamento vivo de
`docs/RABISCO.md` em mudanças reais no projeto, com qualidade e sem retrabalho.

`$ARGUMENTS` é **opcional** e indica um foco para esta rodada (ex.: "só o hero",
"funcionalidades de scroll"). Se vier vazio, considere todos os itens executáveis
elegíveis.

## ✅ Fluxo obrigatório

1. **Leia `docs/RABISCO.md` inteiro antes de qualquer coisa.**
2. **Selecione os itens elegíveis** — apenas status `[NOVO]`, `[PLANEJADO]`,
   `[PENDENTE]` ou `[REVISAR]`.
   - **Nunca** reexecute itens `[EXECUTADO]`.
   - **Nunca** execute itens `[CANCELADO]`.
   - Se `$ARGUMENTS` definir um foco, filtre os elegíveis por esse foco.
3. **Resolva dependências e conflitos primeiro.** Confira "Pontos de atenção" e
   "Decisões aprovadas". Se um item elegível conflita com uma decisão aprovada ou com
   um ponto de atenção não resolvido, **não o execute**: marque `[PENDENTE]` e explique.
4. **Mostre uma lista curta da rodada ANTES de editar arquivos** — IDs, descrição e a
   ação pretendida. (Liste o plano e siga para a execução na mesma resposta; não pare
   para pedir confirmação a menos que haja conflito real ou risco.)
5. **Transforme o planejamento em tarefas concretas** e marque cada item em andamento
   como `[EM EXECUÇÃO]` no RABISCO enquanto trabalha nele.
6. **Analise a estrutura atual do projeto antes de editar** (arquivos existentes,
   convenções, estilos). Reaproveite o que já existe; nada de solução genérica.
7. **Execute de forma organizada e incremental**, um item por vez quando possível.
   Para revisões (`[REVISAR]`), **ajuste** o que existe — não reconstrua do zero.
8. **Respeite todas as decisões registradas** e a direção criativa do RABISCO.
   Priorize: qualidade visual, fidelidade ao conceito, responsividade, performance e
   acabamento.
9. **Teste quando o projeto permitir** — rode build, lint, testes ou suba o dev server
   e verifique o resultado. Se não houver script disponível, registre isso.
10. **Atualize os status no RABISCO:**
    - Itens concluídos → `[EXECUTADO]`.
    - Itens que não deram para fazer → `[PENDENTE]` + motivo.
11. **Acrescente um bloco no "Histórico de execução"** com data, o que foi feito,
    arquivos alterados e observações.
12. **Atualize "Próximos passos para execução"** removendo o que foi concluído.

## Permissões desta skill

Diferente da `/skill-rabisco`, aqui você **pode** editar arquivos do projeto, criar
componentes, mexer no layout e rodar comandos (build/lint/testes/dev server) quando
fizer sentido para implementar e validar os itens. Use isso com responsabilidade e
mantenha tudo alinhado ao RABISCO.

## Como ler os itens

Os itens seguem o formato `- [STATUS] (ID) Descrição — detalhes`. Use o `ID`
(ex.: `T-007`) para referenciar e atualizar cada um com precisão. Ao concluir, troque
apenas o `[STATUS]` do item, preservando ID e texto.

## Relatório final (formato obrigatório)

Ao terminar a rodada, responda de forma clara com **todos** estes blocos:

```
🛠️ Execução concluída

✔️ Executado nesta rodada:
- (ID) ...

🆕 Itens novos executados:
- (ID) ...

🔄 Itens revisados (REVISAR → EXECUTADO):
- (ID) ...

⏭️ Ignorados por já estarem [EXECUTADO]:
- (ID) ...

📁 Arquivos alterados:
- caminho/arquivo — o que mudou

🧭 Decisões do rabisco aplicadas:
- ...

⚠️ Não foi possível fazer:
- (ID) ... — motivo (marcado como [PENDENTE])

➡️ Próximos ajustes recomendados:
- ...
```

Se nenhum item elegível existir, informe isso e sugira usar `/skill-rabisco` para
planejar antes.
