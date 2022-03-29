//5. Отсортировать массив [1,6,7,8,3,4,5,6] по убыванию
let arrayForSort = [1, 6, 7, 8, 3, 4, 5, 6];

let resOFSort = arrayForSort.sort().reverse(); //simply :-)
let resOFSortV2 = arrayForSort.sort((a, b) => a - b);

console.log("🚀 initial array is", arrayForSort);
console.log("🚀 resOFSort", resOFSort);
console.log("🚀 resOFSortV2", resOFSortV2);