var solveSudoku = function (board) {
  function solve(i, j) {
    //Base Case
    if (i == 9) return true;

    //if reached last col move to the next row
    if (j == 9) return solve(i + 1, 0);

    //if number is already present skip the call
    if (board[i][j] != ".") return solve(i, j + 1);

    for (let num = 1; num <= 9; num++) {
      if (canPlace(i, j, num)) {
        board[i][j] = num;
        let ans = solve(i, j + 1);
        if (ans) return true;
      }
    }
    // board[i][j] = ".";
    return false;
  }

  solve(0, 0);

  function canPlace(row, col, num) {
    //checking for row and col

    for (let j = 0; j < 9; j++) {
      if (board[j][col] == num || board[row][j] == num) return false;
    }

    //for the subgrid
    //calcuating starting point of the subgrid(row)
    // console.log("called for",row,col)
    let sx = row / 3;
    sx = Math.floor(sx);
    sx = sx * 3;
    //calcuating starting point of the subgrid(col)
    let sy = col / 3;
    sy = Math.floor(sy);
    sy = sy * 3;

    
    for (let i = sx; i < sx + 3; i++) {
      for (let j = sy; j < sy + 3; j++) {
        if (board[i][j] == num) return false;
      }
    }
    //if number is not present either in row col and subgrid the return true
    return true;
  }
};
