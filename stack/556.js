function nearestSmallerToLeft(nums) {
  let j = nums.length - 1,
    stack = [],
    ans = new Array(nums.length).fill(-1);
  while (j >= 0) {
    if (stack.length === 0) stack.push(j);
    else if (nums[j] >= nums[stack[stack.length - 1]]) stack.push(j);
    else {
      while (nums[j] < nums[stack[stack.length - 1]] && stack.length > 0) {
        let temp = nums[j];
        nums[j] = nums[stack[stack.length - 1]];
        nums[stack[stack.length - 1]] = temp;
      }
      return nums;
    }
    j--;
  }
  return ans;
}

let ans = nearestSmallerToLeft([2, 1, 5, 6, 2, 3]);
console.log(ans);
