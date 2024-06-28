const marvel_heros=["thor","ironman","spiderman"];
const dc_heros=["superman","flash","batman"];

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

// console.log(marvel_heros[3][1]);

const allheros=marvel_heros.concat(dc_heros)
console.log(allheros);

//this is a spread operator

const allnewheros= [...marvel_heros,...dc_heros]
console.log(allnewheros);

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]];
const real_anotehr_array=another_array.flat(Infinity);

console.log(real_anotehr_array);
