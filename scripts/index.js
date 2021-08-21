$(document).ready(function () {
  let currentFloor = 2; // текущий этаж
  const floorPath = $('.home-image path'); // отдельный этаж в svg
  const counterUp = $('.counter__button_type_up'); // кнопка увеличения этажа
  const counterDown = $('.counter__button_type_down'); // кнопка уменьшения этажа
  const popup = $('.popup'); // модальное окно
  const popupCloseButton = $('.popup__close-button'); // кнопка закрытия модального окна
  const viewFlatsButton = $('.view-flats'); // кнопка показа плана этажа

  // Изменение номера этажа при наведении мышью
  floorPath.on('mouseover', function () {
    floorPath.removeClass('current-floor'); // удалить активный класс у этажа
    currentFloor = $(this).attr('data-floor'); // получить значения текущего этажа
    $('.counter__floor').text(currentFloor); // записать значения этажа в счетчик
  });

  // // Открытие/закрытие модального окна
  function togglePopup() {
    popup.toggleClass('popup_opened');
  };

  // Открытие модального окна при клике на этаж
  floorPath.on('click', togglePopup);
  
  // Закрытие модального окна при клике на крестик
  popupCloseButton.on('click', togglePopup);

  // Открытие модального окна при клике на кнопку показа плана этажа
  viewFlatsButton.on('click', togglePopup);

  // Изменение и подсветка номера этажа по кнопке вверх
  counterUp.on('click', function () { // отследить клик по кнопке вверх
    if (currentFloor < 18) { // проверить значение этажа, max 18
      currentFloor++; // прибавить один этаж
      asCurrentFloor = currentFloor.toLocaleString('en-US', 
      { minimumIntegerDigits: 2, useGrouping: false }); // форматировать переменной с этажом, 01 вместо 1
      $('.counter__floor').text(asCurrentFloor); // записать значения этажа в счетчик
      floorPath.removeClass('current-floor'); // удалить активный класс у этажа
      $(`[data-floor=${asCurrentFloor}]`).toggleClass('current-floor'); // переключение подсветки текущего этажа
    };
  });

  // Изменение и подсветка номера этажа по кнопке вниз
  counterDown.on('click', function () { // отследить клик по кнопке вниз
    if (currentFloor > 2) { // проверить значение этажа, min 2
      currentFloor--; // вычесть один этаж
      asCurrentFloor = currentFloor.toLocaleString('en-US',
      { minimumIntegerDigits: 2, useGrouping: false }); // форматировать переменной с этажом, 01 вместо 1
      $('.counter__floor').text(asCurrentFloor); // записать значения этажа в счетчик
      floorPath.removeClass('current-floor'); // удалить активный класс у этажа
      $(`[data-floor=${asCurrentFloor}]`).toggleClass('current-floor'); // переключение подсветки текущего этажа
    };
  });
});