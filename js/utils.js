'use strict';

window.utils = (function () {
  var ESC_KEYCODE = 27;

  return {
    errorHandler: function (errorMessage) {
      var errorTemplate = document.querySelector('#error').content.cloneNode(true);
      var newErrorElement = errorTemplate.querySelector('.error');
      var closeButton = newErrorElement.querySelector('.error__button');

      var removeErrorHandler = function () {
        newErrorElement.classList.add('hidden');
        document.removeEventListener('keydown', removeErrorHandler);
      };

      var errorEscPressHandler = function (evt) {
        window.utils.isEscEvent(evt, removeErrorHandler);
      };

      closeButton.addEventListener('click', removeErrorHandler);

      document.addEventListener('keydown', errorEscPressHandler);

      if (!document.querySelector('newErrorElement')) {
        document.body.appendChild(newErrorElement);
      } else {
        newErrorElement.classList.remove('hidden');
      }
      console.error(errorMessage);
    },

    successHandler: function () {
      var successTemplate = document.querySelector('#success').content.cloneNode(true);
      var newSuccessElement = successTemplate.querySelector('.success');

      if (!document.querySelector('newSuccessElement')) {
        document.body.appendChild(newSuccessElement);
      } else {
        newSuccessElement.classList.remove('hidden');
      }

      var removeSuccessHandler = function () {
        newSuccessElement.classList.add('hidden');
        document.removeEventListener('keydown', successEscPressHandler);
      };

      var successEscPressHandler = function (evt) {
        window.utils.isEscEvent(evt, removeSuccessHandler);
      };

      document.addEventListener('keydown', successEscPressHandler);

    },

    isEscEvent: function (evt, action) {
      if (evt.keyCode === ESC_KEYCODE) {
        action();
      }
    }
  };
})();
