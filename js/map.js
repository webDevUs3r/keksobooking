'use strict';

(function () {
  // Карта объявлений
  var map = document.querySelector('.map');
  var mapPinMain = map.querySelector('.map__pin--main');

  mapPinMain.addEventListener('mouseup', function () {
  map.classList.remove('map--faded');

  // // Активация формы
  window.enableAdForm();
  // // Запись координаты метки?

  // Отрисовать метки
  window.renderAdPins(window.data);
  });

  var ESC_KEYCODE = 27;

  // Закрыть объявление/Удалить объявление
  window.removeCardAd = function () {
    var cardAdPopup = document.querySelector('.map__card.popup');

    if (cardAdPopup) {
      cardAdPopup.remove();
    }
    document.removeEventListener('keydown', window.buttonCloseEscPressHandler);
  };

  window.buttonCloseEscPressHandler = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      window.removeCardAd();
    }
  };
})();
