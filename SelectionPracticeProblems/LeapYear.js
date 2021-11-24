const prompt = require("prompt-sync")({ sigint: true });

console.log("Please Enter the 4-digt number as year to check if it is Leap Year or not:");
const year = Number(prompt("Year (4-digits only) : "));
if (year >= 1000 && year <= 9999) {
    if ((year % 4 === 0 && year % 100 != 0) || (year % 400 === 0)) 
    console.log("It's a leap year.");
    else console.log("It's not leap year.");
}
else console.log("invalid Entry! It is not a 4-digit Number.");