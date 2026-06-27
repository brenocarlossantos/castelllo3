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
    'hero.tag1':       ['[ESTÚDIO CRIATIVO]', '[CREATIVE STUDIO]'],
    'hero.sub':        ['Construímos ideias com <em>estrutura</em>, <em>narrativa</em> e <em>impacto</em>.',
                        'We build ideas with <em>structure</em>, <em>narrative</em> and <em>impact</em>.'],
    'hero.scroll':     ['Role', 'Scroll'],
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
    'pillars.bar':     ['02 — O que fazemos', '02 — What we do'],
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

  /* ---------- PILARES "o que fazemos" ---------- */
  (() => {
    const sec = $('[data-pillars]');
    if (!sec) return;
    const track  = $('[data-pillar-track]', sec);
    const vp     = $('.pillars__viewport', sec);
    const groups = $$('.pillars__group', sec);
    const btns   = $$('[data-pillar-nav]', sec);
    const countEl = $('[data-pillar-count]', sec);
    const glow   = $('[data-pillar-glow]', sec);
    const n = groups.length;
    const colors = ['var(--r)', 'var(--g)', 'var(--b)'];
    const glows  = ['rgba(248,82,85,.16)', 'rgba(155,225,135,.14)', 'rgba(95,168,255,.16)'];
    let active = -1;

    btns.forEach((b, i) => b.addEventListener('click', () => sectionStep(sec, i, n)));

    const setActive = (i) => {
      if (i === active) return;
      active = i;
      btns.forEach((b, k) => b.classList.toggle('is-on', k === i));
      groups.forEach((g, k) => g.classList.toggle('is-active', k === i));
      countEl.textContent = pad2(i + 1) + ' / ' + pad2(n);
      sec.style.setProperty('--pillar', colors[i]);
      glow.style.background = `radial-gradient(60% 60% at 50% 50%, ${glows[i]}, transparent 70%)`;
    };

    addScroll(() => {
      if (isStatic()) {
        sec.classList.add('is-static');
        track.style.transform = '';
        groups.forEach((g) => g.classList.add('is-active'));
        return;
      }
      sec.classList.remove('is-static');
      const rect = sec.getBoundingClientRect();
      const p = clamp((0 - rect.top) / (rect.height - innerHeight), 0, 1);
      const scrollable = track.scrollHeight - vp.clientHeight;
      track.style.transform = `translateY(${-p * scrollable}px)`;
      const mid = vp.getBoundingClientRect().top + vp.clientHeight / 2;
      let best = 0, bd = Infinity;
      groups.forEach((g, k) => {
        const r = g.getBoundingClientRect();
        const d = Math.abs(r.top + r.height / 2 - mid);
        if (d < bd) { bd = d; best = k; }
      });
      setActive(best);
    });
  })();

  /* ---------- CLIENTES: arco de nomes ---------- */
  (() => {
    const sec = $('[data-clients]');
    if (!sec) return;
    const arc = $('[data-arc]', sec);
    const logoEl = $('[data-client-logo]', sec);
    const descEl = $('[data-client-desc]', sec);
    const countEl = $('[data-client-count]', sec);

    // PLACEHOLDERS — substituir pela lista real (nomes + logos + descrições)
    const CLIENTS = [
      { name: 'Vértiz',     desc: ['Plataforma de tecnologia. Identidade e sistema visual.', 'Technology platform. Identity and visual system.'] },
      { name: 'Lumiar',     desc: ['Beleza e cosméticos. Campanha e direção de arte.', 'Beauty and cosmetics. Campaign and art direction.'] },
      { name: 'Caravela',   desc: ['Bebidas premium. Branding e filme.', 'Premium beverages. Branding and film.'] },
      { name: 'Mirador',    desc: ['Produtora audiovisual. Motion e finalização.', 'Audiovisual production. Motion and post.'] },
      { name: 'Norte',      desc: ['Moda autoral. Lançamento e experiência digital.', 'Authorial fashion. Launch and digital experience.'] },
      { name: 'Praça Nove', desc: ['Cultura e eventos. Projeto especial e identidade.', 'Culture and events. Special project and identity.'] },
    ];
    const n = CLIENTS.length;

    const names = CLIENTS.map((c, i) => {
      const b = document.createElement('button');
      b.className = 'clients__name';
      b.textContent = c.name;
      b.addEventListener('click', () => sectionStep(sec, i, n));
      arc.appendChild(b);
      return b;
    });

    let active = 0;
    const paint = () => {
      const c = CLIENTS[active];
      logoEl.textContent = c.name;
      descEl.textContent = c.desc[LANG === 'pt' ? 0 : 1];
      countEl.textContent = pad2(active + 1) + ' / ' + pad2(n);
    };
    const setActive = (i, force) => {
      if (i === active && !force) return;
      active = i;
      paint();
      [logoEl, descEl].forEach((el) => { el.classList.remove('swap'); void el.offsetWidth; el.classList.add('swap'); });
    };
    paint();
    onLang(() => paint());

    addScroll(() => {
      if (isStatic()) {
        sec.classList.add('is-static');
        names.forEach((b) => { b.style.transform = ''; b.style.opacity = ''; });
        return;
      }
      sec.classList.remove('is-static');
      const rect = sec.getBoundingClientRect();
      const p = clamp((0 - rect.top) / (rect.height - innerHeight), 0, 1);
      const pf = p * (n - 1);
      names.forEach((b, i) => {
        const d = i - pf;
        b.style.transform = `translate(0, calc(-50% + ${d * 118}%)) rotate(${d * 7}deg)`;
        b.style.opacity = clamp(1 - Math.abs(d) * 0.32, 0, 1);
        b.classList.toggle('is-active', Math.round(pf) === i);
      });
      setActive(clamp(Math.round(pf), 0, n - 1));
    });
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

  /* ---------- aplica idioma + primeira pintura ---------- */
  applyLang(LANG);
  runScroll();
})();
