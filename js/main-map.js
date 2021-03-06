'use strict';

var data = [
  {
    "author": {
      "avatar": "img/avatars/user01.png"
    },
    "offer": {
      "title": "Уютное гнездышко для молодоженов",
      "address": "102-0082 Tōkyō-to, Chiyoda-ku, Ichibanchō, 14−3",
      "price": 42000,
      "type": "house",
      "rooms": 3,
      "guests": 6,
      "checkin": "14:00",
      "checkout": "10:00",
      "features": [
        "wifi",
        "dishwasher",
        "parking",
        "washer",
        "elevator",
        "conditioner"
      ],
      "description": "Великолепный таун-хауз в центре Токио. Подходит как туристам, так и бизнесменам. Дом полностью укомплектован и имеет свежий ремонт.",
      "photos": [
        "https://cdn.ostrovok.ru/t/x500/mec/hotels/11000000/10360000/10357700/10357605/10357605_25_b.jpg",
        "https://cdn.ostrovok.ru/t/x500/mec/hotels/11000000/10360000/10357700/10357605/10357605_27_b.jpg",
        "https://cdn.ostrovok.ru/t/x500/mec/hotels/11000000/10360000/10357700/10357605/10357605_17_b.jpg",
        "https://cdn.ostrovok.ru/t/x500/mec/hotels/11000000/10360000/10357700/10357605/10357605_30_b.jpg",
        "https://cdn.ostrovok.ru/t/x500/mec/hotels/10000000/9160000/9151200/9151174/9151174_1_b.jpg",
        "https://cdn.ostrovok.ru/t/x500/mec/hotels/10000000/9160000/9151200/9151174/9151174_12_b.jpg",
        "https://cdn.ostrovok.ru/t/x500/mec/hotels/10000000/9160000/9151200/9151174/9151174_5_b.jpg"
      ]
    },
    "location": {
      "x": 428,
      "y": 493
    }
  },
  {
    "author": {
      "avatar": "img/avatars/user02.png"
    },
    "offer": {
      "title": "Маленькая квартирка рядом с парком",
      "address": "102-0075 Tōkyō-to, Chiyoda-ku, Sanbanchō",
      "price": 30000,
      "type": "flat",
      "rooms": 1,
      "guests": 1,
      "checkin": "9:00",
      "checkout": "7:00",
      "features": [
        "elevator",
        "conditioner"
      ],
      "description": "Маленькая чистая квратира на краю парка. Без интернета, регистрации и СМС.",
      "photos": [
        "https://cdn.ostrovok.ru/t/x500/carsolize/images/hotels/01488611-c1f9-4854-ad67-9f0ad3e857e6.jpeg",
        "https://cdn.ostrovok.ru/t/x500/carsolize/images/hotels/d976dd4b-2a7e-415a-a2a2-afc51caf8006.jpeg"
      ]
    },
    "location": {
      "x": 471,
      "y": 545
    }
  },
  {
    "author": {
      "avatar": "img/avatars/user03.png"
    },
    "offer": {
      "title": "Небольшая лавочка в парке",
      "address": "Chiyoda-ku, Tōkyō-to 102-0091",
      "price": 100,
      "type": "bungalo",
      "rooms": 0,
      "guests": 0,
      "checkin": "0:00",
      "checkout": "0:00",
      "features": [],
      "description": "Великолепная лавочка прямо в центре парка. Подходит для всех кто любит спать на свежем воздухе.",
      "photos": []
    },
    "location": {
      "x": 744,
      "y": 534
    }
  },
  {
    "author": {
      "avatar": "img/avatars/user04.png"
    },
    "offer": {
      "title": "Императорский дворец в центре Токио",
      "address": "1-1 Chiyoda, Chiyoda-ku, Tōkyō-to 100-8111",
      "price": 6000000,
      "type": "house",
      "rooms": 35,
      "guests": 93,
      "checkin": "21:00",
      "checkout": "20:00",
      "features": [
        "wifi",
        "dishwasher",
        "parking",
        "washer",
        "elevator",
        "conditioner"
      ],
      "description": "Замечательный дворец в старинном центре города. Только для тех кто может себе позволить дворец. Лакеев и прочих жокеев просим не беспокоить.",
      "photos": [
        "https://cdn.ostrovok.ru/t/x500/carsolize/images/hotels/5a29d708-9396-40bf-b002-92c5fdeb5c90.jpeg",
        "https://cdn.ostrovok.ru/t/x500/carsolize/images/hotels/23e332cb-1379-4582-85ac-901d6c441635.jpeg",
        "https://cdn.ostrovok.ru/t/x500/carsolize/images/hotels/1c859bbf-61d6-4295-b463-c1d0cbf62592.jpeg",
        "https://cdn.ostrovok.ru/t/x500/carsolize/images/hotels/f5e66549-1940-4659-b27a-652f5c809231.jpeg",
        "https://cdn.ostrovok.ru/t/x500/mec/hotels/11000000/10360000/10357700/10357605/10357605_30_b.jpg",
        "https://cdn.ostrovok.ru/t/x500/laterooms/hotelphotos/laterooms/274510/gallery/economy-apartment-shinjuku-tokyo-tokyo_040220130219545024.jpg",
        "https://cdn.ostrovok.ru/t/x500/laterooms/hotelphotos/laterooms/274510/gallery/economy-apartment-shinjuku-tokyo-tokyo_040220130215449816.jpg",
        "https://cdn.ostrovok.ru/t/x500/laterooms/hotelphotos/laterooms/274510/gallery/economy-apartment-shinjuku-tokyo-tokyo_040220130206399539.jpg",
        "https://cdn.ostrovok.ru/t/x500/carsolize/images/hotels/69d53ff8-cd47-479d-8c9a-5170352aa169.jpeg",
        "https://cdn.ostrovok.ru/t/x500/carsolize/images/hotels/19614107-a1da-4a0b-8a93-95107704a598.jpeg",
        "https://cdn.ostrovok.ru/t/x500/carsolize/images/hotels/a97c72b9-e311-4a5a-863d-ea1e31ae9924.jpeg",
        "https://cdn.ostrovok.ru/t/x500/carsolize/images/hotels/d2a52c68-e877-4902-be6d-c7f3cb198437.jpeg"
      ]
    },
    "location": {
      "x": 526,
      "y": 597
    }
  },
  {
    "author": {
      "avatar": "img/avatars/user05.png"
    },
    "offer": {
      "title": "Милейший чердачок",
      "address": "102-0094 Tōkyō-to, Chiyoda-ku, Kioichō, 3",
      "price": 10000,
      "type": "bungalo",
      "rooms": 1,
      "guests": 2,
      "checkin": "11:00",
      "checkout": "10:00",
      "features": [
        "wifi",
        "washer",
        "elevator"
      ],
      "description": "Маленькая квартирка на чердаке. Для самых не требовательных.",
      "photos": [
        "https://cdn.ostrovok.ru/t/x500/mec/hotels/5000000/4500000/4493700/4493658/4493658_17_b.jpg",
        "https://cdn.ostrovok.ru/t/x500/mec/b4/c6/b4c674087f12b74bc71fe073923ec744dfe1ed8f.jpeg",
        "https://cdn.ostrovok.ru/t/x500/mec/1e/e8/1ee854db105a1f6bcd19ea62e1aa294724af7885.jpeg",
        "https://cdn.ostrovok.ru/t/x500/mec/ca/9a/ca9ad256650553cdce9d8ff8baad93d4f17b9484.jpeg"
      ]
    },
    "location": {
      "x": 361,
      "y": 517
    }
  },
  {
    "author": {
      "avatar": "img/avatars/default.png"
    },
    "offer": {
      "title": "Наркоманский притон",
      "address": "102-0094 Tōkyō-to, Chiyoda-ku, Kioichō, 3",
      "price": 5000,
      "type": "bungalo",
      "rooms": 3,
      "guests": 6,
      "checkin": "11:00",
      "checkout": "10:00",
      "features": [
        "wifi",
        "dishwasher",
        "parking",
        "washer",
        "elevator",
        "conditioner"
      ],
      "description": "У нас есть всё! Шприцы, интернет, кофе. Для всех кто знает толк в отдыхе. Полицию просим не беспокоить.",
      "photos": [
        "https://cdn.ostrovok.ru/t/x500/carsolize/images/hotels/42624d02-3198-4979-b521-194024454eb7.jpeg"
      ]
    },
    "location": {
      "x": 1165,
      "y": 423
    }
  },
  {
    "author": {
      "avatar": "img/avatars/user06.png"
    },
    "offer": {
      "title": "Чёткая хата",
      "address": "102-0081 Tōkyō-to, Chiyoda-ku, Yonbanchō, 5−6",
      "price": 9000,
      "type": "flat",
      "rooms": 2,
      "guests": 3,
      "checkin": "17:00",
      "checkout": "16:00",
      "features": [
        "dishwasher",
        "parking",
        "washer",
        "elevator",
        "conditioner"
      ],
      "description": "У нас тут все ништяк. Ларек за углом. Шава 24 часа. Приезжайте! Интернетов нет!",
      "photos": [
        "https://cdn.ostrovok.ru/t/x500/mec/a4/bb/a4bbfa3d98c0ddf60e95e610509dbede8160e40e.jpeg",
        "https://cdn.ostrovok.ru/t/x500/mec/hotels/1000000/480000/470500/470466/470466_12_b.jpg",
        "https://cdn.ostrovok.ru/t/x500/mec/hotels/1000000/480000/470500/470466/470466_17_b.jpg",
        "https://cdn.ostrovok.ru/t/x500/carsolize/images/hotels/aa9f9334-acd2-46f7-ae6e-4ae039376ec6.jpeg"
      ]
    },
    "location": {
      "x": 594,
      "y": 464
    }
  },
  {
    "author": {
      "avatar": "img/avatars/user07.png"
    },
    "offer": {
      "title": "Стандартная квартира в центре",
      "address": "Chiyoda-ku, Tōkyō-to 102-0082",
      "price": 60000,
      "type": "flat",
      "rooms": 3,
      "guests": 5,
      "checkin": "17:00",
      "checkout": "16:00",
      "features": [
        "wifi",
        "dishwasher",
        "washer",
        "conditioner"
      ],
      "description": "Тут красиво, светло и уютно. Есть где разместиться компании из 5 человек. Кофе и печеньки бесплатно.",
      "photos": [
        "https://cdn.ostrovok.ru/t/x500/carsolize/images/hotels/987935fb-633a-46b8-9b76-76af9f35c5e3.jpeg",
        "https://cdn.ostrovok.ru/t/x500/carsolize/images/hotels/434b2eda-5af9-4b93-b97d-4e7514621ff1.jpeg",
        "https://cdn.ostrovok.ru/t/x500/carsolize/images/hotels/fa9c3bba-a64a-4019-ab50-102bf6e5d691.jpeg",
        "https://cdn.ostrovok.ru/t/x500/carsolize/images/hotels/f779d886-18a6-4ffb-b7c2-f5d4d0c8952a.jpeg"
      ]
    },
    "location": {
      "x": 452,
      "y": 382
    }
  },
  {
    "author": {
      "avatar": "img/avatars/user08.png"
    },
    "offer": {
      "title": "Тихая квартирка недалеко от метро",
      "address": "102-0082 Tōkyō-to, Chiyoda-ku, Ichibanchō, 17−4",
      "price": 50000,
      "type": "flat",
      "rooms": 1,
      "guests": 3,
      "checkin": "23:00",
      "checkout": "5:00",
      "features": [
        "wifi",
        "dishwasher",
        "washer"
      ],
      "description": "Квартира на первом этаже. Соседи тихие. Для всех, кто терпеть не может шума и суеты.",
      "photos": [
        "https://cdn.ostrovok.ru/t/x500/mec/9b/6c/9b6cacd832ce9f3db3f17b3a2f368958710ce518.jpeg",
        "https://cdn.ostrovok.ru/t/x500/mec/9c/5d/9c5dc5a6daf5353bb44b5696df1c1186c55173b9.jpeg",
        "https://cdn.ostrovok.ru/t/x500/mec/cd/c6/cdc6e4a1df6259cb54c75edb6ac351180b49b5ec.jpeg",
        "https://cdn.ostrovok.ru/t/x500/carsolize/images/hotels/abcedd44-bfbd-411d-9919-fa2ac82ef6b0.jpeg"
      ]
    },
    "location": {
      "x": 976,
      "y": 505
    }
  },
  {
    "author": {
      "avatar": "img/avatars/default.png"
    },
    "offer": {
      "title": "Милое гнездышко для фанатов Анимэ",
      "address": "105-0003 Tōkyō-to, Minato-ku, Nishishinbashi, 2 Chome−3",
      "price": 90000,
      "type": "house",
      "rooms": 1,
      "guests": 2,
      "checkin": "23:00",
      "checkout": "5:00",
      "features": [
        "wifi",
        "dishwasher",
        "parking",
        "washer",
        "elevator",
        "conditioner"
      ],
      "description": "Азиатов просьба не беспокоить.",
      "photos": [
        "https://cdn.ostrovok.ru/t/x500/second2/1389653673/9237e4e2ff53d3d1beb69e49412df972.jpg",
        "https://cdn.ostrovok.ru/t/x500/second/1389604422/ff530e241de007ce3af7bdd23719ae0a.jpg",
        "https://cdn.ostrovok.ru/t/x500/mec/hotels/2000000/1480000/1479400/1479346/1479346_34_b.jpg",
        "https://cdn.ostrovok.ru/t/x500/mec/hotels/2000000/1480000/1479400/1479346/1479346_40_b.jpg"
      ]
    },
    "location": {
      "x": 535,
      "y": 418
    }
  }
];



// Работа с картой

// Карта объявлений
var map = document.querySelector('.map');

// var filtersAds = document.querySelector('.map__filters-container');


// // Контейнер объявлений
// var mapPinsList = map.querySelector('.map__pins');

// // Шаблон объявления
// var cardAdTemplate = document.querySelector('#card').content;
// // Шаблон метки объявления
// var pinAdTemplate = document.querySelector('#pin').content;

// // Тип жилья
// var getTypeHouse = function (typeItem) {
//   var typeHouse;

//   switch (typeItem) {
//     case 'flat':
//       typeHouse = 'Квартира';
//       break;
//     case 'bungalo':
//       typeHouse = 'Бунгало';
//       break;
//     case 'house':
//       typeHouse = 'Дом';
//       break;
//     case 'palace':
//       typeHouse = 'Дворец';
//       break;
//   }

//   return typeHouse;
// };

// // Создать картинку
// var createElement = function (src) {
//   var newElement = document.createElement('img');
//   newElement.width = 45;
//   newElement.height = 40;
//   newElement.alt = 'Фотография жилья';
//   newElement.src = src;
//   newElement.classList.add('popup__photo');

//   return newElement;
// };

// Получить список удобст
var getFeaturesList = function (template, classList) {
  var featuresList = template.querySelectorAll('.popup__features li');
    for (var i = 0; i < featuresList.length; i++) {
      if (classList[i]) {
        featuresList[i].classList.add('popup__feature');
        featuresList[i].classList.add('popup__feature--' + classList[i]);
      } else {
        featuresList[i].remove();
      }
    }
    return featuresList;
};

// // Получить список фотографии объявления
// var getPhotosList = function (photos) {
//   var photosContainer = document.createDocumentFragment();

//   for (var i = 0; i < photos.length; i++) {
//     photosContainer.appendChild(createElement(photos[i]));
//   }
//   return photosContainer;
// };

// // Создать объявление
// var createCardAd = function (arr) {
//   var newCardAd = cardAdTemplate.querySelector('.map__card').cloneNode(true);
//   newCardAd.querySelector('.popup__avatar').src = arr.author.avatar;
//   newCardAd.querySelector('.popup__title').textContent = arr.offer.title;
//   newCardAd.querySelector('.popup__text--address').textContent = arr.offer.address;
//   newCardAd.querySelector('.popup__text--price').textContent = arr.offer.price + 'P/ночь';
//   newCardAd.querySelector('.popup__type').textContent = getTypeHouse(arr.offer.type);
//   newCardAd.querySelector('.popup__text--capacity').textContent = arr.offer.rooms + ' комнаты для ' + arr.offer.guests + ' гостей';
//   newCardAd.querySelector('.popup__text--time').textContent = 'Заезд после ' + arr.offer.checkin + ', выезд до ' + arr.offer.checkout;

//   // var list = getFeaturesList(newCardAd, arr.offer.features);

//   newCardAd.querySelector('.popup__description').textContent = arr.offer.description;

//   var listPhotosAd = getPhotosList(arr.offer.photos);
//   newCardAd.querySelector('.popup__photos').appendChild(listPhotosAd);

//   var closeButton = newCardAd.querySelector('.popup__close');
//   // Закрыть объявление
//   closeButton.addEventListener('click', function () {
//     removeCardAd();
//   });

//   return newCardAd;
// };

// // Создать метку
// var createMapPin = function (dataItem) {
//   var PIN_HEIGHT = 70;
//   var PIN_WIDTH = 50;
//   var pinHalfWidth = PIN_WIDTH / 2;
//   var newMapPin = pinAdTemplate.querySelector('.map__pin').cloneNode(true);
//   newMapPin.style.left = dataItem.location.x - pinHalfWidth + 'px';
//   newMapPin.style.top = dataItem.location.y - PIN_HEIGHT + 'px';
//   newMapPin.querySelector('img').src = dataItem.author.avatar;
//   newMapPin.alt = dataItem.offer.title;

//   newMapPin.addEventListener('click', function () {
//     renderCardAd(dataItem);
//   });

//   return newMapPin;
// };

// // Отрисовать метки на карте
// var renderAdPins = function (adList) {
//   var fragment = document.createDocumentFragment();

//   for (var i = 0; i < adList.length; i++) {
//     fragment.appendChild(createMapPin(adList[i]));
//   }
//   mapPinsList.appendChild(fragment);
// };

// // Закрыть объявление/Удалить объявление
// var removeCardAd = function () {
//   var cardAdPopup = document.querySelector('.map__card.popup');

//   if (cardAdPopup) {
//     cardAdPopup.remove();
//   }
//   document.removeEventListener('keydown', buttonCloseEscPressHandler);
// };


// // Отрисовать объявление
// var renderCardAd = function (ad) {
//   var filtersAds = document.querySelector('.map__filters-container');
//   // Удаляем предыдущее объявление
//   removeCardAd();
//   // Создаём объявление
//   var newAd = createCardAd(ad);
//   // Добавляем на объявление на карту
//   map.insertBefore(newAd, filtersAds);

//   document.addEventListener('keydown', buttonCloseEscPressHandler);
// };

// var ESC_KEYCODE = 27;

// var buttonCloseEscPressHandler = function (evt) {
//   if (evt.keyCode === ESC_KEYCODE) {
//     removeCardAd();
//   }
// };


// Работа с картой
// Использет var map,

// var mapPinMain = map.querySelector('.map__pin--main'); //

// var adForm = document.querySelector('.ad-form');

// var activatePage = function () {

// };

// var deactivatePage = function () {

// };

// // Активация формы
// var enableAdForm = function () {
//   adForm.classList.remove('ad-form--disabled');

//   var adFormElements = adForm.querySelectorAll('.ad-form__element');

//   for (var i = 0; i < adFormElements.length; i++) {
//     if (adFormElements[i].children[1] !== 'input[name="address"]') {
//       adFormElements[i].disabled = false;
//     }
//   }
// };

// mapPinMain.addEventListener('mouseup', function (evt) {
//   map.classList.remove('map--faded');

//   // Активация формы
//   enableAdForm();
//   // Запись координаты метки?

//   // Похожие объявления
//   renderAdPins(data);
// });


// Работа с формой
// Валидация формы

// adForm.addEventListener('invalid', function (evt) {
//   evt.target.style.border = '2px solid green';
// });

// var checkHouseType = function (i, house) {
//   var priceInput = adForm.querySelector('#price');

//   if (house === 'bungalo') {
//     priceInput.min = 0;
//   }
// };

// var typeHouseButtonClickHandler = function (type) {
//   type.addEventListener('click', function (evt) {
//     console.log('xyi');
//   });
// };


// // Работаем с секцией "Тип жилья - Цена за ночь"
// // alignNumberOfRoomsToGuest, getNumberOfGuests, getNumberOfRooms

// // Получить цену за ночь
// var getPricePerNight = function (houseType) {
//   var price;

//   switch (houseType) {
//     case 'bungalo':
//       price = 0;
//       break;
//     case 'flat':
//       price = 1000;
//       break;
//     case 'house':
//       price = 5000;
//       break;
//     case 'palace':
//       price = 10000;
//       break;
//   }

//   return price;
// };

// // Установить цену за ночь
// var setPricePerNight = function (houseType) {
//   var inputPrice = adForm.querySelector('#price');
//   inputPrice.min = getPricePerNight(houseType);
//   inputPrice.placeholder = getPricePerNight(houseType);
// };

// // Изменить цену за ночь в зависимости от типа жилья
// var changePricePerNightFilter = function () {
//   var houseTypeList = adForm.querySelector('#type');

//   // находит выделенный элемент по-умолчанию
//   // Устанавливаем значение по-умолчанию
//   for (var i = 0; i < houseTypeList.options.length; i++) {
//     if (houseTypeList.options[i].selected) {
//       setPricePerNight(houseTypeList.options[i].value);
//     }
//   }

//   houseTypeList.addEventListener('change', function (e) {
//     setPricePerNight(e.target.value);
//   });
// };

// changePricePerNightFilter();


// // Работа с секцией "Заезд-выезд"

// // Установить время заезда-выезда
// var setTime = function (target, times) {
//   for (var i = 0; i < times.options.length; i++) {
//     if (times.options[i].value === target) {
//       times.options[i].selected = true;
//     }
//   }
// };

// // Изменить время заезда-выезда
// var changeTimeFilter = function () {
//   var timeIn = adForm.querySelector('#timein');
//   var timeOut = adForm.querySelector('#timeout');

//   timeIn.addEventListener('change', function (evt) {
//     var selectedTimeIn = evt.target.value;
//     setTime(selectedTimeIn, timeOut);
//   });

//   timeOut.addEventListener('change', function(evt) {
//     var selectedTimeOut = evt.target.value;
//     setTime(selectedTimeOut, timeIn);
//   });
// };

// changeTimeFilter();


// // Работа с секцией "Кол-во комнат-Количество мест"

// var roomsList = adForm.querySelector('#room_number');
// var capacityList = adForm.querySelector('#capacity');

// // Получить количество мест
// var getNumberOfSeats = function (rooms) {
//   if (rooms !== '100') {
//     for (var k = 0; k < capacityList.options.length; k++) {
//       if (capacityList.options[k].value > rooms) {
//         capacityList.options[k].disabled = true;
//       } else if (capacityList.options[k].value === '0') {
//         capacityList.options[k].disabled = true;
//       } else {
//         capacityList.options[k].disabled = false;
//       }
//     }
//   } else {
//     for (var i = 0; i < capacityList.options.length; i++) {
//       if (capacityList.options[i].value > 0) {
//         capacityList.options[i].disabled = true;
//       } else {
//         capacityList.options[i].disabled = false;
//         capacityList.options[i].selected = true;
//       }
//     }
//   }
// };

// // Установить значение фильтра по-умолчанию
// var disableCapacityItems = function () {
//   for (var i = 0; i < capacityList.options.length; i++) {
//     if (!capacityList.options[i].selected) {
//       capacityList.options[i].disabled = true;
//     }
//   }
// };


// // Состояние фильтра по-умолчанию
// var setDefaultStateNumberOfSeats = function () {
//   for (var i = 0; i < roomsList.options.length; i++) {
//     if (roomsList.options[i].selected) {
//       disableCapacityItems();
//     }
//   }
// };

// // Запустить фильтр "Кол-во комнат - Количество мест"
// var changeStateNumberOfSeatsFilter = function () {
//   setDefaultStateNumberOfSeats();

//   roomsList.addEventListener('change', function (evt) {
//     getNumberOfSeats(evt.target.value);
//   });
// };

// changeStateNumberOfSeatsFilter();

// var getNumberOfGuests = function () {

// };

// var getNumberOfRooms = function () {

// };


// // Валидация формы

// //  Валидация заголовка объявления/Заголовок объявления
// var adTitleInput = adForm.querySelector('#title');

// var setErrorStatus = function (input) {
//   input.style.borderColor = 'red';
// };

// var setSuccessStatus = function (input) {
//   input.style.borderColor = 'green';
// };

// adTitleInput.addEventListener('invalid', function (evt) {
//   if (adTitleInput.validity.tooShort) {
//     adTitleInput.setCustomValidity('Длина объявления должна быть не меньше 30-ти символов');
//     setErrorStatus(evt.target);
//   } else if (adTitleInput.validity.tooLong) {
//     adTitleInput.setCustomValidity('Длина заголовка не должна превышать 100 символов');
//     setErrorStatus(evt.target);
//   } else {
//     adTitleInput.setCustomValidity('');
//     setSuccessStatus(evt.target);
//   }
// });

// // Валидация цены - price
// var adPriceInput = adForm.querySelector('#price');

// adPriceInput.addEventListener('invalid', function (evt) {
//   var minPrice = adPriceInput.min;

//   if (adPriceInput.validity.valueMissing) {
//     adPriceInput.setCustomValidity('Обязательное поле для заполнения');
//     setErrorStatus(evt.target);
//   } else if (adPriceInput.value.length < minPrice) {
//     adPriceInput.setCustomValidity('Цена должна быть не ниже ' + minPrice);
//     setErrorStatus(evt.target);
//   } else {
//     adPriceInput.setCustomValidity('');
//     setSuccessStatus(evt.target);
//   }
// });



// console.log(adPriceInput.min);

// var price = adPriceInput.min;

// adPriceInput.addEventListener('change', function (e) {
//   console.log(price);
// });
// adForm.addEventListener('invalid', function(e) {
//   console.log(adPriceInput.min);
// });

// adPriceInput.addEventListener('change', function(e) {
//   console.log(adPriceInput.min);
// });


// // Записать координаты метки в поле адреса
// // Изучить шаблоны
// // 1200x704

// var MAIN_PIN_WIDTH = 30;
// var MAIN_PIN_HEIGHT = 80;

//   var coordinateX = mapPinMain.style.left;
//   var coordinateY = mapPinMain.style.top;

// // Получить координату метки
// var getCoordinate = function (coordinate) {
//   var newCoord = '';

//   for (var i = 0; i < coordinate.length; i++) {
//     if (coordinate[i] !== 'p') {
//       newCoord += coordinate[i];
//     } else {
//       break;
//     }
//   }

//   return newCoord;
// };

// // console.log('Координата X: ' + getCoordinate(mapPinMain.style.left));
// // console.log('Координата Y: ' + getCoordinate(mapPinMain.style.top));


// var addressInput = adForm.querySelector('input[name="address"]');
// addressInput.value = getCoordinate(mapPinMain.style.left) + ', ' + getCoordinate(mapPinMain.style.top);

// renderCardAd(data);

