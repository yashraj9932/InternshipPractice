// const printName = (name) => {
//   setTimeout(() => {
//     console.log(name);
//   }, Math.floor(Math.random() * 100) + 1);
// };

// const printNames = () => {
//   printName("Yash");
//   printName("Raj");
//   printName("Goel");
// };

// printNames();

//The above code might(or rather will) give codes in random order but we want it in proper order since it is a name)
//We thereofre use callbacks

// const printName = (name, callback) => {
//   setTimeout(() => {
//     console.log(name);
//     callback();
//   }, Math.floor(Math.random() * 100) + 1);
// };

// const printNames = () => {
//   printName("Yash", () => printName("Raj", () => printName("Goel", () => {})));
// };

// printNames();

//The above code might turn into what we call a callback hell

// function printName(name) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(name);
//       resolve();
//     }, 1000);
//   });
// }

// const printNames = () => {
//   printName("Yash")
//     .then(() => {
//       console.log("mm"), printName("Raj");
//     })
//     .then(() => printName("Goel"));
// };

// printNames();

function printName(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(name);
      resolve();
    }, 1000);
  });
}

const printNames = async () => {
  await printName("Yash");
  await printName("Raj");
  await printName("Goel");
};

//results in a even cleaner and understandable code

printNames();
