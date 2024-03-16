const numbers = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
//1
//Знайти суму та кількість позитивних елементів.
const statsPositive = numbers.reduce((acc, number) => {
    if (number > 0) {
        acc.sumPositive += number;
        acc.positiveCount += 1;
    }
    return acc;
}, { sumPositive: 0, positiveCount: 0 })
console.log(statsPositive.sumPositive, statsPositive.positiveCount);

//2
//Знайти мінімальний елемент масиву та його порядковий номер.
const result = numbers.reduce((acc, number, index) => {
    if (number < acc.minNumber) {
        return { minNumber: number, minNumberIndex: index };
    }
    return acc;
}, { minNumber: numbers[0], minNumberIndex: 0 });
console.log(result.minNumber, result.minNumberIndex);

//3
//Знайти максимальний елемент масиву та його порядковий номер.
const res = numbers.reduce((acc, number, index) => {
    if (number > acc.maxNumber) {
        return { maxNumber: number, maxNumberIndex: index };
    }
    return acc;
}, { maxNumber: numbers[0], maxNumberIndex: 0 });
console.log(res.maxNumber, res.maxNumberIndex);

//4
//Визначити кількість негативних елементів.
const negativeNumbersCount = numbers.filter(elem => elem < 0).length;
console.log(negativeNumbersCount);

//5
//Знайти кількість непарних позитивних елементів.
const positiveOddCount = numbers.filter(number => number > 0 && number % 2).length;
console.log(positiveOddCount);

//6
//Знайти кількість парних позитивних елементів.
const positiveEvenCount = numbers.filter(number => number > 0 && !(number % 2)).length;
console.log(positiveEvenCount);

//7
//Знайти суму парних позитивних елементів.
const positiveEvenSum = numbers.reduce((acc, number) => number > 0 && !(number % 2) ? acc + number : acc, 0);
console.log(positiveEvenSum);

//8
//Знайти суму непарних позитивних елементів.
const positiveOddSum = numbers.reduce((acc, number) => number > 0 && number % 2 ? acc + number : acc, 0);
console.log(positiveOddSum);

//9
//Знайти добуток позитивних елементів.
const positiveProduct = numbers.reduce((acc, number) => number > 0 ? acc * number : acc, 1);
console.log(positiveProduct);

//10
//Знайти найбільший серед елементів масиву, остальні обнулити.
const maxValueStat = numbers.reduce((acc, number, index) => {
    if (number > acc.maxNumber) {
        acc.maxNumber = number;
        acc.maxNumberIndex = index;
    }
    return acc;
}, { maxNumber: numbers[0], maxNumberIndex: 0 });

const resArray = numbers.map((elem, index) => index === maxValueStat.maxNumberIndex ? elem : 0);
console.log(resArray);

