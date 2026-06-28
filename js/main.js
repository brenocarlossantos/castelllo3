/* CASTElllO³ — interactions */
(() => {
  'use strict';
  const $  = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const clamp = (n, a, b) => Math.max(a, Math.min(b, n));
  const pad2 = (n) => String(n).padStart(2, '0');
  const isStatic = () => reduce || matchMedia('(max-width: 860px)').matches;

  /* =========================================================
     i18n — dois idiomas (PT padrão / EN)
     ========================================================= */
  const I18N = {
    'skip':            ['Pular para o conteúdo', 'Skip to content'],
    'hero.top':        ['Conteúdo &amp; Marketing<br>Marca &amp; Identidade',
                        'Content &amp; Marketing<br>Brand &amp; Identity'],
    'hero.tagline':    ['Construímos ideias com estrutura, narrativa e impacto.',
                        'We build ideas with structure, narrative and impact.'],
    'ch.design':       ['Design', 'Design'],
    'ch.film':         ['Filme', 'Film'],
    'ch.projects':     ['Projetos', 'Projects'],
    'manifesto.big':   ['<span class="line">Quebrar o esperado</span><span class="line">para construir <span class="hl-r">identidade</span>.</span>',
                        '<span class="line">Break the expected</span><span class="line">to build <span class="hl-r">identity</span>.</span>'],
    'manifesto.lead':  ['Os três <strong>“l”</strong> em minúsculo não são um erro. São linguagem. A intervenção tipográfica forma uma <em>pilastra</em> — o símbolo estrutural do castelo, a base que sustenta ideias.',
                        'The three lowercase <strong>“l”</strong> are not a mistake. They are language. The typographic intervention forms a <em>pillar</em> — the structural symbol of the castle, the base that holds up ideas.'],
    'manifesto.num':   ['<span class="hl-r">3</span> — Estrutura, ritmo e conclusão.',
                        '<span class="hl-r">3</span> — Structure, rhythm and conclusion.'],
    'manifesto.body':  ['Início, meio e fim. Setup, conflito e resolução. A regra dos terços. O cérebro entende e memoriza melhor em três. Por isso 1, 2, 3… e já.',
                        'Beginning, middle and end. Setup, conflict and resolution. The rule of thirds. The brain understands and remembers better in threes. That’s why 1, 2, 3… done.'],
    'pillars.label':   ['02 / Pilares', '02 / Pillars'],
    'pillars.title':   ['Pilares', 'Pillars'],
    'pillars.lead.design':   ['Forma visual, identidade e campanhas construídas com direção.',
                              'Visual form, identity and campaigns built with direction.'],
    'pillars.lead.film':     ['Narrativas em movimento — ritmo, imagem e finalização.',
                              'Narratives in motion — rhythm, image and post.'],
    'pillars.lead.projects': ['Estratégia, experiências digitais e ações especiais para ideias que precisam sair do comum.',
                              'Strategy, digital experiences and special actions for ideas that need to break the ordinary.'],
    'srv.artdir':      ['Direção de Arte', 'Art Direction'],
    'srv.campaign':    ['Conceito de Campanha', 'Campaign Concept'],
    'srv.cgi':         ['Comerciais &amp; CGI', 'Commercials &amp; CGI'],
    'srv.visualid':    ['Identidade Visual', 'Visual Identity'],
    'srv.filmdir':     ['Direção de Filme', 'Film Direction'],
    'srv.motion':      ['Motion Design', 'Motion Design'],
    'srv.commercials': ['Filmes Comerciais', 'Commercial Films'],
    'srv.musicvideo':  ['VideoClipes', 'Music Videos'],
    'srv.editing':     ['Edição e Finalização', 'Editing &amp; Post'],
    'srv.strategy':    ['Estratégia Criativa', 'Creative Strategy'],
    'srv.digital':     ['Experiências Digitais', 'Digital Experiences'],
    'srv.launch':      ['Campanhas de Lançamento', 'Launch Campaigns'],
    'srv.special':     ['Projetos Especiais', 'Special Projects'],
    'clients.bar':     ['03 — Clientes', '03 — Clients'],
    'works.bar':       ['04 — Trabalhos selecionados', '04 — Selected Work'],
    'works.viewall':   ['Ver tudo →', 'View all →'],
    'work.1.title':    ['Sinal Aberto', 'Open Signal'],
    'work.1.meta':     ['Identidade · Filme', 'Identity · Film'],
    'work.2.title':    ['Fita Mestra', 'Master Tape'],
    'work.2.meta':     ['Direção · Cor', 'Direction · Color'],
    'work.3.title':    ['Terço &amp; Meio', 'Third &amp; a Half'],
    'work.3.meta':     ['Estratégia · Web', 'Strategy · Web'],
    'work.4.title':    ['Pilastra', 'Pillar'],
    'work.4.meta':     ['Branding · Motion', 'Branding · Motion'],
    'work.5.title':    ['Memória Analógica', 'Analog Memory'],
    'work.5.meta':     ['Filme · Documentário', 'Film · Documentary'],
    'studio.bar':      ['05 — O estúdio', '05 — The Studio'],
    'studio.statement':['A CASTElllO³ nasce para ir <span class="hl-g">além da execução</span>. Pensamos em três: <em>design</em>, <em>filme</em> e <em>projetos</em> — três áreas, três canais de cor, um único conceito de construção.',
                        'CASTElllO³ is born to go <span class="hl-g">beyond execution</span>. We think in threes: <em>design</em>, <em>film</em> and <em>projects</em> — three areas, three color channels, a single concept of construction.'],
    'svc.1':           ['Direção de Arte', 'Art Direction'],
    'svc.2':           ['Identidade Visual', 'Visual Identity'],
    'svc.3':           ['Motion Design', 'Motion Design'],
    'svc.4':           ['Direção de Filme', 'Film Direction'],
    'svc.5':           ['Edição &amp; Cor', 'Editing &amp; Color'],
    'svc.6':           ['Estratégia de Marca', 'Brand Strategy'],
    'svc.7':           ['Design de Produto Digital', 'Digital Product Design'],
    'svc.8':           ['Conceito &amp; Narrativa', 'Concept &amp; Narrative'],
    'contato.bar':     ['06 — Vamos construir', '06 — Let’s build'],
    'contato.bar2':    ['você + CASTElllO³', 'you + CASTElllO³'],
    'contato.big':     ['Diga olá', 'Say hello'],
    'foot.concept':    ['3 letras · 3 cores · 3 áreas · 1 conceito', '3 letters · 3 colors · 3 areas · 1 concept'],
    'foot.totop':      ['Topo ↑', 'Top ↑'],
    'nav.intro':       ['Início', 'Intro'],
    'nav.manifesto':   ['Manifesto', 'Manifesto'],
    'nav.pillars':     ['Pilares', 'Pillars'],
    'nav.clients':     ['Clientes', 'Clients'],
    'nav.work':        ['Trabalhos', 'Work'],
    'nav.studio':      ['Estúdio', 'Studio'],
    'nav.contact':     ['Contato', 'Contact'],
  };
  const MARQUEE = {
    pt: ['3 LETRAS', '3 CORES', '3 ÁREAS', '1 CONCEITO'],
    en: ['3 LETTERS', '3 COLORS', '3 AREAS', '1 CONCEPT'],
  };

  let LANG = localStorage.getItem('castelllo-lang') === 'en' ? 'en' : 'pt';
  const langListeners = [];
  const onLang = (fn) => langListeners.push(fn);

  const buildMarquee = (track) => {
    const words = MARQUEE[LANG];
    let unit = '';
    words.forEach((w) => { unit += `<span>${w}</span><i>·</i>`; });
    track.innerHTML = unit + unit + unit; // 3x para o loop contínuo
  };

  const applyLang = (l) => {
    LANG = l;
    localStorage.setItem('castelllo-lang', l);
    document.documentElement.lang = l === 'pt' ? 'pt-BR' : 'en';
    const idx = l === 'pt' ? 0 : 1;
    $$('[data-i18n]').forEach((el) => {
      const v = I18N[el.getAttribute('data-i18n')];
      if (!v) return;
      el.innerHTML = v[idx];
      if (el.hasAttribute('data-text')) el.setAttribute('data-text', el.textContent.trim());
    });
    $$('[data-set-lang]').forEach((b) =>
      b.setAttribute('aria-pressed', String(b.getAttribute('data-set-lang') === l)));
    const mq = $('[data-marquee]'); if (mq) buildMarquee(mq);
    langListeners.forEach((fn) => fn(l));
  };

  $$('[data-set-lang]').forEach((b) =>
    b.addEventListener('click', () => applyLang(b.getAttribute('data-set-lang'))));

  /* cor da tinta (off-white) usada no arco de clientes */
  const inkRGB = '231,229,223';

  /* ---------- current year ---------- */
  const y = $('[data-year]');
  if (y) y.textContent = new Date().getFullYear();

  /* ---------- Lenis smooth scroll (guarded) ---------- */
  let lenis = null;
  if (window.Lenis && !reduce) {
    lenis = new Lenis({ duration: 1.1, lerp: 0.09, smoothWheel: true });
    const raf = (t) => { lenis.raf(t); requestAnimationFrame(raf); };
    requestAnimationFrame(raf);
    document.documentElement.classList.add('lenis');
    window.__lenis = lenis;
  }

  /* ---------- central scroll dispatch ---------- */
  const scrollFns = [];
  const addScroll = (fn) => { scrollFns.push(fn); return fn; };
  const runScroll = () => { for (const fn of scrollFns) fn(); };
  if (lenis) lenis.on('scroll', runScroll);
  else window.addEventListener('scroll', runScroll, { passive: true });
  window.addEventListener('resize', runScroll);

  /* ---------- navigation helpers ---------- */
  const absTop = (el) => el.getBoundingClientRect().top + window.scrollY;
  const goToY = (yPos) => {
    if (lenis) lenis.scrollTo(yPos);
    else window.scrollTo({ top: yPos, behavior: reduce ? 'auto' : 'smooth' });
  };
  const goTo = (el) => {
    if (!el) return;
    if (lenis) lenis.scrollTo(el, { offset: -10 });
    else el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
    setTimeout(sweep, 650);
    setTimeout(sweep, 1300);
  };
  const sectionStep = (sec, i, n) => {
    const total = sec.offsetHeight - innerHeight;
    const frac = n > 1 ? i / (n - 1) : 0;
    goToY(absTop(sec) + frac * total);
  };
  const sectionStepFrac = (sec, frac) => {
    const total = sec.offsetHeight - innerHeight;
    goToY(absTop(sec) + clamp(frac, 0, 1) * total);
  };

  $$('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (id.length < 2) return;
      const el = $(id);
      if (!el) return;
      e.preventDefault();
      closeMenu();
      goTo(el);
    });
  });

  /* ---------- header: hide on scroll-down, condense ---------- */
  const head = $('[data-head]');
  let lastY = 0;
  addScroll(() => {
    const sy = window.scrollY;
    head.classList.toggle('is-scrolled', sy > 40);
    if (sy > lastY && sy > 360) head.classList.add('is-hidden');
    else head.classList.remove('is-hidden');
    lastY = sy;
  });

  /* ---------- reveals ---------- */
  const revealEls = $$('[data-reveal], .big');
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
    });
  }, { threshold: 0, rootMargin: '0px 0px -10% 0px' });
  revealEls.forEach((el) => io.observe(el));

  function sweep() {
    revealEls.forEach((el) => {
      if (el.classList.contains('is-in')) return;
      const r = el.getBoundingClientRect();
      if (r.top < innerHeight * 0.92 && r.bottom > 0) { el.classList.add('is-in'); io.unobserve(el); }
    });
  }

  /* ---------- guia lateral: scroll-spy ---------- */
  (() => {
    const guideEl = $('[data-guide]');
    const links = $$('.guide a');
    const items = links.map((a) => ({ a, el: $(a.getAttribute('href')) })).filter((o) => o.el);
    if (!items.length) return;
    addScroll(() => {
      const cy = innerHeight * 0.5;
      let cur = items[0];
      items.forEach((o) => { if (o.el.getBoundingClientRect().top <= cy) cur = o; });
      links.forEach((a) => a.classList.toggle('is-active', a === cur.a));
      guideEl.classList.toggle('is-hidden', cur.a.getAttribute('href') === '#hero');
    });
  })();

  /* ---------- PILARES (serviços com reveal cumulativo + labels sticky) ---------- */
  (() => {
    const sec = $('[data-pillars]');
    if (!sec) return;
    const stage   = $('.pillars__stage', sec);
    const track   = $('[data-pillar-track]', sec);
    const srvs    = $$('.srv', track);
    const labels  = $$('.pidx', sec);
    const countEl = $('[data-pillar-count]', sec);
    const glow    = $('[data-pillar-glow]', sec);
    const G = labels.length;
    const N = srvs.length;
    const colorsVar = ['var(--r)', 'var(--g)', 'var(--b)'];
    const C = ['248,82,85', '155,225,135', '95,168,255'];
    // 1º e último serviço de cada grupo (p/ alinhar e prender os labels)
    const range = labels.map((_, g) => {
      const idxs = srvs.map((s, i) => (+s.dataset.grp === g ? i : -1)).filter((i) => i >= 0);
      return { first: idxs[0], last: idxs[idxs.length - 1] };
    });
    let active = -1;

    labels.forEach((l, i) => l.addEventListener('click', () =>
      sectionStepFrac(sec, range[i].first / (N - 1))));

    const setActive = (i) => {
      if (i === active) return;
      active = i;
      labels.forEach((l, k) => l.classList.toggle('is-on', k === i));
      countEl.textContent = pad2(i + 1) + ' / ' + pad2(G);
      sec.style.setProperty('--pillar', colorsVar[i]);
      const c = C[i];
      glow.style.background =
        `radial-gradient(58% 46% at 22% 24%, rgba(${c},.28), transparent 60%),` +
        `radial-gradient(54% 58% at 82% 76%, rgba(${c},.24), transparent 62%),` +
        `radial-gradient(120% 100% at 50% 50%, rgba(${c},.12), transparent 74%)`;
    };

    const centerY = (i, ty) => srvs[i].offsetTop + srvs[i].offsetHeight / 2 + ty;

    addScroll(() => {
      if (isStatic()) {
        sec.classList.add('is-static');
        track.style.transform = '';
        srvs.forEach((s) => { s.style.opacity = ''; });
        labels.forEach((l) => { l.style.transform = ''; });
        if (active < 0) setActive(0);
        return;
      }
      sec.classList.remove('is-static');
      const rect = sec.getBoundingClientRect();
      const p = clamp((0 - rect.top) / (rect.height - innerHeight), 0, 1);
      const stageH = stage.clientHeight;
      const readY = stageH * 0.4;
      const firstC = srvs[0].offsetTop + srvs[0].offsetHeight / 2;
      const lastC  = srvs[N - 1].offsetTop + srvs[N - 1].offsetHeight / 2;
      const ty = readY - (firstC + p * (lastC - firstC));
      track.style.transform = `translateY(${ty.toFixed(1)}px)`;

      // reveal cumulativo POR serviço (igual ao arco de clientes): apagado até a
      // linha, acende de uma vez ao cruzar e PERMANECE aceso
      const cf = p * (N - 1);
      srvs.forEach((s, i) => {
        const lit = clamp(1 - Math.max(i - cf, 0) / 0.32, 0, 1);
        s.style.opacity = (0.16 + 0.84 * lit).toFixed(3);
      });
      const best = +srvs[clamp(Math.round(cf), 0, N - 1)].dataset.grp;

      // labels grudam no grupo: clamp(linha, yPrimeiro, yÚltimo)
      labels.forEach((l, g) => {
        const ly = clamp(readY, centerY(range[g].first, ty), centerY(range[g].last, ty));
        l.style.transform = `translateY(${ly.toFixed(1)}px) translateY(-50%)`;
      });

      setActive(best);
    });
  })();

  /* ---------- CLIENTES: arco tipográfico (estilo "they trust us") ---------- */
  (() => {
    const sec = $('[data-clients]');
    if (!sec) return;
    const arc = $('[data-arc]', sec);
    const logoEl = $('[data-client-logo]', sec);
    const descEl = $('[data-client-desc]', sec);
    const countEl = $('[data-client-count]', sec);

    // PLACEHOLDERS — trocar pela lista real (nome + descrição [PT, EN])
    const CLIENTS = [
      { name: 'Aster',    desc: ['Marca de tecnologia. Identidade e sistema de design.', 'Technology brand. Identity and design system.'] },
      { name: 'Noma',     desc: ['Hospitalidade e gastronomia. Direção de arte e filme.', 'Hospitality and dining. Art direction and film.'] },
      { name: 'Vértice',  desc: ['Arquitetura e incorporação. Branding e CGI.', 'Architecture and real estate. Branding and CGI.'] },
      { name: 'Lumma',    desc: ['Beleza e skincare. Campanha e conteúdo.', 'Beauty and skincare. Campaign and content.'] },
      { name: 'Distrito', desc: ['Cultura urbana e eventos. Identidade e motion.', 'Urban culture and events. Identity and motion.'] },
      { name: 'Aurora',   desc: ['Energia e tecnologia. Estratégia e experiência digital.', 'Energy and technology. Strategy and digital experience.'] },
      { name: 'Prisma',   desc: ['Mídia e entretenimento. Direção de arte e filme.', 'Media and entertainment. Art direction and film.'] },
      { name: 'Forma',    desc: ['Design de produto e mobiliário. Branding e catálogo.', 'Product and furniture design. Branding and catalogue.'] },
      { name: 'Cinebox',  desc: ['Audiovisual e streaming. Identidade e finalização.', 'Audiovisual and streaming. Identity and post.'] },
      { name: 'Atlas',    desc: ['Viagem e logística. Sistema visual e campanha.', 'Travel and logistics. Visual system and campaign.'] },
      { name: 'Modo',     desc: ['Moda autoral. Lançamento e experiência digital.', 'Authorial fashion. Launch and digital experience.'] },
      { name: 'Obra',     desc: ['Construção e incorporação. Conceito e identidade.', 'Construction and real estate. Concept and identity.'] },
    ];
    const n = CLIENTS.length;

    const names = CLIENTS.map((c, i) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'clients__name';
      b.textContent = c.name;
      b.setAttribute('aria-label', c.name);
      b.addEventListener('click', () => sectionStep(sec, i, n));
      arc.appendChild(b);
      return b;
    });

    let active = -1;
    const paint = (i) => {
      const c = CLIENTS[i];
      logoEl.textContent = c.name;
      descEl.textContent = c.desc[LANG === 'pt' ? 0 : 1];
      countEl.textContent = pad2(i + 1) + ' / ' + pad2(n);
    };
    const setActive = (i) => {
      if (i === active) return;
      active = i;
      paint(i);
      [logoEl, descEl].forEach((el) => { el.classList.remove('swap'); void el.offsetWidth; el.classList.add('swap'); });
    };
    onLang(() => { if (active >= 0) paint(active); });

    // geometria do arco (centro fora da tela à esquerda → vemos só o arco direito)
    const STEP = 13, D2R = Math.PI / 180;
    let radius = clamp(0.5 * innerWidth, 440, 820);
    window.addEventListener('resize', () => { radius = clamp(0.5 * innerWidth, 440, 820); });

    const renderArc = (cf) => {
      for (let i = 0; i < n; i++) {
        const b = names[i];
        const d  = i - cf;            // d>0 = abaixo (não alcançado) | d<0 = acima (já passou)
        const ar = d * STEP * D2R;
        const x = (Math.cos(ar) - 1) * radius * 0.5;   // recua p/ a esquerda ao afastar
        const y = Math.sin(ar) * radius;               // posição vertical no arco
        const scale = clamp(1 - Math.abs(d) * 0.02, 0.92, 1);
        b.style.transform =
          `translate(${x.toFixed(1)}px, calc(-50% + ${y.toFixed(1)}px)) rotate(${(d * STEP).toFixed(2)}deg) scale(${scale.toFixed(3)})`;

        // ACENDE de uma vez ao cruzar a linha de leitura e PERMANECE aceso (d<=0)
        const lit = clamp(1 - Math.max(d, 0) / 0.22, 0, 1);
        const col = `rgba(${inkRGB},${(0.14 + lit * 0.86).toFixed(3)})`;
        b.style.color = col;
        b.style.webkitTextFillColor = col;

        // BLUR ao subir depois de passar (sem sombra/glow)
        const rise = Math.max(-d - 0.25, 0);
        const blur = Math.min(rise * 0.9, 4.5);
        b.style.filter = blur > 0.05 ? `blur(${blur.toFixed(2)}px)` : 'none';

        // OPACIDADE (profundidade): abaixo dim com a distância; acima dissolve no topo
        const op = d >= 0 ? clamp(1 - d * 0.07, 0.4, 1) : clamp(1.04 + d * 0.085, 0, 1);
        b.style.opacity = op.toFixed(3);
      }
      setActive(clamp(Math.round(cf), 0, n - 1));
    };

    // movimento com lerp em requestAnimationFrame (suave, sem jitter)
    let cur = 0, target = 0, running = false;
    const tick = () => {
      const rect = sec.getBoundingClientRect();
      if (isStatic()) {
        sec.classList.add('is-static');
        names.forEach((b) => { b.style.transform = ''; b.style.opacity = ''; b.style.filter = ''; b.style.color = ''; b.style.webkitTextFillColor = ''; });
        if (active < 0) setActive(0);
        running = false; return;
      }
      sec.classList.remove('is-static');
      target = clamp((0 - rect.top) / (rect.height - innerHeight), 0, 1);
      cur += (target - cur) * 0.12;
      if (Math.abs(target - cur) < 0.0004) cur = target;
      renderArc(cur * (n - 1));
      if (cur !== target) requestAnimationFrame(tick);
      else running = false;
    };
    const kick = () => { if (!running) { running = true; requestAnimationFrame(tick); } };
    addScroll(kick);
    kick();
  })();

  /* ---------- menu full-screen ---------- */
  const burger = $('[data-burger]');
  const mmenu  = $('[data-mmenu]');
  function openMenu() {
    burger.classList.add('is-open'); mmenu.classList.add('is-open');
    burger.setAttribute('aria-expanded', 'true'); mmenu.setAttribute('aria-hidden', 'false');
    document.documentElement.classList.add('menu-open');
    if (lenis) lenis.stop();
  }
  function closeMenu() {
    if (!mmenu.classList.contains('is-open')) return;
    burger.classList.remove('is-open'); mmenu.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false'); mmenu.setAttribute('aria-hidden', 'true');
    document.documentElement.classList.remove('menu-open');
    if (lenis) lenis.start();
  }
  burger?.addEventListener('click', () =>
    burger.classList.contains('is-open') ? closeMenu() : openMenu());
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });

  /* ---------- back to top ---------- */
  $('[data-totop]')?.addEventListener('click', () => goTo($('#hero')));

  /* ---------- HERO: troca de cor (RGB da marca) ao passar o mouse ---------- */
  (() => {
    const hero = $('[data-hero]');
    if (!hero) return;
    const COLORS = ['var(--b)', 'var(--g)', 'var(--r)']; // começa no azul
    let cur = 0;
    hero.style.setProperty('--hero-color', COLORS[cur]);
    hero.addEventListener('mouseenter', () => {
      let next = cur;
      while (next === cur) next = Math.floor(Math.random() * COLORS.length);
      cur = next;
      hero.style.setProperty('--hero-color', COLORS[cur]);
    });
  })();

  /* ---------- aplica idioma + primeira pintura ---------- */
  applyLang(LANG);
  runScroll();
})();
