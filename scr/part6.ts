// Today date: 14/10/2025
// ***** Regular expression and use it in dynamic data testing

let regex = /^ORD-[0-9]{8}-[0-9]{5}$/g; // letter 'g' is used for matchAll

// or we can use /i for case-insensitive flag
// which means /hello/i would match HeLlo heLLO ...
let orderId = "ORD-12345678-12345";
// use match() or search()
orderId.match(regex);
orderId.matchAll(regex);

// If want to test a string would match a regex, we can use test()
console.log(regex.test(orderId));

// Method with array
let fruits = ["Watermelon", "Coconut", "Dragonfruit"];
// fruits.length
// push: add more elements
fruits.push("Mango");
// pop: erase the last element in that array
fruits.pop(); // erase "Mango" (can only erase 1 element one at the time)
// unshift: add elements at the beginning of that array
fruits.unshift("Mango");
// shift: erase 1 element 

// delete 
delete fruits[2]; // turn the 3rd element into empty

// splice(a,b) // exluding element a to element b (including element a)

// concat(): just like push, but it does not store it into the variable itself

// join(): used to joint element in array with certain character (by default is ,)

// flat(): use to 'flat' a sub-array
let names = ["Tai", "Tony", ["Dung", "MIW"], "Bruh"];
names.flat(); // 

// indexOf
fruits.indexOf("Mango");
// includes
fruits.includes("Mango");

// find(): find something with custom filter logic (but only find fist)
// we can use filter(): to return all that is matched
let result = fruits.filter((value: string, index: number) => {
  return value.includes("a");
});
console.log(result);
// sort() and reverse() 
fruits.sort();

// forEach: instead of using for loop, reducing time
fruits.forEach(value => {
  console.log(value)
});

// map(): là một phương thức của mảng (array) trong JavaScript, dùng để tạo một mảng mới bằng cách áp dụng một hàm (gọi là hàm gọi lại) cho từng phần tử của mảng gốc mà không làm thay đổi mảng ban đầu
// map() = forEach + xử lý logic thêm tùy biến của mình 
let newFruits = fruits.map(value => {
  return value.trim(); // for example, here we trim the white space in the given value
});

// flatMap, ...
