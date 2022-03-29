//3. Дан массив имен ваших знакомых, добавить к каждому элементу массива слова hello
let arrOfNames = ["Denis", "Kate", "Alex", "John"];
let addWord = "hello";
let newHelloArrayOfNames = [];

newHelloArrayOfNames = arrOfNames.map((item) => addWord + " " + item);
console.log("🚀 initial array is", arrOfNames);
console.log("🚀 array whis add 'hello' word is", newHelloArrayOfNames);
