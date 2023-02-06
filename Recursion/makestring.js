let ans = [];
function makeStrings(n, s) {
  //Base Case
  if (n === 0) {
    ans.push(s);
    return;
  }
  if (s[s.length - 1] === "1") {
    makeStrings(n - 1, s + "0");
  } else {
    makeStrings(n - 1, s + "1");
    makeStrings(n - 1, s + "0");
  }
}

makeStrings(2, "");
console.log(ans);
