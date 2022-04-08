//10. Реализовать цикл, который выводит в консоль нечетные числа
let numbersForEvenOdd = 11; //до которого числа будем перебирать
console.log(
  `find odd number from ${numbersForEvenOdd} to ${-numbersForEvenOdd}`
);

for (let i = numbersForEvenOdd; i >= -numbersForEvenOdd; i--) {
  if (i % 2) {
    console.log(`This number ${i} is odd`);
  }
}
