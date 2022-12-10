//! Build Greater integer using same letters;

function nextGreatertoRight(arr) {
  let j = 0,
    stack = [];

  while (j < arr.length) {
    if (stack.length === 0) stack.push(j);
    else if (arr[j] <= arr[stack[stack.length - 1]]) stack.push(j);
    else {
      while (arr[j] > arr[stack[stack.length - 1]] && stack.length > 0) {
        let temp = arr[stack[stack.length - 1]];
        arr[stack[stack.length - 1]] = arr[j];
        arr[j] = temp;
        return arr;
      }
      stack.push(j);
    }
    j++;
  }
  return [-1];
}
