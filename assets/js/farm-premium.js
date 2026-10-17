/* Accessible photo-stage selector; works on static GitHub Pages. */
(() => {
  const stages = {
    fields: {
      src: 'assets/images/farm-rows.jpg',
      alt: 'Cultivated crop rows in the farm fields',
      tag: '01 / THE FIELDS',
      description: 'Cultivated rows show the care and preparation behind every growing season.',
    },
    growing: {
      src: 'assets/images/hero-cabbage.jpg',
      alt: 'Healthy cabbage plants growing in the field',
      tag: '02 / GROWING CROPS',
      description: 'Our field photographs show vegetables developing as the crops grow.',
    },
    harvest: {
      src: 'assets/images/tomato-harvest.jpg',
      alt: 'Freshly harvested produce gathered in crates',
      tag: '03 / AT HARVEST',
      description: 'Harvest photographs show produce gathered and ready for the next step.',
    },
  };
  const img = document.getElementById('field-stage-image');
  const tag = document.getElementById('field-stage-tag');
  const description = document.getElementById('field-stage-description');
  if (!img || !tag || !description) return;
  document.querySelectorAll('.field-stage[data-stage]').forEach((button) => {
    button.addEventListener('click', () => {
      const stage = stages[button.dataset.stage];
      if (!stage) return;
      img.src = stage.src;
      img.alt = stage.alt;
      tag.textContent = stage.tag;
      description.textContent = stage.description;
      document.querySelectorAll('.field-stage[data-stage]').forEach((b) => {
        const active = b === button;
        b.classList.toggle('active', active);
        b.setAttribute('aria-pressed', String(active));
      });
    });
  });
})();
