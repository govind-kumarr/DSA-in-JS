/*
Maps in JS
difference between MAPS
* key could be of any type
*


object leteral 
let person = {
  firstName: "John",
  age: 34,
};

*/

let person = new Map();
person.set("firstName", "Govind");
person.set("age", 21);

console.log(person);

console.log(person.get("firstName"));

for (let key of person.keys()) console.log(person.get(key));

for (let [key, value] of person) console.log(key, value);
