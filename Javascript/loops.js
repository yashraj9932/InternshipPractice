const names = [
  "James",
  "Jacob",
  "Jackson",
  "Jordan",
  "Jared",
  "Jude",
  "Jeremiah",
  "James",
];

// //Classic for loop
// for (var i = 0; i < names.length; i++) {
//   console.log("Welcome " + names[i]);
// }

// var student = {
//   firstname: "Yash Raj",
//   lastname: "Goel",
//   age: 21,
//   id: "199302201",
// };

// //for-in loop Used to iterate through object properties
// for (var prop in student) {
//   //doesnt work since prop is a string
//   //   console.log(typeof prop + " " + student.prop);
//   //Instead
//   console.log(typeof prop + " " + student[prop]);
// }

// //for-of , to iterate through all iterable structures

// var college = "Manipal University Jaipur";
// for (var ch of college) {
//   console.log(ch);
// }

//to take input through node
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

//While loop
var number = 0;
var count = [];

//insert number in the count till it is less than 15
while (number < 15) {
  count.push(number);
  number++;
}

//print count
console.log(count);

number = 0;
count = [];
do {
  count.push(number);
  number++;
} while (number < 15);

//print count

console.log(count);
