// variable declaration

// 1. var --> global scope declaration redeclared & assign able
var x = 10;
console.log(x);

// inside block
if (true) {
  console.log(x);
  x = 20;
}

console.log(x);

// 2. let --> local/block scope declaration re-assign able but we can't redeclared it!
let str = "Hello, My name is Mateen!";
console.log(str);

// inside block
if (true) {
  str = "Hey! My name is Mirani";
  console.log(str);
  let str1 = "Hello";
}

// console.log(str1) // not accessible

// 3. const --> block scope declaration not reassignable & not redeclared it!!

const name = "Hey! Me from Pakistan!";
console.log(name);

if (true) {
  console.log(name);
  //   name = "Hey! My name is Mateen!";
  //   console.log(name); // not redeclared it
}

// Template litrals --> alternate of concat
let firstName = "Mateen";
let lastName = "Mirani";
console.log(firstName + " " + lastName);

console.log(`My name is ${firstName} ${lastName}`);

// Arrow function
const fullName = (firstName, lastName) => {
  return ` Hello guys my name is ${firstName} ${lastName}`;
};

document.write(fullName(firstName, lastName));

// Rest Operator
function sum() {
  console.log(arguments);
  let result = 0;
  for (let i in arguments) {
    result += arguments[i];
  }

  document.write(`<br> ${result}`);
}

sum(12, 21, 32, 1, 2);

// Doing same Manipulation using rest operator & for....of loop
const sum1 = (str, ...args) => {
  let sum = 0;
  for (let i of args) {
    sum += i;
  }
  return `${str} ${sum}`;
};

console.log(sum1(" The sum is: ", 3, 10, 42, 1));

// Sum using Rest operator & for...in loop

const sum2 = (str, ...args) => {
  let sum = 0;
  for (let i in args) {
    sum += args[i];
  }
  return `${str} ${sum}`;
};

console.log(sum2(" The sum is:: ", 12, 12, 11, 10));

// Spread Operator

const sum3 = (str, ...params) => {
  let sum = 0;
  for (let i of params) {
    sum += i;
  }
  return `${str} ${sum}`;
};

let args = [1, 2, 3, 4, 5, 6];
console.log(sum3(" The sum is: ", args)); // in this condition it will return all values as single params

console.log(sum3(" The sum is: ", ...args));

// spread operator use with arrays
let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6, 3, 4];

let arr3 = [...arr1, ...arr2];
console.log(arr3);

// Cloning array
let arr22 = arr1;
console.log(arr22);

// array duplication
let arr33 = [...arr2];
console.log(arr33);

// Spread Operator with objects
const obj1 = {
  fullName: "Mateen",
  age: 21,
};

// object Cloning
const obj2 = obj1;
console.log(obj2);

// Object duplication
const obj22 = { ...obj1 };
console.log(obj22);

// object concatination
const obj33 = {
  qaulification: "Graduate",
  status: "single",
};

const obj44 = { ...obj1, ...obj33 };
console.log(obj44);
