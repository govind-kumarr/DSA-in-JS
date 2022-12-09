let arr = [5, 4, 2, 7, 1, 8, 4];

const nextGreatertoRight = (arr) => {
  let stack = [];
  let ans = new Array(arr.length).fill(-1);
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
  return ans;
};

nextGreatertoRight([1, 3, 4, 2]);
