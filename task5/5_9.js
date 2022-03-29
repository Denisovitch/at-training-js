//9. Реализовать цикл, который выводит в консоль простые числа
let endOfNumberRange = 100;

function isPrime(n) {
  // если n > 1
  if (n > 1) {
    // в цикле перебираем числа от 2 до n - 1
    for (i = 2; i < n; i++)
      if (n % i == 0)
        // если n делится без остатка на i - возвращаем false (число не простое)
        return false;
    // если программа дошла до данного оператора, то возвращаем true (число простое) - проверка пройдена
    return true;
  } // иначе возвращаем false (число не простое)
  else return false;
}

for (let i = 2; i <= 100; i++) {
  if (isPrime(i)) console.log(`This number ${i} - is prime`);
}