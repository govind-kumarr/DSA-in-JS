function typeString(s) {
  let stack = [],
    j = s.length - 1,
    ans='';
  while (j >= 0) {
    if (stack.length === 0) stack.push(s[j]);
    else if (stack[stack.length - 1] === "#" && s[j] != "#") stack.pop();
    else stack.push(s[j]);
    j--;
  }
  for(let char of stack){
    if(char!="#") ans+=char;
  }
  return ans;
}

// let ans1 = typeString("y#fo##f");
let ans2 = typeString("y#f#o##f");

console.log(ans2);
// console.log(ans1);
// return ans1===ans2;
