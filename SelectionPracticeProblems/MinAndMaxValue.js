//Selection Practice Problems with if & else
// 1. program that reads 5 Random 3 Digit values and then outputs the minimum and the maximum value

let num1 = Math.floor(Math.random() * 900 + 100);
let num2 = Math.floor(Math.random() * 900 + 100);
let num3 = Math.floor(Math.random() * 900 + 100);
let num4 = Math.floor(Math.random() * 900 + 100);
let num5 = Math.floor(Math.random() * 900 + 100);
console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
console.log(num5);
let minValue = Math.min(num1,num2,num3,num4,num5);
console.log("Minimum Value :" + minValue);
let maxValue = Math.max(num1,num2,num3,num4,num5);
console.log("Maximum Value :" + maxValue);