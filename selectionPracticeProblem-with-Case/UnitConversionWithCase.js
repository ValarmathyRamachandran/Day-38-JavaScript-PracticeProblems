const prompt = require('prompt-sync')();
console.log("::: Welcome to Unit Conversion ::: ");
console.log(" 1.  Feet to Inch ");
console.log(" 2.  Feet to Meter");
console.log(" 3.  Inch to Feet");
console.log(" 4.  Meter to Feet");
var input = prompt("::: Please Enter your choice for Conversion type ::: ");

switch(true) {
    case input == 1:
        let feet = prompt("Enter the number of Feet : ");
        let feetToInch = (feet * 12);
        console.log("Feet to Inch Conversion");
        console.log(feet + " feet  = " + feetToInch +" Inch");
        break;
    case input == 2:
        let feet1 = prompt("Enter the number of feet ");
        let feetToMeter = (feet1 / 3.28084);
        console.log("Feet to Inch Meter");
        console.log(feet1 + " feet  = " + feetToMeter + " meter");
        break;
    case input == 3:
        let inch = prompt("Enter the number of inch ");
        let inchToFeet = (inch * 0.0833333);
        console.log("Inch to Feet");
        console.log(inch + " inch = " + inchToFeet +" Feet");
        break;
    case input == 4:
        let meter = prompt("Enter number of inch");
        let meterToFeet = (meter * 3.28084);
        console.log("Meter to Feet");
        console.log(meter + " meter = " + meterToFeet +" Feet");
        break;
    default:
        console.log("Invalid Entry!!!!!!");
        break;
}