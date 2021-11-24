var prompt = require('prompt-sync')();
var a = prompt("Enter the value of a : ");
var b = prompt("Enter the value of b : ");
var c = prompt("Enter the value of c : ");

let x1 = (a + b * c);
console.log("value 1 : " + x1);
let x2 = (c + a / b);
console.log("value 2  : " + x2);
let x3 = (a % b + c);
console.log("value 3  : " + x3);
let x4 = (a * b + c);
console.log("value 4  : " + x4);

let arrayValue = [x1, x2, x3, x4];

let maxValue = Math.max.apply(null, arrayValue);
console.log("Maximum value : " + maxValue);

let minValue = Math.min.apply(null, arrayValue);
console.log("Maximum value : " + minValue);