// Напишіть функцію findLongestWord(string), яка
// приймає довільний рядок, що складається лише зі слів, розділених
// пробілами (параметр string), і повертатиме найдовше слово у реченні.

// Скористайтесь цим прикладом виклику функції для перевірки її роботи:
// console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'

function findLongestWord(string) {
  const lalala = string.split(' ');
  let tototo = lalala[0].length;

  for (let i = 0; i < lalala.length; i++) {
    if (lalala[i].length > tototo) {
      tototo = lalala[i];
    }
  }
  return tototo;
}
console.log(findLongestWord('London is the capital of Great Britain'));
