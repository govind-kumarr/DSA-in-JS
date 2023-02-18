/*
function to create user object and return it
 */

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
  let user = {};

  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;
  user.about = userMethods.about;
  user.is18 = userMethods.is18;

  return user;
}

const user1 = createUser(
  "Govind",
  "Kumar",
  "gk4051668@gmail.com",
  18,
  "my address"
);

console.log(user1.is18());


