function convertToBinary(num) {
  let ans = "";
  let bit;
  while (num != 0) {
    bit = num & 1;
    ans += bit;
    num = num >> 1;
  }
  return ans;
}

module.exports = convertToBinary;