const x = require("./db.json");

function print(obj) {
  for (let key in obj) {
    if (typeof obj[key] == "object") {
      console.log(key);
      print(obj[key]);
    } else console.log(key);
  }
}

print(x);
