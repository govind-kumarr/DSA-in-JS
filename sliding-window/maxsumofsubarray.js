let arr = [2, 5, 1, 8, 2, 9, 1];
/*
const findSum = (arr, k) => {
  let sum = 0;
  let max = 0;

  for (let i = 0; i < k; i++) sum += arr[i];

  if (sum > max) max = sum;

  for (let i = k; i < arr.length; i++) {
    sum -= arr[i - k];
    sum += arr[i];
    sum > max ? (max = sum) : null;
  }

  console.log(max);
};
*/

const findSum = (arr, k) => {
  let i = 0,
    j = 0,
    sum = 0,
    max = 0;
  while (j < arr.length) {
    if (j - i + 1 <= k) {
      sum += arr[j++];
    } else if (j - i + 1 > k) {
      sum -= arr[i++];
      sum += arr[j++];
    }
    sum > max ? (max = sum) : null;
  }
  console.log(max);
};
findSum(arr, 4);
