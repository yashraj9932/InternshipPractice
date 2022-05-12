function printNumbers(numbers) {
  //Prints the numbers which are even
  for (var x in numbers) {
    if (x % 2 == 0) console.log(x);
  }
}

//Printing odd and even numbers using switch statements and normal for loops
function printSwitch(numbers) {
  for (var i = 0; i < numbers.length; i++) {
    switch (numbers[i] % 2) {
      case 0:
        console.log("Even");
        break;
      case 1:
        console.log("Odd");
        break;
      default:
        console.log("Invalid Case");
    }
  }
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
printNumbers(numbers);

printSwitch(numbers);
