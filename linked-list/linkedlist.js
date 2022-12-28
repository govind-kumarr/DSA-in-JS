class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this.head;
  }
  pop() {
    let current = this.head;
    let temp = current.next;
    while (temp.next) {
      current = temp;
      temp = temp.next;
    }
    current.next = null;
    this.tail = current;
    this.length--;
  }
  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }

  shift() {
    let newHead = this.head.next;
    this.head = newHead;
  }
  unishift(val) {
    let newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
  }

  get(i) {
    let ind = 0;
    let current = this.head;
    while (ind < i) {
      current = current.next;
      ind++;
    }
    return current;
  }
  set(i, val) {
    if (!i || !val) {
      throw Error;
      return;
    }
    let current = this.get(i);
    current.val = val;
  }
  insert(i, val) {
    let current = this.head;
    let prev = current;
    let ind = 0;
    while (ind < i) {
      prev = current;
      current = current.next;
      ind++;
    }
    let newNode = new Node(val);
    newNode.next = current;
    prev.next = newNode;
    this.length++;
  }
  delete(i) {
    let current = this.head;
    let prev = current;
    let ind = 0;
    while (ind < i) {
      prev = current;
      current = current.next;
      ind++;
    }
    prev.next = current.next;
    current.next = null;
  }
}

let newList = new LinkedList();
newList.push(1);
newList.push(2);
newList.push(3);
newList.push(4);
newList.push(5);
newList.push(6);
newList.push(7);

// newList.unishift(0);
// newList.shift();
// newList.traverse();
// console.log(newList.get(5));
// newList.set(5, -5);
// console.log(newList.get(5));
// newList.insert(5, -5);
// newList.traverse();
// newList.delete(5);
// newList.traverse();

let head = newList.head;

function reverse(list) {
  if (!list || !list.next) return list;
}

reverse(head);
var swapNodes = function (head, k) {
  let len = 0;
  let current = head;
  let val1, val2;
  while (current) {
    if (len == k - 1) val1 = current.val;
    len++;
    current = current.next;
  }
  let ind = 0,
    i = len - k;
  current = head;
  while (ind < i) {
    ind++;
    current = current.next;
  }
  return head;
};

let list1 = { val: 1, next: { val: 4, next: { val: 6, next: null } } };
let list2 = { val: 3, next: { val: 5, next: { val: 7, next: null } } };

function merge(list1, list2) {
  let cur1 = list1,
    cur2 = list2,
    result = { val: 0, next: null },
    dummyHead = result;

  //**Running a loop to merge */
  while (cur1 && cur2) {
    if (cur1.val <= cur2.val) {
      let temp = cur1.next;
      cur1.next = null;
      dummyHead.next = cur1;
      cur1 = temp;
    } else {
      let temp = cur2.next;
      cur2.next = null;
      dummyHead.next = cur2;
      cur2 = temp;
    }
    dummyHead = dummyHead.next;
  }

  if (cur1) dummyHead.next = cur1;
  else if (cur2) dummyHead.next = cur2;

  return result.next;
}

console.log(merge(list1, list2));
