function kthSmallest(arr, k) {
  let heap = [];
  let j = 0;

  while (j < arr.length) {
    if (heap.length === 0) heap.push(arr[j]);

    if (arr[j] > heap[heap.length - 1]) heap.push(arr[j]);
    else if (arr[j] < heap[0]) heap.unshift(arr[j]);

    if (heap.length > k) {
      heap.pop();
    }
    j++;
  }
  heap.sort((a, b) => a - b);
  return heap[heap.length - 1];
}

let ans = kthSmallest([3, 2, 3, 2, 4, 5, 5, 6], 3);

console.log(ans);
