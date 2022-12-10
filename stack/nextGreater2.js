const nextGreatertoRight_forCircular = (arr) => {
  let ans = new Array(arr.length).fill(-1);
  let j = 0,
    stack = [];

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
  j = 0;
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
};
