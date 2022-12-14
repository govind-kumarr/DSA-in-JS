function removeDuplicates(list) {
  let head = list;
  if (!head) return head;

  let prev = head;
  let next = prev.next;
  while (prev.next != null) {
    console.log(prev, next);
    if (prev.val == next.val) {
      let newNext = next.next;
      prev.next = newNext;
    } else {
      prev = prev.next;
      next = next.next;
    }
  }
  return head;
}
