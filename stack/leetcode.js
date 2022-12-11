let nums = [4, 3, 6, 16, 8, 2];
nums = nums.sort((a,b)=>a-b);
let n = nums.length;
let i=n-2,j=n-1,sq,count=0;
while(i>=0&&j>=0){
  sq = nums[i]*nums[i];
  // console.log(sq,nums[i],nums[j])
  if(sq==nums[j]){
    j=i;
    i--;
    count++;
  }else if(sq>nums[j]){
    i--;
  }else if(sq<nums[j]){
    j--;
  }
}

console.log(count);
