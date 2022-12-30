//!Approach ---> I will maintain a condition and we use that to determine wheter to enter in noraml way or in reverse way;

function zigzagLevelOrder(root) {
  if (!root) return [];

  let mat = [],
    node = root,
    leftToRight = true,
    temp,
    queue = [];

  queue.push(node);
  while (queue.length) {
    let size = queue.length;
    temp = new Array(size);

    //Level Processing
    for (let i = 0; i < size; i++) {
      node = queue.shift();
      let index = leftToRight ? i : size - 1 - i;
      temp[index] = node.val;

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    mat.push(temp);
  }
  return mat;
}
