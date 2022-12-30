function convertToDec(bits) {
  let ans = 0;
  let i = 0;

  for (let i = 0; i < bits.length; i++) bits[i] == "1" ? (ans += 2 ** i) : null;

  return ans;
}
function sumRootToLeaf(root){
  if(!root) return 0;
  
  let data=[],
  ans = 0;
  function traverse(node){
    
    data.push(node.val);

    if(node.left) traverse(node.left);
    if(node.right) traverse(node.right);


    if(!node.left && !node.right){
      ans+=convertToDec(data.join(""));
    }
    data.pop();
  }
  traverse(root);
  return ans;
}