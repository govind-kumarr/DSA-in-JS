function solveNQueens(n) {
  let output = [];
  let mat = [];
  for (let i = 0; i < n; i++) {
    let row = [];
    for (let j = 0; j < n; j++) {
      row.push(0);
    }
    mat.push(row);
  }

  function solve(i) {
    //Base Case
    if (i >= n) {
      output.push([...mat]);
      return;
    }

    //recursive case
    for (let j = 0; j < n; j++) {

      if (canPlace[i][j]) mat[i][j] = 1;

      let success = solve(i + 1);
      if(success) return true;
    }
    return false;
  }

  function canPlace(row, col) {
    let i = row,
      j = col;

    //Checking the column
    x = 0;
    while (x <= i) if (mat[x][j] === 1) return false;

    //Checking the left diagonal
    while (i >= 0 && j >= 0) if (mat[i--][j--] === 1) return false;

    //checking for the right diagonal
    (i = row), (j = col);
    while (i >= 0 && j < n) if (mat[i--][j++] === 1) return false;

    //if theres is no queen eithe in colum or in both diagonal the return true;
    return true;
  }
}

solveNQueens(4);
