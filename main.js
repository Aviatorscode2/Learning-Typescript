"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = 'Hello World';
console.log(message);
// Variable types in typescript
var isBeginner = true;
var total = 0;
var name = 'Victor';
var sentence = "my name is ".concat(name, " I am beginner in typescript");
console.log(sentence);
// null and undefined types
// In typescript null and undefined types are sub-types of other types
var n = null;
var u = undefined;
// you can assign a valu of null or undefined to a boolean, string
var isNew = null;
var isName = undefined;
// We can declare an array of value using the array type
// we use two syntaxes to achieve
var list1 = [1, 2, 3, 4];
var list2 = [1, 2, 3, 4];
// having an array of values with mixed types, for this purpose typescript provides the tupel type
var person1 = ['whatever', 10]; //in tupel, number of elements in the array are fixed and the oder of the values have to match the order of the type
//enum type
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Red;
console.log(c);
// any type. if you are unsure about what the type of a value will be, using any type, example is if you are expecting a value from an api.
var randomValue = 10;
randomValue = true;
randomValue = 'Victor'; //notice that it doesnt throw an error
var myVariable = 10;
console.log(myVariable.name);
myVariable();
myVariable.toUpperCase();
// unknown type, any value can be assigned to type unknown, however you can't
var thisVariable = 50;
function hasName(obj) {
    return !!obj && typeof obj === 'object' && 'name' in obj;
}
if (hasName(thisVariable)) {
    console.log(thisVariable.name);
}
thisVariable.toUpperCase();
//union type and any type
var multiType;
multiType = 20;
multiType = true; // use case for multiType is when a value is not within control library or api
var anyType;
anyType = true;
anyType = 'What are you doing?';
anyType = 20;
// why would you want to use union type instead of the any type
// the union type restricts to the specified types while the any type has no restrictions
// second reason is intellisence support
// Functions in TypeScript
//this is how we write functions in JavaScript
function add(num1, num2) {
    return num1 + num2;
}
// but in typescript we can specify types for the value, static types checking for parameters and you also get intellisence support
function add1(num1, num2) {
    return num1 + num2;
}
add(10, 5);
add1(40, 5);
//TypeScript offers you optional parameters, normally TypeScript throws an error if a functio is called without a parameter, but with optional parameters you can do something like this:
function add2(num3, num4) {
    //   return num3 + num4;
    // i can decide to add an extra check on this function by running
    if (num4)
        return num3 + num4;
    else
        return num3;
}
// so if i call add2 with only one parameter, it won't throw an error
add2(3);
add2(5, 2); // optional parameter must always be after the required parameters
//Default parameters in typescript
// Default parameters are like optional parameters with a set value instead of undefined
function add4(num3, num4) {
    if (num4 === void 0) { num4 = 10; }
    if (num4)
        return num3 + num4;
    else
        return num3;
}
add4(5, 10); //this will return 15
add4(5); // this will also return 15
//It is possible to specify a function as a type in typescript
function fullName(person) {
    console.log("".concat(person.firstName, " ").concat(person.lastName));
}
var v = {
    firstName: 'Victor',
    lastName: 'Yakubu'
};
fullName(v);
function getFullName(person) {
    console.log("".concat(person.firstName, " ").concat(person.lastName));
}
var f = {
    firstName: 'Chioma',
    lastName: 'Mbanaso'
};
getFullName(f); // A perfect usecase for this will be in registration forms
// Classes and Access Modifiers
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning &{this.employeeName}");
    };
    return Employee;
}());
var emp1 = new Employee('Victor');
console.log(emp1.employeeName);
emp1.greet();
//Class based inheritance
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating tasks");
    };
    return Manager;
}(Employee));
var m1 = new Manager('Bruce');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);
//Access modifiers
// 1. Public,  in line 155 i can add public to employeee and this will allow me use it outside if that function
// class Employee {
//    public employeeName: string;
// 2. private, those the opposite, using private will throw an error in my classed based inheritance function, since we are calling employeeName outside its constructor
// class Employee {
//     private employeeName: string;
// 3. protected for accessiblilty within a class and the classes derived from it. so in the above example uing protected will not throw an error inside the manager constructor but will throw an error if its called outside it
// class Employee {
//    protected employeeName: string;
