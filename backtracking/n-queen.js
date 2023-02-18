
function solveNQueens(n) {
  let output = [];
  let mat = [];
  for (let i = 0; i < n; i++) {
    let row = [];
    for (let j = 0; j <= n; j++) {
      row.push(0);
    }
    mat.push(row);
  }
  solve(0);
  
  return output;
}

let ans = solveNQueens(4);
console.log(ans);
