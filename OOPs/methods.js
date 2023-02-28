"use strict";
//!methods -> function inside object

const person = {
  name: "Shravani",
  age: 24,
  about: function () {
    console.log(`${this.name} is ${this.age} years old`);
  },
  is18: function () {
    console.log(this.age > 18 ? "above 18" : "below 18");
  },
};

person.about();
person.is18();
