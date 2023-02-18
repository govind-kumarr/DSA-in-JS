"use strict";
//methods -> function inside object


function personInfo() {
  console.log(`person name is ${this.firstName} and person age is ${this.age}`);
}
const person = {
  firstName: "Govind",
  age: 21,
  about: personInfo,
};

const person1 = {
  firstName: "Shravani",
  age: 24,
  about: personInfo,
};

person.about();
person1.about();
