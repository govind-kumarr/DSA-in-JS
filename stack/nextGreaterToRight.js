let arr = [5, 4, 2, 7, 1, 8, 4];

function nextGreatertoRight(arr) {
  let j = 0,
    stack = [],
    ans = [];

  while (j < arr.length) {
    if (stack.length === 0) stack.push(j);
    else if (arr[j] <= arr[stack[stack.length - 1]]){
      stack.pop();
      stack.push(j);
    }else {
      while (arr[j] > arr[stack[stack.length - 1]] && stack.length > 0) {
        ans.push(arr[j] - arr[stack[stack.length - 1]]);
        stack.pop();
      }
      stack.push(j);
    }
    j++;
  }
  return ans;
}

let ans = nextGreatertoRight([1, 2, 3, 4, 5]);
console.log(ans);
