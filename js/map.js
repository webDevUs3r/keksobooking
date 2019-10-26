'use strict';

(function () {
  // Карта объявлений
  var map = document.querySelector('.map');
  // Метка
  var mapPinMain = map.querySelector('.map__pin--main');

  mapPinMain.addEventListener('mouseup', function () {
    // Активировать карту
    map.classList.remove('map--faded');
    // // Активация формы
    window.enableAdForm();

    // Отрисовать метки
    window.backend.load(window.renderAdPins, window.utils.errorHandler);

    // window.utils.successHandler();
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

  // window.deactivatePage = function () {
  //   // Удалить объявление
  //   window.removeCardAd();

  //   // var pinsContainer = document.querySelector('.map__pins');
  //   var pins = document.querySelectorAll('button.map__pin[type="button"]');

  //   pins.forEach(function (pin) {
  //     pin.remove();
  //   });
  //   // console.log(pins);
  // };
  // deactivatePage();

  var initSlider = function () {
    var mainPin = document.querySelector('.map__pin--main');
    var pinsMap = document.querySelector('.map__pins');

    var MIN_VERTICAL_DRAG = 130;
    var MAX_VERTICAL_DRAG = 630;
    var MIN_HORIZONTAL_DRAG = 0;
    var MAX_HORIZONTAL_DRAG = 1168;
    var PIN_HEIGHT = 80;
    var PIN_WIDTH = 32;

    mainPin.addEventListener('mousedown', function (evt) {

      // Координаты нажатия мыши
      var startCoords = {
        x: evt.clientX,
        y: evt.clientY
      };

      var mainPinMouseMoveHandler = function (moveEvt) {
        moveEvt.preventDefault();

        // Координаты сдвига мыши
        var shift = {
          x: startCoords.x - moveEvt.clientX,
          y: startCoords.y - moveEvt.clientY
        };

        startCoords = {
          x: moveEvt.clientX,
          y: moveEvt.clientY
        };


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
  };
  initSlider();

})();
