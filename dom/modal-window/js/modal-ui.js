function initModalUi() {
  const triggers = document.querySelectorAll('.trigger');
  for (let trigger of triggers) {
    trigger.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('.modal-wrapper').classList.toggle('open');
      document.querySelector('.page-wrapper').classList.toggle('blur');
    });
  }
}
