---
name: skill-rabisco
description: Use esta skill quando o usuário quiser planejar, anotar, organizar ideias, referências, decisões, requisitos, alterações futuras ou direção criativa sem executar nada ainda. Esta skill funciona como modo de planejamento e deve salvar tudo em docs/RABISCO.md.
argument-hint: "[ideia, pedido, referência ou decisão]"
---

# skill-rabisco — Modo de Planejamento

Você está no **modo de planejamento**. Seu único trabalho é capturar, organizar e
registrar o que o usuário mandar dentro de `docs/RABISCO.md`. Você **não executa nada**
no projeto.

O input do usuário (a ideia, pedido, referência ou decisão) vem em `$ARGUMENTS`.

## ⛔ Proibições absolutas

Nesta skill você **NUNCA** pode:

- Executar, escrever ou alterar código do site.
- Criar, mover, renomear ou apagar componentes, páginas ou assets.
- Mexer no layout, no CSS, no JS ou no HTML do projeto.
- Rodar qualquer comando: `npm`, build, lint, dev server, install, testes, git, etc.
- Iniciar o servidor de preview ou abrir o site.
- Editar qualquer arquivo que não seja `docs/RABISCO.md`.

O **único** arquivo que esta skill pode escrever é `docs/RABISCO.md`.

Se o usuário pedir para executar algo, **não execute**. Apenas registre como tarefa
planejada e lembre, no resumo final, que a execução acontece com `/skill-mandaver`.

## ✅ Fluxo obrigatório

1. **Leia `docs/RABISCO.md` inteiro antes de escrever.** Se o arquivo não existir,
   crie-o usando a estrutura padrão descrita abaixo.
2. **Interprete `$ARGUMENTS`.** Entenda se é: uma visão geral, conceito de marca,
   referência visual, funcionalidade, decisão aprovada, ideia para testar, ajuste
   futuro, ou uma tarefa executável.
3. **Adicione a entrada na(s) seção(ões) certa(s).** Nunca jogue tudo em um lugar só —
   distribua conforme a natureza do conteúdo.
4. **Toda tarefa/ajuste/decisão executável recebe um status** (ver tabela abaixo).
   Item recém-chegado normalmente entra como `[NOVO]`. Quando você organiza e deixa
   pronto para execução, suba para `[PLANEJADO]`.
5. **Nunca apague decisões anteriores.** O RABISCO é cumulativo e é um planejamento vivo.
6. **Nunca altere itens `[EXECUTADO]`**, a menos que o usuário peça revisão ou mudança.
7. **Se a nova ideia mexer em algo já `[EXECUTADO]`**, não reescreva o item antigo.
   Crie um **novo** item com status `[REVISAR]`, explicando que é uma alteração sobre
   algo já implementado, e referencie o item original.
8. **Se houver conflito** entre uma ideia antiga e uma nova, registre em
   **"Pontos de atenção"** descrevendo os dois lados e o que precisa ser decidido.
9. **Atualize "Próximos passos para execução"** com o que deverá ser feito quando o
   usuário chamar `/skill-mandaver`.
10. **Salve o arquivo** e **responda apenas com um resumo curto** do que foi registrado
    (seções afetadas, novos itens e seus status, conflitos detectados).

## Tabela de status

| Status          | Significado                                            |
| --------------- | ------------------------------------------------------ |
| `[NOVO]`        | Algo recém-adicionado, ainda não organizado            |
| `[PLANEJADO]`   | Organizado e pronto para execução                      |
| `[PENDENTE]`    | Ainda precisa ser feito                                |
| `[EM EXECUÇÃO]` | Está sendo implementado agora (controlado pelo mandaver)|
| `[EXECUTADO]`   | Já foi feito no projeto                                 |
| `[REVISAR]`     | Feito, mas precisa de ajuste                            |
| `[CANCELADO]`   | Não deve mais ser feito                                 |

## Convenção de itens de tarefa

Cada item em "Tarefas planejadas", "Ajustes futuros" e "Próximos passos" deve seguir:

```
- [STATUS] (ID) Descrição curta e objetiva — detalhes/critério de pronto.
```

Use IDs sequenciais e estáveis (`T-001`, `T-002`, …). Nunca reaproveite um ID antigo.
Os IDs permitem que a `/skill-mandaver` referencie e atualize cada item com precisão.

## Estrutura padrão de `docs/RABISCO.md`

Se precisar criar o arquivo do zero, use exatamente estas seções, nesta ordem:

```
# RABISCO DO PROJETO
## Visão geral
## Identidade e conceito
## Referências visuais
## Funcionalidades desejadas
## Estrutura planejada do site
## Tarefas planejadas
## Decisões aprovadas
## Ideias para testar
## Ajustes futuros
## Pontos de atenção
## Histórico de execução
## Próximos passos para execução
```

## Resumo final (formato da resposta)

Termine **somente** com algo no formato:

```
📝 Registrado no RABISCO
- Seções atualizadas: ...
- Novos itens: (T-00X) ... [STATUS]
- Conflitos/atenção: ... (ou "nenhum")
- Pronto para executar com: /skill-mandaver
```

Nada de implementação. Nada de comandos. Apenas o registro e o resumo.
