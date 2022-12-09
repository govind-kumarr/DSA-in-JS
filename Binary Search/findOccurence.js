//! First and Last Occurence

//** First Occurence */

function firstOccurence(arr, k) {
  let low = 0,
    high = arr.length - 1,
    min = Infinity;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === k) {
      if (mid < min) min = mid;
      high = mid - 1;
    } else if (arr[mid] > k) high = mid - 1;
    else low = mid + 1;
  }
  return min;
}

function lastOccurence(arr, k) {
  let low = 0,
    high = arr.length - 1,
    max = -Infinity;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === k) {
      if (mid > max) max = mid;
      low = mid + 1;
    } else if (arr[mid] > k) high = mid - 1;
    else low = mid + 1;
  }
  return max;
}
let ans=[];
ans[0] = firstOccurence([1, 2, 3, 5, 5, 5, 7, 8, 9, 10], 5);
ans[1] = lastOccurence([1, 2, 3, 5, 5, 5, 7, 8, 9, 10], 5);
console.log(ans);
