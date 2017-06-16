'use strict';

const items = [
  { title: 'Очки', pic: './i/sq-sample1.jpg', price: 1290 },
  { title: 'Шапка', pic: './i/sq-sample2.jpg', price: 490 },
  { title: 'Джинсы', pic: './i/sq-sample3.jpg', price: 1890 },
  { title: 'Джинсовая рубашка', pic: './i/sq-sample4.jpg', price: 2990 },
  { title: 'Майка', pic: './i/sq-sample5.jpg', price: 790 },
  { title: 'Сарафан', pic: './i/sq-sample6.jpg', price: 1590 },
  { title: 'Кожаная куртка', pic: './i/sq-sample7.jpg', price: 9990 },
  { title: 'Брюки чинос', pic: './i/sq-sample8.jpg', price: 4990 },
  { title: 'Шляпа', pic: './i/sq-sample9.jpg', price: 890 },
  { title: 'Блузка', pic: './i/sq-sample10.jpg', price: 590 },
  { title: 'Топ', pic: './i/sq-sample11.jpg', price: 1890 },
  { title: 'Очки', pic: './i/sq-sample12.jpg', price: 1390 },
  { title: 'Рубашка', pic: './i/sq-sample13.jpg', price: 2290 },
  { title: 'Ботинки лесоруба', pic: './i/sq-sample15.jpg', price: 7290 },
  { title: 'Парка', pic: './i/sq-sample17.jpg', price: 1790 },
  { title: 'Рубашка', pic: './i/sq-sample21.jpg', price: 1490 },
  { title: 'Джинсы', pic: './i/sq-sample22.jpg', price: 3790 }
];
let shownItems = 0;
let inCart = 0;

const showMore = document.querySelector('.show-more');
const badge = document.querySelector('.badge');
const list = document.querySelector('.items-list');

function addToCart(item) {
  inCart++;
  badge.textContent = inCart;
  console.log(`Товар ${item.title} по цене ${item.price}₽ добавлен в корзину`);
}

function getItemElement(item) {
  return `<figure class="snip1268">
    <div class="image">
      <img src="${item.pic}" alt="${item.title}"/>
      <a href="#" class="add-to-cart" data-title="${item.title}" data-price="${item.price}">Добавить в корзину</a>
    </div>
    <figcaption>
      <h2>${item.title}</h2>
      <div class="price">${item.price}₽</div>
    </figcaption>
  </figure>`;
}

function loadItems(target) {
  target.innerHTML += items
    .slice(shownItems, shownItems + 3)
    .map(getItemElement)
    .join('');
  shownItems += 3;
  if (shownItems >= items.length) {
    showMore.parentElement.removeChild(showMore);
  }
}

showMore.addEventListener('click', event => {
  event.preventDefault();
  loadItems(list);
});

loadItems(list);
