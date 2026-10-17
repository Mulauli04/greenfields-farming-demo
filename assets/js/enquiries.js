(() => {
  'use strict';
  const form = document.getElementById('produce-enquiry');
  const list = document.getElementById('item-list');
  const template = document.getElementById('item-template');
  const review = document.getElementById('enquiry-review');
  const output = document.getElementById('enquiry-output');
  const feedback = document.getElementById('enquiry-feedback');
  const date = document.getElementById('needed-by');
  const localToday = new Date();
  const pad = n => String(n).padStart(2, '0');
  date.min = `${localToday.getFullYear()}-${pad(localToday.getMonth()+1)}-${pad(localToday.getDate())}`;
  const crops = ['Cabbage','Green peppers','Tomatoes','Watermelons','Sugarcane','Beetroot','Leafy vegetables','Other produce'];
  function addItem(selected = '') {
    if (list.children.length >= 8) return;
    const item = template.content.firstElementChild.cloneNode(true);
    const select = item.querySelector('.crop-select');
    if (crops.some(c => c.toLowerCase() === selected.toLowerCase())) select.value = crops.find(c => c.toLowerCase() === selected.toLowerCase());
    item.querySelector('.remove-item').addEventListener('click', () => { if(list.children.length > 1){item.remove(); renumber();} });
    list.appendChild(item); renumber();
  }
  function renumber() {
    [...list.children].forEach((item, index) => { item.querySelector('.item-title').textContent = `Crop ${index+1}`; item.querySelector('.remove-item').hidden = list.children.length === 1; });
    document.getElementById('add-item').disabled = list.children.length >= 8;
  }
  const params = new URLSearchParams(window.location.search);
  addItem(params.get('product') || params.get('crop') || '');
  document.getElementById('add-item').addEventListener('click', () => addItem());
  form.addEventListener('reset', () => { setTimeout(() => {list.replaceChildren(); addItem(); review.hidden=true; feedback.textContent='';},0); });
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const phone = document.getElementById('customer-phone').value.trim();
    if (!/^[+\d()\s-]{7,25}$/.test(phone)) { document.getElementById('customer-phone').setCustomValidity('Enter a valid phone number.'); form.reportValidity(); document.getElementById('customer-phone').setCustomValidity(''); return; }
    const items = [...list.children].map(item => ({crop:item.querySelector('.crop-select').value, quantity:item.querySelector('.crop-quantity').value,unit:item.querySelector('.crop-unit').value}));
    if (items.some(item => !item.crop)) {list.querySelector('.crop-select:invalid')?.focus(); form.reportValidity();return;}
    const v = id => document.getElementById(id).value.trim();
    const lines = [
      'GREENFIELDS FARMING COMPANY — PRODUCE ENQUIRY',
      '',`Name: ${v('customer-name')}`,`Phone: ${phone}`,`Email: ${v('customer-email') || 'Not provided'}`,`Enquiry type: ${v('buyer-type')}`,
      '', 'Requested produce:',
      ...items.map((item, i) => `${i+1}. ${item.crop} — ${item.quantity ? item.quantity + (item.unit ? ' '+item.unit.toLowerCase() : ' (unit to confirm)') : 'Quantity to discuss'}`),
      '',`Arrangement: ${v('supply-method') || 'To be discussed'}`,`Preferred date: ${v('needed-by') || 'Flexible'}`,`Area: ${v('delivery-area') || 'Not provided'}`,`Notes: ${v('enquiry-message') || 'None'}`,
      '', 'Please confirm availability, pricing and arrangements.'
    ];
    output.value = lines.join('\n'); review.hidden = false; feedback.textContent = ''; review.scrollIntoView({behavior:'smooth',block:'start'});
  });
  document.getElementById('copy-message').addEventListener('click', async () => {
    try { await navigator.clipboard.writeText(output.value); feedback.textContent = 'Copied. You can now paste your enquiry into a message.'; }
    catch { output.focus(); output.select(); feedback.textContent = 'Select and copy the text above using Ctrl+C (or Copy on your phone).'; }
  });
  document.getElementById('download-message').addEventListener('click', () => {
    const blob = new Blob([output.value], {type:'text/plain;charset=utf-8'});
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a'); link.href = url; link.download = 'greenfields-enquiry.txt'; link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    feedback.textContent = 'Text file prepared. This does not send your enquiry.';
  });
})();