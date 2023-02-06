function putTile(n) {
  //base case
  if (n <= 3) return 1;

  return 2 + putTile(n - 4);
}

function putTile2(n) {
  if (n <= 3) return 1;

  return putTile2(n - 1) + putTile(n - 4);
}

let ans = putTile(12);
let ans2 = putTile(12);
console.log(ans);
console.log(ans2);
