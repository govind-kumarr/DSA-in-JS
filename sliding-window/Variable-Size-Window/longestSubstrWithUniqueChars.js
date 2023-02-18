let str = "aabacbebebe";

function findLongestStr(str) {
  let i = 0,
    j = 0,
    obj = {},
    count = 0,
    max = 0;

  while (j < str.length) {

    if (obj[str[j]] === undefined) {

      obj[str[j]] = 1;
      
      count = Object.keys(obj).length;

      count > max ? (max = count) : null;
    } else {

      obj[str[j]]++;

      while (obj[str[j]] > 1) {
        obj[str[i]]--;
        i++;
      }

      count = Object.keys(obj).length;
      count > max ? (max = count) : null;
    }
    j++;
  }
  console.log(max);
}

findLongestStr(str);

//Test Cases --> "pwwkew"
// 'dvdf'
