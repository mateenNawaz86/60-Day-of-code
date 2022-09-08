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

// document.write(fullName(firstName, lastName));

// Rest Operator
function sum() {
  console.log(arguments); // here arguments is a Reserved keyword
  let result = 0;
  for (let i in arguments) {
    result += arguments[i];
  }

  // document.write(`<br> ${result}`);
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

// using spread operator colapse the two different array
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

    //   document.write(`<h3>Manager Class</h3>
    //   Manager Name is: ${this.mangName} <br>
    //   Manager Status is: ${this.mangStatus} <br>
    //   Manager Salary is: ${totalSalary}`);
  }
}

// const managerObj = new Manager("Mateen");
// managerObj.info();

// Derived class
class Employee extends Manager {
  info() {
    // document.write(`<h3>Manager Class</h3>
    // Manager Name is: ${this.mangName} <br>
    // Manager Status is: ${this.mangStatus} <br>
    // Manager Salary is: ${this.mangSalary}`);
  }
}

const mangerObj = new Manager("Mateen", "Hr Manager", 76000);
// Manager info()
mangerObj.info();

// Employee info()
const empObj = new Employee("Wasim", "Senior Developer", 76000);
empObj.info();

// Promises --> simple promise
const prom_1 = new Promise((resolve, reject) => {
  if (true) {
    resolve("Successfully run!");
  } else {
    reject("Rejected due to some issues!");
  }
});

console.log(prom_1);

// fully functional promise
const prom_2 = new Promise((res, rej) => {
  if (true) {
    res("Successfully launched!");
  } else {
    rej("Rejected due to some issues!");
  }
});

prom_2
  .then((result) => {
    // console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// Perform Multiplication using promise
const prom_3 = (a, b) => {
  return new Promise((res, rej) => {
    let result = a * b;
    setTimeout(() => {
      if (result % 2 == 0) {
        res(`Your answer is even number : ${result}`);
      } else {
        rej("Your answer is odd number!");
      }
    }, 2000);
  });
};

// prom_3(5, 1)
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// Fetching jason data with the help of jQuery
const prom_4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    $.get("https://jsonplaceholder.typicode.com/photos", (data) => {
      // console.log(data);
    }).fail((error) => {
      reject(error);
    });
  }, 2000);
});

// prom_4
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// Working with Promise.all()
// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("First Promise successfully launched!");
//     resolve(12);
//   }, 1000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Second Promise successfully launched!");
//     resolve(42);
//   }, 2000);
// });

// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Third Promise successfully launched!");
//     resolve(11);
//   }, 3000);
// });

// let total = 1;
// Promise.all([p1, p2, p3])
//   .then((result) => {
//     for (let i in result) {
//       total *= result[i];
//     }
//     console.log(result);
//     console.log(`Total value is: ${total}`);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// AJAX
let txt = document.getElementById("demo");

function loadData() {
  // server request object
  let xhttp = new XMLHttpRequest();

  // here check the readyState
  xhttp.onreadystatechange = () => {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      // success
      console.log(xhttp.responseText);
      // txt.innerHTML = xhttp.responseText;
    } else if (xhttp.readyState == 4 && xhttp.status == 304) {
      // error
      txt.innerHTML = "File NOT Found!";
    }
  };

  // open file from server
  xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts", true);

  // send response to the client
  xhttp.send(null);
}

// Symbol Datatype
let s1 = Symbol("How");
console.log(s1);

// compare the values
let s2 = Symbol("How");

console.log(s1 == s2); // expected output = false

// return an error due to conversion of datatype
// console.log(s1);

// convsert Symbol value into string
// alert(s1.toString());
// alert(s1.description);

// use symbol value as a key in object
let gender = Symbol("gender");
const symObj = {
  name: "Graduate",
  age: 21,
  [gender]: "Male",
};

console.log(symObj);

console.log(symObj[gender]); // expected output = Male

// Working with Arrays
let iterat_array = ["Mateen", 21, "Programmer"];

// print out using loops
// 1. for loop
for (let i = 0; i < iterat_array.length; i++) {
  console.log(iterat_array[i]);
}

// 2. for....in loop
console.log("For.....in loop");
for (let i in iterat_array) {
  console.log(iterat_array[i]);
}

// for...of loop
console.log("for...of loop");
for (let i of iterat_array) {
  console.log(i);
}

// forEach loop
console.log("forEach....loop");
iterat_array.forEach((value) => {
  console.log(value);
});

// map()...method
console.log("Map...Method");
iterat_array.map((item) => [console.log(item)]);

// iterator() --> this function work as a for loop
let iterVal = iterat_array[Symbol.iterator]();

// return object key value pair and done key for next iteration
// console.log(iterVal.next());
// // return specific key value
// console.log(iterVal.next().value);
// console.log(iterVal.next());

// using while loop
console.log("Iterator array");
for (let i in iterat_array) {
  console.log(iterVal.next());
}

// string iterates
const str_iterat = "Hello, My name is Mateen";

let strIterat = str_iterat[Symbol.iterator]();
for (let i in str_iterat) {
  console.log(strIterat.next().value);
}

// Generator function
function* generatIt() {
  // console.log("Generator Function");
  yield "Generat Iteration No. 1";
  // yield used for pause the iteration
  yield "Generat Iteration No. 2";
  yield "Generat Iteration No. 3";
}

let gen = generatIt();
// console.log(gen.next());

for (let i of gen) {
  console.log(i);
}

// create generator function with array and sttring together
function* generatIt2() {
  yield "Generat Iteration No.1";
  yield ["Mateen", "Single", 21];
}

let gen2 = generatIt2();
console.log(gen2.next());
for (let [...i] of gen2) {
  // return the value of yield array
  console.log(...i);
}

function* generatIt3() {
  yield "Generat Iteration No.1";
  // return array value one by one
  yield* ["Mateen", "Single", 21];
}

let gen3 = generatIt3();
console.log(gen3.next());
for (let i of gen3) {
  // return the value of yield array
  console.log(i);
}

// Strict Mode
("use strict");
a_strict = 20;
console.log(a_strict);

// Error Handling --> all the code written inside the try block
let strTry = "Mateen Nawaz";
try {
  console.log(strTry);
  // console.log(n);
} catch (error) {
  console.log(error);
}

// const table_num = prompt("Enter a number for table: ");

// try {
//   for (let i = 1; i <= 10; i++) {
//     console.log(`${table_num} * ${i} = ${table_num * i}`);
//   }
// } catch (error) {
//   console.log(error);
// }

// const clickBtn = document.getElementById("click_btn");

// clickBtn.addEventListener("click", (event) => {

// });
