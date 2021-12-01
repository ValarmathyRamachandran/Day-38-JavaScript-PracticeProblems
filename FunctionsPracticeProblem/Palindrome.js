const prompt = require('prompt-sync')({ sigint: true });

console.log("\n Please Enter the Two numbers:");
let num1 = Number(prompt("number 1: "));
let num2 = Number(prompt("number 2: "));

function checkPalindrome(num) {
    let ans = 0;
    while (num > 0) {
        ans = ans * 10 + num % 10;
        num = parseInt(num / 10);
    }
    return ans;
}

if (checkPalindrome(num1) == num2) {
    console.log("Given Two numbers are palindromes.");
} else {
    console.log("Given Two numbers are not palindromes.");
}