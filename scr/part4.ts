// Today date: 2024-06-27
// Part 4: Callback function
// A function that is passed as an argument to another function
// 1. Full Syntax:
// function functionName(parameter: type, callback: (parameter: type) => returnType): returnType {
//   // code to be executed
//   return callback(parameter);
// }
// 2. Short Syntax:
// function functionName(parameter: type, callback: Function): returnType {
//   // code to be executed
//   return callback(parameter);
// }

// Example 1:
function sum(a: number, b: number): number {
  return a + b;
}
function print(sum: number) {
  console.log(`Sum is: ${sum}`);
}

print(sum(2, 3)); // Is this called callback function? No
// Why? Because we are not passing the function as an argument
// We are passing the result of the function as an argument
// So this is not a callback function

// Example 2: Callback is when we pass the function itself as an argument
type Reaction = () => void; // defining a type for the callback function
// Reaction is a function that takes no parameters and returns void
// function meet(isFriend: boolean, callback: Reaction) { // the callback will be executed later
//   if (isFriend) {
//     console.log("It's my friend!");
//   } else {
//     console.log("Who are you?");
//   }
//   callback(); // executing the callback function
// }

// // meet(true, () => {}); // passing an anonymous function () => {} to test our example

// // // Now we add some logic to the callback function
// function smile() {
//   console.log("Hey, Tony");
// }

// function shy() {
//   console.log("Oh, hi...");
// }
// meet(true, smile); // passing the function smile as an argument
// meet(false, shy); // passing the function shy as an argument

// Example 3: Login with multiple type
// function login(loginType: Google | Facebook | X) {
//   switch (loginType) {
//     case "Google":
//       console.log("Login with Google");
//       break; // remmember to add break statement to prevent fall through
//     case "Facebook":
//       console.log("Login with Facebook");
//       break;
//     case "X":
//       console.log("Login with X");
//       break;
// }
// // If there are many cases, the code would be lengthy
// // We can use callback function to simplify the code. Here's the idea:

// function loginWithGoogle() {};
// function loginWithFacebook() {};
// function loginWithX() {};

// function login2(callback: Function) {
//   console.log("Go to url");
//   console.log("Check page is loading");
//   callback; // execute the callback function
// };

// Then we can pass the function as a callback to the login function
// login2(loginWithGoogle);
// login2(loginWithFacebook);
// login2(loginWithX);

// Next is we add some delay to simulate the real world scenario in UI testing (async operation)

// setTimeout is a built-in function in JavaScript that executes a function after a specified delay

function meet(isFriend: boolean, callback: Reaction) { // the callback will be executed later
  if (isFriend) {
    console.log("It's my friend!");
  } else {
    console.log("Who are you?");
  }
  setTimeout(callback, 2000); // execute the callback function after 2 seconds
}

// meet(true, () => {}); // passing an anonymous function () => {} to test our example

// // Now we add some logic to the callback function
function smile() {
  console.log("Hey, Tony");
}
function shy() {
  console.log("Oh, hi...");
}
meet(true, smile); // passing the function smile as an argument
meet(false, shy); // passing the function shy as an argument

// What will happen here is that JavaScript have asyn mechanism
// The code will run parallelly --> it won't wait for 2 seconds
// It's my friend!
// Who are you?
// Hey, Tony
// Oh, hi...


// To resolve this issue, we can use Promise and async await
function waitForMessage(isFriend: boolean) {
  console.log("Waiting for message...");
  return new Promise((resolve, reject) => { // we usually use the pair: resolve and reject for convention
  setTimeout(() => {
    if (isFriend) {
      resolve("Hey, Tony"); // actually "resolve" can return any type of data
    } else {
      reject("I get ghosted ..."); // the same for "reject"
    }
  }, 2000);
  });
}

waitForMessage(true)
  .then((message) => console.log(message)) // message is the data returned from resolve
  .catch((error) => console.log(error)); // error is the data returned from reject
  // Instead of using then and catch, we can use async await
  // Why? Because it is more readable and easier to understand

  // To verify whether the promise is resolved or rejected, we can use async await
  async function test() {
    let message = await waitForMessage(true); // wait for the promise to be resolved
    console.log(message);
    let error = await waitForMessage(false); // wait for the promise to be rejected
    console.log(error);
  }
  test(); // Our expectation is that it will print in synchronous way like this.

  // Hmm, why would we want it to be synchronous?
  // Because in real world scenario, we usually want to wait for the promise to be resolved or rejected before we proceed to the next step
  // For example, in a login flow, we want to wait for the login to be successful before we proceed to the next step
  // If the login is not successful, we want to show an error message to the user
  // So we need to wait for the promise to be resolved or rejected before we proceed to the next step

  // Then how does it related to promises? 
  // Because async await is just a syntactic sugar for promises
  // It makes the code more readable and easier to understand
  // But under the hood, it is still using promises
  // So we can use async await to handle promises in a more readable way
