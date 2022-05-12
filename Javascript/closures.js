function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

const makemul = (x) => {
  return function (y) {
    return x * y;
  };
};

//We make an adder with 5
var add5 = makeAdder(5);

//multiplier with 10
var mul10 = makemul(10);

console.log(add5(2)); // 7
console.log(mul10(2)); // 20
