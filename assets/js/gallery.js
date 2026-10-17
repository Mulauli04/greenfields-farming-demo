// Gallery images are the original user-provided farm photographs.
const photos = [
  {
    "number": 1,
    "category": "cabbage",
    "label": "Cabbage",
    "src": "assets/images/gallery/farm-photo-01.jpg"
  },
  {
    "number": 2,
    "category": "leafy",
    "label": "Leafy crops & fields",
    "src": "assets/images/gallery/farm-photo-02.jpg"
  },
  {
    "number": 3,
    "category": "peppers",
    "label": "Green peppers",
    "src": "assets/images/gallery/farm-photo-03.jpg"
  },
  {
    "number": 4,
    "category": "peppers",
    "label": "Green peppers",
    "src": "assets/images/gallery/farm-photo-04.jpg"
  },
  {
    "number": 5,
    "category": "peppers",
    "label": "Green peppers",
    "src": "assets/images/gallery/farm-photo-05.jpg"
  },
  {
    "number": 6,
    "category": "farming",
    "label": "Farm activities",
    "src": "assets/images/gallery/farm-photo-06.jpg"
  },
  {
    "number": 7,
    "category": "leafy",
    "label": "Leafy crops & fields",
    "src": "assets/images/gallery/farm-photo-07.jpg"
  },
  {
    "number": 8,
    "category": "peppers",
    "label": "Green peppers",
    "src": "assets/images/gallery/farm-photo-08.jpg"
  },
  {
    "number": 9,
    "category": "peppers",
    "label": "Green peppers",
    "src": "assets/images/gallery/farm-photo-09.jpg"
  },
  {
    "number": 10,
    "category": "peppers",
    "label": "Green peppers",
    "src": "assets/images/gallery/farm-photo-10.jpg"
  },
  {
    "number": 11,
    "category": "leafy",
    "label": "Leafy crops & fields",
    "src": "assets/images/gallery/farm-photo-11.jpg"
  },
  {
    "number": 12,
    "category": "leafy",
    "label": "Leafy crops & fields",
    "src": "assets/images/gallery/farm-photo-12.jpg"
  },
  {
    "number": 13,
    "category": "sugarcane",
    "label": "Sugarcane",
    "src": "assets/images/gallery/farm-photo-13.jpg"
  },
  {
    "number": 14,
    "category": "peppers",
    "label": "Green peppers",
    "src": "assets/images/gallery/farm-photo-14.jpg"
  },
  {
    "number": 15,
    "category": "leafy",
    "label": "Leafy crops & fields",
    "src": "assets/images/gallery/farm-photo-15.jpg"
  },
  {
    "number": 16,
    "category": "cabbage",
    "label": "Cabbage",
    "src": "assets/images/gallery/farm-photo-16.jpg"
  },
  {
    "number": 17,
    "category": "peppers",
    "label": "Green peppers",
    "src": "assets/images/gallery/farm-photo-17.jpg"
  },
  {
    "number": 18,
    "category": "leafy",
    "label": "Leafy crops & fields",
    "src": "assets/images/gallery/farm-photo-18.jpg"
  },
  {
    "number": 19,
    "category": "peppers",
    "label": "Green peppers",
    "src": "assets/images/gallery/farm-photo-19.jpg"
  },
  {
    "number": 20,
    "category": "leafy",
    "label": "Leafy crops & fields",
    "src": "assets/images/gallery/farm-photo-20.jpg"
  },
  {
    "number": 21,
    "category": "sugarcane",
    "label": "Sugarcane",
    "src": "assets/images/gallery/farm-photo-21.jpg"
  },
  {
    "number": 22,
    "category": "cabbage",
    "label": "Cabbage",
    "src": "assets/images/gallery/farm-photo-22.jpg"
  },
  {
    "number": 23,
    "category": "beetroot",
    "label": "Beetroot",
    "src": "assets/images/gallery/farm-photo-23.jpg"
  },
  {
    "number": 24,
    "category": "mixed",
    "label": "Mixed produce",
    "src": "assets/images/gallery/farm-photo-24.jpg"
  },
  {
    "number": 25,
    "category": "leafy",
    "label": "Leafy crops & fields",
    "src": "assets/images/gallery/farm-photo-25.jpg"
  },
  {
    "number": 26,
    "category": "tomatoes",
    "label": "Tomatoes",
    "src": "assets/images/gallery/farm-photo-26.jpg"
  },
  {
    "number": 27,
    "category": "peppers",
    "label": "Green peppers",
    "src": "assets/images/gallery/farm-photo-27.jpg"
  },
  {
    "number": 28,
    "category": "tomatoes",
    "label": "Tomatoes",
    "src": "assets/images/gallery/farm-photo-28.jpg"
  },
  {
    "number": 29,
    "category": "farming",
    "label": "Farm activities",
    "src": "assets/images/gallery/farm-photo-29.jpg"
  },
  {
    "number": 30,
    "category": "leafy",
    "label": "Leafy crops & fields",
    "src": "assets/images/gallery/farm-photo-30.jpg"
  },
  {
    "number": 31,
    "category": "cabbage",
    "label": "Cabbage",
    "src": "assets/images/gallery/farm-photo-31.jpg"
  },
  {
    "number": 32,
    "category": "tomatoes",
    "label": "Tomatoes",
    "src": "assets/images/gallery/farm-photo-32.jpg"
  },
  {
    "number": 33,
    "category": "tomatoes",
    "label": "Tomatoes",
    "src": "assets/images/gallery/farm-photo-33.jpg"
  },
  {
    "number": 34,
    "category": "cabbage",
    "label": "Cabbage",
    "src": "assets/images/gallery/farm-photo-34.jpg"
  },
  {
    "number": 35,
    "category": "peppers",
    "label": "Green peppers",
    "src": "assets/images/gallery/farm-photo-35.jpg"
  },
  {
    "number": 36,
    "category": "leafy",
    "label": "Leafy crops & fields",
    "src": "assets/images/gallery/farm-photo-36.jpg"
  },
  {
    "number": 37,
    "category": "mixed",
    "label": "Mixed produce",
    "src": "assets/images/gallery/farm-photo-37.jpg"
  },
  {
    "number": 38,
    "category": "tomatoes",
    "label": "Tomatoes",
    "src": "assets/images/gallery/farm-photo-38.jpg"
  },
  {
    "number": 39,
    "category": "tomatoes",
    "label": "Tomatoes",
    "src": "assets/images/gallery/farm-photo-39.jpg"
  },
  {
    "number": 40,
    "category": "peppers",
    "label": "Green peppers",
    "src": "assets/images/gallery/farm-photo-40.jpg"
  },
  {
    "number": 41,
    "category": "peppers",
    "label": "Green peppers",
    "src": "assets/images/gallery/farm-photo-41.jpg"
  },
  {
    "number": 42,
    "category": "peppers",
    "label": "Green peppers",
    "src": "assets/images/gallery/farm-photo-42.jpg"
  },
  {
    "number": 43,
    "category": "peppers",
    "label": "Green peppers",
    "src": "assets/images/gallery/farm-photo-43.jpg"
  },
  {
    "number": 44,
    "category": "tomatoes",
    "label": "Tomatoes",
    "src": "assets/images/gallery/farm-photo-44.jpg"
  },
  {
    "number": 45,
    "category": "tomatoes",
    "label": "Tomatoes",
    "src": "assets/images/gallery/farm-photo-45.jpg"
  },
  {
    "number": 46,
    "category": "farming",
    "label": "Farm activities",
    "src": "assets/images/gallery/farm-photo-46.jpg"
  },
  {
    "number": 47,
    "category": "mixed",
    "label": "Mixed produce",
    "src": "assets/images/gallery/farm-photo-47.jpg"
  },
  {
    "number": 48,
    "category": "beetroot",
    "label": "Beetroot",
    "src": "assets/images/gallery/farm-photo-48.jpg"
  },
  {
    "number": 49,
    "category": "tomatoes",
    "label": "Tomatoes",
    "src": "assets/images/gallery/farm-photo-49.jpg"
  },
  {
    "number": 50,
    "category": "leafy",
    "label": "Leafy crops & fields",
    "src": "assets/images/gallery/farm-photo-50.jpg"
  },
  {
    "number": 51,
    "category": "tomatoes",
    "label": "Tomatoes",
    "src": "assets/images/gallery/farm-photo-51.jpg"
  },
  {
    "number": 52,
    "category": "watermelons",
    "label": "Watermelons",
    "src": "assets/images/gallery/farm-photo-52.jpg"
  },
  {
    "number": 53,
    "category": "watermelons",
    "label": "Watermelons",
    "src": "assets/images/gallery/farm-photo-53.jpg"
  },
  {
    "number": 54,
    "category": "tomatoes",
    "label": "Tomatoes",
    "src": "assets/images/gallery/farm-photo-54.jpg"
  },
  {
    "number": 55,
    "category": "leafy",
    "label": "Leafy crops & fields",
    "src": "assets/images/gallery/farm-photo-55.jpg"
  },
  {
    "number": 56,
    "category": "watermelons",
    "label": "Watermelons",
    "src": "assets/images/gallery/farm-photo-56.jpg"
  },
  {
    "number": 57,
    "category": "leafy",
    "label": "Leafy crops & fields",
    "src": "assets/images/gallery/farm-photo-57.jpg"
  },
  {
    "number": 58,
    "category": "leafy",
    "label": "Leafy crops & fields",
    "src": "assets/images/gallery/farm-photo-58.jpg"
  }
];
const categories = [['all','All photos'],['cabbage','Cabbage'],['peppers','Green peppers'],['tomatoes','Tomatoes'],['watermelons','Watermelons'],['sugarcane','Sugarcane'],['beetroot','Beetroot'],['leafy','Leafy crops'],['mixed','Mixed produce'],['farming','Farm activities']];
const filters = document.getElementById('gallery-filters');
const grid = document.getElementById('gallery-items');
const counter = document.getElementById('gallery-count');
const modal = document.getElementById('gallery-modal');
const full = document.getElementById('gallery-full');
const caption = document.getElementById('gallery-caption');
let visible = photos;
let activeIndex = 0;
let lastFocus = null;
function showCategory(category) {
  visible = category === 'all' ? photos : photos.filter(photo => photo.category === category);
  filters.querySelectorAll('button').forEach(button => {
    const selected = button.dataset.category === category;
    button.classList.toggle('selected', selected);
    button.setAttribute('aria-pressed', String(selected));
  });
  counter.textContent = `${visible.length} ${visible.length === 1 ? 'photograph' : 'photographs'}`;
  grid.replaceChildren();
  visible.forEach((photo, index) => {
    const button = document.createElement('button');
    button.className = 'gallery-tile'; button.type = 'button';
    button.setAttribute('aria-label', `View ${photo.label}, photo ${photo.number}`);
    const img = document.createElement('img');
    img.src = photo.src; img.alt = `${photo.label} — farm photograph ${photo.number}`;
    img.loading = 'lazy'; img.decoding = 'async';
    const label = document.createElement('span'); label.textContent = photo.label;
    button.append(img, label);
    button.addEventListener('click', () => openPhoto(index));
    grid.append(button);
  });
}
function displayPhoto(index) {
  activeIndex = (index + visible.length) % visible.length;
  const photo = visible[activeIndex];
  full.src = photo.src; full.alt = `${photo.label}, photograph ${photo.number}`;
  caption.textContent = `${photo.label} · Photo ${photo.number} of 58`;
}
function openPhoto(index) {
  lastFocus = document.activeElement;
  displayPhoto(index); modal.hidden = false; modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden'; document.getElementById('gallery-close').focus();
}
function closePhoto() {
  modal.hidden = true; modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = ''; full.removeAttribute('src'); lastFocus?.focus();
}
categories.forEach(([key, label]) => {
  const button = document.createElement('button'); button.type = 'button';
  button.dataset.category = key; button.textContent = label;
  button.addEventListener('click', () => showCategory(key)); filters.append(button);
});
document.getElementById('gallery-close').addEventListener('click', closePhoto);
document.getElementById('gallery-prev').addEventListener('click', () => displayPhoto(activeIndex - 1));
document.getElementById('gallery-next').addEventListener('click', () => displayPhoto(activeIndex + 1));
modal.addEventListener('click', event => { if (event.target === modal) closePhoto(); });
document.addEventListener('keydown', event => {
  if (modal.hidden) return;
  if (event.key === 'Escape') closePhoto();
  if (event.key === 'ArrowLeft') displayPhoto(activeIndex - 1);
  if (event.key === 'ArrowRight') displayPhoto(activeIndex + 1);
  if (event.key === 'Tab') {event.preventDefault(); document.getElementById('gallery-close').focus();}
});
showCategory('all');
