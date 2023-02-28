// function promise() {
//   return Promise.reject();
// }

// promise()
//   .then(() => console.log("then 1"))
//   .catch(() => console.log("catch 1"))
//   .then(() => console.log("then 2"))
//   .catch(() => console.log("catch 2"))
//   .then(() => console.log("then 3"));

// function sum(a) {
//   return function (b) {
//     return a + b;
//   };
// }

// let ans = sum(10)(20);
// console.log(ans);

// function Fox(color) {
//   this.color = color;
// }

// Fox.prototype.speak = function () {
//   console.log(`I am ${this.color}`);
// };

// var myFox = new Fox("blue");
// setTimeout(myFox.speak, 1000);

// (function foo() {
//   console.log("foo");
// })();

// bar();
// baz();
// foo();

// function bar() {
//   console.log("bar");
// }
// const baz = function () {
//   console.log("baz");
// };

class Fox {
  constructor(color) {
    this.color = color;
  }
  speak() {
    console.log(`I am ${this.color}`);
  }
}

var myFox = new Fox("blue");
setTimeout(myFox.speak, 1000);
