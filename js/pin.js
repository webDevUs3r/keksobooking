'use strict';

(function () {
  // Карта объявлений
  var map = document.querySelector('.map');
  // Контейнер объявлений
  var mapPinsList = map.querySelector('.map__pins');
  // Шаблон метки объявления
  var pinAdTemplate = document.querySelector('#pin').content;

  // Создать метку
  var createMapPin = function (dataItem) {
    var PIN_HEIGHT = 70;
    var PIN_WIDTH = 50;
    var pinHalfWidth = PIN_WIDTH / 2;
    var newMapPin = pinAdTemplate.querySelector('.map__pin').cloneNode(true);
    newMapPin.style.left = dataItem.location.x - pinHalfWidth + 'px';
    newMapPin.style.top = dataItem.location.y - PIN_HEIGHT + 'px';
    newMapPin.querySelector('img').src = dataItem.author.avatar;
    newMapPin.alt = dataItem.offer.title;

    newMapPin.addEventListener('click', function () {
      window.renderCardAd(dataItem);
    });

    return newMapPin;
  };

  // Отрисовать метки на карте
  window.renderAdPins = function (adList) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < adList.length; i++) {
      fragment.appendChild(createMapPin(adList[i]));
    }
    mapPinsList.appendChild(fragment);
  };
})();
