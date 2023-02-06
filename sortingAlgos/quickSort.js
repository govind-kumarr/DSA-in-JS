function pivot(arr, start = 0, end = arr.length) {
  let pivot = arr[start],
    swapInd = start;

  for (let i = start + 1; i < end; i++) {
    if (pivot > arr[i]) {
      swapInd++;
      swap(arr, i, swapInd);
    }
  }

  swap(arr, start, swapInd);

  return swapInd;
}

//!Swap Function
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function quickSort(arr, left = 0, right = arr.length) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    //!Left Part
    quickSort(arr, left, pivotIndex);
    //!Right Part
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

let ans = quickSort([5, 2, 1, 8, 4, 7, 6, 3]);

console.log(ans);
