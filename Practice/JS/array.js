// Array practice
const arr = ["Mateen", "Nawaz", "Mirani"];
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

// 2. add new element to array
/*fruits[fruits.length] = "Graps";

let text = "<ul>"; // create a un-order list
for (let i = 0; i < fruits.length; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";

document.getElementById("demo").innerHTML = text; */

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

// splice() --> add new item to an array it return array after deleted items
const newArray = ["potato", "Tomato", "Chili"];
console.log(newArray);
console.log(newArray.splice(1, 0, "Palak")); // 1 show index position , 0 show how much item should be deleted from an array

// slice() --> return a new array start from specific index
console.log(newArray.slice(1)); // 1 show where to start an array item
console.log(names.slice(0, 4)); // 0 show start position 4 shows excepted this item

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
const forArray = ["Islamabad", "Lahore", "Peshawar", "Karachi", "Layyah"];

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
