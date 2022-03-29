//2. Дан массив производителей автомобилей, преобразовать массив в строку и обратно в массив
let arrOfCarsMakers = ["Fiat", "BMW", "Mercedes", "Honda", "Alfa Romeo"];

let arrToString = arrOfCarsMakers.toString().replace(/,/g, ", "); //array to string and replace "," without "space" on "," whit "space"
let stringOfCars = arrToString.split(", "); //string to array whit separator (del space after ",")

console.log("🚀 array of Cars Makers -", arrOfCarsMakers);
console.log("🚀 array of Cars Maker To String -", arrToString);
console.log("🚀 string of Cars Maker To array -", stringOfCars);