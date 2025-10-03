// 30/9/2025
// ***** Class in TypeScript
// Class is a blueprint for creating objects

// In object, we can declare key and value, where value can be a function
let user6 = {
  name: "Bob",
  age: 25,
  func: function () {
    console.log("Hello, " + this.name);
  },
};
user6.func(); // "Hello, Bob"
// But this way is not efficient, because we have to create a new object every time we want to create a new user
// Instead, we can use class to create a blueprint for creating objects

// Class is a blueprint for creating objects
// It has the same vibe as: interface / type alias but with more features
// Class can have properties and methods
// Properties are like variables that belong to the class
// We can define properties and methods in a class --> belong to an object
class User {
  name!: string; // ! means it is optional, we don't need to initialize it in the constructor

  printName(): void {
    console.log("Hello, " + this.name); // `this` refers to the current object
  }
}
let u1: User;
// Logic of if else
let isMale = false;
if (!isMale) {
  console.log("Male");
}
else {
  console.log("Female");
}

let level = 1;

if(level == 1) {
  console.log("Fresher");
}
else if(level == 2) {
  console.log("Junior");
}
else {
  console.log("Undefined");
}

// switch case is invented for not using too many else if
// switch case is more efficient than if else in hardware
// because it uses jump table in hardware, 
// a jump table is a data structure that is used to store the address of the next instruction to be executed
// so that the CPU can jump to the next instruction directly without having to evaluate each condition
switch(level) {
  case 1:
    console.log("Fresher");
    break; // break is used to exit the switch case
  case 2:
    console.log("Junior");
    break;
  default:
    console.log("Undefined");
    break;
}

// But we use switch case for one variable with many values (consistent data type)
// If we have many variables, we should use if else (e.g: age and salary)


// Iterations in TypeScript
// 1. for loop --> we use this when we know the number of iterations
// it is more consistent than while loop

for (let i = 0; i < 5; i++) {
  console.log(i);
}
for (let i = 0; i <= 10; i+=2) {
  console.log(i);
}
// we use for loop in UI testing to iterate through a list of elements
let inputs = [1, 3, 5, 7, 9];
for (let index = 1; index < inputs.length; index++) {
  console.log(inputs[index]);
}

// 2. while loop --> we use this when we don't know the number of iterations
// In UI testing, we use it in waiting for an element to appear
let j = 10;
let isBreak = true;
while (j > 0 && isBreak) {
  console.log(j);
  if (j == 3) {
    isBreak = false;
  }
  if (j == 5) {
    break; // break is used to exit the loop
  } 
  j--;
}

// 3. do while loop --> we use this when we want to execute the loop at least once
let k = 0;
do {
  console.log(k);
  k++;
} while (k < 5);
// do while loop is not used much in UI testing

// continue is used to skip the current iteration and move to the next iteration
let age = 15;
while (age > 0) {
  age--; 
  if (age == 10) {
    continue; // skip the current iteration when age is 10
    // for other ages, it will print the age
    // the continue statement will skip all the code below it when age is 10
  }
  console.log(`Age: ${age}`);
}

// NOTE:
// age-- is before `continue` statement
// if age-- is after `continue` statement, it will cause an infinite loop when age is 10
// because age will never be decremented when age is 10
// so the condition age > 0 will always be true

// age-- is after ``