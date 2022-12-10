function nextGreaterToLeft(nums) {
  let j = nums.length - 1,
    stack = [];

  while (j >= 0) {
    if (stack.length === 0) stack.push(j);
    else if (nums[j] <= nums[stack[stack.length - 1]]) stack.push(j);
    else {
      while (nums[j] > nums[stack[stack.length - 1]] && stack.length > 0) {
        let temp = nums[j];
        nums[j] = nums[stack[stack.length - 1]];
        nums[stack[stack.length - 1]] = temp;
        return nums;
      }
    }
    j--;
  }
  return [-1];
}

let ans = nextGreaterToLeft([2, 3, 0, 2, 4, 1]);
console.log(ans);
