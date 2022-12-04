let arr = [5, 4, 2, 7, 1, 8, 4];

const nextGreatertoRight = (arr) => {
  let stack = [];
  let ans = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    if (stack.length === 0) stack.push(arr[i]);
    else if (arr[i] < stack[stack.length - 1]) {
      ans[i] = stack[stack.length - 1];
      stack.push(arr[i]);
    } else {
      while (arr[i] >= stack[stack.length - 1] && stack.length > 0) {
        stack.pop();
      }
      if (stack.length === 0) ans[i] = -1;
      else ans[i] = stack[stack.length - 1];
      stack.push(arr[i]);
    }
  }
  console.log(ans);
};

nextGreatertoRight(arr);
