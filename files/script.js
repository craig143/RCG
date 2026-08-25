// header scroll state
const header = document.getElementById('siteHeader');
if(header){
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
  });
}

// reveal on scroll
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
}, {threshold:0.12});
revealEls.forEach(el => io.observe(el));

// disciplines toggle
document.querySelectorAll('.disc-toggle button[data-panel]').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.disc-toggle button[data-panel]').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.querySelectorAll('.disc-panel').forEach(p => p.classList.remove('active'));
    document.getElementById(btn.dataset.panel).classList.add('active');
  });
});

// process toggle
document.querySelectorAll('.disc-toggle button[data-process]').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.disc-toggle button[data-process]').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.querySelectorAll('.process-track').forEach(p => p.classList.remove('active'));
    document.getElementById('process-' + btn.dataset.process).classList.add('active');
  });
});

// sector pills
document.querySelectorAll('.pill').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.pill').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.querySelectorAll('.sector-detail').forEach(d => d.classList.remove('active'));
    document.querySelector('.sector-detail[data-sector="' + btn.dataset.sector + '"]').classList.add('active');
  });
});

// network map nodes -> scroll to market card (same page only)
document.querySelectorAll('.net-node[data-market]').forEach(node => {
  node.addEventListener('click', () => {
    const target = document.getElementById(node.dataset.market);
    if(!target){
      window.location.href = 'markets.html#' + node.dataset.market;
      return;
    }
    target.scrollIntoView({behavior:'smooth', block:'center'});
    target.classList.remove('flash');
    void target.offsetWidth;
    target.classList.add('flash');
  });
});

// on page load, if arriving with a #market-xx hash, flash it
window.addEventListener('load', () => {
  const hash = window.location.hash.replace('#','');
  if(hash.startsWith('market-')){
    const target = document.getElementById(hash);
    if(target){
      setTimeout(() => {
        target.scrollIntoView({behavior:'smooth', block:'center'});
        target.classList.add('flash');
      }, 300);
    }
  }
});

// count-up stats
const counters = document.querySelectorAll('[data-count]');
const countIo = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(!entry.isIntersecting) return;
    const el = entry.target;
    const target = parseInt(el.dataset.count, 10);
    const suffix = el.dataset.suffix || '';
    const duration = 900;
    const start = performance.now();
    function tick(now){
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(eased * target) + suffix;
      if(p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
    countIo.unobserve(el);
  });
}, {threshold:0.6});
counters.forEach(el => countIo.observe(el));

// scroll-spy nav (only for in-page hash links)
const navA = document.querySelectorAll('.navlinks a[href^="#"]');
const spySections = Array.from(navA).map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
const spyIo = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(!entry.isIntersecting) return;
    const id = '#' + entry.target.id;
    navA.forEach(a => a.classList.toggle('active', a.getAttribute('href') === id));
  });
}, {threshold:0, rootMargin:'-40% 0px -55% 0px'});
spySections.forEach(s => spyIo.observe(s));
