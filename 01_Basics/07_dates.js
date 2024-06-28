//Dates
let myDate=new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(typeof myDate);


////////////specific date
let myCreatedDate = new Date(2023,0,23);
console.log((myCreatedDate).toString());

let myTimeStamp= Date.now();
console.log(myTimeStamp);