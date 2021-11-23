//Reads 5 Random Numbers of 2 Digit values ,then find their sum and the average

let num1 = Math.floor(Math.random() * 90 + 10);
let num2 = Math.floor(Math.random() * 90 + 10);
let num3 = Math.floor(Math.random() * 90 + 10);
let num4 = Math.floor(Math.random() * 90 + 10);
let num5 = Math.floor(Math.random() * 90 + 10);
console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
console.log(num5);
let add = num1 + num2 + num3 + num4 + num5;
let average = (add/5);
console.log("Sum of 5 two digit numbers: " +add);
console.log("Average of 5 two digit number: " +average);