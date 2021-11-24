const prompt = require('prompt-sync')();
let number = prompt("Enter a number : ");

if (number >= 1 && number <= 9) {
    console.log("Units");
}
else if (number >= 10 && number <= 99) {
    console.log("Tens");
}
else if (number >= 100 && number <= 999) {
    console.log("Hundreds");
}
else if (number >= 1000 && number <= 9999) {
    console.log("Thousand");
}
else if (number >= 10000 && number <= 99999) {
    console.log("Ten thousands");
}
else if (number >= 100000 && number <= 999999) {
    console.log("Lakhs");
}
else if (number >= 1000000 && number <= 9999999) {
    console.log(" Ten Lakhs");
}
else {
    console.log("Invalid Entry!!!!!,Please enter Valid Number");
}