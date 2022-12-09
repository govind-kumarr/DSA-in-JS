function findRotation(arr) {
  let low = 0,
    high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] < arr[mid - 1] && arr[mid] < arr[mid + 1]) return arr[mid];
    else if (arr[low] < arr[mid] && arr[mid] > arr[high]) low = mid + 1;
    else if (arr[mid] < arr[high]) high = mid - 1;
  }
  return -1;
}

function reverseArr(arr, start, end) {
  for (let i = start, j = 0; i < (start + end) / 2; i++, j++) {
    let temp = arr[i];
    arr[i] = arr[end - j];
    arr[end - j] = temp;
  }
  return arr;
}

let ans = findRotation([4, 5, 6, 7, 0, 1, 2]);
console.log(ans);
