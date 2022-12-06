let arr = [4, 1, 1, 1, 2, 3, 5];

function largestSubArr(arr, k) {
  let i = 0,
    j = 0,
    sum = 0,
    max = 0;
  while (j < arr.length) {
    sum += arr[j];
    if (sum < k) {
    } else if (sum === k) {
      j - i + 1 > max ? (max = j - i + 1) : null;
    } else {
      while (sum > k) {
        sum -= arr[i];
        i++;
      }
      if (sum === k && j - i + 1 > max) max = j - i + 1;
    }
    j++;
  }
  console.log(max);
}

largestSubArr(arr, 5);
