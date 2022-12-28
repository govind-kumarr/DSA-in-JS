function merge(list1, list2) {
  let cur1 = list1,
    cur2 = list2,
    result = { val: 0, next: null },
    tail;


    //**Running a loop to merge */
  while (cur1 && cur2) {
    if (cur1.val <= cur2.val) {
      let temp = cur1.next;
      cur1.next = null;
      result.next = cur1;
      tail = cur1;
      cur1 = temp;
    } else {
      let temp = cur2.next;
      cur2.next = null;
      result.next = cur2;
      tail = cur2;
      cur2 = temp;
    }
  }
  
  if (cur1) tail.next = cur1;
  else if (cur2) tail.next = cur2;


}
