var prompt = require('prompt-sync')();
var number = prompt("Please Enter the number : ");

var hormonic = 0;
for(let i = 1; i <= number; i++) {
    hormonic = 1/i + hormonic;
    console.log("Harmonic number  " + i + " is : " + hormonic);
}