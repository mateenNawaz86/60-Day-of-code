// calculate area of square
// const squareArea = {
//   side: 5,
//   get area() {
//     return this.side ** 2; // same as multiply two time
//   },
// };

// console.log(squareArea);
// squareArea.side = 14; //
// console.log(squareArea.area);

// Excerise: 2 --> join the array element
/*let arrEl = ["Hi", "i'm", "a", "Front-end", "developer"];

console.log(arrEl.join("+"));

// Alternative
const concatStrs = (seperator, ...strs) => {
  //   let result = "";
  //   for (let i = 0; i < strs.length; i++) {
  //     result += seperator + strs[i];
  //   }
  //   return result;
  let returnValue = "";
  strs.forEach((val, ind) => {
    if (ind == strs.length - 1) {
      returnValue += val;
    } else {
      returnValue += val + seperator;
    }
  });
  return returnValue;
};

console.log(concatStrs("+", "Hi", "i'm", "a", "Front-end", "developer"));
*/

// Exercise: 3 --> Array Destructuring
/*const desArray = [1, 2, 3, 4, 5, 6, 7];

let a, b, c, rest;
[a, b, c, ...rest] = desArray;
console.log(a);
console.log(b);
console.log(c);
console.log(rest);

// alternate
let first = desArray[0];
let second = desArray[1];
let third = desArray[2];
let others = desArray.slice(3);

console.log(first);
console.log(second);
console.log(third);
console.log(others);
*/

// Excerise: 4 --> calculate match-sticks for more than one houses

const matchHouses = (numOfHouses) => {
  if (numOfHouses <= 0) {
    return 0;
  } else {
    return `${
      numOfHouses * 6 - (numOfHouses - 1)
    } sticks are used to build ${numOfHouses} house.`;
  }
};

console.log(matchHouses(0));
console.log(matchHouses(3)); // 3 * 6 - (3 - 1) => 18 - 2 => 16
console.log(matchHouses(12)); // 12 * 6 - (12 - 1) => 72 - 11 => 61
