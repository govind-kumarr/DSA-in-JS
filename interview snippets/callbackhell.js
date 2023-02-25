//! Callback hell is an anti-pattern with multiple nested callbacks. which makes is very tough to debug or understand the code when dealing with asynchronous operations

let value = 0;

/*
 * value+1 1sec
 * value+2 2sec
 * value+1 1sec
 * value+2 2sec
 */

setTimeout(() => {
  value++;
  console.log(value);
  setTimeout(() => {
    value += 2;
    console.log(value);
    setTimeout(() => {
      value++;
      console.log(value);
      setTimeout(() => {
        value += 2;
        console.log(value);
        setTimeout(() => {
          value++;
          console.log(value);
          setTimeout(() => {
            value += 2;
            console.log(value);
          }, 2000);
        }, 1000);
      }, 2000);
    }, 1000);
  }, 2000);
}, 1000);
