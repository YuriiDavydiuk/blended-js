// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".

// const logins = ["Peter", "John", "Igor", "Sasha"];

function checkLogin(array) {
  let userName = prompt('Enter a name');
  let newAlert;
  for (const lalala of array) {
    if (lalala === userName) {
      newAlert = `Welcome, ${userName}`;
    } else {
      newAlert = `User not found`;
    }
  }
  return alert(newAlert);
}
checkLogin(['Peter', 'John', 'Igor', 'Sasha']);
