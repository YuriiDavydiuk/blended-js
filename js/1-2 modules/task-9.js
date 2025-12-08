// Напишіть функцію isAdult(age), яка  приймає число - вік користувача і повертає true,
// якщо параметр age більше чи дорівнює 18.
// В іншому випадку вона запитує підтвердження через confirm
// і повертає його результат (true/false).

function isAdult() {
  const age = Number(prompt('Введіть Ваш вік'));

  if (age >= 18) {
    return true;
  }

  return confirm('Підтвердіть Ваш вік');
}
