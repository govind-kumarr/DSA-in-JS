function BFS(root) {
  if (!root) return null;

  let mat = [],
    queue = [],
    data = [],
    cur = root;

  queue.push(cur);

  while (queue.length) {
    mat.push(cur);
    data.push(mat);
    if (cur.left) queue.push(cur.left);
    if (cur.right) queue.push(cur.right);
    queue.shift();
  }
}
