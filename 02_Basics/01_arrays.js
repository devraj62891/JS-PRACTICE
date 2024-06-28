// array//

const myArr=[0,1,2,3,4,5,true];
const myHeros=["shaktiman", "naagraj"]


const myArr2= new Array(1,2,3,4);

console.log(myArr[0]);

myArr.push(6);
console.log(myArr);

myArr.unshift(9)
console.log(myArr);


console.log(myArr.includes(9));
console.log(myArr.indexOf(9));


///slice, splice

//slice - last index excluded and do not alter the original array
//last index included but alter the original array

console.log("A ",myArr);
const myn1= myArr.slice(1,3)

const s1=[1,2,3,4,5]
console.log("A "+s1.slice(0,3));//op-1,2,3
console.log(s1);//1,2,3,4,5

const s2=[1,2,3,4,5]
console.log("B "+s2.splice(0,3));//op- 1,2,3
console.log(s2);//op-4.5


