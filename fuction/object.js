const car = {
    brand: "BMW",
    model: "566",
    weight: "5544",
    color : "black",

start: function(){
    return "My" + this.brand+ "is"+ "Starting";
},
stop: function(){
    return "My" + this.brand+ "is"+ "Stop";
},
drive: function(){
    return "My" + this.brand+ "is"+ "Drive";
},
break: function(){
   return "My" + this.brand+ "is"+ "Drive";  
}
}
console.log(car.start);
console.log(car.stop);
console.log(car.drive);
console.log(car.break);
