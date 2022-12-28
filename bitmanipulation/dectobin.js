function convertToBinary(num) {
  let ans = [];
  let digit;

  while (num != 0) {
    digit = num % 2;
    ans.push(digit);
    num = Math.floor(num / 2);
  }
  while (ans.length != 32) ans.push(0);
  return ans.reverse().join("");
}

console.log(convertToBinary(43261596));

function convertToDec(bits) {
  let ans = 0;
  let i = 0;

  for (let i = 0; i < bits.length; i++) bits[i] == "1" ? (ans += 2 ** i) : null;

  return ans;
}

// console.log(convertToDec("101"));
