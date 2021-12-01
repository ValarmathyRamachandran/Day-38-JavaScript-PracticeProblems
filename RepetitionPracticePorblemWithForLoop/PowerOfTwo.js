const prompt = require('prompt-sync');

const n1 = Number(prompt("Enter the number: "));

if (n1 >= 0 && Number.isInteger(n1)) {
    for (let i = 0; i <= n1; i++) {
        console.log("2^" + i + " = " + Math.pow(2, i));
    }
} 
else
{
console.log("Please Enter the integer Number.");
}