$(document).ready(function () {
  let currentFloor = 2; // текущий этаж
  const floorPath = $('.home-image path'); // отдельный этаж в svg
  const counterUp = $('.counter__button_type_up'); // кнопка увеличения этажа
  const counterDown = $('.counter__button_type_down'); // кнопка уменьшения этажа

  // Изменение номера этажа при наведении мышью
  floorPath.on('mouseover', function () {
    floorPath.removeClass('current-floor'); // удалить активный класс у этажа
    currentFloor = $(this).attr('data-floor'); // получить значения текущего этажа
    $('.counter__floor').text(currentFloor); // записать значения этажа в счетчик
  });

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

  counterDown.on('click', function () {
    if (currentFloor > 2) {
      currentFloor--;
      asCurrentFloor = currentFloor.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
      $('.counter__floor').text(asCurrentFloor);
      floorPath.removeClass('current-floor');
      $(`[data-floor=${asCurrentFloor}]`).toggleClass('current-floor');
    };
  });
});