//5. Отсортировать массив [1,6,7,8,3,4,5,6] по убыванию
let arrayForSort = [1, 6, 7, 8, 3, 4, 5, 6];
console.log("🚀 initial array is", arrayForSort);

console.log("🚀 resOFSortV1", arrayForSort.sort().reverse());
console.log("🚀 resOFSortV2", arrayForSort.sort((a, b) => b - a));