var prompt = require('prompt-sync')();
var day = prompt("Please enter the Day: ");
var month = prompt("Please enter the Month in numbers: ");

if((day >= 1 && day <= 31 ) && (month >= 3 && month <= 6))
{
    console.log("True");
}
else
{
    console.log("false");
}
