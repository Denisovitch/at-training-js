//7. Написать функцию, которая принимает два параметра - массив и число и выводит индекс элемента массива равный числу
let array = [1, 6, 7, 8, 3, 4, 5, 6];
let number = 6;
console.log("🚀 initial array is", array);
console.log("🚀 search number is", number);

//для поиска только первого/единственного совпадения
function matchSearch(array, number) {
  console.log(
    `Var1 - We found number ${number} in position ${array.findIndex(
      (item) => item == number
    )}`
  );
}

matchSearch(array, number);
//поиск всех совпадений
for (let index = 0; index < array.length; index++) {
  let element;
  if (array[index] == number) {
    console.log(`Var2 - We found number ${number} in position ${index} `);
  }
}
