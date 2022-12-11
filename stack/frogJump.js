let stones = [0, 2, 5, 6, 7];
let diff1 = [];
let diff2 = [];
let j = 1,
  n = stones.length;
while (j < n) {
  diff1.push(stones[j] - stones[0]);
  diff2.push(stones[n - 1] - stones[n - 1 - j]);
  j++;
}
console.log(diff1,diff2);
