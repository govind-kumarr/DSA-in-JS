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

// console.log(convertToBinary(43261596));

function convertToDec(bits) {
  let ans = 0;
  let pow = bits.length-1;

  for (let i = 0; i < bits.length; i++,pow--) bits[i] == "1" ? (ans += 2 ** pow) : null;

  return ans;
}

console.log(convertToDec("100"));
