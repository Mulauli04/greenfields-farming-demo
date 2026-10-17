'use strict';
const form = document.getElementById('admin-form');
const password = document.getElementById('password');
const toggle = document.getElementById('toggle-password');
const feedback = document.getElementById('feedback');
document.getElementById('year').textContent = new Date().getFullYear();
toggle.addEventListener('click', () => {
  const showing = password.type === 'password';
  password.type = showing ? 'text' : 'password';
  toggle.textContent = showing ? 'Hide' : 'Show';
  toggle.setAttribute('aria-label', showing ? 'Hide password' : 'Show password');
  toggle.setAttribute('aria-pressed', String(showing));
});
form.addEventListener('submit', (event) => {
  event.preventDefault();
  feedback.textContent =
    'Sign-in is not available in this preview. No credentials have been transmitted or saved.';
  password.value = '';
});
