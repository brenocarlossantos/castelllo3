# CASTElllO³ — Site

Estúdio criativo. Design · Filme · Projetos.
Estética editorial escura com referência a VHS / RGB / imagem analógica.

## Rodar localmente

```bash
npm run dev
```

Abra **http://localhost:5173**

Sem dependências de build — HTML/CSS/JS puro, servido por um servidor estático em Node.
(O smooth-scroll usa a lib Lenis via CDN; se estiver offline, o site cai para o scroll nativo sem quebrar.)

## Estrutura

```
index.html              estrutura e conteúdo
css/styles.css          design system + animações
js/main.js              scroll, reveals, menu, RGB
assets/                 logo + favicon
server.js               servidor estático (node, zero deps)
```

## Conceito visual

- **Base** near-black `#0b0b0c` + creme do logo `#fdf6e6`.
- **RGB** desaturado (`#f85255 / #9be187 / #5fa8ff`) como detalhe conceitual — os 3 canais = Design / Filme / Projetos.
- **Tipografia** Archivo Expanded (display) + Space Mono (labels de sinal).
- **Assinatura** split de canal RGB (aberração cromática) + grain/scanline VHS.
