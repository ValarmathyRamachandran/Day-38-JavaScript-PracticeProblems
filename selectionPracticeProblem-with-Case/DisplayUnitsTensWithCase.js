const prompt = require('prompt-sync')();
let number = prompt("Enter a number : ");
switch (true){

    case (number >= 1 && number <= 9): {
    console.log("Units");
    break;
    }
    case (number >= 10 && number <= 99): {
    console.log("Tens");
    break;
    }
    case (number >= 100 && number <= 999): {
    console.log("Hundreds");
    break;
    }
    case (number >= 1000 && number <= 9999): {
    console.log("Thousand");
    break;
    }
    case (number >= 10000 && number <= 99999): {
    console.log("Ten thousands");
    break;
    }
    case (number >= 100000 && number <= 999999): {
    console.log("Lakhs");
    break;
    }
    case (number >= 1000000 && number <= 9999999): {
    console.log("Ten Lakhs");
    break;
    }
    default: {
    console.log("Invalid Entry!!!!!,Please enter Valid Number");
    break;
    }
}