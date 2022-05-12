const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

//Compare values and sort according to param
const compare = (arr, param, l, h) => {
  let pivot = arr[h];
  let i = l - 1;
  for (let j = l; j <= h - 1; j++) {
    if (arr[j][param] < pivot[param]) {
      i++;
      swap(arr, i, j);
    }
  }
  swap(arr, i + 1, h);
  return i + 1;
};
//recursive quicksort implementation
function quickSort(arr, param, l, h) {
  if (l < h) {
    let pi = compare(arr, param, l, h);

    quickSort(arr, param, l, pi - 1);
    quickSort(arr, param, pi + 1, h);
  }
}

class Person {
  constructor(name, age, salary, sex) {
    this.name = name;
    this.age = age;
    this.salary = salary;
    this.sex = sex;
  }
  //wrapper function for quick sort implementation
  static sort(arr, param, sortorder) {
    quickSort(arr, param, 0, arr.length - 1);
    return sortorder === "desc" ? arr.reverse() : arr;
  }
}

const persons = [
  ["Yash", 20, 10000, "Male"],
  ["Raj", 100, 80000, "Male"],
  ["Goel", 36, 6600000, "Male"],
];

let arr = [];

persons.forEach((el) => {
  arr.push(new Person(...el));
});

const sortedArr = Person.sort(arr, "salary", "asc");
console.log(sortedArr);
