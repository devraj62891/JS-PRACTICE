const name="devraj";
const repoCount= 50;

// console.log(name+repoCount+" value");

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);


const gameName= new String('devraj sharma');

console.log(gameName[0]);

console.log(gameName.length);
console.log(gameName.toUpperCase());//here the vlaue in the original gamename will not change becaues it is non premitive data type which work on copy value

console.log(gameName.charAt(2));
console.log(gameName.indexOf('s'));


//////////////////////////////////////////interesting methods/////////////////////////

const newString= gameName.substring(0,4);//here last value is not included
console.log(newString);




const anotherString= gameName.slice(-8, 4);
console.log(anotherString);


//////////////////trim and replace method/////////////////
const newStringOne= "   devraj   ";
console.log(newStringOne);
console.log(newStringOne.trim());//trim methoid removes extar space

const url="https.hgsofhisoaahfsijhnfi.sjghish%20";
console.log(url.replace('%20','_'));

console.log(url.includes('devraj'));

console.log(url.split('.'));

