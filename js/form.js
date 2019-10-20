'use strict';

(function () {
  // Карта объявлений
  var map = document.querySelector('.map');
  var mapPinMain = map.querySelector('.map__pin--main'); //

  var adForm = document.querySelector('.ad-form');

  var activatePage = function () {

  };

  var deactivatePage = function () {

  };

  // Активация формы
  window.enableAdForm = function () {
    adForm.classList.remove('ad-form--disabled');

    var adFormElements = adForm.querySelectorAll('.ad-form__element');

    for (var i = 0; i < adFormElements.length; i++) {
      if (adFormElements[i].children[1] !== 'input[name="address"]') {
        adFormElements[i].disabled = false;
      }
    }
  };

    // Работа с формой
  // Валидация формы

  adForm.addEventListener('invalid', function (evt) {
    evt.target.style.border = '2px solid green';
  });

  var checkHouseType = function (i, house) {
    var priceInput = adForm.querySelector('#price');

    if (house === 'bungalo') {
      priceInput.min = 0;
    }
  };

  var typeHouseButtonClickHandler = function (type) {
    type.addEventListener('click', function (evt) {
      console.log('xyi');
    });
  };


  // Работаем с секцией "Тип жилья - Цена за ночь"
  // alignNumberOfRoomsToGuest, getNumberOfGuests, getNumberOfRooms

  // Получить цену за ночь
  var getPricePerNight = function (houseType) {
    var price;

    switch (houseType) {
      case 'bungalo':
        price = 0;
        break;
      case 'flat':
        price = 1000;
        break;
      case 'house':
        price = 5000;
        break;
      case 'palace':
        price = 10000;
        break;
    }

    return price;
  };

  // Установить цену за ночь
  var setPricePerNight = function (houseType) {
    var inputPrice = adForm.querySelector('#price');
    inputPrice.min = getPricePerNight(houseType);
    inputPrice.placeholder = getPricePerNight(houseType);
  };

  // Изменить цену за ночь в зависимости от типа жилья
  var changePricePerNightFilter = function () {
    var houseTypeList = adForm.querySelector('#type');

    // находит выделенный элемент по-умолчанию
    // Устанавливаем значение по-умолчанию
    for (var i = 0; i < houseTypeList.options.length; i++) {
      if (houseTypeList.options[i].selected) {
        setPricePerNight(houseTypeList.options[i].value);
      }
    }

    houseTypeList.addEventListener('change', function (e) {
      setPricePerNight(e.target.value);
    });
  };

  changePricePerNightFilter();


  // Работа с секцией "Заезд-выезд"

  // Установить время заезда-выезда
  var setTime = function (target, times) {
    for (var i = 0; i < times.options.length; i++) {
      if (times.options[i].value === target) {
        times.options[i].selected = true;
      }
    }
  };

  // Изменить время заезда-выезда
  var changeTimeFilter = function () {
    var timeIn = adForm.querySelector('#timein');
    var timeOut = adForm.querySelector('#timeout');

    timeIn.addEventListener('change', function (evt) {
      var selectedTimeIn = evt.target.value;
      setTime(selectedTimeIn, timeOut);
    });

    timeOut.addEventListener('change', function(evt) {
      var selectedTimeOut = evt.target.value;
      setTime(selectedTimeOut, timeIn);
    });
  };

  changeTimeFilter();


  // Работа с секцией "Кол-во комнат-Количество мест"

  var roomsList = adForm.querySelector('#room_number');
  var capacityList = adForm.querySelector('#capacity');

  // Получить количество мест
  var getNumberOfSeats = function (rooms) {
    if (rooms !== '100') {
      for (var k = 0; k < capacityList.options.length; k++) {
        if (capacityList.options[k].value > rooms) {
          capacityList.options[k].disabled = true;
        } else if (capacityList.options[k].value === '0') {
          capacityList.options[k].disabled = true;
        } else {
          capacityList.options[k].disabled = false;
        }
      }
    } else {
      for (var i = 0; i < capacityList.options.length; i++) {
        if (capacityList.options[i].value > 0) {
          capacityList.options[i].disabled = true;
        } else {
          capacityList.options[i].disabled = false;
          capacityList.options[i].selected = true;
        }
      }
    }
  };

  // Установить значение фильтра по-умолчанию
  var disableCapacityItems = function () {
    for (var i = 0; i < capacityList.options.length; i++) {
      if (!capacityList.options[i].selected) {
        capacityList.options[i].disabled = true;
      }
    }
  };


  // Состояние фильтра по-умолчанию
  var setDefaultStateNumberOfSeats = function () {
    for (var i = 0; i < roomsList.options.length; i++) {
      if (roomsList.options[i].selected) {
        disableCapacityItems();
      }
    }
  };

  // Запустить фильтр "Кол-во комнат - Количество мест"
  var changeStateNumberOfSeatsFilter = function () {
    setDefaultStateNumberOfSeats();

    roomsList.addEventListener('change', function (evt) {
      getNumberOfSeats(evt.target.value);
    });
  };

  changeStateNumberOfSeatsFilter();

  var getNumberOfGuests = function () {

  };

  var getNumberOfRooms = function () {

  };


  // Валидация формы

  //  Валидация заголовка объявления/Заголовок объявления
  var adTitleInput = adForm.querySelector('#title');

  var setErrorStatus = function (input) {
    input.style.borderColor = 'red';
  };

  var setSuccessStatus = function (input) {
    input.style.borderColor = 'green';
  };

  adTitleInput.addEventListener('invalid', function (evt) {
    if (adTitleInput.validity.tooShort) {
      adTitleInput.setCustomValidity('Длина объявления должна быть не меньше 30-ти символов');
      setErrorStatus(evt.target);
    } else if (adTitleInput.validity.tooLong) {
      adTitleInput.setCustomValidity('Длина заголовка не должна превышать 100 символов');
      setErrorStatus(evt.target);
    } else {
      adTitleInput.setCustomValidity('');
      setSuccessStatus(evt.target);
    }
  });

  // Валидация цены - price
  var adPriceInput = adForm.querySelector('#price');

  adPriceInput.addEventListener('invalid', function (evt) {
    var minPrice = adPriceInput.min;

    if (adPriceInput.validity.valueMissing) {
      adPriceInput.setCustomValidity('Обязательное поле для заполнения');
      setErrorStatus(evt.target);
    } else if (adPriceInput.value.length < minPrice) {
      adPriceInput.setCustomValidity('Цена должна быть не ниже ' + minPrice);
      setErrorStatus(evt.target);
    } else {
      adPriceInput.setCustomValidity('');
      setSuccessStatus(evt.target);
    }
  });

  // Записать координаты метки в поле адреса
  // Изучить шаблоны
  // 1200x704

  var MAIN_PIN_WIDTH = 30;
  var MAIN_PIN_HEIGHT = 80;

    var coordinateX = mapPinMain.style.left;
    var coordinateY = mapPinMain.style.top;

  // Получить координату метки
  var getCoordinate = function (coordinate) {
    var newCoord = '';

    for (var i = 0; i < coordinate.length; i++) {
      if (coordinate[i] !== 'p') {
        newCoord += coordinate[i];
      } else {
        break;
      }
    }

    return newCoord;
  };

  // console.log('Координата X: ' + getCoordinate(mapPinMain.style.left));
  // console.log('Координата Y: ' + getCoordinate(mapPinMain.style.top));


  var addressInput = adForm.querySelector('input[name="address"]');
  addressInput.value = getCoordinate(mapPinMain.style.left) + ', ' + getCoordinate(mapPinMain.style.top);
})();
