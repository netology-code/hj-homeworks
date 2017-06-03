function getPriceFormatted(value) {
  return  value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

let items = 0;
let summ = 0;
let buttons, cartAmount, cartTotal;

function addItem(event){
  items += 1;
  summ += Number(event.target.dataset.price);
  cartAmount.innerHTML = items;
  cartTotal.innerHTML = getPriceFormatted(summ);
}

function init() {
  buttons = Array.from(document.getElementsByClassName('add'));
  cartAmount = document.getElementById('cart-count');
  cartTotal = document.getElementById('cart-total-price');
  buttons.forEach(v => {
    v.addEventListener('click', addItem);
  });
}

document.addEventListener('DOMContentLoaded', init);
