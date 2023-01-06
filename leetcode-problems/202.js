function calculateSquare(num) {
  return num
    .toString()
    .split("")
    .reduce((acc, cur) => acc + Math.pow(cur, 2), 0);
}

function transform(str) {
  let num = str.split("").reduce((acc, cur) => acc + +cur, 0);
  return num;
}
console.log(transform(12552031545 + ""));
