'use strict';
function openMail() {
  const values = ['Открыть', 'Закрыть'];
  const btn = document.getElementById('open');
  const mail = document.getElementById('mail');
  mail.classList.toggle('is-active');
  const state = mail.classList.contains('is-active') ? 1 : 0;
  setTimeout(() => {
    btn.value = values[state];
  }, state * 2000);
}
