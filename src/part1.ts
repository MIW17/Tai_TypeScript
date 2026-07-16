// ------------------------------------------------------------
// part1.ts - TypeScript learning trace
// ------------------------------------------------------------

// 1. Function declaration / expression / arrow function
// ------------------------------------------------------------
enum direction {
  up,
  down,
}

console.log("direction.up", direction.up); // 0
console.log("direction.down", direction.down); // 1
console.log("direction[0]", direction[0]); // "up"
console.log("direction[1]", direction[1]); // "down"
// ------------------------------------------------------------
function log(): void {
  console.log("hi");
}
log(); // "hi"

function sayHello(): void {
  console.log("Hello, world!");
}

const sayHelloResult = sayHello(); // Hello, world 
// --> because the function execute the console.log inside it
console.log("sayHelloResult will return undefined", sayHelloResult); 
// because the function does not return anything, so it returns undefined
// ------------------------------------------------------------

function test(arg: string | null | undefined): void {
  if (arg != null) { // because null is loosely equal to undefined
    // we can use !=null to check if a variable is not null or undefined
    // here, arg is NOT null or undefined
    console.log("test length", arg.length);
  } else {
    console.log("arg is null or undefined");
  }
}
test("hello");
test(null);
test(undefined);
// ------------------------------------------------------------

type MathOp = (a: number, b: number) => number;
const multiply: MathOp = (x, y) => x * y;
const subtract: MathOp = (x, y) => x - y;
console.log("multiply", multiply(3, 4)); // 12
console.log("subtract", subtract(10, 4)); // 6

const sum = function (a: number, b: number): number {
  return a + b;
};
console.log("sum", sum(4, 5)); // 9

const divide = (a: number, b: number): number => a / b;
console.log("divide", divide(10, 2)); // 5

// 2. Primitive types and inference

let isActive: boolean;
isActive = true;
isActive = false;

let age: number;
age = 30;
age = 31.5;

let userName: string;
userName = "John's";
userName = 'Doe"s';
userName = `Smith`;
userName = `Hello, ${userName}`;
console.log("userName", userName);

let inferredString = "This is a string";
let onOff = true;
let fullName = "Jan Doe";
let year = 2024;
let pi = 3.14;

// 3. Object types

let person: { name: string; age: number; isEmployed: boolean };
person = {
  name: "Tony Dinh",
  age: 23,
  isEmployed: true,
};
console.log("person.name", person.name);

const url = "https://example.com/api";

// 4. Any and unknown

let something: any;
something = 42;
something = "Hello";
something = true;
something = { name: "Alice" };
something = [1, 2, 3];
console.log("something", something);

let dontKnow: unknown;
dontKnow = 42;
dontKnow = "Hello";
dontKnow = true;
dontKnow = { name: "Bob" };
dontKnow = [4, 5, 6];
console.log("dontKnow", dontKnow);

// 5. Array types

let numbers: number[] = [1, 2, 3, 4, 5];
let strings: string[] = ["one", "two", "three"];
let booleans: boolean[] = [true, false, true];

let mixed: (number | string | boolean)[] = [1, "two", true, 3, "four", false];
let mixedArray: any[] = [1, "two", true, { name: "Charlie" }, [5, 6, 7]];
let numberInference = [1, 2, 3];
let stringInference = ["one", "two", "three"];
let booleanInference = [true, false, true];
let mixedInference = [1, "two", true];

const constArray = [1, 2, 3];
constArray[0] = 10;
console.log("constArray", constArray);

const constReadOnlyArray: readonly number[] = [1, 2, 3];
console.log("constReadOnlyArray", constReadOnlyArray);

mixedInference[1] = 2;
console.log("mixed", mixed);
console.log("mixedArray", mixedArray);

// 6. Tuple and enum

let userInfo: [string, number, boolean];
userInfo = ["Alice", 30, true];

enum dayOfWeek {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
}

const day1 = dayOfWeek.Monday;
const day2 = dayOfWeek.Tuesday;
const day3 = dayOfWeek.Wednesday;
console.log("days", day1, day2, day3);

// 7. Type alias and interface

type Car = {
  name: string;
  model: string;
  powerHorse: number;
  isHybrid?: boolean;
};

type Addidas = {
  color: string;
};

type MixCarAddidas = Car & Addidas;

let myCar: Car = {
  name: "Toyota",
  model: "Camry",
  powerHorse: 300,
  isHybrid: true,
};

let myCar2: Car = {
  name: "Honda",
  model: "Civic",
  powerHorse: 250,
};

let myMixCar: MixCarAddidas = {
  name: "BMW",
  model: "X5",
  powerHorse: 400,
  color: "Black",
};

type CarOrAddidas = Car | Addidas;
let myOr: CarOrAddidas = {
  name: "Ford",
  model: "Mustang",
  powerHorse: 450,
  color: "Red",
};

interface CarInterface {
  name: string;
  model: string;
  powerHorse: number;
  isHybrid?: boolean;
}

interface AddidasInterface {
  color: string;
}

let sample: CarInterface & AddidasInterface = {
  name: "Mazda",
  model: "CX-5",
  powerHorse: 250,
  color: "Blue",
};

type Answer = "Yes" | "No" | "Maybe";
let answer: Answer = "Yes";
console.log("answer", answer);

// 8. Operators and spread

let a = 1;
let b = 2;
console.log("a + b", a + b);
console.log("a++ + b", a++ + b);
console.log("++a + b", ++a + b);
console.log("string concat", "a" + "b");
console.log("repeat", "a".repeat(3));
console.log("a + b string", a + "b");

a += 2;
a -= 1;
a *= 2;
a /= 4;
a %= 2;
console.log("a final", a);

let aa = 1;
let bb = 1;
console.log("==", aa == bb);
console.log("===", aa === bb);

let myAge = 24;
console.log("age range", myAge >= 18 && myAge <= 65);

let isAdult = myAge >= 18 ? "Yes" : "No";
console.log("isAdult", isAdult);

let user3 = {
  name: "Alice",
  age: 30,
};

let user4 = {
  ...user3,
  isEmployed: true,
};
console.log("user4", user4);

let user5 = {
  ...user3,
  age: 31,
};
console.log("user5", user5);

// 9. Nullish coalescing and special values

let c: null = null;
let d = "Hello";
let result1 = c ?? "Default Value";
let result2 = d ?? "Default Value";
console.log("result1", result1);
console.log("result2", result2);

console.log("MAX_SAFE_INTEGER", Number.MAX_SAFE_INTEGER);
console.log("MIN_SAFE_INTEGER", Number.MIN_SAFE_INTEGER);
console.log("MAX_VALUE", Number.MAX_VALUE);
console.log("MIN_VALUE", Number.MIN_VALUE);
console.log("POSITIVE_INFINITY", Number.POSITIVE_INFINITY);
console.log("NEGATIVE_INFINITY", Number.NEGATIVE_INFINITY);
console.log("NaN", Number.NaN);

// 10. Never type

function throwError(message: string): never {
  throw new Error(message);
}

// 11. Class example

class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  printName(): void {
    console.log("Hello, " + this.name);
  }
}

const u1 = new User("Bob");
u1.printName();
