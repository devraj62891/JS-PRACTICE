const score=400;

const balance= new Number(100);
console.log(balance);
console.log(score);


console.log(balance.toString());
console.log(balance.toString().length);

console.log(balance.toFixed(2));//precision value after pont

const otherNumber= 23.8986;
console.log(otherNumber.toPrecision(3));


const hundreds= 1000000;
console.log(hundreds.toLocaleString('en-IN'));


//+++++++++++++++++++++++MATHS+++++++++++++++++++++++++++
//IT IS A DEFAULT JS LIBRARY
console.log(Math);


console.log(Math.abs(-4));
console.log(Math.round(4.5));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.2));
console.log(Math.min(4.2,5,7,8));
console.log(Math.max(4.2,5,7,8));



console.log(Math.random());
console.log();

const min=10;
const max=20;
console.log(Math.random()*(max-min+1)+min);




