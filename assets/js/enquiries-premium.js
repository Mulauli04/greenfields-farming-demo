(() => {
  'use strict';
  const form = document.getElementById('produce-enquiry');
  const stages = [...document.querySelectorAll('.wizard-stage')];
  const next = document.getElementById('wizard-next');
  const back = document.getElementById('wizard-back');
  const prepare = document.getElementById('wizard-review');
  const progress = document.getElementById('progress-fill');
  const labels = [...document.querySelectorAll('[data-stage]')];
  let stage = 0;
  function show(index) {
    stage = index;
    stages.forEach((el, i) => {
      el.hidden = i !== stage;
    });
    labels.forEach((el, i) => el.classList.toggle('is-active', i === stage));
    progress.style.width = `${((stage + 1) / stages.length) * 100}%`;
    back.hidden = stage === 0;
    next.hidden = stage !== 0;
    prepare.hidden = stage !== 1;
    document.getElementById('enquiry-form').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  function valid(index) {
    for (const field of stages[index].querySelectorAll('input,select,textarea')) {
      if (!field.checkValidity()) {
        field.reportValidity();
        field.focus();
        return false;
      }
    }
    if (index === 0) {
      const phone = document.getElementById('customer-phone');
      if (!/^[+\d()\s-]{7,25}$/.test(phone.value.trim())) {
        phone.setCustomValidity('Enter a valid phone number.');
        phone.reportValidity();
        phone.setCustomValidity('');
        phone.focus();
        return false;
      }
    }
    return true;
  }
  next.addEventListener('click', () => {
    if (valid(0)) show(1);
  });
  back.addEventListener('click', () => show(Math.max(0, stage - 1)));
  prepare.addEventListener('click', () => {
    if (!valid(1)) return;
    // The existing form handler prepares the message; make step 3 visible before submission.
    stages[2].hidden = false;
    form.requestSubmit();
    if (document.getElementById('enquiry-output').value.trim()) show(2);
    else stages[2].hidden = true;
  });
  form.addEventListener('reset', () => {
    setTimeout(() => {
      document.getElementById('enquiry-output').value = '';
      show(0);
    }, 0);
  });
  const params = new URLSearchParams(location.search);
  if (params.has('product') || params.has('crop')) {
    const chip = document.createElement('p');
    chip.className = 'small text-success fw-semibold';
    chip.textContent = 'Your selected crop has been added to the form.';
    document.querySelector('[data-step="1"]').prepend(chip);
  }
  show(0);
})();
