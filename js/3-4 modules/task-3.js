// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.

function caclculateAverage() {
    const newArr = Array.from(arguments);

    for (let i = 0; i < newArr.length; i++) {
        if (typeof newArr[i] !== "number") {
            return "Аргументи мають бути числа"
        }
    }

    let total = 0;
    for (const i of newArr) {
        total += i;
    }
    return total / newArr.length;
}


