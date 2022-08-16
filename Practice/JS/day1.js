let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  let input = prompt("Enter new text!");
  btn.textContent = input;
});

// Create a simple form and get input from user and show in alert-box

let firstName = "Mateen";
let lastName = "Nawaz";
const price = "$19.86";
let courseName = "Front-end Course";
let cardNumber = "124221421";
let cardType;

// get input from user and store into the cardType variable
// cardType = prompt("Enter a card type!!");

// alert(
//   firstName +
//     " successfully bought a " +
//     courseName +
//     " using " +
//     cardType +
//     "."
// );

// condtion statements
// let name = "Mateen Nawaz";
// let time = prompt("Please enter a time: ");

// if (time > 5 && time <= 12) {
//   alert("Hi, " + name + ", Good Morning. Have a nice day :)");
// } else if (time > 12 && time <= 17) {
//   alert("Hi, " + name + ", Good Afternoon.");
// } else if (time > 17 && time < 20) {
//   alert("Hi, " + name + ", Good Evening. ");
// } else {
//   alert("Hi, " + name + ", Good Night. Have a nice dream :)");
// }

// Switch Statement
// let device = prompt("Enter a device name: ");

// switch (device) {
//   case "fan":
//     alert("Fan is turned on!");
//     break;
//   case "TV":
//     alert("TV is turned on!");
//     break;
//   case "AC":
//     alert("AC is turned on!");
//     break;
//   case "Tubelight":
//     alert("Tubelight is turned on!");
//     break;

//   default:
//     alert("No action performed!");
//     break;
// }

// Loops practice

// let num = prompt("Enter a number for table: ");

// for (let i = 1; i <= 10; i++) {
//   console.log(num + "*" + i + "=" + num * i);
// }

// show even & odd number of given input

// let enteredNum = prompt("Enter a number: ");
// for (let i = 0; i < enteredNum; i++) {
//   // if (i % 2 != 0)
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// For....in loop
let cars = ["Honda", "Aodi", "Suzuki", "Civic"];

// with....arrays
for (let key in cars) {
  console.log(key, cars[key]);
}

// with....Objects
let person = {
  fullName: "Manzoor",
  age: 43,
  job: "Manager",
};

for (let key in person) {
  console.log(key, person[key]);
}

// For....of loop
let names = ["Ahmad", "Mateen", "Umair", "Umer", "Saqlain"];

for (let index of names) {
  console.log(index);
}
