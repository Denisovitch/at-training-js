// -Создать объект car, добавить к нему свойство color со значением 'черный'
let car = {};

car.color = "черный";
console.log("🚀 car", car);

// -Изменить свойство color объекта car на 'зеленый'
car.color = "зеленый";
console.log("🚀 car", car);

// -В объект car добавить свойство power, которое является функцией и выводит в консоль мощность двигателя
car.power = (horse = "empty") => {
  console.log(`engine power is: ${horse} hp`);
};

car.power(100);
