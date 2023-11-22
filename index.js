// basics types
var num1 = 1;
var txt = "my text";
var text1;
text1 = "my text";
var bool = false;
// objects
var person = {
    name: "john",
    age: 30,
};
console.log(person.name);
console.log(person.age);
// enums
var Enum;
(function (Enum) {
    Enum[Enum["round"] = 0] = "round";
    Enum[Enum["square"] = 1] = "square";
    Enum[Enum["triangle"] = 2] = "triangle";
})(Enum || (Enum = {}));
var round = 1;
var square = 2;
var sq = 2;
var triangle = 5;
console.log(round, square, sq, triangle);
var firstPerson = {
    name: "John",
    age: 30,
};
var emp1 = {
    name: "John",
    age: 30,
    city: "ahm",
    designation: "SE",
};
// function types
function add(x, y) {
    return x + y;
}
var multiply = function (a, b) { return a * b; };
console.log(add(10, 20));
console.log(multiply(10, 20));
