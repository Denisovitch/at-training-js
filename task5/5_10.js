//10. Реализовать цикл, который выводит в консоль нечетные числа
let numbersForEvenOdd = 15;
console.log(`find odd number from ${numbersForEvenOdd} to 0`);

while (numbersForEvenOdd != 0) {
  if (numbersForEvenOdd % 2) {
    console.log(`This number ${numbersForEvenOdd} is odd`);
  }
  numbersForEvenOdd--;
}
