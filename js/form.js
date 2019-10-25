'use strict';

(function () {
  // Карта объявлений
  var map = document.querySelector('.map');
  var mapPinMain = map.querySelector('.map__pin--main'); //

  var adForm = document.querySelector('.ad-form');

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

  // Работаем с секцией "Тип жилья - Цена за ночь"

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

    timeOut.addEventListener('change', function (evt) {
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


  // Записать координаты метки в поле адреса

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

  var defaultCoords = function () {
    var addressInput = adForm.querySelector('input[name="address"]');
    addressInput.value = getCoordinate(mapPinMain.style.left) + ', ' + getCoordinate(mapPinMain.style.top);
  };
  defaultCoords();

  window.setCoords = function () {
    var addressInput = adForm.querySelector('input[name="address"]');
    addressInput.value = getCoordinate(mapPinMain.style.left) + ', ' + getCoordinate(mapPinMain.style.top);
  };


  // Валидация формы

  //  Валидация заголовка объявления/Заголовок объявления
  var adTitleInput = adForm.querySelector('#title');

  var setErrorStatus = function (input) {
    input.style.borderColor = 'red';
  };

  var setSuccessStatus = function (input) {
    input.style.borderColor = '';
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

  // Валидация поля "цены - price"
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

  // Сбросить форму
  var resetFormToDefaultState = function () {
    // Заголовок
    adTitleInput.value = '';

    // Адресс
    mapPinMain.style.left = '570px';
    mapPinMain.style.top = '375px';
    var address = adForm.querySelector('input[name="address"]');
    address.value = '570, 375';


    // Тип жилья
    var types = adForm.querySelector('#type');
    for (var i = 0; i < types.options.length; i++) {
      if (types.options[i].value === 'flat') {
        types.options[i].selected = true;
      } else {
        types.options[i].selected = false;
      }
    }

    // Цена
    var price = adForm.querySelector('#price');
    price.value = '';
    price.min = 1000;
    price.placeholder = '1000';

    // Комнаты
    var rooms = adForm.querySelector('#room_number');
    var capacities = adForm.querySelector('#capacity');

    for (var j = 0; j < rooms.options.length; j++) {
      if (rooms.options[j].value === '1') {
        rooms.options[j].selected = true;
      } else {
        rooms.options[j].selected = false;
      }
    }

    // Места
    for (var k = 0; k < capacities.options.length; k++) {
      if (capacities.options[k].value === '1') {
        capacities.options[k].selected = true;
      } else {
        capacities.options[k].selected = false;
      }
    }

    // Заезд-выезд
    var checkIn = adForm.querySelector('#timein');
    var checkOut = adForm.querySelector('#timeout');

    var setDefaultTime = function (list) {
      for (var time = 0; time < list.options.length; time++) {
        if (list.options[time].value === '12:00') {
          list.options[time].selected = true;
        } else {
          list.options[time].selected = false;
        }
      }
    };
    setDefaultTime(checkIn);
    setDefaultTime(checkOut);

    // Описание
    var description = adForm.querySelector('#description');
    description.value = '';
  };

  adForm.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(adForm), resetFormToDefaultState, window.utils.errorHandler);
    evt.preventDefault();
  });
})();
