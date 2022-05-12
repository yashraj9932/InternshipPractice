export {};

//boolean ,number and string are the types in TS

let isBeginner: boolean = true;
let total: number = 0;
let name: string = "Yash";
let n: null = null;
let u: undefined = undefined;

let surname: string = null; //works perfectly fine

//we can also define null and undefined types in JS,they are the subtypes of all other types

console.log(isBeginner);

let message = "yash";
console.log(message);

let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];
//Both of the above are exactly same

//for array of mixed Types

let person: [string, number] = ["Chris", 22]; //length is limited though

//enum types

enum Color {
  Red = 5, //for our own value not for 0
  Green,
  Blue,
}

let c: Color = Color.Red;

console.log(c); //Output will be 0 ,for green 1 and for blue 2

//if we aree not sure what will be the type then we can use the "any" type

let random: any = 10;
random = false;
//we can do the above

//the any type has issues because we can also call string functions on a number which is ofc an error

//so ts 3.0 we have the "unknown" type, we cannot call the wrong properties here and this is what differentiates it from any

//type assertion in this language is the type casting of other languages

// function example in ts

function hasName(obj: any): obj is { name: string } {
  return !!obj && typeof obj === "object" && "name" in obj;
}

let multitype: number | boolean;

multitype = 20;
multitype = true;

//The question mark after the num2 makes the variable optional
// function add(num1: number, num2?: number): number {
//Below one makes it optional but with a value instead of undefined
// function add(num1: number, num2=10: number): number {
function add(num1: number, num2: number): number {
  return num1 + num2;
}

// Interfaces

interface Person {
  firstName: string;
  lastName?: string;
}

//Object can be a type in typescript
function fullName(person: Person) {
  console.log(person.firstName + " " + person.lastName);
}

let p = {
  firstName: "Bruce",
};
fullName(p);

// Classes

class Employee {
  employeeName: string;
  // protected employeeName: string; //works in derived
  // public employeeName: string; works outside the class as well
  // private employeeName: string;works only onside class

  constructor(name: string) {
    this.employeeName = name;
  }

  greet() {
    console.log("Good morning " + this.employeeName);
  }
}

let emp1 = new Employee("Vishwas");
console.log(emp1.employeeName);
emp1.greet();

class Manager extends Employee {
  constructor(managerName: string) {
    super(managerName);
  }
  delegateWork() {
    console.log("Manager delgating tasks" + this.employeeName);
  }
}

let m1 = new Manager("Yash Raj");
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);
