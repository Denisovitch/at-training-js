// -Напишите функцию, которая определяет является ли число простым или нет
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
//console.log(isPrime(3)) //must be true
//console.log(isPrime(4)) //must be false

// let arrForPrimeCheck = [1,5,7,3,5,11,34,12,37,95,91, 101]

// for(let i = 0; i < arrForPrimeCheck.length; i++){
//   if(isPrime(arrForPrimeCheck[i])){
//     console.log(arrForPrimeCheck[i] + " is prime")
//   } else {
//     console.log(arrForPrimeCheck[i] + " is not prime")
//   }
// }