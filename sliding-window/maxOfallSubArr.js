function findMax(arr, k) {
  let i = 0,
    j = 0,
    list = [],
    ans = [],
    n=arr.length;

  while (j < n) {
    if (list.length === 0) list.push(arr[j]);
    else if (arr[j] > list[list.length - 1]) {
      list = []
      list.push(arr[j]);
    } else list.push(arr[j]);

    if (j - i + 1 === k) {
      ans.push(list[0]);
      if (list[0] === arr[i]) list.shift();
      i++;
    }
    j++;
  }
  console.log(ans.join(" "));
}
findMax([1, 3, -1, -3, 5, 3, 6, 7], 3);
