'use strict';
const search = document.querySelector('#productSearch');
const cards = [...document.querySelectorAll('.product-item')];
const buttons = [...document.querySelectorAll('.catalog-filter')];
const count = document.querySelector('#productCount');
const empty = document.querySelector('#catalogEmpty');
let activeCategory = 'all';
function updateCatalog() {
  const term = search.value.trim().toLowerCase();
  let visible = 0;
  for (const card of cards) {
    const matchesCategory = activeCategory === 'all' || card.dataset.category === activeCategory;
    const matchesText = card.dataset.name.includes(term);
    const show = matchesCategory && matchesText;
    card.hidden = !show;
    // Bootstrap column styling uses display; hidden attribute needs this override.
    card.style.display = show ? '' : 'none';
    if (show) visible++;
  }
  count.textContent = `Showing ${visible} ${visible === 1 ? 'crop' : 'crops'}`;
  empty.hidden = visible !== 0;
}
buttons.forEach((button) =>
  button.addEventListener('click', () => {
    activeCategory = button.dataset.filter;
    buttons.forEach((item) => {
      const selected = item === button;
      item.classList.toggle('is-active', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    updateCatalog();
  })
);
search.addEventListener('input', updateCatalog);
document.querySelector('#clearFilters').addEventListener('click', () => {
  search.value = '';
  buttons[0].click();
  search.focus();
});
