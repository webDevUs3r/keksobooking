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

  var mainPin = document.querySelector('.map__pin--main');

  var dragPin = function () {

  };
  var pinsMap = document.querySelector('.map__pins');

  var MIN_VERTICAL_DRAG = 130;
  var MAX_VERTICAL_DRAG = 630;
  var MIN_HORIZONTAL_DRAG = 0;
  var MAX_HORIZONTAL_DRAG = 1168;
  var PIN_HEIGHT = 80;
  var PIN_WIDTH = 32;

  mainPin.addEventListener('mousedown', function (evt) {

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    // console.log(startCoords.x, startCoords.y);
    // console.log(mainPin.offsetTop);

    var mainPinMouseMoveHandler = function (moveEvt) {
      moveEvt.preventDefault();

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      // console.log('offsetTop: ' + mainPin.offsetTop);

      // Перетаскивание метки по вертикали
      if (mainPin.offsetTop < MAX_VERTICAL_DRAG || mainPin.offsetTop > MIN_VERTICAL_DRAG) {
        mainPin.style.top = (mainPin.offsetTop - shift.y) + 'px';

        if (mainPin.offsetTop >= MAX_VERTICAL_DRAG) {
          mainPin.style.top = MAX_VERTICAL_DRAG + 'px';
        }

        if (mainPin.offsetTop <= MIN_VERTICAL_DRAG) {
          mainPin.style.top = MIN_VERTICAL_DRAG + 'px';
        }
      }

      // Перетаскивание метки по горизонтали
      if (mainPin.offsetLeft < MAX_HORIZONTAL_DRAG || mainPin.offsetLeft > MIN_HORIZONTAL_DRAG) {
        mainPin.style.left = (mainPin.offsetLeft - shift.x) + 'px';

        if (mainPin.offsetLeft >= MAX_HORIZONTAL_DRAG) {
          mainPin.style.left = MAX_HORIZONTAL_DRAG + 'px';
        }
        if (mainPin.offsetLeft <= (MIN_HORIZONTAL_DRAG - PIN_WIDTH)) {
          mainPin.style.left = MIN_HORIZONTAL_DRAG - PIN_WIDTH + 'px';
        }
      }

      window.setCoords();
    };

    var mainPinMouseUpHandler = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', mainPinMouseMoveHandler);
      document.removeEventListener('mouseup', mainPinMouseUpHandler);

    };

    document.addEventListener('mousemove', mainPinMouseMoveHandler);
    document.addEventListener('mouseup', mainPinMouseUpHandler);
  });
})();
