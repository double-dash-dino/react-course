// let and const

// var creates a variable

// With ES6 let and const have been introduced

// Use let for VARIABLES, and const for constants.

// The following should throw an error since we try
// to reassign a const value

const myName = "Lionel";
console.log(myName);

myName = "John";
console.log(myName);

// Arrow functions

// Old function:

function myFnc(arg) {
  return True;
}

// Arrow function

const myFnc = (arg) => {
  return True;
};

// If only 1 arg you can omit the parentheses:

const myFnc = (arg) => {
  return True;
};

// If no arg, always add parentheses

const myFnc = () => {
  return True;
};

// If simple function (only return), you can write it in one line

const multiply = (number) => number * 2;

// Exports and Imports (Modules)

// For example if we have a file called person.js

const person = {
  name: "Max",
};

export default person;
// Here we export "default" because there's only 1 thing to export
// And another file called utility.js

export const falsify = () => False;

export const baseData = 10;

// Then in the file that imports these:

import person from "./person.js";
// That 'person' name can be reassigned to another variable name
import thePerson from "./person.js";

// But for the file where more than 1 thing is exported:

import { falsify } from "./utility.js";
import { baseData } from "./utility.js";

// could also import both in 1 line

import { falsify, baseData } from "./utility.js";

//  to import everything

import * as chooseTheName from "./utility.js";

// And then to access it go

chooseTheName.falsify();
chooseTheName.baseData;

// You can change the name when you import

import { falsify as theFunctionThatReturnsFalse } from "./utility.js";

// Classes - old way

class Human {
  constructor() {
    this.gender = "male";
  }

  printGender() {
    console.log(this.gender);
  }
}

class Person extends Human {
  constructor() {
    super();
    this.name = "Max";
  }
  printMyName() {
    console.log(this.name);
  }
}

const person = new Person();
person.printGender();
person.printGender();

// Classes - ES6 way

class Human {
  gender = "male";

  printGender = () => {
    console.log(this.gender);
  };
}

class Person extends Human {
  name = "Max";

  printMyName = () => {
    console.log(this.name);
  };
}

const person = new Person();
person.printGender();
person.printGender();

// Spread & rest operators

// Spread operator is used to split up array elements or object properties

const oldArray = [1, 2, 3];
const newArray = [...oldArray, 4, 5];

// Doing this without the spread operator would result in the following array: [[1,2,3],4,5]

const person = {
  name: "Max",
};

const newPerson = {
  ...person,
  age: 28,
};

// Rest operator is used to merge a list of function arguments into an array

function sortArgs(...args) {
  return args.sort();
}

const filter = (...args) => {
  return args.filter((el) => el === 1);
};

console.log(filter(1, 2, 3))[
  // Should result in [1]

  // Destructuring

  // Destructuring is used to extract array elements or object properties and store them in variables

  (a, b)
] = ["Hello", "Max"];
console.log(a);
// Will log 'Hello'
console.log(b);
// Will log 'Max'

// {name} = {name: 'Max', age:28}
console.log(name);
// Should return 'Max'
console.log(age);
// Should return 'undefined', since we are not targeting it

// Reference and primitive types

// When creating a variable from a number or string (primitive types), it creates a copy of it, so changing the original won't affect the copy
// However arrays and objects are reference types so making a copy will still point at the original
// you can avoid this with the spread operator

const person = {
  name: "Max",
};

const secondPerson = person;

person.name = "Manu";

console.log(secondPerson);
// Should log "Manu", because you reassigned what the object was basing itself on

const person = {
  name: "Max",
};

const secondPerson = {
  ...person,
};

person.name = "Manu";

console.log(secondPerson);
// Should log 'Max', as changing the 1st object's name did not affect the 2nd object

// Refreshing array functions

const numbers = [1, 2, 3];

// If we want to double all numbers

const doubleNumArray = numbers.map((num) => {
  return num * 2;
});

// Array functions are nOT next gen, but v useful still.
// They all have the same format - taking an arrow function as an argument and executing that function on all items in the array

console.log(numbers);
// Will return [1,2,3]
console.log(doubleNumArray);
// Will return [2,4,6]
