let mat = [
  [1, 0, 0, 0],
  [1, 1, 0, 1],
  [1, 1, 0, 0],
  [0, 1, 1, 1],
];

function ratInMaze(mat, m, n) {
  let visited = new Array(m).fill(new Array(n).fill(0));
  let ans = [];
  function isSafe(x, y) {
    if (
      x >= 0 &&
      x <= m &&
      y >= 0 &&
      y <= n &&
      visited[x][y] == 0 &&
      mat[x][y] == 1
    ) {
      return true;
    } else return false;
  }
  function solve(m, n, srcx, srcy, path) {
    //!Base Case if you go out of matrix then return
    if (srcx > m || srcy > n) return;

    //!If you reached destination store the ans and return;
    if (srcx > m && srcy == n) {
      ans.push(path);
      return;
    }

    //!Mark the visited room
    visited[srcx][srcy] = 1;

    let newx, newy;
    //!Move Up
    newx = srcx - 1;
    newy = srcy;
    if (isSafe(newx, newy)) {
      path.push("U");
      solve(m, n, newx, newy, path);
      path.pop();
    }
    //!Move Down
    newx = srcx + 1;
    newy = srcy;
    if (isSafe(newx, newy)) {
      path.push("D");
      solve(m, n, newx, newy, path);
      path.pop();
    }
    //!Move Right
    newx = srcx;
    newy = srcy + 1;
    if (isSafe(newx, newy)) {
      path.push("R");
      solve(m, n, newx, newy, path);
      path.pop();
    }
    //!Move Left
    newx = srcx;
    newy = srcy - 1;
    if (isSafe(newx, newy)) {
      path.push("L");
      solve(m, n, newx, newy, path);
      path.pop();
    }

    visited[srcx][srcy] = 0;
  }
}
