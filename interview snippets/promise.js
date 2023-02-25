//A promise is an object that may produce a single value some time in the future with either a resolved value or a reason that it’s not resolved(for example, network error). It will be in one of the 3 possible states: fulfilled, rejected, or pending.
//! A promise is an object may produce a single value some time in the future with either a resolved value or a reason that it's not resolved.It will be in of the 3 possible states: fullfilled, rejected or pending.

let inventory = ["milk", "sugar", "vegetables", "salt", "rice", "bread"];

//Promise produced
let newPromise = new Promise((resolve, reject) => {
  if (
    inventory.includes("vegetables") &&
    inventory.includes("salt") &&
    inventory.includes("rice")
  ) {
    resolve("Fried Rice");
  } else {
    if (!inventory.includes("vegetables"))
      reject("Vegetables is not available");
    else if (!inventory.includes("salt")) reject("salt is not available");
    else if (!inventory.includes("rice")) reject("rice is not available");
  }
});

//Promise consume
newPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

function getData() {
  return false;
}

const myPromise = new Promise(function (resolve, reject) {
  let data = false;
  setTimeout(() => {
    data = getData();
    if (data) resolve("sweets");
    else reject("chappal");
  }, 1000);
});

myPromise
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
