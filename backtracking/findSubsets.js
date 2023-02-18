let ans = [];

let arr = ["a", "b"];
function findSubset(i, out) {
  if (i >= arr.length) {
    ans.push(out);
    return;
  }
  //*include
  findSubset(i + 1, [...out, arr[i]]);
  //!exclude
  findSubset(i + 1, out);
}

findSubset(0, []);
console.log(ans);
console.log(ans.length);
