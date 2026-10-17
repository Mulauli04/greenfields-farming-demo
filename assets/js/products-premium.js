// Page 3: preserve selected crop when visitors open the enquiry form.
// No stock levels or prices are claimed: availability is confirmed by the farm.
document.querySelectorAll('.premium-enquiry-link').forEach((link) => {
  const card = link.closest('.product-item');
  if (!card) return;
  link.href = 'enquiries.html?product=' + encodeURIComponent(card.dataset.name);
  link.setAttribute('aria-label', 'Enquire about ' + card.dataset.name + ' availability');
});
