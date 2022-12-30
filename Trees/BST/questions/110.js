function isBalanced(root) {
  if (!root) return true;

  let cur = root;
  function left(node) {
    if (!node) return true;
    if (node.val > node.left.val) return true && left(node.left);
  }
  function right(node) {
    if (!node) return true;
    return node.val < node.right.val && right(node.right);
  }
  return left(cur.left) && right(cur.right);
}
