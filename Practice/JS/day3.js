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
fruits[fruits.length] = "Graps";

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

// splice() --> add new item to an array it return array after deleted items
const newArray = ["potato", "Tomato", "Chili"];
console.log(newArray);
console.log(newArray.splice(1, 0, "Palak")); // 1 show index position , 0 show how much item should be deleted from an array

// slice() --> return a new array start from specific index
console.log(newArray.slice(1)); // 1 show where to start an array item
console.log(names.slice(0, 4)); // 0 show start position 4 shows excepted this item

// sort() --> this method sort an array alphabeticaly
console.log(newArray.sort());

// sort method for numbers
const numArray = [21, 78, 45, 1, 0, 91, 18];
console.log(
  numArray.sort(function (a, b) {
    // compare function define an alternate sort order
    return a - b;
  })
);

// reverse() --> reverse the array item
console.log(newArray.reverse());

// Math.max.apply() --> used to find highest number in array
const maxNum = (arr) => {
  return Math.max.apply(null, arr);
};

console.log(maxNum(numArray));

// home made method for finding highest number
const highNum = (arr) => {
  let len = arr.length;
  let max = -Infinity;
  while (len--) {
    if (arr[len] > max) {
      max = arr[len];
    }
  }
  return max;
};

console.log(highNum(numArray));
// Math.max.apply() --> used to find highest number in array
const minNum = (arr) => {
  return Math.min.apply(null, arr);
};

console.log(minNum(numArray));
