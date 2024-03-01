const input = require("readline-sync");
let y = input.questionInt("enter year: ");
if(y%400==0){
    console.log("y is leapyear",y);
}
else{ console.log("y is not leapyear",y)}
if (y%4==0 ){
    console.log("y is leapyear",y)
}
if( y%100!=0){
    console.log("y is leap year",y)
    }
else{ console.log("y is not leapyear",y)}












9