let arr = [1, 5, 4, 2, 9, 9, 9];
//              i     j
//           sum=1+5+4+2
//           if(windowsize == 3){
//             sum > max ? max = sum;
//             sum -= arr[i];
//             i++;
//           }

function maxSubarraySum() {
  let i = 0,
    j = 0,
    n = arr.length,
    sum = 0,
    max = -Infinity;

  let k = 3;

  while (j < n) {
    sum += arr[j]; //increase window size
    let windowSize = j - i + 1;

    if (windowSize === k) {
      //check if window size is reached
      if (sum > max) max = sum; //calculate your answer
      sum -= arr[i]; //decrease window size
      i++;
    }
    j++;
  }

  console.log(max);
}

function findMin(str, n, k) {
  let i = 0,
    j = 0,
    min = Infinity,
    w = 0;
  while (j < n) {
    if (str[j] == "W") w++;
    if (j - i + 1 == k) {
      if (w < min) min = w;

      if (str[i] == "W") w--;
      i++;
    }
    j++;
  }
  console.log(min);
}

findMin("BBWBW", 5, 5);
