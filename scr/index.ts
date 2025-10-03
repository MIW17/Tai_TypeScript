// 03/10/2025
// Function in TypeScript
// A function is a block of code that performs a specific task
// A function can take input parameters and return a value
// A function can be called multiple times
// 1. Function declaration
// syntax is function functionName(parameter1: type, parameter2: type): returnType { // code to be executed }
// returnType is optional, if not specified, it will be of type void
// paramerters are optional, if not specified, the function will not take any parameters

function add(a: number, b: number) {
  let sum = a + b;
  console.log(`Sum is: ${sum}`);
}
// But it won't return anything because we didn't call it.
add(1, 2); // calling the function
console.log(add(1, 2)); // undefined because the function doesn't return anything
// If we don't use return, it will return undefined (void)

// If we want to return a value, we need to use return keyword
function add2(a: number, b: number): number {
  let sum = a + b;
  return sum; // return keyword is used to return a value
}

console.log(add2(1, 2)); // 3

// Function does have auto hoisting mechanism
// So we can call the function before it is declared

// 2. Const function expression

// multiply(2, 3); // Error: Cannot access 'multiply' before initialization
const multiply = (a: number, b: number) => {
  return a * b;
}
console.log(multiply(2, 3)); // 6

const m = () => console.log("Hello"); // if the function has only one statement, 
// we can omit the curly braces and return keyword
const divide = (a: number, b: number) => a / b;
console.log(divide(6, 2)); // 3

let power = a => 2**a; // if the function has only one parameter, 
// we can omit the parentheses (only in JavaScript) 
// --> TypeScript has prevented this feature
console.log(power(3)); // 8

// 3. Default value of parameter
function sum2(a: number = 1, b: number): number {
  return a + b;
}
console.log(sum2(2, 2)); // 0 + 2 = 2

// UI use case example: fallback logic for avatar image
function getAvatarUrl(userId: string, size: number = 50): string {
  return `https://api.adorable.io/avatars/${size}/${userId}.png`;
}

// 4. Instantly Invoked Function Expression (IIFE)
// A function that is executed immediately after it is defined
// Syntax is (function() { // code to be executed })();

// function anonymousFunction() {

(function(a: number, b: number) {
  console.log(`IIFE Sum is: ${a + b}`);
})(2, 3); // IIFE Sum is: 5

(function(){console.log("IIFE without parameters")})(); // IIFE without parameters

// 5. Rest parameters
// A function can take variable number of arguments using ...args
// args is an array of arguments
function sumAll(...args: number[]): number {
  return args.reduce((acc, curr) => acc + curr, 0);
}

function sum3(...args: number[]): number {
  let sum = 0;
    for (let i = 0; i < args.length; i++) {
    if (args[i] != undefined) {
      sum = sum + (args[i] ?? 0);
    }
  }
  return sum;
}
console.log(sum3(1, 2, 3, 4, 5));

// ?? operator - nullish coalescing operator

// Help me find the shortcut for collapse all functions in VSCode
// Ctrl + K, Ctrl + 0 (zero) to collapse all functions
// Ctrl + K, Ctrl + J to expand all functions
// Thanks ChatGPT
// Wait, is it chatGPT or GitHub Copilot?
// It is GitHub Copilot, I am using GitHub Copilot


