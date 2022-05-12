"use strict";
var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError(
          "Class extends value " + String(b) + " is not a constructor or null"
        );
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
exports.__esModule = true;
//boolean ,number and string are the types in TS
var isBeginner = true;
var total = 0;
var name = "Yash";
var n = null;
var u = undefined;
var surname = null; //works perfectly fine
//we can also define null and undefined types in JS,they are the subtypes of all other types
console.log(isBeginner);
var message = "yash";
console.log(message);
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
//Both of the above are exactly same
//for array of mixed Types
var person = ["Chris", 22]; //length is limited though
//enum types
var Color;
(function (Color) {
  Color[(Color["Red"] = 5)] = "Red";
  Color[(Color["Green"] = 6)] = "Green";
  Color[(Color["Blue"] = 7)] = "Blue";
})(Color || (Color = {}));
var c = Color.Red;
console.log(c); //Output will be 0 ,for green 1 and for blue 2
//if we aree not sure what will be the type then we can use the "any" type
var random = 10;
random = false;
//we can do the above
//the any type has issues because we can also call string functions on a number which is ofc an error
//so ts 3.0 we have the "unknown" type, we cannot call the wrong properties here and this is what differentiates it from any
//type assertion in this language is the type casting of other languages
// function example in ts
function hasName(obj) {
  return !!obj && typeof obj === "object" && "name" in obj;
}
var multitype;
multitype = 20;
multitype = true;
//The question mark after the num2 makes the variable optional
// function add(num1: number, num2?: number): number {
//Below one makes it optional but with a value instead of undefined
// function add(num1: number, num2=10: number): number {
function add(num1, num2) {
  return num1 + num2;
}
//Object can be a type in typescript
function fullName(person) {
  console.log(person.firstName + " " + person.lastName);
}
var p = {
  firstName: "Bruce",
};
fullName(p);
// Classes
var Employee = /** @class */ (function () {
  function Employee(name) {
    this.employeeName = name;
  }
  Employee.prototype.greet = function () {
    console.log("Good morning " + this.employeeName);
  };
  return Employee;
})();
var emp1 = new Employee("Vishwas");
console.log(emp1.employeeName);
emp1.greet();
var Manager = /** @class */ (function (_super) {
  __extends(Manager, _super);
  function Manager(managerName) {
    return _super.call(this, managerName) || this;
  }
  Manager.prototype.delegateWork = function () {
    console.log("Manager delgating tasks" + this.employeeName);
  };
  return Manager;
})(Employee);
var m1 = new Manager("Yash Raj");
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);
