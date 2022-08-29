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

// Object litrals --> before ES6
let fName = "Mateen";
let lName = "Mirani";

const objj1 = {
  firstName: fName,
  lastName: lName,
};

console.log(objj1);

// ES6 --> using object litrals

const objj2 = {
  fName,
  lName,
};

console.log(objj2);

// Methods
const objj3 = {
  firstName: fName,
  lastName: lName,
  detail: function () {
    return "My name is " + this.firstName + " " + this.lastName + ".";
  },
};

console.log(objj3.detail());

// Methods in ES6
const obbj1 = {
  firstName: fName,
  lastName: lName,
  detail() {
    return `My name is ${this.firstName} ${this.lastName}.`;
  },
};

// both return same results
console.log(obbj1.detail());
console.log(obbj1["detail"]());

// Array Destructuring --> before ES6
const arrDes = ["Mateen", 21, "Layyah"];

console.log(arrDes[0]);
console.log(arrDes[1]);
console.log(arrDes[2]);

// ES6
const [namee, age, city] = arrDes;
console.log(namee, age, city);

const array_1 = [21, "Layyah", true, "Mateen"];
let array_11 = array_1; // array Cloning
console.log(array_11);

let a, b, c;
[a, b, c] = array_11;
console.log(a, b, c);

let new_arr = [21, "Layyah", true, ["Mateen", 34]];
[a, b, c, [d, e]] = new_arr;
console.log(d, e);

// Object Destructuring

let objDes = {
  k: "My name",
  l: 20,
  m: "My city",
};

const objDes_1 = objDes; // Cloning
console.log(objDes_1);

let { k, l, m } = objDes;
let { k: nameee, l: agee, m: cityy } = objDes;
console.log(k, l, m);
console.log(nameee);
console.log(agee);
console.log(cityy);

// OOP concepts in ES6
// 1. constructor method
class Person {
  constructor(name, passion) {
    console.log("Constructor Method");
    this.name = name;
    this.passion = passion;
  }
}

const const_1 = new Person("Mateen", "programming");
console.log(const_1);

// 2. Prototype method
class ProtClass {
  message() {
    console.log("Hello, I have 4 bikes");
  }
}

const protObj = new ProtClass();
protObj.message();

// 3. static method
class StaticClass {
  static msg() {
    console.log("Hello, I'm from static class!");
  }
}

StaticClass.msg();

// Base class
class Manager {
  constructor(fullName, status, salary) {
    this.mangName = fullName;
    this.mangStatus = status;
    this.mangSalary = salary;

    // after obj creation constructor automatically calls
    console.log("Constructor Method");
  }

  info() {
    let travelAllownce = 6400;
    let phoneAllownce = 1200;
    let totalSalary = this.mangSalary + travelAllownce + phoneAllownce;

    document.write(`<h3>Manager Class</h3> 
    Manager Name is: ${this.mangName} <br>
    Manager Status is: ${this.mangStatus} <br>
    Manager Salary is: ${totalSalary}`);
  }
}

// const managerObj = new Manager("Mateen");
// managerObj.info();

// Derived class
class Employee extends Manager {
  info() {
    document.write(`<h3>Manager Class</h3> 
    Manager Name is: ${this.mangName} <br>
    Manager Status is: ${this.mangStatus} <br>
    Manager Salary is: ${this.mangSalary}`);
  }
}

const mangerObj = new Manager("Mateen", "Hr Manager", 76000);
// Manager info()
mangerObj.info();

// Employee info()
const empObj = new Employee("Mateen", "Hr Manager", 76000);
empObj.info();
