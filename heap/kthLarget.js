function kthLargest(arr, k) {
  let minHeap = [];
  let j = 0;

  while (j < arr.length) {
    if (minHeap.length == 0) minHeap.push(arr[j]);

    if (arr[j] < minHeap[minHeap.length - 1]) minHeap.push(arr[j]);
    else if (arr[j] > minHeap[0]) minHeap.unshift(arr[j]);

    if (minHeap.length > k) minHeap.pop();
    j++;
  }
  minHeap.sort((a, b) => a - b);
  return minHeap[0];
}

let ans = kthLargest([3, 2, 1, 5, 6, 4], 2);
console.log(ans);
