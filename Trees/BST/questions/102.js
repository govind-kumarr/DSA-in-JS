function BFS(root) {
  if (!root) return null;

  let mat = [],
    queue = [],
    data = [],
    cur = root;

  queue.push(cur);
  queue.push(null);

  while (queue.length) {
    cur = queue.shift();
    data.push(cur.val);
    if (cur === null) {
      mat.push(data);
      if (queue.length) queue.push(null);
      data = [];
    } else {
      if (cur.left) queue.push(cur.left);
      if (cur.right) queue.push(cur.right);
    }
  }
}
