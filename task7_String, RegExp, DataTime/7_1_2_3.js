// Дана строка 'ahb acb aeb aeeb adcb axeb'. Напишите регулярное выражение,
//которое найдет строки ahb, acb, aeb по шаблону: буква 'a', любой символ, буква 'b'

let str1 = "ahb acb aeb aeeb adcb axeb";
let regexp1 = /a.b/gs;

// Дана строка '2+3 223 2223'. Напишите регулярку, которая найдет строку 2+3, не захватив остальные
console.log(str1.match(regexp1));

let str2 = "2+3 223 2223";
//let regexp2 = /2\D3/g; version_2
let regexp2 = /2\+3/g;

console.log(str2.match(regexp2));

// Получить день, месяц и год текущей даты и по отдельности вывести в консоль
let now = new Date();

console.log(`The day is ${now.getDate()}`);
console.log(`The month is ${now.getMonth() + 1}`);
console.log(`The year is ${now.getFullYear()}`);
//a bit of beauty)
let arrOfDaysW = [
  " Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  " Saturday",
];
let arrOfMonths = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
console.log(
  `Today is the ${arrOfDaysW[now.getDay()]},  ${now.getDate()} of ${
    arrOfMonths[now.getMonth()]
  }, year ${now.getFullYear()}`
);
