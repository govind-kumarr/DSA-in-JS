function buyAndSell(prices){
  let j = 0,
    stack = [],
    max = 0,
    prof;

  while (j < prices.length) {
    if (stack.length === 0) stack.push(prices[j]);
    else if (prices[j] <= stack[stack.length-1]) {
      stack = [];
      stack.push(prices[j]);
    } else {
      prof = prices[j]-stack[stack.length-1];
      prof>max?max=prof:null;
    }
    j++;
  }

  return ans;
}
