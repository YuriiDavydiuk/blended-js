// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"

// const min = Math.floor(Math.random() * (59 - 0) + 0);

function defineQuarter(min) {
  let message;
  if (min >= 45) {
    message = `${min} входить в четверту чверть`;
  } else if (min >= 30) {
    message = `${min} входить в третю чверть`;
  } else if (min >= 15) {
    message = `${min} входить в другу чверть`;
  } else {
    message = `${min} входить в першу чверть`;
  }
  return message;
}
const min = Math.floor(Math.random() * (59 - 0) + 0);
const result = defineQuarter(min);

alert(result);
console.log(result);
