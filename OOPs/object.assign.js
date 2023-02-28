/*
const obj = {
  key1: "value1",
  key2: "value2",
};

const obj2 = Object.assign({}, obj);

console.log(obj === obj2);


const obj1 = {
  key1: "value1",
  key2: "value2",
};

const obj2 = Object.create(obj1);
obj2.key2 = "value2 of obj2";

console.log(obj2.__proto__);

  */

const obj1 = {
  name: "Shravani",
  age: 24,
  about: function () {
    console.log(`${this.name} is ${this.age} years old`);
  },
  is18: function () {
    console.log(this.age > 18 ? "above 18" : "below 18");
  },
};

const obj2 = {
  name: "Govind",
  age: 21,
};



console.log(obj1, "obj1");
console.log(obj2, "obj2");
