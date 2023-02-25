//! A closure is a combination of function and lexical environment in which it was declared. In closure and inner function has the access to variable of outer or enclosing function the closures has three scope chains 1) It own scope 2)The function where it was declared 3)Global scope variables

// function secureBooking() {
//   let passengers = 0;
//   function registerBooking() {
//     passengers++;
//     console.log(`${passengers} passengers registered`);
//   }
//   return registerBooking;
// }

// const registerBooking = secureBooking();

// registerBooking();
// registerBooking();
// registerBooking();

function secureBooking() {
  let passengers = 0;

  function increasePassengers() {
    let variable = "variable";
    passengers++;
    console.log(`${passengers} passengers`);
  }

  return increasePassengers;
}

let result = secureBooking();

result();
result();
result();
