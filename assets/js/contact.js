(() => {
  'use strict';
  // Add confirmed details here before publishing. Leave blank until verified.
  const BUSINESS = { email: '', phoneDisplay: '', whatsappInternational: '' };
  const $ = (id) => document.getElementById(id);
  if (BUSINESS.email) {
    $('business-email').textContent = BUSINESS.email;
    const a = $('email-link');
    a.href = 'mailto:' + BUSINESS.email;
    a.hidden = false;
  }
  if (BUSINESS.phoneDisplay) $('business-phone').textContent = BUSINESS.phoneDisplay;
  if (/^[1-9]\d{7,14}$/.test(BUSINESS.whatsappInternational)) {
    const a = $('whatsapp-link');
    a.href = 'https://wa.me/' + BUSINESS.whatsappInternational;
    a.hidden = false;
  }
  const params = new URLSearchParams(location.search);
  const requested = params.get('product');
  if (requested) {
    const select = $('product');
    const match = [...select.options].find(
      (o) => o.value.toLowerCase() === requested.toLowerCase()
    );
    if (match) select.value = match.value;
  }
  $('contact-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const val = (id) => $(id).value.trim();
    const lines = [
      'GreenFields Farming Company — Product Enquiry',
      '',
      'Name: ' + val('fullName'),
      'Phone: ' + val('phone'),
    ];
    if (val('email')) lines.push('Email: ' + val('email'));
    lines.push('Product: ' + (val('product') || 'General enquiry'));
    if (val('quantity')) lines.push('Quantity: ' + val('quantity'));
    lines.push('', 'Message:', val('message'));
    $('prepared-message').value = lines.join('\n');
    $('contact-result').hidden = false;
    $('contact-result').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });
  $('copy-enquiry').addEventListener('click', async () => {
    const input = $('prepared-message');
    try {
      await navigator.clipboard.writeText(input.value);
      $('copy-status').textContent = 'Enquiry copied.';
    } catch {
      input.focus();
      input.select();
      $('copy-status').textContent = 'Select the message above and press Ctrl+C to copy.';
    }
  });
})();
