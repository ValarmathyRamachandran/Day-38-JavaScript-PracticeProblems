const prompt = require('prompt-sync')();
const startNumber = Number(prompt("Enter the Starting Number of the range : "));
const endNumber = Number(prompt("Enter the Ending Number of the range : "));
if (startNumber >= 0 && startNumber < endNumber) {
    for(let i = startNumber; i <= endNumber; i++) {
        let flag = 0;
    
    for (let j = 2; j <= i / 2; j++) {
        if (i % j == 0){
            flag = 1;
            break;
        }    
    }
    if (flag == 0 && i != 1)
        console.log(i);
}
}
else
    console.log("Invalid Entry!!!!!..");
