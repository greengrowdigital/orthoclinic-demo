/* OrthoClinic — Navegación, footer y animaciones compartidas */
(function () {
  const WA = {
    andes:    { num: '50766734766',  label: 'Los Andes Mall · 6673-4766' },
    coronado: { num: '50763400028',  label: 'Coronado · 6340-0028' },
    costa:    { num: '50767296810',  label: 'Costa Verde · 6729-6810' }
  };
  const WA_DEFAULT = WA.andes;

  const LINKS = [
    { href: '/',             route: 'index',         label: 'Inicio' },
    { href: '/servicios',    route: 'servicios',     label: 'Servicios' },
    { href: '/especialistas',route: 'especialistas', label: 'Especialistas' },
    { href: '/sucursales',   route: 'sucursales',    label: 'Sucursales' }
  ];

  function currentRoute() {
    const path = window.location.pathname.replace(/\/+$/, '');
    if (path === '' || path === '/') return 'index';
    const last = path.split('/').pop().replace(/\.html$/, '');
    return last || 'index';
  }

  function logoMark(size) {
    return `
      <svg width="${size}" height="${size}" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <linearGradient id="oc-grad-${size}" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#15A0AE"/>
            <stop offset="1" stop-color="#0B5C66"/>
          </linearGradient>
        </defs>
        <path d="M20 4 C 10 4 4 11 4 20 C 4 29 10 36 20 36 C 24 36 27 34.8 29.5 33" stroke="url(#oc-grad-${size})" stroke-width="3" stroke-linecap="round" fill="none"/>
        <path d="M14 20 C 14 16 16.5 13 20 13 C 23.5 13 26 16 26 20" stroke="#A4D8AE" stroke-width="2.4" stroke-linecap="round" fill="none"/>
        <circle cx="32" cy="32" r="3" fill="#15A0AE"/>
      </svg>
    `;
  }

  function renderNav() {
    const route = currentRoute();
    const links = LINKS.map(l => `
      <a class="oc-nav-link ${l.route === route ? 'is-active' : ''}" href="${l.href}">${l.label}</a>
    `).join('');

    return `
      <nav class="oc-nav" id="ocNav" aria-label="Principal">
        <div class="oc-nav-inner">
          <a class="oc-nav-logo" href="/" aria-label="OrthoClinic inicio">
            ${logoMark(34)}
            <span>Ortho</span>Clinic
          </a>
          <div class="oc-nav-links">${links}</div>
          <a class="oc-btn oc-btn-teal oc-nav-cta" href="/agenda">
            Agenda tu cita
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
          <button class="oc-nav-toggle" id="ocNavToggle" aria-label="Abrir menú">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
          </button>
        </div>
      </nav>

      <div class="oc-drawer" id="ocDrawer" aria-hidden="true">
        <button class="oc-drawer-close" id="ocDrawerClose" aria-label="Cerrar menú">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M6 6l12 12M18 6l-12 12"/></svg>
        </button>
        ${LINKS.map(l => `<a class="oc-drawer-link" href="${l.href}">${l.label}</a>`).join('')}
        <a class="oc-drawer-link" href="/agenda" style="color: var(--oc-teal-bright);">Agenda tu cita →</a>
      </div>
    `;
  }

  function renderFooter() {
    const year = new Date().getFullYear();
    return `
      <footer class="oc-footer">
        <div class="oc-footer-inner">
          <div class="oc-footer-grid">
            <div>
              <div class="oc-footer-brand"><span>Ortho</span>Clinic</div>
              <p class="oc-footer-tag">Ortodoncia y odontología integral en Panamá. Especialistas certificados, tecnología láser y planes a tu medida.</p>
              <div style="display:flex;gap:12px;margin-top:24px;">
                <a href="https://instagram.com/orthoclinicpa" target="_blank" rel="noopener" aria-label="Instagram" style="width:40px;height:40px;border:1px solid rgba(255,255,255,0.18);border-radius:50%;display:inline-flex;align-items:center;justify-content:center;color:#fff;transition:all .3s var(--oc-ease);">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>
                </a>
                <a href="https://facebook.com/orthoclinicpa" target="_blank" rel="noopener" aria-label="Facebook" style="width:40px;height:40px;border:1px solid rgba(255,255,255,0.18);border-radius:50%;display:inline-flex;align-items:center;justify-content:center;color:#fff;transition:all .3s var(--oc-ease);">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H8v3h3v7h3v-7h2.5l.5-3H14V9.5c0-.3.2-.5.5-.5z"/></svg>
                </a>
              </div>
            </div>
            <div>
              <h4>Navegación</h4>
              <ul>
                <li><a href="/">Inicio</a></li>
                <li><a href="/servicios">Servicios</a></li>
                <li><a href="/especialistas">Especialistas</a></li>
                <li><a href="/sucursales">Sucursales</a></li>
                <li><a href="/agenda">Agendar cita</a></li>
              </ul>
            </div>
            <div>
              <h4>Servicios destacados</h4>
              <ul>
                <li><a href="/servicios#brackets">Brackets metálicos y cerámicos</a></li>
                <li><a href="/servicios#invisible">Ortodoncia invisible</a></li>
                <li><a href="/servicios#blanqueamiento">Blanqueamiento</a></li>
                <li><a href="/servicios#laser">Tratamientos con láser</a></li>
                <li><a href="/servicios#endodoncia">Endodoncia</a></li>
              </ul>
            </div>
            <div>
              <h4>Sucursales</h4>
              <ul>
                <li><a href="/sucursales#andes">Los Andes Mall<br><span style="color:rgba(255,255,255,0.45);font-size:12px;">6673-4766</span></a></li>
                <li><a href="/sucursales#coronado">Coronado<br><span style="color:rgba(255,255,255,0.45);font-size:12px;">6340-0028</span></a></li>
                <li><a href="/sucursales#costaverde">Costa Verde<br><span style="color:rgba(255,255,255,0.45);font-size:12px;">6729-6810</span></a></li>
              </ul>
            </div>
          </div>
          <div class="oc-footer-bottom">
            <span>© ${year} OrthoClinic Panamá · Todos los derechos reservados</span>
            <span style="display:inline-flex;align-items:center;gap:8px;">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20 6 9 17l-5-5"/></svg>
              Sitio cuidado y construido con propósito
            </span>
          </div>
        </div>
      </footer>
    `;
  }

  function renderFab() {
    const num = WA_DEFAULT.num;
    return `
      <a class="oc-fab" href="https://wa.me/${num}?text=Hola%20OrthoClinic%2C%20quisiera%20agendar%20una%20cita" target="_blank" rel="noopener" aria-label="Escribir por WhatsApp">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.6 14.2c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2.1-.4 0-.5l-.9-2.1c-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.2.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3z"/><path d="M20 4A11.7 11.7 0 0012 .4C5.6.4.4 5.6.4 12c0 2 .5 4 1.5 5.7l-1.6 5.9 6-1.6c1.6.9 3.5 1.4 5.5 1.4h.1c6.4 0 11.6-5.2 11.6-11.6 0-3.1-1.2-6-3.4-8.2zM12 21.6c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.6 1 1-3.5-.2-.4c-1-1.6-1.5-3.4-1.5-5.2 0-5.4 4.3-9.7 9.7-9.7 2.6 0 5 1 6.8 2.8a9.6 9.6 0 012.8 6.8c0 5.4-4.3 9.7-9.7 9.7z"/></svg>
        <span class="oc-fab-label">WhatsApp</span>
      </a>
    `;
  }

  // === ANIMATIONS ===
  function setupReveal() {
    const els = document.querySelectorAll('[data-reveal], [data-split]');
    if (!('IntersectionObserver' in window)) {
      els.forEach(el => el.classList.add('is-in'));
      return;
    }
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    els.forEach(el => {
      if (el.hasAttribute('data-split')) {
        const text = el.textContent.trim();
        const lines = text.split('\n');
        el.innerHTML = lines.map(l => `<span class="split-line"><span>${l}</span></span>`).join('');
      }
      io.observe(el);
    });
  }

  function setupCounters() {
    const els = document.querySelectorAll('[data-count]');
    if (!els.length || !('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        const el = e.target;
        const raw = el.dataset.count;
        const target = parseFloat(raw);
        const hasDecimal = /\./.test(raw);
        const suffix = el.dataset.suffix || '';
        const dur = 1600;
        const start = performance.now();
        function tick(now) {
          const t = Math.min(1, (now - start) / dur);
          const eased = 1 - Math.pow(1 - t, 3);
          const v = target * eased;
          const val = hasDecimal ? v.toFixed(1) : Math.round(v);
          el.textContent = val + suffix;
          if (t < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
        io.unobserve(el);
      });
    }, { threshold: 0.4 });
    els.forEach(el => io.observe(el));
  }

  function setupNavScroll() {
    const nav = document.getElementById('ocNav');
    if (!nav) return;
    const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  function setupDrawer() {
    const toggle = document.getElementById('ocNavToggle');
    const drawer = document.getElementById('ocDrawer');
    const close = document.getElementById('ocDrawerClose');
    if (!toggle || !drawer) return;
    const open  = () => { drawer.classList.add('is-open'); drawer.setAttribute('aria-hidden','false'); document.body.style.overflow = 'hidden'; };
    const shut  = () => { drawer.classList.remove('is-open'); drawer.setAttribute('aria-hidden','true'); document.body.style.overflow = ''; };
    toggle.addEventListener('click', open);
    close?.addEventListener('click', shut);
    drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', shut));
  }

  function injectGoogleFonts() {
    if (document.querySelector('link[data-oc-fonts]')) return;
    const pre1 = document.createElement('link'); pre1.rel='preconnect'; pre1.href='https://fonts.googleapis.com'; pre1.dataset.ocFonts = '';
    const pre2 = document.createElement('link'); pre2.rel='preconnect'; pre2.href='https://fonts.gstatic.com'; pre2.crossOrigin=''; pre2.dataset.ocFonts = '';
    const link = document.createElement('link'); link.rel='stylesheet';
    link.href='https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300..900&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;600&display=swap';
    link.dataset.ocFonts = '';
    document.head.append(pre1, pre2, link);
  }

  function mount() {
    injectGoogleFonts();
    const navSlot = document.getElementById('oc-nav-slot') || document.body;
    const footerSlot = document.getElementById('oc-footer-slot') || document.body;
    if (!document.getElementById('ocNav')) {
      const navWrap = document.createElement('div');
      navWrap.innerHTML = renderNav();
      navSlot === document.body ? document.body.prepend(...navWrap.children) : navSlot.innerHTML = navWrap.innerHTML;
    }
    if (!document.querySelector('.oc-footer')) {
      const f = document.createElement('div');
      f.innerHTML = renderFooter();
      footerSlot === document.body ? document.body.append(...f.children) : footerSlot.innerHTML = f.innerHTML;
    }
    if (!document.querySelector('.oc-fab')) {
      const fab = document.createElement('div');
      fab.innerHTML = renderFab();
      document.body.append(...fab.children);
    }
    setupNavScroll();
    setupDrawer();
    setupReveal();
    setupCounters();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }
})();
