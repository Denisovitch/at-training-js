//Создать 2 объекта: animal и cat, в объект animal добавить свойство move, объект cat должен наследовать свойство move

let animal = {
  move: true,
};
let cat = {
  myau: true,
  __proto__: animal,
};

console.log("animal is", animal);
console.log("cat is", cat);
console.log("cat.move", cat.move);

//var_b
// let animal = {
//   move: true,
// };
// let cat = {
//   myau: true,
// };

// Object.setPrototypeOf(cat, animal);
// console.log("animal is", animal);
// console.log("cat is", cat);
// console.log("cat.move", cat.move);