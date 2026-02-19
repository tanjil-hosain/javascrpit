// var a =2;
// var a =112;

// let b =" this is let"
//  c =" this is let 2"

//  const cup=" MILK"

//  let x =150;
//  let y = 50;
//  let sum = x+a;
// document.write(x,"<br>" ,c,"<br>");
// document.write( y,"<br>");
// console.log(sum)

//switch and case bebohar kore grade ber kora

let marks = prompt("Enter Your Marks");
marks = Number(marks);
switch(true){
    case (marks>=80 && marks <100):
        document.write("A+");
        break;
        
    case  (marks>=70 && marks <100):
        document.write("A");
        break;
    case  (marks>=60 && marks <100):
        document.write("A-");
        break;
    case  (marks>=50 && marks <100):
        document.write("B");
        break;
    case  (marks>=40 && marks <100):
        document.write("C");
        break;
    case (marks>100):
        document.write("Invalid'");
        break;
    default:
        document.write("F");
}




