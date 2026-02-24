let data=[1,2,3,-1,-2,3,0,0];
let positive=0;
let nagative=0;
let zero=0;
let sum = 0;
for(let i=0; i <data.length; i++){
    if(data[i]>0){
        positive++;
    }else if(data[i]<0){
        nagative++;
    }else{
        zero++;
    }
    sum+=data[i]

}
console.log("Positive:",positive+" "+nagative+" "+zero);
console.log(sum);