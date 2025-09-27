enum direction {
  up,
  down,
}
console.log(direction.up); // 0
console.log(direction.down); // 1
console.log(direction[0]); // "up"
console.log(direction[1]); // "down"
console.log(direction); // { '0': 'up', '1': 'down', up: 0, down: 1 }

function log(): void {
  console.log("hi");
}

log(); // "hi"

null == undefined; // true
null === undefined; // false

function test(arg: string | null | undefined) {
    if (arg != null) {
        // here, arg is NOT null or undefined
        console.log(arg.length); // safe to access length
    } else {
        console.log("arg is null or undefined");
    }
}

test("hello");

function sayHello() {
    console.log("Hello, world!");
}
const result = sayHello(); // "Hello, world!"
console.log(result); // undefined

console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // 5e-324
console.log(Number.POSITIVE_INFINITY); // Infinity
console.log(Number.NEGATIVE_INFINITY); // -Infinity
console.log(Number.NaN); // NaN

// How to use type alias for function types?
type MathOp = (a: number, b: number) => number;
const multiply: MathOp = (x, y) => x * y; 
// Why we use const here?
// To prevent reassignment and ensure the function reference remains constant.
const subtract: MathOp = (x, y) => x - y;
console.log(multiply(3, 4)); // 12
console.log(subtract(10, 4)); // 6

// ***** Explicit types in TypeScript (clearly defining the type of a variable)
// We use explicit types when we want to inherit a variable without initializing it
let isActive: boolean;
isActive = true;
isActive = false;

let age: number;
age = 30;
age = 31.5;

let name: string;
name = "John's"; // using double quotes when we want to use single quotes inside the string
name = 'Doe"s'; // using single quotes when we want to use double quotes inside the string

name = `Smith`; // using backticks for template literals
name = `Hello, ${name}`; // using backticks for template literals
console.log(name); // Hello, Smith

// ***** Inference in typescript
let inferredString = "This is a string"; // inferred as string
// inferredString = 42; // Error: Type 'number' is not assignable to type 'string'

let onOff = true; // inferred as boolean
let fullName = "Jan Doe"; // inferred as string
let year = 2024; // inferred as number
let pi = 3.14; // inferred as number

// Is there any difference between Boolean and boolean, Number and number, String and string?
// Yes, there is a difference. 'boolean', 'number', and 'string' are primitive types in TypeScript, while 'Boolean', 'Number', and 'String' are their corresponding object wrapper types. It's generally recommended to use the primitive types for type annotations.

// ***** Object types in TypeScript
let person: { name: string; age: number; isEmployed: boolean };
person = {
  name: "Tony Dinh",
  age: 23,
  isEmployed: true,
};
console.log(person.name);

let employee = {
  name: "Grandpa",
  age: 82,
  isEmployed: false,
}

const url = "https://example.com/api";

// ***** any type in TypeScript --> use for dynamic content
// Avoid using 'any' type as much as possible because it defeats the purpose of TypeScript's type safety
// Use 'unknown' type instead of 'any' when you want to accept any type but still want to enforce type checking later
let something: any;
// something can be assigned to any type
something = 42;
something = "Hello";
something = true;
something = { name: "Alice" };
something = [1, 2, 3];
console.log(something); // [1, 2, 3]

let dontKnow: unknown;
dontKnow = 42;
dontKnow = "Hello";
dontKnow = true;
dontKnow = { name: "Bob" };
dontKnow = [4, 5, 6];
console.log(dontKnow); // [4, 5, 6]

// ***** Array types in TypeScript
let numbers: number[] = [1, 2, 3, 4, 5];
let strings: string[] = ["one", "two", "three"];
let booleans: boolean[] = [true, false, true];

// ***** Mixed array types in TypeScript
let mixed: (number | string | boolean)[] = [1, "two", true, 3, "four", false];
let mixedArray: any[] = [1, "two", true, { name: "Charlie" }, [5, 6, 7]];
let numberInference = [1, 2, 3]; // inferred as number[]
let stringInference = ["one", "two", "three"]; // inferred as string[]
let booleanInference = [true, false, true]; // inferred as boolean[]
let mixedInference = [1, "two", true]; // inferred as (string | number | boolean)[]

const constArray = [1, 2, 3]; // inferred as [1, 2, 3]
constArray[0] = 10; // valid: it can still change the values eventhough it's a const
console.log(constArray); // [1, 2, 3]

const constReadOnlyArray: readonly number[] = [1, 2, 3];
// we have to declare the type as readonly number[] to make it a read-only array
// constReadOnlyArray[0] = 10; // Error: Index signature in type 'readonly number[]' only permits reading
console.log(constReadOnlyArray); // [1, 2, 3] 

mixedInference[1] = 2; // valid
console.log(mixed); // [1, "two", true, 3, "four", false]
console.log(mixedArray); // [1, "two", true, { name: "Charlie" }, [5, 6, 7]]
// When will we use mix array types while testing UI?
// For example: we test validation of form inputs, where the input values can be of different types (string, number, boolean) and we want to ensure that the form handles them correctly.


// ***** never types in TypeScript
// this one usually used for functions that never return (throw error or infinite loop)
function throwError(message: string): never {
  throw new Error(message);
}
let myNever: never;
// myNever = 123; // Error: Type 'number' is not assignable to type 'never'
// myNever = "hello"; // Error: Type 'string' is not assignable to type 'never'
// myNever = true; // Error: Type 'boolean' is not assignable to type 'never'

// Setting a default value for a variable for using ?? operator
let c = null;
let d = "Hello";
let result1 = c ?? "Default Value"; // "Default Value"
let result2 = d ?? "Default Value"; // "Hello"
console.log(result1);
console.log(result2);
// The nullish coalescing operator (??) returns the right-hand operand when the left-hand operand is null or undefined, otherwise it returns the left-hand operand.

// 25/09/2025
// ***** Tuple types in TypeScript
// What is the difference between array and tuple?
// An array can have any number of elements of the same type, while a tuple has a fixed number of elements with specific types.
// Arrays can be pushed or popped, while tuples cannot be changed in size after they are created.
// Tester rarely uses tuple
let userInfo: [string, number, boolean];
userInfo = ["Alice", 30, true]; // valid
// userInfo = [30, "Alice", true]; // Error: Type 'number' is not assignable to type 'string'

// ***** Enum types in TypeScript
enum dayOfWeek {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday"
}

let day1 = dayOfWeek.Monday; // "Monday"
let day2 = dayOfWeek.Tuesday; // "Tuesday"
let day3 = dayOfWeek.Wednesday; // "Wednesday"
console.log();
// Why we use enum?
// Enums are used to define a set of named constants, making the code more readable and maintainable.

// ***** type alias in TypeScript
// It's a custom data type that we define ourselves

// Is this the same as GraphQL type?
// No, GraphQL type is used to define the structure of data in a GraphQL schema, while TypeScript type alias is used to create a new name for a type in TypeScript code.
// But they both serve the purpose of defining the shape of data.

// Type aliases are used to create a new name for a type, making the code more readable and easier to manage, especially for complex types.
// Automation API is a good example of using type alias
// However automation UI test rarely uses type alias
type Car = {
  name: string
  model: string
  powerHorse: number 
  isHybrid?: boolean // ? means this property is optional. Else it's required
}
// After that, we can use Car as a type for variables or function parameters
// It's useful when we need to add more properties to the type later
// Instead of changing the type everywhere, we just change it in one place
// It's also useful when we want to use the same type in multiple places

let myCar: Car = {
  name: "Toyota",
  model: "Camry",
  powerHorse: 300,
  isHybrid: true
}

let myCar2: Car = {
  name: "Honda",
  model: "Civic",
  powerHorse: 250
}
console.log();

// ***** mixed type alias
type Addidas = {
  color: string
}

type mixCarAddidas = Car & Addidas // & means intersection (AND)
let myMixCar: mixCarAddidas = {
  name: "BMW",
  model: "X5",
  powerHorse: 400,
  color: "Black"
}
// Therotically, we can intersect more than 2 types. But who does that anyway? :)

type or = Car | Addidas // | means union (OR)
let myOr: or = {
  name: "Ford",
  model: "Mustang",
  powerHorse: 450,
  color: "Red"
}
// It's the same as mixCarAddidas, but we can choose to have either Car or Addidas type

// ***** interface in TypeScript
// Interface is similar to type alias, but it's more powerful
// Use interface to define the shape of an object, just like type alias
// interface = type alias + more features
// -->  We can use interface to define the shape of an object
// --> We can also use interface to define the shape of a function
// --> We can also use interface to define the shape of an array
// --> But we can also use interface to define the shape of a class

// remember that interface doesn't need the equal sign (=)
interface CarInterface {
  name: string
  model: string
  powerHorse: number
  isHybrid?: boolean
}

interface AddidasInterface {
  color: string
}

let sample: CarInterface & AddidasInterface = {
  name: "Mazda",
  model: "CX-5",
  powerHorse: 250,
  color: "Blue"
}

type answer = "Yes" | "No" | "Maybe" // union type alias
// But we cannot do this with interface
// Instead, we can use enum
// For interface, 

// ***** Operator in TypeScript
// TypeScript supports all the operators that JavaScript supports
// Arithmetic operators: +, -, *, /, %, ++, --
// What else?
// Assignment operators: =, +=, -=, *=, /=, %=
// Comparison operators: ==, ===, !=, !==, >, <, >=, <=
// Logical operators: &&, ||, !
// Ternary operator: ? :
// Nullish coalescing operator: ??
// Optional chaining operator: ?.
// Spread operator: ...
// Rest operator: ...
let a = 1;
let b = 2;
(a++) + b; // 1 + 2 = 3, then a = 2
(++a) + b; // a = 3, then 3 + 2 = 5
"a" + "b"; // "ab"
"a".repeat(3); // "aaa"
a + "b"; // "3b"
a += 2; // a = a + 2 = 5
a -= 1; // a = a - 1 = 4
a *= 2; // a = a * 2 = 8
a /= 4; // a = a / 4 = 2
a %= 2; // a = a % 2 = 0

let aa = 1;
let bb = 1;
console.log(aa == bb); // true
console.log(aa === bb); // true

let myAge = 24;
console.log(myAge >= 18 && myAge <= 65); // true

// Ternary operator
let isAdult = myAge >= 18 ? "Yes" : "No"; // "Yes"
console.log(isAdult); // "Yes"

// Extract operator ...
let user3 = {
  name: "Alice",
  age: 30
}

let user4 = {
  ...user3,
  isEmployed: true
} 
console.log(user4); // { name: "Alice", age: 30, isEmployed: true }
// It can override the properties of the original object
let user5 = {
  ...user3,
  age: 31
}
console.log(user5); // { name: "Alice", age: 31 }
// But the other way around will not work
// let user6 = {
//   age: 32,
//   ...user3
// }
// console.log(user6); // Error

// Date type in TypeScript
