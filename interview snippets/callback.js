//! Definition -> A Callback function is a function that is passed to another function as an arguement. This function is invoked inside the outer function;

function callbackFunction(name) {
  return `Hello ${name}`;
}

function mainFunction(callback) {
  let name = prompt("Enter your name");
  callback(name);
}

mainFunction(callbackFunction);
