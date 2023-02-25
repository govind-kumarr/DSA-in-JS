// console.log('First');
// setTimeout(() => console.log('Second'), 0);
// console.log('Third');

console.log("First");
function secondCall() {
  console.log("Second");
}
setTimeout(secondCall, 2000);
setTimeout(() => console.log("Third"), 0);
console.log("Third");
