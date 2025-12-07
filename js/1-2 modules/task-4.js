// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'):
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples

const minute = prompt('Введіть кількість хвилин');

function convertMinutes(minute) {
  const hour = Math.floor(minute / 60);
  const min = minute % 60;

  return `${String(hour).padStart(2, '0')} : ${String(min).padStart(2, '0')}`;
}

console.log(convertMinutes(minute));
