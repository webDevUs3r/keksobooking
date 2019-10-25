'use strict';

window.backend = (function () {
  return {
    load: function (onLoad, onError) {
      var URL = 'https://js.dump.academy/keksobooking/data';

      // Создаём запрос
      var xhr = new XMLHttpRequest();
      // Указывает пит данных
      xhr.responseType = 'json';
      // Открываем соединение
      xhr.open('GET', URL);

      // Обрабатываем ответ
      xhr.addEventListener('load', function () {
        var error;

        switch (xhr.status) {
          case 200:
            // Если данные загружены успешно, то отправляем данные в функцию
            onLoad(xhr.response);
            break;
          case 400:
            error = 'Неверный запрос';
            break;
          case 401:
            error = 'Пользователь не авторизован';
            break;
          case 404:
            error = 'Ничего не найдено';
            break;
          default:
            error = 'Статус ответа: ' + xhr.status + ' ' + xhr.statusText;
        }

        if (error) {
          onError(error);
        }
      });

      // Обрабатываем неуспешный ответ
      xhr.addEventListener('error', function () {
        onError('Произошла ошибка соединения');
      });

      // Обрабатываем долгий ответ
      xhr.addEventListener('timeout', function () {
        onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
      });

      // Отправляем запрос
      xhr.send();
    },

    save: function (data, onLoad, onError) {
      var URL = 'https://js.dump.academy/keksobooking';

      // Создаём запрос
      var xhr = new XMLHttpRequest();
      // Указывает тип данных
      xhr.responseType = 'json';

      // Обрабатываем ответ
      xhr.addEventListener('load', function () {
        var error;

        switch (xhr.status) {
          case 200:
            // Если данные отправлены успешно, то закрываем окно персонажа
            onLoad();
            break;
          case 400:
            error = 'Неверный запрос';
            break;
          case 401:
            error = 'Пользователь не авторизован';
            break;
          case 404:
            error = 'Ничего не найдено';
            break;
          default:
            error = 'Статус ответа: ' + xhr.status + ' ' + xhr.statusText;
        }

        if (error) {
          onError(error);
        }
      });

      // Обрабатываем неуспешный ответ
      xhr.addEventListener('error', function () {
        onError('Произошла ошибка соединения');
      });

      // Обрабатываем долгий ответ
      xhr.addEventListener('timeout', function () {
        onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
      });

      xhr.open('POST', URL);
      xhr.send(data);
    }
  };
})();
