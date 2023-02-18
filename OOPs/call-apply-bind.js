const user1 = {
  firstName: "John",
  age: 8,
  about() {
    console.log(this.firstName, this.age);
  },
};

const user2 = {
  firstName: "mohit",
  age: 12,
};

user1.about.call(user2);
