let arr = [5, 4, 2, 7, 1, 8, 4];

function nextGreatertoRight(arr) {
  let j = 0,
    stack = [],
    ans = new Array(arr.length).fill(-1);

  while (j < arr.length) {
    if (stack.length === 0) stack.push(j);
    else if (arr[j] <= arr[stack[stack.length - 1]]) stack.push(j);
    else {
      while (arr[j] > arr[stack[stack.length - 1]] && stack.length > 0) {
        ans[stack[stack.length - 1]] = arr[j];
        stack.pop();
      }
      stack.push(j);
    }
    j++;
  }
  return ans;
}

let ans = nextGreatertoRight([2, 1, 3, 1, 6]);
console.log(ans);
