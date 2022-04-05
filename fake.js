/*
const array1 = [1, 2, 3, 4];
const map1 = array1.map((x) => x * 2);
array1.map((x) => x * 2); //this is not permanent
console.log(array1); //so this doesnt work
console.log(array1.map((x) => x * 2)); //works
console.log(map1); //works
*/

const kvArray = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 },
];

const map1 = kvArray.map((items) => items);
let key1 = map1[0].key;

console.log(" ");
console.log(kvArray, "hi");
console.log(map1, "bye");
console.log(kvArray[0].key);
console.log(key1);
console.log(" ");
