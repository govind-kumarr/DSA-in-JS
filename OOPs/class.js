/*
! section 1 starts
classes and super keyword
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    return `${this.name} is eating`;
  }
  isSuperCute() {
    return this.age <= 1;
  }
  isCute() {
    return true;
  }
}

class Dog extends Animal {
  constructor(name, age, speed) {
    super(name, age);
    this.speed = speed;
  }
  whichBreed() {}
  run() {
    return `${this.name} is running at ${this.speed}kmph`;
  }
}

const animal1 = new Animal("Tommy", 23);
const animal2 = new Dog("Tommy", 23, 50);
const animal3 = new Dog("Tommy", 23, 50);

console.log(animal1);
console.log(animal2.run());
! section 1 ends
*/

/*
! section 2 starts
getters and setters
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(fullName) {
    const [firstName, lastName] = fullName.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const person1 = new Person("Bob", "marley", 32);

person1.fullName = "Govind Kumar";
let fullName = person1.fullName;

console.log(fullName);
! section 2 ends
*/

/*
! section 3 starts
static methods


! section 3 ends
*/

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  static classInfo() {
    return `this is person class`;
  }
  static className = "Animal";
  eat() {
    return `${this.name} is eating`;
  }
  isSuperCute() {
    return this.age <= 1;
  }
  isCute() {
    return true;
  }
}
console.log(Animal.className);
