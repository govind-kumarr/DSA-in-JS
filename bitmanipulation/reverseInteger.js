function reverseINT(num) {
  let n = num;

  let digits = -1;

  while (n != 0) {
    digits++;
    n = Math.floor(n / 10);
  }

  let ans = 0;
  while (num != 0) {
    let digit = Math.floor(num / 10) * 10;
    digit = num - digit;

    ans += digit * 10 ** digits;
    digits--;
    num = Math.floor(num / 10);
  }
  console.log(ans);
}

reverseINT(120);
