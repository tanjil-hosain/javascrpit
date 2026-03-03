const prompt = require('prompt-sync')();
num = parseInt(prompt("Enter Your Range:"));
let fristNumber = 0;
let  secondNumber = 1;
let nextTerm;
console.log("Fibonacci Series:")

for(let i = 1; i <= num; i++){
    console.log(fristNumber);

    nextTerm = fristNumber + secondNumber;
    fristNumber = secondNumber;
    secondNumber = nextTerm;

}
// console.log("Fibonacci Series:")