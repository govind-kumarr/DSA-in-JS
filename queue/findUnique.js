const data = require("./db.json");
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

// findUniqueStr("leetcode");

let obj = {
  name: "Govind ",
  last_name: "Kumar",
  age: 21,
  full_name: "Govind Kumar",
};

// for (let key in obj) console.log(`${key}: ${obj[key]}`);
let arr = [1, 2, 3, 4];
// for (let key of arr) console.log(`${key}`);
let str = "Govind";
// for (let key of str) console.log(`${key}`);

// console.log("name", obj["name"]);
// console.log("last_name", obj["last_name"]);
// console.log("age", obj["age"]);
// console.log("full_name", obj["full_name"]);

console.log(data);
