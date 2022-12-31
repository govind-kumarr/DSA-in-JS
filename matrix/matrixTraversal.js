let mat = new Array(5).fill(new Array(5).fill(0));
let n = mat.length;
function traverse(i) {
  if (i > n - 1) return;

  let bag = "";

  function print(i, j) {
    if (j >= n) return "";
    return mat[i][j] + " " + print(i, j + 1);
  }

  bag = print(i, 0);
  console.log(bag);

  traverse(i + 1);
}
traverse(0);
