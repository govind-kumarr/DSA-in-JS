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
}

let newList = new LinkedList();
newList.push(1);
newList.push(1);
newList.push(1);
newList.push(2);
newList.push(2);
newList.push(3);
newList.push(4);
/*
function removeDuplicates(list) {
  let head = list;
  if (!head) return head;

  let prev = head;
  let next = prev.next;
  while (prev.next!=null) {
    console.log(prev,next)
    if(prev.val==next.val){
      let newNext = next.next;
      prev.next = newNext;
    }else{
      prev = prev.next;
      next = next.next;
    }
  }
  return head;
}
*/
// let ans = removeDuplicates(newList);

// console.log(ans);

let head = newList.head;

let current = head;
let prev = current;
let temp;
while (current.next) {
  if (prev.val === current.val) {
    current = current.next;
  } else {
    prev.next = current;
    prev = current;
    current.next;
  }
  console.log(prev.val, "prev");
  console.log(current.val, "current");
}
console.log(newList);
