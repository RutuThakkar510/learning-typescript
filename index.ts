// basics types
let num1 = 1;
let txt = "my text";

let text1: string;
text1 = "my text";

let bool = false;

// objects

const person: {
  name: string;
  age: number;
} = {
  name: "john",
  age: 30,
};

console.log(person.name);
console.log(person.age);

// enums

enum Enum {
  round,
  square,
  triangle,
}

const round: Enum = 1;
const square: Enum = 2;
const sq: Enum = 2;
const triangle: Enum = 1;

console.log(round, square, sq, triangle);

// types
type person = {
  name: string;
  age: number;
};

let firstPerson: person = {
  name: "John",
  age: 30,
};

// interface

interface Employee {
  name: string;
  age: number;
  city: string;
  designation: string;
}

const emp1: Employee = {
  name: "John",
  age: 30,
  city: "ahm",
  designation: "SE",
};

// function types
function add(x: number, y: number): number {
  return x + y;
}

const multiply = (a: number, b: number): number => a * b;

console.log(add(10, 20));
console.log(multiply(10, 20));

// union types
type Result = "success" | "failure";

const student1: {
  name: string;
  result: Result;
} = {
  name: "jane",
  result: "success",
};
