var prompt = require('prompt-sync')();

var Cel = prompt("Please Enter celsius between 0°C and 100°C : ");
var Fah = prompt("Please Enter celsius between 32°F and 212°F : ");

let degF = (Cel * 9/5) + 32;
let degC = (Fah - 32) * 5/9;
let x = degF;
let y = degC;

switch(true) {
    case a: 
        console.log("celsius to fahreneheit is : " + degF);
        break;
    case b:
        console.log("fahreneheit to celsius is : " + degC);
        break;
        
}