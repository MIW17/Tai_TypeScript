// Today date: 2024-06-27
// Part 5: 
let name1 = 'Test With "Me"'; // by this way, we can add double quotes in the string
let name2 = "Test With Me";
let name3 = `Name 1: ${name1}, Name 2: ${name2}`;
// By using this, it will reduce the complexity of using quotes in the string
let name4 = "Name 1: " + name1 + ", Name 2: " + name2; // old way of concatenation

console.log(name3); // Name 1: Test With "Me", Name 2: Test With Me

name4.length; // this is a property, not a method, so we don't use parentheses
// it's not length() x
name4.charAt(0);
// use case: take the letter in ticket code
// flight ticket code: 12345 A FC ...
// .concate(): to concatenate two strings

// .trim(): to remove whitespace from both ends of a string
// --> use case in UI testing: when we get text from a web element,
// there might be extra spaces before or after the text
// so when we assert the text, it might fail because of the extra spaces
// trimEnd() and trimStart() are also available | 
// trimLeft() and trimRight() are deprecated 
let nameContainsSpace = "   Hello World   ";
console.log(nameContainsSpace.trim());

// .replace(): to replace a part of the string with another string
let nameToBeReplaced = "Tony Dinh";
console.log(nameToBeReplaced.replace("Dinh", "Stark")); // Tony Stark
// But it can only replace the first occurrence
// We can use replaceAll() to replace all occurrences

// .toLowerCase() and .toUpperCase(): to convert the string to lower case or upper case
// use case in UI testing: when we want to compare two strings

// toLocaleLowerCase() and toLocaleUpperCase(): to convert the string to lower case or upper case
// What's the difference between toLowerCase() and toLocaleLowerCase()?
// toLocaleLowerCase() considers the locale of the environment
// e.g: in Turkish, the lowercase of "I" is "ı" (dotless i)
// testing applying i18n: Internationalization standard

// split(): 
// UI testing: ticketing domain
let nameToBeSplit = "Dinh Tan Tai";
console.log(nameToBeSplit.split(" ")); // [ 'Dinh', 'Tan', 'Tai' ]

// substring():
let nameToBeSubString = "Dinh Tan Tai";
console.log(nameToBeSubString.substring(1,5)) // it will included the first character
// For example, in ticketing we want to pick some letters
let ticketCode = "VJ357"
console.log(ticketCode.substring(0,2)); // "VJ"

// includes();
// To check whether a string contains something we want

// search();
// it would return the index

// match() is frequently used because it would return every info
let orderId = "ORD-2025-123456789";
console.log(orderId.match("1")); 
// ['1', index: 9, input: 'ORD-2025-123456789', groups: undefined]

console.log(Array.from(orderId.matchAll(/1/g)).forEach(v => console.log(v)));


const rawData = "  ngUYỄN VAN a;25;devELOPER   ";
// Erase white space
let deleteSpaceString = rawData.trim(); 
console.log(deleteSpaceString);
// Split string 
let splitString = deleteSpaceString.split(";");
console.log(splitString); 

let normalizedString = splitString[0]?.toLowerCase().split(" "); // ["nguyen", "van", "a"]

if (normalizedString) {
	for (let i = 0; i <= normalizedString.length; i++) {
    let word = normalizedString[i];
    if (word) {
      normalizedString[i] = word.replace(word.charAt(0),word.charAt(0).toUpperCase());
    }
	}
}
console.log(normalizedString?.join(" "));