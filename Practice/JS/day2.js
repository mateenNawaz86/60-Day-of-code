// cook maggi function
/*let packetOfMaggi = prompt("How much maggi packets you've to cook? ");
let cupsOfWater = prompt("How much cups water are used?");
let pan = prompt("How much pan are used to this maggi?");

const cookMaggi = (maggi, cups, ketali) => {
  alert(
    "Your maggi will be ready in " +
      maggi * 2 +
      " minutes and ingrediants usede are:- " +
      maggi +
      " maggi packets " +
      cups +
      " cups of water using " +
      ketali +
      " pan."
  );
};

cookMaggi(packetOfMaggi, cupsOfWater, pan); */

// Cook burger recipe and display result using return statement
/*
let bun = prompt("How much bun are used in one burger?");
let beefPaity = prompt("How much beef paities are used in one burger?");
let souces = prompt("which soucages are used in burger");

const makeBurger = (buns, paities, soucages) => {
  return (
    "Rancher Combo beef burger is combination of " +
    buns +
    " buns, " +
    paities +
    " beef paities, and " +
    " different flavour of soucages like " +
    soucages +
    "."
  );
};

const beefBurger = makeBurger(bun, beefPaity, souces);

alert(beefBurger); */

// Strings
let str = "Mateen Nawaz";
console.log(str);

// 1. Bad strings -> if you start string with double quotes you should must be end with double quotes same as for single quotes!
let badStr = "Mateen Nawaz is here!";

// 2. you are able to add single quotes inside double quotes same as for double quotes!
let str2 = "I've done is this project on time!";
console.log(str2);

// 3. you are also use back-slash for same purpose
let str3 = "I've done my project on time!";
console.log(str3);

// 4. Template  litrals
let str4 = `Hello, My name is ${str}. ${str3}`;
console.log(str4);

// string Methods
let str_method = "Hello, My name is Mateen Nawaz.";

// 1. length property
console.log(str_method.length);

// 2. indexOf
console.log(str_method.indexOf("M"));

// 3. lastIndexOf
console.log(str_method.lastIndexOf("a"));

// 4. slice
console.log(str_method.slice(18, 24));

// 5. substring
console.log(str_method.substring(25, 30));

// 6. substr
console.log(str_method.substr(0, 10));

// 7. replace
console.log(str_method.replace("Hello", "Hey"));

// 8. search
console.log(str_method.search("Mateen"));

// 9. match
console.log(str_method.match(/e/g)); // it return an array with all matches in the string

// 10. include
console.log(str_method.includes("name", 10)); // 2nd parameter define the starting position of searching string

// 11. startsWith
console.log(str_method.startsWith("Hello"));

// 12. endsWith
console.log(str_method.endsWith("Nawaz."));

// Object practice
const person = {
  fullName: "Mateen Nawaz",
  position: "Student",
  degree: "BSCS",
  age: 21,
  liveIn: "Islamabad",
};

console.log(person);

// alert(
//   `${person.fullName} is a ${person.position} of ${person.degree}. He is ${person.age} years old, and live in ${person.liveIn}`
// );

// Number
// let number = 4;
// let result = "";

// while (number != Infinity) {
//   number = number * number;
//   result = result + number;
//   console.log(result + "\n");
// }

// 1. toString
let num = 133;
console.log(num.toString());
console.log(typeof num.toString());

// 2. toExponential
let expNum = 13.12;
console.log(expNum.toExponential());

// 3. toFixed
console.log(expNum.toFixed(2)); // here 2 define the number after point

// 4. toPrecision
console.log(expNum.toPrecision(2));

// 5. valueOf
console.log(expNum.valueOf());

// 6. Number
console.log(Number(expNum)); // covert variable to number

// 7. parseInt
console.log(parseInt(expNum));

// 8. parseFloat
let floatNum = 65.31;
console.log(parseFloat(floatNum));

// 9. MAX_VALUE
console.log(Number.MAX_VALUE);

// 10. MIN_VALUE
console.log(Number.MIN_VALUE);

// 11. POSITIVE_INFINITY
console.log(Number.POSITIVE_INFINITY);

// 12. NEGATIVE_INFINITY
console.log(Number.NEGATIVE_INFINITY);
