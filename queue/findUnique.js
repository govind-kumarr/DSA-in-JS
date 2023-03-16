function findUniqueStr(s) {
  let hash = {};

  for (char of s) hash[char] = (hash[char] || 0) + 1;
  for (key in hash) if (hash[key] > 1) delete hash[key];
  if (Object.keys(hash).length == 0) {
    console.log("-1");
    return;
  }
  for (char of s) {
    if (char in hash) {
      console.log(char);
      return;
    }
  }
}

findUniqueStr("leetcode");
