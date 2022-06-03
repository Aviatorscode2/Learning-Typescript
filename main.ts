export {};
var message = 'Hello World';
console.log(message);

// Variable types in typescript

let isBeginner: boolean = true;
let total: number = 0;
let name: string = 'Victor';

let sentence: string = `my name is ${name} I am beginner in typescript`;
console.log(sentence);

// null and undefined types
// In typescript null and undefined types are sub-types of other types
let n: null = null;
let u: undefined = undefined;

// you can assign a valu of null or undefined to a boolean, string

let isNew: boolean = null;
let isName: string = undefined;

// We can declare an array of value using the array type
// we use two syntaxes to achieve
let list1: number[] = [1, 2, 3, 4];
let list2: Array<number> = [1, 2, 3, 4];

// having an array of values with mixed types, for this purpose typescript provides the tupel type

let person1: [string, number] = ['whatever', 10]; //in tupel, number of elements in the array are fixed and the oder of the values have to match the order of the type

//enum type

enum Color {
  Red,
  Green,
  Blue,
}

let c: Color = Color.Red;
console.log(c);

// any type. if you are unsure about what the type of a value will be, using any type, example is if you are expecting a value from an api.

let randomValue: any = 10;
randomValue = true;
randomValue = 'Victor'; //notice that it doesnt throw an error

let myVariable: any = 10;

console.log(myVariable.name);
myVariable();
myVariable.toUpperCase();

// unknown type, any value can be assigned to type unknown, however you can't

let thisVariable: unknown = 50;

function hasName(obj: any): obj is { name: string } {
  return !!obj && typeof obj === 'object' && 'name' in obj;
}

if (hasName(thisVariable)) {
  console.log(thisVariable.name);
}

(thisVariable as string).toUpperCase();

//union type and any type

let multiType: number | boolean;
multiType = 20;
multiType = true; // use case for multiType is when a value is not within control library or api

let anyType: any;
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

function add1(num1: number, num2: number): number {
  return num1 + num2;
}

add(10, 5);
add1(40, 5);

//TypeScript offers you optional parameters, normally TypeScript throws an error if a functio is called without a parameter, but with optional parameters you can do something like this:

function add2(num3: number, num4?: number): number {
  //   return num3 + num4;
  // i can decide to add an extra check on this function by running
  if (num4) return num3 + num4;
  else return num3;
}
// so if i call add2 with only one parameter, it won't throw an error
add2(3);
add2(5, 2); // optional parameter must always be after the required parameters

//Default parameters in typescript
// Default parameters are like optional parameters with a set value instead of undefined

function add4(num3: number, num4: number = 10) {
  if (num4) return num3 + num4;
  else return num3;
}
add4(5, 10); //this will return 15
add4(5); // this will also return 15

//It is possible to specify a function as a type in typescript

function fullName(person: { firstName: string; lastName: string }) {
  console.log(`${person.firstName} ${person.lastName}`);
}

let v = {
  firstName: 'Victor',
  lastName: 'Yakubu',
};

fullName(v);

// Interface in typescript, so instead of doing things like i did above we can now do:

interface Person {
  firstName: string;
  lastName: string; //we can also make the value optional by adding a question mark to lastName, lastName?
}

function getFullName(person: Person) {
  console.log(`${person.firstName} ${person.lastName}`);
}

let f = {
  firstName: 'Chioma',
  lastName: 'Mbanaso',
};

getFullName(f); // A perfect usecase for this will be in registration forms
