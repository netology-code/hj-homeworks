# Задача 3. Фотогалерея

#### В рамках домашнего задания к лекции «JavaScript в браузере: создаем интерактивные веб-страницы»

## Описание

Необходимо реализовать фотогалерею, в которой пять фотографий можно пролистывать с помощью кнопок «вперед»/«назад».

## Интерфейс

Фотографии должны показываться в теге `<img id="currentPhoto" src="null.png">`.

Для перехода к следующей фотографии пользователь должен кликать по кнопке с идентификатором `nextPhoto`, а для перехода к предыдущей — `prevPhoto`.

Фотографии зациклены. Когда мы просматриваем последнюю фотографию и кликаем на кнопку «вперед», то показывается первая. Аналогично, если мы просматриваем первую, кликаем «назад» — показывается последняя.

## Материалы

### Верстка

В онлайн-песочнице на [CODEPEN](https://codepen.io/solarrust/pen/bqOKOE).

В репозитории на [GitHub](https://github.com/netology-code/hj-homeworks/tree/master/browser/gallery).

### Фотографии

1. Фото 1 [breuer-building.jpg](https://netology-code.github.io/hj-homeworks/browser/gallery/i/breuer-building.jpg);

2. Фото 2 [guggenheim-museum.jpg](https://netology-code.github.io/hj-homeworks/browser/gallery/i/guggenheim-museum.jpg);

3. Фото 3 [headquarters.jpg](https://netology-code.github.io/hj-homeworks/browser/gallery/i/headquarters.jpg);

4. Фото 4 [IAC.jpg](https://netology-code.github.io/hj-homeworks/browser/gallery/i/IAC.jpg);

5. Фото 5 [new-museum.jpg](https://netology-code.github.io/hj-homeworks/browser/gallery/i/new-museum.jpg).

### Инструкция по выполнению домашнего задания

#### В онлайн-песочнице

Потребуется: только ваш браузер.

1. Открыть код в [песочнице](https://codepen.io/solarrust/pen/bqOKOE).

2. Нажать на кнопку «Fork».

3. Выполнить задание.

4. Нажать кнопку «Save».

5. Скопировать адрес страницы, открытой в браузере.

6. Прислать скопированную ссылку через личный кабинет на сайте [netology.ru](http://netology.ru/).    

#### Локально

Потребуется: браузер, редактор кода, система контроля версий [git](https://git-scm.com), установленная локально, и аккаунт на [GitHub](https://github.com/) или [BitBucket](https://bitbucket.org/).

1. Клонировать репозиторий с домашними заданиями `git clone https://github.com/netology-code/hj-homeworks.git`.

2. Перейти в папку задания `cd hj-homeworks/browser/gallery`.

3. Выполнить задание.

4. Создать репозиторий на [GitHub](https://github.com/) или [BitBucket](https://bitbucket.org/).

5. Добавить репозиторий в проект `git remote add homeworks %repo-url%`, где `%repo-url%` — адрес созданного репозитория.

6. Опубликовать код в репозиторий `homeworks` с помощью команды `git push -u homeworks master`.

7. Прислать ссылку на репозиторий через личный кабинет на сайте [netology.ru](http://netology.ru/).
