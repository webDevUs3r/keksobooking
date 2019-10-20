'use strict';

(function () {
  // Карта объявлений
  var map = document.querySelector('.map');
  // Шаблон объявления
  var cardAdTemplate = document.querySelector('#card').content;

  // Тип жилья
  var getTypeHouse = function (typeItem) {
    var typeHouse;

    switch (typeItem) {
      case 'flat':
        typeHouse = 'Квартира';
        break;
      case 'bungalo':
        typeHouse = 'Бунгало';
        break;
      case 'house':
        typeHouse = 'Дом';
        break;
      case 'palace':
        typeHouse = 'Дворец';
        break;
    }

    return typeHouse;
  };

  // Создать картинку
  var createElement = function (src) {
    var newElement = document.createElement('img');
    newElement.width = 45;
    newElement.height = 40;
    newElement.alt = 'Фотография жилья';
    newElement.src = src;
    newElement.classList.add('popup__photo');

    return newElement;
  };

  // Получить список фотографии объявления
  var getPhotosList = function (photos) {
    var photosContainer = document.createDocumentFragment();

    for (var i = 0; i < photos.length; i++) {
      photosContainer.appendChild(createElement(photos[i]));
    }
    return photosContainer;
  };

  // Создать объявление
  var createCardAd = function (arr) {
    var newCardAd = cardAdTemplate.querySelector('.map__card').cloneNode(true);
    newCardAd.querySelector('.popup__avatar').src = arr.author.avatar;
    newCardAd.querySelector('.popup__title').textContent = arr.offer.title;
    newCardAd.querySelector('.popup__text--address').textContent = arr.offer.address;
    newCardAd.querySelector('.popup__text--price').textContent = arr.offer.price + 'P/ночь';
    newCardAd.querySelector('.popup__type').textContent = getTypeHouse(arr.offer.type);
    newCardAd.querySelector('.popup__text--capacity').textContent = arr.offer.rooms + ' комнаты для ' + arr.offer.guests + ' гостей';
    newCardAd.querySelector('.popup__text--time').textContent = 'Заезд после ' + arr.offer.checkin + ', выезд до ' + arr.offer.checkout;

    // var list = getFeaturesList(newCardAd, arr.offer.features);

    newCardAd.querySelector('.popup__description').textContent = arr.offer.description;

    var listPhotosAd = getPhotosList(arr.offer.photos);
    newCardAd.querySelector('.popup__photos').appendChild(listPhotosAd);

    var closeButton = newCardAd.querySelector('.popup__close');
    // Закрыть объявление
    closeButton.addEventListener('click', function () {
      window.removeCardAd();
    });

    return newCardAd;
  };

  // Отрисовать объявление
  window.renderCardAd = function (ad) {
    var filtersAds = document.querySelector('.map__filters-container');
    // Удаляем предыдущее объявление
    window.removeCardAd();
    // Создаём объявление
    var newAd = createCardAd(ad);
    // Добавляем на объявление на карту
    map.insertBefore(newAd, filtersAds);

    document.addEventListener('keydown', window.buttonCloseEscPressHandler);
  };
})();
