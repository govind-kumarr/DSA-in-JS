let ans = [];

let arr = ["a", "b", "c", "d", "e"];
function findSubset(i, out) {
  if (i > arr.length - 1) {
    ans.push(out);
    return;
  }
  //*include
  let newOut = out.slice(0);
  newOut.push(arr[i]);
  findSubset(i + 1, newOut);
  //!exclude
  findSubset(i + 1, out);
}

findSubset(0, []);
console.log(ans.length);
console.log(isNaN("1"));
console.log("a".toUpperCase())
