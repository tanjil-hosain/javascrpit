const prompt = require('prompt-sync')();
//Do while loop
// Eti ekbar run kore tar por condition cheak dey,
//  ei loop totokkhon colbe jotokkhon na condition false hoy

let a = 5;
do{
    console.log(a);
    a++
}while(a<=1);

let count = Number(prompt("Enter Your Number"));
do {
    console.log(count);
    count++;
}while(count <=10);