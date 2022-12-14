// Array practice
/*const arr = ["Mateen", "Nawaz", "Mirani"];
console.log(arr);

// 1. Declare array with new keyword
const arr1 = new Array("amir", "Nawaz", "Mirani");
console.log(arr1);
console.log(typeof arr1);

// find length of array
console.log(arr1.length);

// find last index
console.log(arr.length - 1);
console.log(arr[arr.length - 1]);

// create list of array element
const fruits = ["Banana", "Orange", "Apple", "Mango"];
// 1. add new element to array
fruits.push("Pine-Apple");
*/

// 2. add new element to array
/*fruits[fruits.length] = "Graps";

let text = "<ul>"; // create a un-order list
for (let i = 0; i < fruits.length; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";

document.getElementById("demo").innerHTML = text; 

// toString --> convert array item into atring
console.log(fruits.toString());

// join --> working same as toString()
console.log(fruits.join("*"));

// pop() --> delete last element of the array
console.log(fruits.pop());

// unshift() --> add new element in the bignning of the array
console.log(fruits.unshift("Dates"));
console.log(fruits);

// shift --> delete 1st element of the array
console.log(fruits.shift());
console.log(fruits);

// concat() --> merging two arrays to new one array
const names = ["Aamir", "Wasim", "Mateen", "aftab", "Mirani"];
const number = [1, 2, 3, 4];

console.log(names.concat(number));
*/

// splice() --> add new item to an array it return array after deleted items
/*
const newArray = ["potato", "Tomato", "Chili"];
console.log(newArray);
console.log(newArray.splice(1, 0, "Palak")); // 1 show index position , 0 show how much item should be deleted from an array
*/

// slice() --> return a new array start from specific index
//console.log(newArray.slice(1)); // 1 show where to start an array item
//console.log(names.slice(0, 2)); // 0 show start position 4 shows excepted this item

// sort() --> this method sort an array alphabeticaly
// console.log(newArray.sort());

// sort method for numbers
/*const numArray = [21, 78, 45, 1, 0, 91, 18];
console.log(
  numArray.sort(function (a, b) {
    // compare function define an alternate sort order
    return a - b;
  })
);
*/
// reverse() --> reverse the array item
// console.log(newArray.reverse());

// Math.max.apply() --> used to find highest number in array
/*const maxNum = (arr) => {
  return Math.max.apply(null, arr);
};

console.log(maxNum(numArray)); */

// home made method for finding highest number
/*const highNum = (arr) => {
  let len = arr.length;
  let max = -Infinity;
  while (len--) {
    if (arr[len] > max) {
      max = arr[len];
    }
  }
  return max;
};

console.log(highNum(numArray)); */
// Math.max.apply() --> used to find highest number in array
/*const minNum = (arr) => {
  return Math.min.apply(null, arr);
};

console.log(minNum(numArray)); */

// forEach() --> this method calls a function one for each array item
/*const forArray = ["Islamabad", "Lahore", "Peshawar", "Karachi", "Layyah"];

const forFun = (value, index, array) => {
  console.log(value); // print array item
  console.log(index); // print array index
  console.log(array); // print complete array
};

forArray.forEach(forFun);

// map() --> creates a new array for each array element
const mapNum = [32, 21, 5, 66, 91];

const mapFunc = (value, index, array) => {
  console.log(value * 2);
};

mapNum.map(mapFunc);

// filter() --> return those array element whose passes test

const filterFunc = (value) => {
  console.log(value > 21);
};

mapNum.filter(filterFunc);

// reduce() --> it return a single value from the entire array
const reduceFun = (total, value, index, array) => {
  return total + value;
};

console.log(`The sum is: ${mapNum.reduce(reduceFun)}`);
console.log(`The sum is: ${mapNum.reduceRight(reduceFun)}`);

// every() --> return only first element result after passes test
const everyFunc = (value) => {
  return value > 10;
};

console.log(mapNum.every(everyFunc));

// some() --> return array item after passes test
const someFun = (value) => {
  return value > 40;
};

console.log(mapNum.some(someFun));

// find() --> it return the first array element who passes the test
const findFunc = (value) => {
  return value > 20;
};

console.log(mapNum.find(findFunc));

// Array.from() --> return an array from string object
const fromArray = Array.from("Mateen");
console.log(fromArray);

// include() --> check whether element is in the array or not
const incArray = forArray.includes("Islamabad");
console.log(incArray);

const enteriesArray = forArray.entries();
console.log(enteriesArray);

// Working with Date object
const date = new Date();
console.log(date);

// getTime() --> return time in miliseconds
console.log(date.getTime());

// getFullYear() --> return only current year
console.log(date.getFullYear());

// getHours() --> return only current hour
console.log(date.getHours());

// getDay() --> return current day as a number
console.log(date.getDay());

// getDate() --> return current date
console.log(date.getDate());

// getMonth() --> return current month as a number
console.log(date.getMonth());

// getMinutes() --> return current time minutes
console.log(date.getMinutes());

// getSeconds() --> return current seconds
console.log(date.getSeconds());

// getMiliseconds() --> return current time miliseconds
console.log(date.getMilliseconds());

// working with Math method
console.log(Math.PI);

// returns Euler's number
console.log(Math.E);

// returns squre root of 2
console.log(Math.SQRT2);

// returns square root of 1/2
console.log(Math.SQRT1_2);

// returns natural logrithm of 2
console.log(Math.LN2);

// returns natural logrithm of 10
console.log(Math.LN10);

// returns logrithm of E base 2
console.log(Math.LOG2E);

// returns logrithm of E base 2
console.log(Math.LOG10E);

// return x value after round
console.log(Math.round(1.21));

// return x value random
console.log(Math.random(1));

// returns x up to it's nearest integer
console.log(Math.ceil(7.2));

// Returns x rounded down to its nearest integer
console.log(Math.floor(9.12));

// Returns the integer part of x
console.log(Math.trunc(3.21));

// returns 1 if number is positive
console.log(Math.sign(3));

// returns the value of x to the power of y
console.log(Math.pow(2, 3));

// returns the square root of x
console.log(Math.sqrt(9));

// returns the absolute positive value
console.log(Math.abs(-9.21));

// returns the highest value in the list of args
console.log(Math.max(9, 10, 12, 0, 2, 91));

// returns the lowest value in the list of args
console.log(Math.min(9, 10, 12, 0, 2, 91));

// returns the natural logrithm of x
console.log(Math.log(7));

// Ternary Operator
// let age = prompt("Enter an age! ");

// let result = age < 18 ? "Young boy!" : "Old Man!";
// alert(`Mateen is a ${result}`);

// for...in loop --> It is very useful in the object scanerio
const person = {
  fullName: "Mateen Nawaz",
  status: "single",
  age: 21,
};

for (let key in person) {
  console.log(key, person[key]);
}

// for...loop --> very helpful in the array scanerio
const name1 = ["John", "Mark", "Millre", "Boe"];

for (let index of name1) {
  console.log(index);
}

// set() --> create a new set
let newSet = new Set(["John", "Smith", "Miller"]);
console.log(newSet);

// values() --> returns a new iterator object
console.log(newSet.values());

// get() --> get key's from Map
const phal = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200],
]);

console.log(phal.get("apples"));
console.log(phal.delete("apples"));
console.log(phal.has("bananas"));

// forEach() --> call function for every map element
const vegs = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200],
]);

vegs.forEach(function (value, key) {
  console.log(value, key);
});

// string() --> convert number to string
let num = [123, 121, 434];
console.log(String(num));
console.log(typeof String(num[0]));

// 1. String conversion
// Explicit conversion
let con1 = 123;
console.log(String(con1));
console.log(typeof String(con1)); // returns a string

// Implicit conversion
console.log(con1 + "");
console.log(typeof (con1 + " ")); // returns a string

// 2. Boolean conversion

// Explicit conversion
console.log(Boolean(21)); // returns true

// Implicit conversion
console.log(!!21); // returns true

// 3. Numerci Conversion

// Explicit conversion
console.log(Number("32"));
console.log(typeof Number("32"));

// Implicit Conversion
console.log(+"12");
console.log(typeof +"12");

// Some Examples
console.log(true + false); // true = 1 , false = 0, 1+0 = 1
console.log(30 / "5"); // 30 = number, "5" = string , number + string = number
console.log("str" + 21 + 1); // str = string, 21=1= number, string + number = string
console.log(21 + 1 + "str"); // number + string = number
console.log([1] > null); // [1] = string  = 1, null = 0 1 > 0
console.log("true" == true); // "true" = string, true = boolean, string != boolean

// Working with objects
const course = {
  lecture: 1,
  title: "JavaScript",
  notes: {
    // nested object
    introduction: "Welcome to JS course",
  },
  enrolled: function () {
    // method inside course object
    console.log("Your are successfully enrolled in JS course!");
  },
};

console.log(course); // return course object
console.log(course.notes.introduction); // returns nested object notes introduction property value
course.enrolled();

// Factory function
const createObj = () => {
  return {
    lecture: 1,
    title: "JavaScript",
    notes: {
      // nested object
      introduction: "Welcome to JS course",
    },
    enrolled: function () {
      // method inside course object
      console.log("Your are successfully enrolled in JS course!");
    },
  };
};

console.log(createObj()); // returns the whole object inside the createObj function
console.log(createObj().notes.introduction); // return nested object introduction prop

// Constructor Function
function courseConstructor(lec, title) {
  this.lec = lec; // here this point the function args
  this.title = title;
  this.enrolled = function () {
    return "Hello welcome to the constructor world!";
  };
}

const obj1 = new courseConstructor(1, "JavaScript");
console.log(obj1);

console.log(obj1.enrolled());

// create key outside the constructor
obj1.section = 2;
console.log(obj1);

// Delete key outside the constructor using delete keyword
delete obj1.section;
console.log(obj1);

// Native code BTS for every declared function
const course_1 = Function(
  "lec",
  "title",
  `
this.lec = lec; 
  this.title = title;
  this.enrolled = function () {
    return "Hello welcome to the Native Constructor world!";
  };
`
);

const obj2 = new course_1(2, "OOP");
console.log(obj2);

console.log(obj2.enrolled());

// Premitive Datetype
let pre1 = 12;
// Pass by value
let pre2 = pre1;

// change pre1 value
pre1 = 30;

console.log(pre1);
console.log(pre2);

// Reference Datatype

const ref1 = {
  num: 43,
};

// Pass by memory location reference
const ref2 = ref1;
// change ref1 property value
ref1.num = 11;

console.log(ref1);
console.log(ref2);

// Spread Operator --> it copies all data from array or Object
const sprdObj = {
  fullName: "John Miller",
  age: 21,
};

console.log(sprdObj);
const copyObj = { ...sprdObj };
console.log(copyObj);
console.log(copyObj.fullName);

// Alternative of spread op in JS Engine
const altObj = Object.assign({}, sprdObj);
console.log(altObj);

// Spread Operator for arrays
const spArray = ["Mike", 32, "Student"];
const copyArray = [...spArray];
console.log(spArray);
console.log(copyArray);

// For....in loop with objects
for (let key in sprdObj) {
  console.log("For...in loop");
  console.log(key, sprdObj[key]);
}

// for....of loop
for (let key of Object.keys(sprdObj)) {
  console.log("For...of loop");
  console.log(key, sprdObj[key]);
}

// Object Exercise --> Using Constructor
function Exercise1(itemName, itemPrice, itemDiscount, itemCode) {
  this.itemName = itemName;
  this.itemPrice = itemPrice;
  this.itemCode = itemCode;
  this.itemDiscount = itemDiscount;
  this.calcDiscount = function () {
    return (itemPrice * itemDiscount) / 100;
  };
}

const productObj = new Exercise1("Fair & Lovely", 18, 10, "M21");
console.log(productObj);

console.log(productObj.calcDiscount());

// Obj Exercise --> using Factory function
const prodFact = (name, price, discount, code) => {
  return {
    itemName: name,
    itemPrice: price,
    itemDiscount: discount,
    itemCode: code,
  };
};

console.log(
  prodFact({
    itemName: "Fair & Lovely",
    itemPrice: 18,
    itemDiscount: 10,
    itemCode: "M21",
  })
);

// Simple object
const product = {
  itemName: "Fair & Lovely",
  itemPrice: 18,
  itemDiscount: 10,
  itemCode: "M21",
};

console.log(product);

// Declaring a class
class Product {
  constructor(itemName, itemPrice, itemDiscount, itemCode) {
    this.itemName = itemName;
    this.itemPrice = itemPrice;
    this.itemDiscount = itemDiscount;
    this.itemCode = itemCode;
  }
  get getItemPrice() {
    return this.itemPrice;
  }

  set setItemPrice(value) {
    this.itemPrice = value;
  }

  discountCalc() {
    return (this.itemPrice * this.itemDiscount) / 100;
  }
}

const classObj = new Product("Perfume", 599, 14, "PR91");
console.log(classObj);
console.log(typeof classObj);

console.log(classObj.getItemPrice);
console.log(classObj.discountCalc());
// console.log(classObj.setItemPrice(91000));

// Class Declaring another way
const Product_1 = class {
  constructor(itemName, itemPrice, itemDiscount, itemCode) {
    this.itemName = itemName;
    this.itemPrice = itemPrice;
    this.itemDiscount = itemDiscount;
    this.itemCode = itemCode;
  }
};
const classObj2 = new Product("Bike", 89000, 21, "Bk12");
console.log(classObj2);

// Working with sub-classes
class Parent {
  constructor(fullName) {
    this.fullName = fullName;
  }
  getName() {
    return this.fullName.concat(" is a Parent!");
  }
}

const parent = new Parent("Miller");
console.log(parent.getName());

class Child extends Parent {
  super(fullName) {
    // super is constructor of parent class
    this.fullName = fullName;
  }

  getName() {
    return this.fullName + " is a child!";
  }
}

const child = new Child("John Miller");
console.log(child.getName());

// Create a Bike class
class Bike_1 {
  constructor(bikeCompany, bikeModel, bikePrice) {
    this.bikeCompany = bikeCompany;
    this.bikeModel = bikeModel;
    this.bikePrice = bikePrice;
  }

  getBikeCompany() {
    return this.bikeCompany.concat(" is a bike company name!");
  }
}

const bikeObj = new Bike_1("Honda", "CD70", 98000);
console.log(bikeObj.getBikeCompany());
// Excepted Output = Honda is a bike company name!

// Create a Model class
class Model_1 extends Bike_1 {
  super(bikeCompany) {
    this.bikeCompany = bikeCompany;
  }

  getBikeCompany() {
    return `${this.bikeCompany} is inherited from Bike class!`;
  }
}

const modelObj = new Model_1("Honda");
console.log(modelObj);

console.log(modelObj.getBikeCompany());
// Excepted output --> Honda is inherited from Bike class!

// Bike class
class Bike {
  static bikes() {
    return "I have 4 bikes";
  }
}

// Model class
class Model extends Bike {
  static logDescription() {
    return `${super.bikes()} which are all so expensive.`;
  }
}

const result = Model.logDescription();
console.log(result);
// Excepted output --> I have 4 bikes which are all so expensive.

// store objects in array
const objArray = [
  {
    fullName: "Mark Miller",
    age: 21,
  },
  {
    fullName: "John Smith",
    age: 27,
  },
  {
    fullName: "Marry",
    age: 18,
  },
];

console.log(objArray.find((element) => element.fullName === "Marry"));

// Concat two arrays
const conArr1 = [0, 1, 2, 3, 4, 5];
const conArr2 = [6, 7, 8, 9];
const resultArray = conArr1.concat(conArr2);
const spreadConcat = [...conArr1, ...conArr2];
console.log(resultArray);
console.log(spreadConcat);

// Slice() --> it except two parameter start & end, if we enter only 1 parameter then it remove all the indexs from this index before

console.log(resultArray.slice(3, 7));

// print array value using loop
for (let i = 0; i < conArr1.length; i++) {
  console.log(conArr1[i]);
}

// for of loop
for (let index of conArr2) {
  console.log(index);
}

conArr1.forEach((value) => {
  console.log(value);
});

// join() --> this method convert array element into one string
const joinArray = ["M", "a", "t", "e", "e", "n"];
console.log(joinArray.join(""));
const joinRes = joinArray.join("");

// splice() --> it gives alternative result of join()
console.log(joinArray.splice(""));

// Working with map() method
const random_data = [
  {
    names: "Mateen",
    height: "1.65",
    mass: "65",
    eyeColor: "Gray",
    gender: "Male",
  },
  {
    names: "Wasim",
    height: "1.32",
    mass: "43",
    eyeColor: "black",
    gender: "Female",
  },
  {
    names: "Aamir",
    height: "1.12",
    mass: "98",
    eyeColor: "light-brown",
    gender: "Male",
  },
  {
    names: "Aftab",
    height: "1.6",
    mass: "34",
    eyeColor: "black",
    gender: "Female",
  },
];

// Get an array of all the names
const allNames = random_data.map((item) => item.names);
console.log(allNames);

// Get an array of objects with just name and height properties
const heightNames = random_data.map((item) => {
  return { name: item.names, height: item.height };
});

console.log(heightNames);

// Get the total height of all the array element
const totalHeight = random_data.reduce((prevHeight, currentItem) => {
  return prevHeight + Number(currentItem.height);
}, 0);

console.log(totalHeight);

// Get data with mass grater than 100
const mass = random_data.filter((item) => Number(item.mass) > 50);
console.log(mass);

// Get all Male characters
const allMales = random_data.filter((item) => item.gender === "Male");
console.log(allMales);

// Sort by Gender
const sortedGender = random_data.sort((item1, item2) => {
  if (item1.gender < item2.gender) {
    return -1;
  }
  if (item1.gender > item2.gender) {
    return 1;
  }

  return 0;
});
console.log(sortedGender);

// Sort by Names

const sortedNames = random_data.sort((item1, item2) => {
  if (item1.names < item2.names) {
    return -1;
  }
  if (item1.names > item2.names) {
    return 1;
  }

  return 0;
});

console.log(sortedNames);

// Does every character have mass more than 40?
const haveMass = random_data.every((item) => Number(item.mass) > 40);
console.log(haveMass);

// Does every character have blue eyeColor?

const haveBlueEyeColor = random_data.every((item) => item.eyeColor === "Blue");
console.log(haveBlueEyeColor);

// Is there at least one Male character?
console.log(random_data.some((item) => item.gender));

// Is there at least one character taller than 1.6M?

const haveTallerThan1M = random_data.some((item) => item.heightNames > "1.5");

console.log(haveTallerThan1M);

// Default value
var defName = "Mateen";
console.log(window.defName); // access through global window object

// Global scope
const firstFun = () => {
  var firstName = "Mateen"; // global scope
  console.log(firstName);
  const secoundFun = () => {
    var firstName = "Nawaz"; // local/function scope
    console.log(firstName);
  };
  secoundFun();
};

firstFun();
*/

// working with var keyword --> variable decalre with var keyword value update when ever we change the value
/*var x = 1;
{
  var x = 10;
  console.log(x);
}

console.log(x);

// Lexical scope
function parent_1() {
  var fullName = "M-Nawaz";

  function child() {
    console.log(fullName);
    function innerChild() {
      console.log(fullName);
    }
    innerChild();
  }
  child();
}

parent_1();
*/
// Hoisting
/*var foo = "Foo";
var baz = "baz";

function sayHello() {
  console.log(foo);
  baz = "baz1"; // baz value update to 'baz1'
}

sayHello();
console.log(baz);*/

// variables declared under the function is run even before initialized

/*sayHello(); // function code run due to different E-context

console.log(baz); // variable undefined before initialization
var foo = "Foo";
var baz = "baz";

function sayHello() {
  var funVar = "Mateen";
  console.log(funVar);
}
*/
// variable declared with let keyword
/*let foo_1 = "foo-1";
let max = "foo";

function sayHello_1() {
  console.log(foo_1);
  let max = "Mateen Nawaz"; // variable even with the same name have different scope due to let keyword
  console.log(max);
}

sayHello_1();
console.log(max);*/

// Lexical declaration
/*sayHello_1(); // throughs an error bcoz variable declared with let keyword is not accessible before initialization
console.log(max_1);
let foo_11 = "foo-1";
let max_1 = "foo";

function sayHello_1() {
  console.log(foo_11);
  let max = "Mateen Nawaz";
  console.log(max);
}*/

// function working well
/*var var_1 = "variable_1";
var bazz = "bazz-1";

var varFunction = function () {
  console.log(var_1);
  bazz = "baz1"; // bazz value update
};

varFunction();
console.log(bazz);*/

/*varFunction(); // throughs an error bcoz if we stored function in variable is act like a variable but error is not a function!
console.log(bazz); // it return undefined
var var_1 = "variable_1";
var bazz = "bazz-1";

var varFunction = function () {
  console.log(var_1);
  bazz = "baz1"; // bazz value update
};

console.log(text); // return an error can't accessible lexical declaration before initialization
let text = "foo";
*/

// Working with this keyword
/*const counter = {
  count: 0,
  increment: function () {
    return counter.count++; // working just for counter object
  },
};

console.log(counter);
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());

// create object with Factory function

let counter_1 = new createCounter();
let counter_2 = new createCounter();
function createCounter() {
  return {
    count: 0,
    increment: function () {
      //counter_1.count++; // target the specific object
      this.count++; //target the given objects
      console.log(this); // target the given specific objects
    },
  };
}

counter_1.increment();
counter_1.increment();
counter_1.increment();
counter_2.increment();
counter_2.increment();
console.log(counter_1);
console.log(counter_2);
*/
// create object with constructor function
/*function Car(name) {
  this.name = name;
  this.start = function () {
    console.log(this.name.concat(" started!"));
    console.log(this); // target the given object
  };
}

const civic = new Car("Honda Civic");
console.log(civic);
civic.start();

// without new keyword this target the window object
const swift = Car("swift");
//  console.log(swift.start()); // error undefined bcoz find no swift method inside the window object
console.log(name);
*/

// increment count with simple function
/*var count = 0;
function counterUpdate() {
  this.count++; // target the window object where it find the increment function

  console.log(this); // target the window object
}

counterUpdate();
counterUpdate();
counterUpdate();
counterUpdate();
console.log(count);

console.log(this); // target the window object
*/
