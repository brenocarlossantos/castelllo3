# RABISCO DO PROJETO

> Planejamento vivo da CASTElllO³. Adicione ideias com `/skill-rabisco` e execute com
> `/skill-mandaver`. Itens executáveis seguem o formato `- [STATUS] (ID) Descrição — detalhes`.
> Status válidos: `[NOVO]` · `[PLANEJADO]` · `[PENDENTE]` · `[EM EXECUÇÃO]` · `[EXECUTADO]` · `[REVISAR]` · `[CANCELADO]`.

## Visão geral

Site institucional/portfólio do estúdio criativo **CASTElllO³**. Objetivo principal:
uma experiência editorial, cinematográfica e experimental — com paridade de ritmo,
hierarquia, espaçamento e interações em relação à referência **mason-wong.com**, mas
com identidade própria. Deve abrir em `localhost` e funcionar em desktop e mobile.

## Identidade e conceito

- Nome **CASTElllO³** com três "l" minúsculos formando uma **pilastra** (base que sustenta ideias).
- Conceito do **número 3**: estrutura, ritmo e conclusão (início/meio/fim; setup/conflito/resolução; regra dos terços).
- Cada "l" assume um canal **RGB** (base da imagem digital) ligado a Design / Filme / Projetos.
- Estética **anos 80 / VHS / imagem analógica**: RGB levemente desaturado, ruído, memória, textura.
- Tom: premium, experimental, editorial, minimalista, conceitual. RGB como detalhe, não carnaval.
- Equação da marca: **3 letras · 3 cores · 3 áreas · 1 conceito**.

## Referências visuais

- **mason-wong.com** — qualidade de referência: minimalismo, muito espaço negativo, labels em mono, tipografia grande, hover-reveal de works, scroll suave.
- Base escura `#0b0b0c` + creme do logo `#fdf6e6`; RGB desaturado `#f85255` / `#9be187` / `#5fa8ff`.
- Tipografia: **Archivo** (eixo de largura expanded, via variable font) para display + **Space Mono** para labels de "sinal".
- Observações: aberração cromática RGB e grain/scanline VHS como assinatura visual.
- **Menu-guia lateral (ref. do usuário, 2 imagens):** índice vertical fixo na borda direita, centralizado.
  - *Imagem 01 (idle / rolando a página):* aparecem só os traços (ticks) à direita e o nome **apenas da seção ativa** ("Selected" no exemplo), em mono, alinhado à direita do tick ativo. Tick ativo é mais largo/longo.
  - *Imagem 02 (mouse sobre o menu):* revela o nome de **todas as seções** ao lado dos ticks (ex.: Intro, Selected, Archived, Beginnings, Trajectory, Approach, Tinkering, Takes, Tools, Colophon, Contact), seção(ões) ativa(s) em negrito/cor cheia e o resto esmaecido. Botão "voltar ao topo" continua no canto inferior direito.
- **Seção Clientes — arco de nomes (ref. do usuário, 3 imagens):** banda horizontal com 3 zonas na mesma linha central — ESQUERDA: nomes dos clientes em tipografia grande dispostos num **arco/curva** vertical; CENTRO: logo do cliente ativo; DIREITA: descrição curta do cliente.
  - *Imagem 01:* cliente ativo "Louis Vuitton" grande à esquerda, já se vê o 2º nome ("OnePlus") surgindo abaixo, esmaecido; centro = logo do cliente; direita = descrição ("From multinational companies to independent brands…").
  - *Imagens 02 e 03:* ao rolar, **só o arco de nomes** sobe/desce (Louis Vuitton → OnePlus → Chanel → Glossier → LaMer → L'Oreal → Dior…), seguindo a curva (nomes rotacionados pela tangente, esmaecendo nas pontas); o nome no centro vertical é o ativo (creme cheio); logo e descrição ficam fixos e fazem crossfade para o cliente ativo (ex.: img 03 = "Glossier." no centro).
- **Seção Pilares — estilo "what we do" da fromanother.love (ref. do usuário, 2 imagens):** layout 2 colunas, pinado/dirigido por scroll. ESQUERDA = índice do pilar (número + nome em label menor, estilo itálico/serifado na ref: "01 Direction", "02 Digital", "03 Offline"). DIREITA = lista grande (display) dos serviços do pilar ativo, empilhados (ex.: Art Direction / Design Concept / Commercials & CGI / Brand Identity), com os serviços do próximo pilar já visíveis como "fantasma" esmaecido abaixo (Web Experience / Social Media / Asset Production / Immersive Event…). Fundo com glow/gradiente colorido (na ref, vermelho/rosa desaturado). Ao rolar, avança Pilar 01 → 02 → 03, destacando o ativo e esmaecendo os demais.

## Funcionalidades desejadas

- Header fixo minimalista que condensa no scroll e some ao descer / aparece ao subir.
- Smooth scroll (Lenis) com fallback nativo e respeito a `prefers-reduced-motion`.
- Reveals no scroll, hovers sofisticados, marquee tipográfico.
- Menu mobile full-screen.
- Botão "voltar ao topo".
- Hover-reveal nos trabalhos com painel tintado em R/G/B.
- Menu-guia vertical fixo no lado direito (índice/indicador de seção): traços no estado idle mostrando só a seção ativa; revela todos os nomes no hover; clique navega; acompanha o scroll.
- Seção **Clientes** com arco de nomes dirigido por scroll: seção "pinada", logo e descrição fixos, só o arco de nomes rola; logo + descrição trocam conforme o cliente ativo.
- Reformular a seção **Pilares** no estilo "what we do" da fromanother.love: seção pinada, índice do pilar (número + nome) à esquerda + lista de serviços à direita; scroll avança Pilar 01 → 02 → 03 com destaque do ativo e os demais esmaecidos.
- Remover a nav inline do topo e usar um **menu hambúrguer minimalista no canto esquerdo** (em todos os tamanhos), abrindo o menu full-screen existente. Ícone de 3 traços; ao acionar, o 1º e o 3º traços se cruzam formando o **X** e o traço do meio some.

## Estrutura planejada do site

- **Header**: logo + nav (`01 Manifesto`, `02 Pilares`, `03 Trabalhos`, `04 Estúdio`) + CTA Contato. → **será simplificado** (T-017): remove a nav inline e usa **hambúrguer minimalista no canto esquerdo** abrindo o menu full-screen; logo permanece, destino do CTA "Contato" a decidir.
- **Hero**: logo SVG grande com aberração cromática RGB + labels + legenda dos canais.
- **Marquee**: "3 LETRAS · 3 CORES · 3 ÁREAS · 1 CONCEITO".
- **Manifesto**: bloco tipográfico grande com o conceito.
- **Pilares**: Design (R) / Filme (G) / Projetos (B), com hover. → **será reformulado** para o formato pinado "what we do" (índice à esquerda + serviços à direita), ver (T-016).
- **Clientes** (NOVA — vem ANTES de Trabalhos): banda com arco de nomes (esquerda) + logo (centro) + descrição (direita), dirigida por scroll/pin.
- **Trabalhos**: lista editorial com hover-reveal.
- **Estúdio + Expertise**: statement + lista de serviços.
- **Contato/Rodapé**: "Diga olá", e-mail, sociais, botão "Topo ↑".
- **Menu-guia lateral (overlay fixo)**: índice vertical na borda direita, centralizado, sobreposto a todas as seções; navega entre Hero/Intro · Manifesto · Pilares · Trabalhos · Estúdio · Contato.

## Tarefas planejadas

- [EXECUTADO] (T-001) Setup do projeto estático (HTML/CSS/JS + servidor Node sem deps) — `server.js`, `package.json`.
- [EXECUTADO] (T-002) Inserir logo real CASTElllO³ como SVG e favicon — `assets/`.
- [EXECUTADO] (T-003) Header fixo minimalista com condensar/esconder no scroll.
- [EXECUTADO] (T-004) Hero com logo + aberração cromática RGB + labels mono + legenda de canais.
- [EXECUTADO] (T-005) Marquee tipográfico "3 letras · 3 cores · 3 áreas · 1 conceito".
- [EXECUTADO] (T-006) Seção Manifesto com bloco tipográfico grande.
- [EXECUTADO] (T-007) Seção Pilares (Design/Filme/Projetos) com wash de cor + split RGB no hover.
- [EXECUTADO] (T-008) Seção Trabalhos com hover-reveal tintado por canal.
- [EXECUTADO] (T-009) Seção Estúdio + lista de expertise.
- [EXECUTADO] (T-010) Rodapé/Contato "Diga olá" + e-mail + sociais + botão Topo.
- [EXECUTADO] (T-011) Smooth scroll (Lenis) com fallback e reduced-motion.
- [EXECUTADO] (T-012) Responsividade desktop/mobile + menu mobile full-screen.
- [EXECUTADO] (T-013) Menu-guia vertical fixo no lado direito (índice de seções por traços). Critérios:
  - Fixo na borda direita, centralizado verticalmente, como overlay acima do conteúdo.
  - **Idle:** só os ticks (um por seção) + o rótulo APENAS da seção ativa, em Space Mono, alinhado à direita do tick ativo; tick ativo mais largo/longo; demais ticks curtos e esmaecidos.
  - **Hover (cursor sobre a área do menu):** revela os rótulos de TODAS as seções ao lado de cada tick; seção ativa em negrito/cor cheia (creme), demais esmaecidas; transição suave (fade/slide).
  - **Clique** num item/tick faz scroll suave (Lenis) até a seção correspondente.
  - **Scroll-spy:** destaca automaticamente a seção atual conforme rola (reaproveitar o IntersectionObserver/`is-active` já existente do header).
  - **Seções a mapear:** Hero/Intro, Manifesto, Pilares, **Clientes** (T-014), Trabalhos, Estúdio, Contato.
  - **Responsivo:** ocultar em mobile (ou reduzir a dots discretos); respeitar `prefers-reduced-motion`; acessível por teclado (focus visível) e com `aria` adequado.
  - **Estética:** traços finos creme (`#fdf6e6`) sobre fundo escuro, labels Space Mono à direita — fiel às imagens 01 (idle) e 02 (hover) da referência.
- [EXECUTADO] (T-014) Nova seção **Clientes** (posicionada ANTES de "Trabalhos selecionados"). Critérios:
  - 3 zonas alinhadas na mesma linha central: ESQUERDA = nomes dos clientes em arco/curva vertical; CENTRO = logo do cliente ativo; DIREITA = descrição curta do cliente.
  - **Pin/sticky:** a seção fica fixa enquanto se rola; logo (centro) e descrição (direita) permanecem FIXOS; **apenas o arco de nomes** sobe/desce com o scroll.
  - **Arco:** nomes dispostos numa curva circular; cada nome rotaciona acompanhando a tangente; esmaecem/saem nas pontas. O nome alinhado ao centro vertical é o **ativo** (creme cheio), os demais ficam dim.
  - **Sincronia:** ao mudar o nome ativo, a logo e a descrição fazem **crossfade** para o cliente correspondente.
  - **Estado inicial:** ao chegar na seção, 1º cliente ativo (nome + logo + descrição) e já visível o 2º nome surgindo no arco abaixo (img 01).
  - **Saída:** ao terminar a lista de clientes, despina e segue para "Trabalhos".
  - **Responsivo:** em mobile, simplificar para lista vertical (nome → logo → descrição) sem pin/arco; respeitar `prefers-reduced-motion` (vira lista estática, sem scroll-jack); acessível por teclado.
  - **Dados:** por cliente → nome + logo (SVG/PNG) + descrição. Usar PLACEHOLDERS até o usuário enviar a lista real (ver Pontos de atenção).
  - **Referências:** imagens 01/02/03 enviadas pelo usuário.
- [EXECUTADO] (T-015) Atualizar **header/nav** para incluir "Clientes" entre Pilares e Trabalhos e renumerar os índices (era 01 Manifesto · 02 Pilares · 03 Trabalhos · 04 Estúdio). Refere-se ao **(T-003) [EXECUTADO]** — é ajuste sobre algo já implementado, não reconstrução. Sincronizar também com o menu-guia (T-013) e com o scroll-spy. **(Atualizado por T-017:** a nav inline do topo será removida; logo a inclusão de "Clientes" e a renumeração passam a valer para o **menu hambúrguer/overlay**, não para a barra do topo.)
- [EXECUTADO] (T-016) Reformular a seção **Pilares** no estilo "what we do" da fromanother.love. Refere-se ao **(T-007) [EXECUTADO]** — é revisão (adaptar markup/cores existentes), **não** reconstrução do zero. Critérios:
  - **Layout 2 colunas:** ESQUERDA = índice do pilar (`01 Design`, `02 Filme`, `03 Projetos`) em label menor; DIREITA = lista grande (display) dos serviços do pilar **ativo**, empilhados.
  - **Comportamento (pin/scroll-driven):** seção pinada; ao rolar percorre Pilar 01 → 02 → 03. Conforme o usuário: a lista da direita fica fixa e o nome/índice à esquerda acompanha o scroll e "trava" ao chegar no próximo pilar, então o próximo pilar avança — e assim até o 3. (Resolver na execução qual lado pina; o essencial é a troca encadeada 1→2→3.)
  - **Destaque:** pilar ativo em creme cheio; serviços do próximo pilar aparecem como "fantasma" esmaecido (como na ref); demais dim.
  - **Conteúdo real dos serviços por pilar:**
    - **01 Design:** Direção de Arte · Conceito de Campanha · Comerciais & CGI · Identidade Visual
    - **02 Filme:** Direção de Filme · Motion Design · Filmes Comerciais · VideoClipes · Edição e Finalização
    - **03 Projetos:** Estratégia Criativa · Experiências Digitais · Campanhas de Lançamento · Projetos Especiais
  - **Tradução de marca (a testar):** o glow/gradiente de fundo muda de cor por pilar — Design = vermelho (R), Filme = verde (G), Projetos = azul (B), levemente desaturado (VHS). Preservar o split RGB nos títulos se fizer sentido.
  - **Responsivo:** em mobile, sem pin/scroll-jack — empilhar índice + serviços de forma estática; respeitar `prefers-reduced-motion`.
  - **Pin:** mesma decisão técnica do T-014 (GSAP ScrollTrigger vs. sticky + Lenis).
  - **Ref:** fromanother.love, seção 2 "what we do" + imagens enviadas.
- [EXECUTADO] (T-017) **Trocar a navegação do topo por um menu hambúrguer minimalista no canto esquerdo.** Refere-se a **(T-003) [EXECUTADO]** (header/nav) e **(T-012) [EXECUTADO]** (burger mobile) — é ajuste, não reconstrução. Critérios:
  - **Remover a nav inline** do topo (`.nav` com os links 01–04) em **todos os breakpoints** (não só mobile).
  - **Hambúrguer no canto ESQUERDO** do header (hoje o burger fica à direita e só aparece no mobile). Passa a aparecer em todas as larguras, à esquerda, bem minimalista.
  - **Ícone de 3 traços.** Ao abrir: o **1º e o 3º traço giram e se cruzam formando o X**; o **2º traço (meio) some** (fade/scale). Ao fechar, volta aos 3 traços. (Hoje o ícone tem 2 traços — passar para 3.)
  - **Destino:** o hambúrguer abre o **menu full-screen já existente** (T-012) em qualquer tamanho; ajustar para acionar a partir do botão à esquerda. Manter os itens de navegação (incl. "Clientes", ver T-014/T-015) e o rodapé de canais `[R][G][B]` do overlay.
  - **Header resultante:** ultra-minimalista — hambúrguer à esquerda + logo. Decidir posição da logo (ao lado do burger ou centralizada) e destino do CTA "Contato" (manter no header à direita ou mover para dentro do menu) na execução/preview.
  - **Acessibilidade:** `aria-expanded`, foco visível, `Esc` fecha, trap de foco no overlay, `prefers-reduced-motion`.

## Decisões aprovadas

- Base **escura** (`#0b0b0c`), não off-white — o RGB lê como sinal analógico.
- Tipografia **Archivo (expanded) + Space Mono** — fugindo do serif-on-cream genérico.
- RGB sempre **desaturado** e usado como detalhe conceitual.
- Nada de cards comuns, gradientes genéricos ou hero padrão de agência.
- A seção **Clientes** entra **antes** de "Trabalhos selecionados" e usa o formato de **arco de nomes dirigido por scroll** (pin), com logo e descrição fixos trocando por cliente.
- A seção **Pilares** será reformulada para o formato "what we do" (pin, índice à esquerda + serviços à direita), com troca encadeada Pilar 01 → 02 → 03.
- **Serviços por pilar (conteúdo aprovado):** Design = Direção de Arte / Conceito de Campanha / Comerciais & CGI / Identidade Visual · Filme = Direção de Filme / Motion Design / Filmes Comerciais / VideoClipes / Edição e Finalização · Projetos = Estratégia Criativa / Experiências Digitais / Campanhas de Lançamento / Projetos Especiais.
- A **navegação do topo sai**: vira um **hambúrguer minimalista no canto esquerdo** (em todas as telas) que abre o menu full-screen. Ícone de 3 traços; X formado pelo 1º + 3º traço, meio some.

## Ideias para testar

- (T-014) Abordagem técnica do pin da seção Clientes: GSAP ScrollTrigger (pin nativo) **vs.** cálculo manual de progresso via Lenis + `position: sticky`. Testar qual dá o arco mais suave sem brigar com o smooth scroll.
- (T-016) Glow de fundo dos Pilares mudando por canal RGB (Design=R, Filme=G, Projetos=B) levemente desaturado — testar se reforça o conceito sem virar "carnaval".
- (T-014 + T-016) Padronizar UMA abordagem de pin/scroll-driven (GSAP ScrollTrigger ou sticky+Lenis) e reusar nas duas seções, para consistência e menos peso.

## Ajustes futuros

- [PENDENTE] (T-020) Substituir projetos placeholder por trabalhos reais (nomes, datas, mídias) e ligar as miniaturas de hover às mídias verdadeiras.

## Pontos de atenção

- Os trabalhos atuais em **Trabalhos** são placeholders conceituais (fictícios). Confirmar conteúdo real antes de divulgar.
- O eixo *expanded* da Archivo vem da Google Fonts (CDN). Offline, cai para largura normal.
- (T-013) O menu-guia lateral fica no **lado direito** e o botão "Topo ↑" também está no canto inferior direito — conferir que não se sobreponham/conflitem visualmente (o menu é centralizado, o botão fica embaixo, mas validar em telas curtas).
- (T-013) Decidir comportamento em mobile: ocultar totalmente ou virar dots discretos (recomendado ocultar, pois o hover não existe em toque).
- (T-013) O header já tem nav com scroll-spy (`is-active`). Reaproveitar a mesma lógica para o menu-guia e manter os dois sincronizados, sem duplicar observers conflitantes.
- (T-014) **Faltam os dados reais de clientes.** As imagens de referência usam Louis Vuitton, OnePlus, Chanel, Glossier, LaMer, L'Oreal, Dior — esses são do exemplo, **não** são clientes da CASTElllO³. Necessário o usuário enviar a **lista real** (nomes + logos + descrições). Até lá, usar placeholders neutros e NÃO afirmar que essas marcas são clientes.
- (T-014) O efeito de **pin + scroll dirigindo só o arco** mexe no scroll. Hoje usamos Lenis (smooth) + observers vanilla; um pin preciso costuma pedir GSAP ScrollTrigger (ou cálculo manual de progresso da seção). Avaliar abordagem na execução para não brigar com o Lenis. Ver "Ideias para testar".
- (T-014/T-015) Inserir "Clientes" antes de "Trabalhos" desloca a numeração do header e do menu-guia — manter header (T-015), menu-guia (T-013) e scroll-spy sincronizados.
- (T-016) É **revisão** do T-007 (Pilares já executado): adaptar o markup/cores existentes, não refazer do zero. O novo formato é **pinado/scroll-jack** — mesma preocupação de interação com o Lenis do T-014. Definir abordagem do pin em conjunto (T-014 + T-016) para manter consistência.
- (T-016) Confirmar com o usuário qual lado realmente pina (a descrição diz "direita fixa, esquerda desce e trava"; na ref fromanother é a coluna de serviços que rola). O essencial registrado é a troca encadeada 1→2→3; o lado do pin pode ser ajustado na execução/preview.
- (T-017 × T-015) Como a nav inline do topo será **removida**, o T-015 (incluir "Clientes" + renumerar) passa a se aplicar ao **menu hambúrguer/overlay**, não à barra do topo. Executar T-017 e T-015 juntos para não retrabalhar.
- (T-017) Decidir na execução: posição da **logo** (ao lado do burger à esquerda ou centralizada) e destino do **CTA "Contato"** (fica no header à direita ou entra no menu). O burger atual tem **2 traços e fica à direita / só no mobile** — mudar para **3 traços, à esquerda, em todos os breakpoints**, com X feito pelo 1º + 3º traço.
- (T-017) Com a nav inline fora, sobram dois meios de navegação: o **hambúrguer** (à esquerda) e o **menu-guia lateral** (T-013, à direita). Confirmar que coexistem bem e não competem visualmente.

## Histórico de execução

### 2026-06-27
- Construção inicial completa do site CASTElllO³ (T-001 a T-012).
- Arquivos criados: `index.html`, `css/styles.css`, `js/main.js`, `server.js`,
  `package.json`, `README.md`, `assets/castelllo-logo.svg`, `assets/favicon.svg`,
  `.claude/launch.json`.
- Verificado em preview: hero, manifesto, pilares (hover), trabalhos, estúdio,
  contato e menu mobile. Servindo em `http://localhost:5173`.
- Observações: aplicado o eixo `wdth` da Archivo via `font-stretch` (a família
  "Archivo Expanded" não existe na Google Fonts).

### 2026-06-27 (rodada /skill-mandaver)
- Executados **T-013, T-014, T-015, T-016, T-017**.
- **T-017 + T-015 (navegação):** removida a nav inline do topo; criado hambúrguer
  minimalista no canto esquerdo (3 traços; X formado pelo 1º + 3º, meio some);
  header agora = burger (esq) · logo (centro) · CTA Contato (dir). Menu full-screen
  passou a abrir em todas as larguras, com "Clientes" incluído e renumerado (01–06).
- **T-013 (menu-guia):** índice vertical fixo à direita; idle mostra só a seção ativa,
  hover revela todas; scroll-spy próprio; clique navega; oculto no mobile e na hero.
- **T-016 (Pilares "what we do"):** seção pinada (`position: sticky` + progresso de
  scroll), índice 01/02/03 à esquerda destacando o ativo, serviços grandes rolando à
  direita (grupo ativo nítido, próximos "fantasma"), glow de fundo trocando R→G→B,
  contador `0X / 03`. Conteúdo real dos serviços aplicado.
- **T-014 (Clientes):** nova seção pinada antes de Trabalhos; arco de nomes à esquerda
  (rotação/curva + esmaecimento), logo central e descrição à direita com crossfade por
  cliente ativo, contador `0X / 06`. **Clientes em placeholder** (Vértiz, Lumiar,
  Caravela, Mirador, Norte, Praça Nove).
- **Abordagem de pin padronizada** para T-014 e T-016: sticky + progresso via Lenis
  (sem GSAP). Fallback estático (sem pin/scroll-jack) em mobile (≤860px) e em
  `prefers-reduced-motion`; menu-guia oculto no mobile.
- **Arquivos alterados:** `index.html`, `css/styles.css`, `js/main.js`.
- **Verificado em preview** (desktop 1366 e mobile 375): header/hambúrguer/X, menu com
  Clientes, Pilares 01→02→03 com troca de cor, arco de Clientes, fallback estático
  mobile e guia ocultando na hero. Sem erros de console.

## Próximos passos para execução

- [PENDENTE] (T-014b) Substituir os clientes placeholder (Vértiz, Lumiar, Caravela, Mirador, Norte, Praça Nove) por nomes/logos/descrições reais — aguardando o usuário enviar.
- [PENDENTE] (T-020) Trocar projetos placeholder por reais quando o usuário fornecer conteúdo/mídias.
- [NOVO] (T-016b) (opcional) Confirmar qual lado pina nos Pilares — execução seguiu a referência fromanother (serviços rolam à direita, índice fixo à esquerda). Inverter se preferir.
