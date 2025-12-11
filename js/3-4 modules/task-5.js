// Напишіть функцію findSmallestNumber(numbers),
// яка шукає найменше число в масиві.
// Додайте перевірку, що функція отримує саме масив, і
// якщо функція отримує масив - поверніть з функції найменше число,
// в іншому випадку - поверніть 'Sory, it is not an array!'.

// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];


function findSmallestNumber(numbers) {
    if (!Array.isArray(numbers)) {
        return 'Sory, it is not an array!';
    }

    let smallestNumber = numbers[0];
    for (const num of numbers) {
        if (smallestNumber > num) {
            smallestNumber = num;
        }
    }
    return smallestNumber;
}

 const numbers = [255, 51, 35, 56, 12, 24, 1, 80, 3];
 console.log(findSmallestNumber(numbers));