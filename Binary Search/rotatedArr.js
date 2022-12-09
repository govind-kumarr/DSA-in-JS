let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr = arr.sort((a, b) => b - a);
console.log(arr);

function rotatedSearch(arr, k) {
  let low = 0,
    high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);

    if (arr[mid] === k) return mid;
    else if (arr[mid] < k) high = mid - 1;
    else low = mid + 1;
  }
  return low;
}

let ans = rotatedSearch(arr,2);
console.log(ans);