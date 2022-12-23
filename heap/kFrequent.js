const kFrequent = (nums, k) => {
  let hash = {};
  for (let num of nums) {
    hash[num] === undefined ? (hash[num] = 1) : hash[num]++;
  }

  let key = Object.keys(hash);
  let minHeap = [];
  let j = 0;

  // console.log(hash, key);

  while (j < key.length) {
    if (minHeap.length == 0) minHeap.push(key[j]);
    else if (hash[key[j]] < hash[minHeap[minHeap.length - 1]])
      minHeap.push(key[j]);
    else if (hash[key[j]] > hash[minHeap[0]]) minHeap.unshift(key[j]);

    if (minHeap.length > k) minHeap.pop();
    j++;
  }

  // console.log(minHeap);
  return minHeap;
};

let ans = kFrequent([1, 1, 1, 2, 2, 3], 2);
console.log(ans);
