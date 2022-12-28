class Node {
  constructor(value) {
    this.value = value;
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
      if (value === cur.value) return -1;
      if (value < cur.value) {
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
      if (value < cur.value) cur = cur.left;
      else if (value > cur.value) cur = cur.right;
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
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return data;
  }
}

let tree = new BinarySearchTree();

tree.Insert(40);
tree.Insert(31);
tree.Insert(50);
tree.Insert(52);
tree.Insert(34);
tree.Insert(20);
tree.Insert(51);

console.log(tree.Find(52));
console.log(tree.BFS());
