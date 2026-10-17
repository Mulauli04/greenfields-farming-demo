(() => {
  'use strict';
  const slides = [...document.querySelectorAll('.premium-slide')],
    dots = [...document.querySelectorAll('.slide-dot')],
    counter = document.querySelector('.slide-count'),
    next = document.querySelector('.hero-next');
  if (!slides.length) return;
  let index = 0,
    timer;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function show(i) {
    index = (i + slides.length) % slides.length;
    slides.forEach((s, n) => {
      s.classList.toggle('is-active', n === index);
      s.setAttribute('aria-hidden', String(n !== index));
    });
    dots.forEach((d, n) => {
      d.classList.toggle('is-active', n === index);
      d.setAttribute('aria-pressed', String(n === index));
    });
    if (counter)
      counter.textContent =
        String(index + 1).padStart(2, '0') + ' / ' + String(slides.length).padStart(2, '0');
  }
  function restart() {
    clearInterval(timer);
    if (!reduced)
      timer = setInterval(() => {
        if (!document.hidden) show(index + 1);
      }, 4500);
  }
  dots.forEach((d, n) =>
    d.addEventListener('click', () => {
      show(n);
      restart();
    })
  );
  next?.addEventListener('click', () => {
    show(index + 1);
    restart();
  });
  const hero = document.querySelector('.premium-hero');
  hero?.addEventListener('mouseenter', () => clearInterval(timer));
  hero?.addEventListener('mouseleave', restart);
  hero?.addEventListener('focusin', () => clearInterval(timer));
  hero?.addEventListener('focusout', (e) => {
    if (!hero.contains(e.relatedTarget)) restart();
  });
  show(0);
  restart();
})();
