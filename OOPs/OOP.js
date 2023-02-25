/*
function to create user object and return it

let userMethods = {
  about() {
    return `${this.firstName} ${this.lastName} is ${this.age} years old`;
  },
  is18() {
    return `${this.firstName} ${this.lastName} is ${
      this.age >= 18 ? "adult" : "minor"
    }`;
  },
};

function createUser(firstName, lastName, email, age, address) {
  let user = Object.create(userMethods);

  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;
  
  return user;
}

const user1 = createUser(
  "Govind",
  "Kumar",
  "gk4051668@gmail.com",
  18,
  "my address"
);

console.log(user1.__proto__);
console.log(user1.is18());

*/

/*
!Utilizing function's prototype property

function createUser(firstName, lastName, email, age, address) {
  let user = Object.create(createUser.prototype);
  
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;

  return user;
}

createUser.prototype.about = function () {
  return `${this.firstName} ${this.lastName} is ${this.age} years old`;
};

createUser.prototype.is18 = function () {
  return `${this.firstName} ${this.lastName} is ${
    this.age >= 18 ? "adult" : "minor"
  }`;
};

createUser.prototype.sing = function () {
  console.log("lalalalalaa");
};

const user1 = createUser(
  "Govind",
  "Kumar",
  "gk4051668@gmail.com",
  18,
  "my address"
  );
  
  
  console.log(user1.__proto__);
  console.log(user1.is18());
  */

/*
  new keyword
  1) Empty Object
  2) return this
  3) set value of proto of this object to prototype
  
  function CreateUser(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
CreateUser.prototype.is18 = function () {
  console.log(`${this.age >= 18 ? "Yes User is adult" : "user is minor"}`);
};
const user1 = new CreateUser("Govind", "Kumar", 21);
user1.is18();
console.log(user1.__proto__);

for (let key in user1) user1.hasOwnProperty(key) ? console.log(key) : null;
*/

/*
classes in javascript
! Classes are fake in JS behind the scenes they use prototype
*/

class User {
  constructor(firstName, lastName, age, address) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.address = address;
  }
  about() {
    return `${this.firstName} ${this.lastName} is ${this.age} years old`;
  }
  is18() {
    console.log(`${this.age >= 18 ? "Yes User is adult" : "user is minor"}`);
  }
}

const user1 = new User("Shravani", "Mishra", 24, "Earth");

const about = user1.about();
console.log(about);