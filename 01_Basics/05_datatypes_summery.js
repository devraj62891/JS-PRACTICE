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



///////////////////memory/////////
//stsck , heap
//all premitive type- stack--here whatever we work on data we work on its capy
//all non premetive- heap--- here whatever we do with a data we do it as a reference -- means whatever we change anywhere it is changed in its original path
//
//example 
let myYoutubename= "hitesh.com";
let anothername= myYoutubename;
anothername="chaiaurcode";
console.log(myYoutubename);
console.log(anothername);


let user1={
    email:"user@gmail.com",
    upi:"user@upi"
}

let user2=user1;

user2.email="devraj@gml/coom";
console.log(user1.email);
console.log(user2.email);



