/* CASTElllO³ — interactions */
(() => {
  'use strict';
  const $  = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const clamp = (n, a, b) => Math.max(a, Math.min(b, n));
  const pad2 = (n) => String(n).padStart(2, '0');
  const isStatic = () => reduce || matchMedia('(max-width: 860px)').matches;

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
  // scroll to a given step (0..n-1) inside a tall pinned section
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

  /* ---------- guia lateral: scroll-spy (T-013) ---------- */
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
      // esconde o guia enquanto estiver na hero (evita sobrepor a logo)
      guideEl.classList.toggle('is-hidden', cur.a.getAttribute('href') === '#hero');
    });
  })();

  /* ---------- PILARES "o que fazemos" (T-016) ---------- */
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
      // active = group whose center is nearest the viewport mid
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

  /* ---------- CLIENTES: arco de nomes (T-014) ---------- */
  (() => {
    const sec = $('[data-clients]');
    if (!sec) return;
    const arc = $('[data-arc]', sec);
    const logoEl = $('[data-client-logo]', sec);
    const descEl = $('[data-client-desc]', sec);
    const countEl = $('[data-client-count]', sec);

    // PLACEHOLDERS — substituir pela lista real (nomes + logos + descrições)
    const CLIENTS = [
      { name: 'Vértiz',     desc: 'Plataforma de tecnologia. Identidade e sistema visual.' },
      { name: 'Lumiar',     desc: 'Beleza e cosméticos. Campanha e direção de arte.' },
      { name: 'Caravela',   desc: 'Bebidas premium. Branding e filme.' },
      { name: 'Mirador',    desc: 'Produtora audiovisual. Motion e finalização.' },
      { name: 'Norte',      desc: 'Moda autoral. Lançamento e experiência digital.' },
      { name: 'Praça Nove', desc: 'Cultura e eventos. Projeto especial e identidade.' },
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

    let active = -1;
    const setActive = (i) => {
      if (i === active) return;
      active = i;
      const c = CLIENTS[i];
      logoEl.textContent = c.name;
      descEl.textContent = c.desc;
      countEl.textContent = pad2(i + 1) + ' / ' + pad2(n);
      [logoEl, descEl].forEach((el) => { el.classList.remove('swap'); void el.offsetWidth; el.classList.add('swap'); });
    };
    setActive(0);

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
    if (lenis) lenis.stop(); document.body.style.overflow = 'hidden';
  }
  function closeMenu() {
    if (!mmenu.classList.contains('is-open')) return;
    burger.classList.remove('is-open'); mmenu.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false'); mmenu.setAttribute('aria-hidden', 'true');
    if (lenis) lenis.start(); document.body.style.overflow = '';
  }
  burger?.addEventListener('click', () =>
    burger.classList.contains('is-open') ? closeMenu() : openMenu());
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });

  /* ---------- back to top ---------- */
  $('[data-totop]')?.addEventListener('click', () => goTo($('#hero')));

  /* ---------- first paint ---------- */
  runScroll();
})();
