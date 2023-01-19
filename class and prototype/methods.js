const obj = {
  firstName: "Govind",
  lastName: "Kumar",
  age: 21,
  about: function () {
    console.log(
      `My Name is ${this.firstName + " " + this.lastName} and I am ${
        this.age
      } years old`
    );
  },
};

const obj2 = {
  firstName: "Shravani",
  lastName: "Mishra",
  age: 23,
};
obj.about();

function findbribes(n, queue) {
  let chaotic = false,
    bribes = 0;
  for (let i = 0; i < n; i++) {
    queue[i] - (i + 1) > 2 ? (chaotic = true) : null;
    for (let j = 0; j < i; j++) {
      queue[j] > queue[i] ? bribes++ : null;
    }
  }
  console.log(chaotic ? "Too chaotic" : bribes);
}
