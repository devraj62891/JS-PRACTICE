//only two types - premitive and non premitive
//if inerview ask how many types of data are there- according to the way in which the data are stored in memory they are classified into two categories
//premitive and non premitive
//7 types premitive== String, Number, Boolean. Null, undefined, symbol, BigInt, 
//reference types(non premitive)== Arrays, Objects, functions, 
//JS is statically or dynamically typed language== js is a dynamically typed language because we dont need to mention the variable type but in java we need to mention the type of variable during initilization
const score =100;
const scorevalue= 100.3

const outsideTemp=null; //null doednot mean it is 0

const id= Symbol('123');
const anotherId=Symbol('123')

console.log(id===anotherId);

const bigNumber = 34789574957325n;//big int



//Reference type or non premitive type

//Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myobj={
    name: "hitesh",
    age:22
}


const myFunction=function (){
    console.log("HELLO WORLD");
}



