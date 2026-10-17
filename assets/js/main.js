'use strict';
document.getElementById('year').textContent = new Date().getFullYear();
// Replace this with the verified company email address before launch.
// Until then, enquiry links are disabled rather than sending mail to a fake address.
for (const id of ['navEnquiry', 'contactEnquiry']) {
  const link = document.getElementById(id);
  link.removeAttribute('href');
  link.setAttribute('role', 'button');
  link.setAttribute('tabindex', '0');
  link.setAttribute('title', 'Company enquiry contact details will be added before launch');
  const message = () => alert('Enquiries will be available once the company contact details are confirmed.');
  link.addEventListener('click', message);
  link.addEventListener('keydown', event => {if (event.key === 'Enter' || event.key === ' ') {event.preventDefault(); message();}});
}
// Close the mobile menu after a navigation link is selected.
document.querySelectorAll('#mainNav .nav-link').forEach(link => link.addEventListener('click', () => {
  const menu = document.getElementById('mainNav');
  if (menu.classList.contains('show')) bootstrap.Collapse.getOrCreateInstance(menu).hide();
}));
