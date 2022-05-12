//some code snippet here
//currently only es5 is supported by browsers, so to convert es6 to es5 babel is used.

// try {
//   const silo = new MissileSilo("silo.weapons.mil"); //we get an error here which we handle in the catch block
//   silo.launchMissile(process.argv[0]);
// } catch (e) {
//   console.log("Unexpected exception: " + e);
// }

// var handler = {
//   name: "EcmaScript",
// };

// var obj = {
//   // __proto__
//   //   __proto__: theProtoObj,
//   // Shorthand for ‘handler: handler’
//   handler,
//   // Methods
//   toString() {
//     // Super calls
//     return "d " + super.toString();
//   },
//   // Computed (dynamic) property names
//   ["prop_" +
//   (() => {
//     return 42;
//   })()]: 42,
// };

// console.log(obj);

//Template strings

// var name = "Yash Raj",
//   time = "today";
// console.log(`Hello ${name}, how are you ${time}?`);

//destructuring assignment
// let a, b, rest;
// [a, b] = [10, 20];

// console.log(a);
// // expected output: 10

// console.log(b);
// // expected output: 20

// [a, b, ...rest] = [10, 20, 30, 40, 50];

// console.log(rest);

// const foo = ["yash", "raj", "goel"];

// const [first, second, third] = foo;
// console.log(first);
// console.log(second);
// console.log(third);

// const user = {
//   age: 21,
//   name: "Yash Raj",
// };

// const { age, name } = user;

// console.log(age);
// console.log(name);

// const fun = (v, w, x, y, z) => {
//   return v + w + x + y + z;
// };
// let args = [0, 1];
// //We can use spread operator multiple times like this
// console.log(fun(-1, ...args, 2, ...[3]));

// //Copies array
// let arr = [1, 2, 3];
// let arr2 = [...arr];
// console.log(arr2);

// const {...rest, foo} = obj;
// SyntaxError since rest operator can be used this way only once and should come in the end always

//Rest is kind of enclosing values into an array and spread is kinds opposite it is like expanding
//the already present values. though three dots ... are used for both.

const numbers = [1, 2, 3, 4];
const doubled = numbers.map((item) => item * 2);
console.log(doubled);

const evens4 = numbers.filter((item) => item % 4 === 0);
console.log(evens4);

const sum = numbers.reduce(function (result, item) {
  return result + item;
}, 0);
console.log(sum); // 10
