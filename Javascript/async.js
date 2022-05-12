// const resolve5 = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("resolved");
//     }, 5000);
//   });
// };

// const asyncCall = async () => {
//   console.log("calling");
//   const result = await resolve5(); //takes 5 seconds and execution awaits at this line before printing next line.
//   console.log(result);
//   // expected output: "resolved"
// };

// asyncCall();

const resolve2 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });
};

const asyncCall = async () => {
  console.log("calling");
  let result = [];
  for (var i = 0; i < 5; i++) {
    result.push(resolve2()); //takes 2 seconds and execution awaits at this line before printing next line.
  }
  const res = await Promise.all(result);
  console.log(res);
  // expected output: "resolved"
};

asyncCall();
