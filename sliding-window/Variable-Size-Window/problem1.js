//! Subarrays Having Sum Less Than M

function sumLessThanK(n, k, arr) {
  let i = 0,
    subarr = [],
    sum = 0,
    j = 0,
    count = 0;
  while (j < n) {
    subarr.push(arr[j]);
    sum += arr[j];
    if (sum < k) count += subarr.length;
    else {
      while (sum >= k) {
        subarr.shift();
        sum -= arr[i];
        i++;
      }
      if (sum > 0) count+=subarr.length;
    }

    j++;
  }
  console.log(count);
}

sumLessThanK(5, 5, [1, 5, 1, 3, 2]);
