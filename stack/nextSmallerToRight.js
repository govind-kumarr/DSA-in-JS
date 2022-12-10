function nextSmallerToRight(nums) {
  let j = 0,
    stack = [],
    n = nums.length,
    ans = new Array(n).fill(n);
  while (j < n) {
    if (stack.length === 0) stack.push(j);
    else if (nums[j] >= nums[stack[stack.length - 1]]) {
      stack.push(j);
    } else {
      while (nums[j] < nums[stack[stack.length - 1]] && stack.length > 0) {
        ans[stack[stack.length - 1]] = j;
        stack.pop();
      }
      stack.push(j);
    }
    j++;
  }
  return ans;
}

let ans = nextSmallerToRight([2, 1, 5, 6, 2, 3]);
console.log(ans);
