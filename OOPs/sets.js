// const numbers = [1,2,3]
/*
  !difference between set and array
  *1) no index based access like array
  *2) duplicated not allowed
  *3) Order not guaranteed

  !methods on set
  add method
  has
*/

const numbers = new Set([1, 2, 2, 3]);

numbers.add(4);
numbers.add(5);
numbers.add([7, 8]);

if (numbers.has(5)) console.log(`5 is present in set`);

for (let number of numbers) console.log(number);

const myArray = [1, 2, 2, 3, 3, 4, 4, 5];
const uniqueElements = new Set(myArray);

let len = 0;
for (let elem of uniqueElements) len++;

for (let elem of uniqueElements) console.log(elem);
console.log(len);

// console.log(numbers);
