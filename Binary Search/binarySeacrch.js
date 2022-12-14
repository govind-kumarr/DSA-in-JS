let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function binarySearch(arr, k) {
  let low = 0,
    high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);

    if (arr[mid] === k) return mid;
    else if (arr[mid] < k) low = mid + 1;
    else high = mid - 1;
  }
  return low;
}

console.log(binarySearch([1, 3], 0));
