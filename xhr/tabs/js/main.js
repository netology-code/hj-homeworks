// Получатель данных
function getData(name, callback) {
  document.getElementById('preloader').classList.remove('hidden');

  const xhr = new XMLHttpRequest();
  xhr.open('GET', name, true);
  xhr.onload = function (e) {
    document.getElementById('preloader').classList.add('hidden');
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        console.log(xhr.responseText);
        document.getElementById('content').innerHTML = xhr.responseText;
      } else {
        console.error(xhr.statusText);
      }
    }
  };
  xhr.onerror = function (e) {
    console.error(xhr.statusText);
    document.getElementById('preloader').classList.add('hidden');
  };
  xhr.send();
}

function resetTabsActive() {
  for (let tab of tabs) {
    tab.classList.remove('active');
  }
}

// Клик по табам
const tabs = document.getElementsByTagName('li');
for (let tab of tabs) {
  tab.addEventListener('click', (event) => {
    const name = event.target.dataset.name;
    getData('./' + name);

    resetTabsActive();
    event.target.classList.add('active');
  });
}

// Инициализация
getData(tabs[0].dataset.name);
