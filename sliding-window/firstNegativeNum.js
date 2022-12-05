let arr = [12, -1, -7, 8, -15, 30, 16, 28];

const firstNegativeInt = (arr, k) => {
  let i = 0,
    j = 0,
    ans = [],
    list = [];

  while (j < arr.length) {
    arr[j] < 0 ? list.push(arr[j]) : null;
    if (j - i + 1 < k) j++;
    else if (j - i + 1 === k) {
      list.length > 0 ? ans.push(list[0]) : ans.push(0);

      arr[i] < 0 ? list.shift() : null;

      i++;
      j++;
    }
  }

  console.log(ans);
};

firstNegativeInt(arr, 3);
