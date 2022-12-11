/*
let resultNode = new ListNode(0);
let copyResult = resultNode;
let carry = 0;

while (l1 == undefined || l2 == undefined || carry != 0) {
  if(l1!=undefined){
    sum+=l1.val;
    l1 = l1.next;
  }
  if (l2 != undefined) {
    sum += l2.val;
    l2 = l2.next;
  }
  let newNode = newList;
  copyResult.val = sum%10;
  copyResult.next = new ListNode();
  copy
}
*/
let resNode = new ListNode(),
  val1,
  val2;
let copyNode = resNode;
while (list1 != undefined || list2 != undefined) {
  if (list1 != undefined) val1 = list1.val;
  if (list2 != undefined) val2 = list2.val;

  let newNode = new ListNode();
  if (val1 >= val2) {
    newNode.val = val1;
    copyNode.next = newNode;
    copyNode = newNode;
    // list2 = list2.next;
  } else {
    newNode.val = val1;
    copyNode.next = newNode;
    copyNode = newNode;
    // list1 = list1.next;
  }
}
return resNode.next;