/* Optional extra photographs for each crop. Uses existing local farm images only. */
(() => {
  const images = {
    cabbage: ['cabbage.jpg', 'hero-cabbage.jpg'],
    'green-peppers': ['peppers.jpg'],
    tomatoes: ['tomatoes.jpg', 'tomato-harvest.jpg'],
    watermelons: ['watermelons.jpg'],
    sugarcane: ['sugarcane.jpg'],
    beetroot: ['beetroot.jpg'],
    'leafy-greens': ['farm-rows.jpg'],
  };
  const id = new URLSearchParams(location.search).get('product') || 'cabbage';
  const photos = images[id] || images.cabbage;
  const main = document.getElementById('detailImage');
  const tray = document.getElementById('detailThumbs');
  if (!main || !tray) return;
  if (photos.length < 2) {
    tray.hidden = true;
    return;
  }
  photos.forEach((file, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'premium-thumb';
    button.setAttribute('aria-label', `View photograph ${index + 1} of ${photos.length}`);
    button.setAttribute('aria-pressed', String(index === 0));
    const img = document.createElement('img');
    img.src = 'assets/images/' + file;
    img.alt = '';
    img.loading = 'lazy';
    button.append(img);
    button.addEventListener('click', () => {
      main.src = img.src;
      main.alt = `${document.getElementById('detailTitle').textContent} — farm photograph ${index + 1}`;
      tray
        .querySelectorAll('button')
        .forEach((b) => b.setAttribute('aria-pressed', String(b === button)));
    });
    tray.append(button);
  });
})();
