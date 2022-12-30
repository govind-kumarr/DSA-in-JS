class Node {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  Insert(value) {
    let newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return this.root;
    }

    let cur = this.root;

    while (true) {
      if (value === cur.val) return -1;
      if (value < cur.val) {
        if (cur.left === null) {
          cur.left = newNode;
          return this.root;
        }
        cur = cur.left;
      } else {
        if (cur.right === null) {
          cur.right = newNode;
          return this.root;
        }
        cur = cur.right;
      }
    }
  }

  Find(value) {
    if (!this.root) return null;

    let cur = this.root,
      found = false;

    while (cur && !found) {
      if (value < cur.val) cur = cur.left;
      else if (value > cur.val) cur = cur.right;
      else found = true;
    }

    if (!found) return -1;

    return cur;
  }

  BFS() {
    if (!this.root) return null;

    let data = [],
      queue = [],
      node = this.root;

    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }

  DFS_Pre() {
    if (!this.root) return null;
    let data = [];

    function traverse(node) {
      data.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);

    return data;
  }

  DFS_post() {
    if (!this.root) return null;

    let data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);

      data.push(node.val);
    }

    traverse(this.root);

    return data;
  }

  DFS_inOrder() {
    if (!this.root) return null;

    let data = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.val);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);

    return data;
  }
  maxDepth(root) {
    if (!root) return 0;

    let queue = [],
      node = root,
      count = 0;

    queue.push(node);
    queue.push(null);

    while (queue.length) {
      node = queue.shift();
      if (node === null) {
        count++;
        if (queue.length) queue.push(null);
      } else {
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
    }

    console.log("Depth is ", count);
    return count;
  }
}

let tree = new BinarySearchTree();
/* 
tree.Insert(40);
tree.Insert(31);
tree.Insert(50);
tree.Insert(52);
tree.Insert(34);
tree.Insert(20);
tree.Insert(51);
*/
tree.Insert(10);
tree.Insert(6);
tree.Insert(15);
tree.Insert(3);
tree.Insert(8);
tree.Insert(20);

// console.log(tree.Find(52));
console.log(tree.BFS(), "BFS");
console.log(tree.DFS_Pre(), "DFS_PRE");
console.log(tree.DFS_post(), "DFS_POST");
console.log(tree.DFS_inOrder(), "DFS_InOrder");

tree.maxDepth(tree.root);

let binaryTree = new BinarySearchTree();
binaryTree.Insert(1);
binaryTree.Insert(0);
binaryTree.Insert(0);
binaryTree.Insert(0);
binaryTree.Insert(1);
binaryTree.Insert(0);
binaryTree.Insert(1);

console.log(binaryTree);

function boundaryTraversal(root) {
  if (!root) return null;

  let leftAns = [],
    rightAns = [],
    leafs = [];
  function traverseLeft(node) {
    if (!node || (!node.left && !node.right)) return;
    leftAns.push(node.val);
    if (node.left) traverseLeft(node.left);
    if (node.right) traverseLeft(node.right);
  }
  function traverseRight(node) {
    if (!node || (!node.left && !node.right)) return;
    rightAns.push(node.val);
    if (node.right) traverseRight(node.right);
    if (node.left) traverseRight(node.right);
  }
  function traverseLeafs(node) {
    if (!node) return;
    if (!node.left && !node.right) leafs.push(node.val);
    if (node.left) traverseLeafs(node.left);
    if (node.right) traverseLeafs(node.right);
  }

  traverseLeft(root.left);
  traverseLeafs(root);
  traverseRight(root.right);
  rightAns = rightAns.reverse();
  let ans = [root.val, ...leftAns, ...leafs, ...rightAns];

  return ans;
}

console.log(boundaryTraversal(tree.root),'Boundary traversal');
