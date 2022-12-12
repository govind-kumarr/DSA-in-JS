function findMissing(nums) {
    let i=0,pos=0,ans=[];
    while(i<nums.length){
        if(nums[pos]==pos+1) pos++;
        let itspos = nums[pos]-1;
        if(nums[pos]!==nums[itspos]){
        let temp = nums[pos];
        nums[pos] = nums[itspos];
        nums[itspos] = temp;
        }else pos++;
        i++
    }
console.log(nums);
    for(let i=0;i<nums.length;i++){
        if(nums[i]!=i+1) ans.push(i+1);
    }
    
    return ans;
};
let ans = findMissing([4, 3, 2, 7, 7, 2, 3, 1]);