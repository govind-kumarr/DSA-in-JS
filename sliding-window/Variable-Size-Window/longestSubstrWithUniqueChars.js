let str = "aabacbebebe";

function findLongestStr(str) {
  let i = 0,
    j = 0,
    obj = {},
    count = 0,
    max = 0;

  while (j < str.length) {
    if (obj[str[j]] === undefined) {
      obj[str[j]] = 1;
      count = Object.keys(obj).length;
      count > max ? (max = count) : null;
    } else {
      obj[str[j]]++;
      while (obj[str[j]] > 1) {
        obj[str[i]]--;
        i++;
      }
      count = Object.keys(obj).length;
      count > max ? (max = count) : null;
    }
    j++;
  }
  console.log(max);
}

function meanModeMedian(arr, n) {
  let mean, mode, median;
  let max = -Infinity,
    hash = {},
    sum = 0;
  arr.sort((a, b) => a - b);
  //mode
  for (let elem of arr) {
    sum += elem;
    hash[elem] = (hash[elem] || 0) + 1;
    if (hash[elem] > max) {
      max = hash[elem];
      mode = elem;
    }
  }
  //mean
  mean = Math.floor(sum / n);
  let mid = Math.floor(n / 2);
  if (n % 2 == 1) {
    median = arr[mid];
  } else {
    median = arr[mid] + arr[mid - 1];
    median = median / 2;
  }
  console.log(mean, median, mode);
}

let test1 = [4, 8, 7, 6, 4, 2, 4, 4, 1, 2];
let test2 = [4, 4, 4, 2, 2, 2];
meanModeMedian(test1, 10);
