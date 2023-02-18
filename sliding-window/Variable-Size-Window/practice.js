let arr = [2, 3, 1, 2, 4, 3];
//                       i  j
let sum = 7;
// let temp = 4+3;
// let size = j-i+1;

// 2
// let min = Infinity;
// if(size < min) size = min;

let temp = 0,
  min = Infinity,
  i = 0,
  j = 0;

while (j < arr.length) {
  temp += arr[j];

  if (temp < sum) j++;
  else if (temp == sum) {
    let size = j - i + 1;
    size < min ? (min = size) : null;
    j++;
  } else{
    while (temp > sum) {
      temp -= arr[i];
      i++;
    }
    j++;
  }
}
console.log(min);
