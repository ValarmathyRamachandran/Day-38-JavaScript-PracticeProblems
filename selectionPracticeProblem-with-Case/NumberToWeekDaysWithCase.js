var prompt = require('prompt-sync')();
var number = prompt("Enter number between 1 to 7 : ");
switch (true) {
    case number == 1:
    {
    console.log("Sunday");
    break;
    }
    case number == 2: {
    console.log("Monday");
    break;
    }
    case number == 3: {
    console.log("Tuesday");
    break;
    }
    case  number == 4: {
    console.log("Wednesday");
    break;
    }
    case number == 5: {
    console.log("Thursday");
    break;
    }
    case number == 6: {
    console.log("Friday");
    break;
    }
    case number == 7: {
    console.log("Saturday");
    break;
    }
    default: {
    console.log("Invalid Entry!!!!...");
    break;
    }
}