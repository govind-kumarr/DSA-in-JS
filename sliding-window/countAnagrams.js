let str = "aabaabaa";

function countAnagrams(longStr, str) {
  let ans = 0,
    j = 0,
    i = 0,
    count = 0;

  let obj = {};

  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]] === undefined) {
      obj[str[i]] = 1;
      count++;
    } else obj[str[i]]++;
  }

  while (j < longStr.length) {
    obj[longStr[j]]--;
    obj[longStr[j]] === 0 ? count-- : null;

    if (j - i + 1 < str.length) {
      j++;
    } else if (j - i + 1 === str.length) {
      count === 0 ? ans++ : null;
      obj[longStr[i++]]--;
      j++;
    }
  }
  console.log(ans);
}

countAnagrams("forxxorfxdofr", "for");
