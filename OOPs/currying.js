// function promise() {
//   return Promise.reject();
// }

// promise()
//   .then(() => console.log("then 1"))
//   .catch(() => console.log("catch 1"))
//   .then(() => console.log("then 2"))
//   .catch(() => console.log("catch 2"))
//   .then(() => console.log("then 3"));

function sum(a) {
  function sum2(b) {
    return a + b;
  }
  return sum2;
}

let ans = sum(10)(20);
console.log(ans);
