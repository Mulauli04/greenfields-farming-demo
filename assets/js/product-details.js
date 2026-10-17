const PRODUCE = [
  {
    "id": "cabbage",
    "name": "Cabbage",
    "category": "Vegetables",
    "image": "cabbage.jpg",
    "description": "Fresh cabbage growing in well-kept fields.",
    "caption": "Cabbage growing on the farm."
  },
  {
    "id": "green-peppers",
    "name": "Green Peppers",
    "category": "Vegetables",
    "image": "peppers.jpg",
    "description": "Green bell peppers photographed during harvest.",
    "caption": "Green peppers ready for collection."
  },
  {
    "id": "tomatoes",
    "name": "Tomatoes",
    "category": "Vegetables",
    "image": "tomatoes.jpg",
    "description": "Tomatoes photographed in the field and after harvest.",
    "caption": "Tomatoes from the farm."
  },
  {
    "id": "watermelons",
    "name": "Watermelons",
    "category": "Fruit",
    "image": "watermelons.jpg",
    "description": "Watermelons pictured after harvesting.",
    "caption": "Watermelons from the farm."
  },
  {
    "id": "sugarcane",
    "name": "Sugarcane",
    "category": "Field crops",
    "image": "sugarcane.jpg",
    "description": "Sugarcane growing in the farm fields.",
    "caption": "Sugarcane on the farm."
  },
  {
    "id": "beetroot",
    "name": "Beetroot",
    "category": "Vegetables",
    "image": "beetroot.jpg",
    "description": "Beetroot grown in the soil.",
    "caption": "Beetroot from the farm."
  },
  {
    "id": "leafy-greens",
    "name": "Leafy Greens",
    "category": "Vegetables",
    "image": "farm-rows.jpg",
    "description": "Leafy green crops growing in the field.",
    "caption": "Leafy crops from the farm."
  }
];
const params = new URLSearchParams(window.location.search);
const product = PRODUCE.find(item => item.id === params.get('product')) || PRODUCE[0];
const imageBase = 'assets/images/';
const title = document.getElementById('detailTitle');
title.textContent = product.name;
document.title = `${product.name} | GreenFields Farming Company`;
document.getElementById('detailCategory').textContent = product.category;
document.getElementById('detailDescription').textContent = product.description;
document.getElementById('detailCaption').textContent = product.caption;
document.getElementById('detailBreadcrumb').textContent = product.name;
const image = document.getElementById('detailImage');
image.src = imageBase + product.image;
image.alt = product.caption;
const enquiry = `enquiries.html?product=${encodeURIComponent(product.name)}`;
document.getElementById('detailEnquiry').href = enquiry;
document.getElementById('detailEnquiryBottom').href = enquiry;
const related = PRODUCE.filter(item => item.id !== product.id).slice(0,3);
const container = document.getElementById('relatedProducts');
related.forEach(item => {
  const col = document.createElement('div'); col.className = 'col-md-4';
  const link = document.createElement('a'); link.href = `product-details.html?product=${encodeURIComponent(item.id)}`; link.className='detail-related-card';
  const img = document.createElement('img'); img.src = imageBase + item.image; img.alt = item.caption; img.loading='lazy';
  const label = document.createElement('span'); label.textContent=item.category;
  const heading = document.createElement('strong'); heading.textContent=item.name + ' ↗';
  link.append(img,label,heading); col.append(link); container.append(col);
});
