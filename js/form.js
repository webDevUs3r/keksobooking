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


  // Очистить заголовок объявления
  var clearTitle = function () {
    adTitleInput.value = '';
  };

  // Адрес и положение метки по умолчанию
  var setDefaultAddress = function () {
    var DEFAULT_COORD_X = '570';
    var DEFAULT_COORD_Y = '375';

    mapPinMain.style.left = DEFAULT_COORD_X + 'px';
    mapPinMain.style.top = DEFAULT_COORD_Y + 'px';
    var address = adForm.querySelector('input[name="address"]');
    address.value = DEFAULT_COORD_X + ', ' + DEFAULT_COORD_Y;
  };

  // Значение поля по умолчанию
  var setDefaultValue = function (list, value) {
    for (var k = 0; k < list.options.length; k++) {
      if (list.options[k].value === value) {
        list.options[k].selected = true;
      } else {
        list.options[k].selected = false;
      }
    }
  };

  // Цена по умолчанию
  var setDefaultPrice = function () {
    var price = adForm.querySelector('#price');
    price.value = '';
    price.min = 1000;
    price.placeholder = '1000';
  };

  var clearDescription = function () {
    var description = adForm.querySelector('#description');
    description.value = '';
  };

  // Сбросить форму
  var resetFormToDefaultState = function () {
    // Заголовок
    clearTitle();

    // Адресс
    setDefaultAddress();

    // Тип жилья
    var types = adForm.querySelector('#type');
    setDefaultValue(types, 'flat');

    // Цена
    setDefaultPrice();

    // Комнаты
    var rooms = adForm.querySelector('#room_number');
    var capacities = adForm.querySelector('#capacity');
    // Комнаты
    setDefaultValue(rooms, '1');
    // Места
    setDefaultValue(capacities, '1');

    // Заезд-выезд
    var checkIn = adForm.querySelector('#timein');
    var checkOut = adForm.querySelector('#timeout');

    setDefaultValue(checkIn, '12:00');
    setDefaultValue(checkOut, '12:00');

    // Описание
    clearDescription();
  };

  // Удалить метки
  var removePins = function () {
    var pins = document.querySelectorAll('button.map__pin[type="button"]');

    pins.forEach(function (pin) {
      pin.remove();
    });
  };

  // Деактивировать страницу
  var deactivatePage = function () {
    // Удалить объявление
    window.removeCardAd();

    // Удаляем метки на карте
    removePins();

    // Сбрасываем форму
    resetFormToDefaultState();
    // Показываем сообщение об успешной отправке
    window.utils.successHandler();
  };

  // Переключить страницу в неактивное состояние
  var resetButton = adForm.querySelector('.ad-form__reset');

  resetButton.addEventListener('click', function () {
    // Удалить объявление
    window.removeCardAd();
    // Удаляем метки на карте
    removePins();
    // Сбрасываем форму
    resetFormToDefaultState();
  });

  // Отправка формы
  adForm.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(adForm), deactivatePage, window.utils.errorHandler);
    evt.preventDefault();
  });

})();
