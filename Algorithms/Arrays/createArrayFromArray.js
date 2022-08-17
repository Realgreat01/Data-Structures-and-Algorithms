// METHODS : 
// 1. array1.concat(array)
// 2. splice(start, count)

const mainArray = ["Jude", "Banks", "Richard", "Gabriel", "Samson"] ;
const minorArray = ["Caleb", "Benjamin"];
const concatArray = mainArray.concat(minorArray)

console.log(concatArray);


// Splice method returns new array and modify existing Array by removing the element(s) from the array
const spliceArray = mainArray.splice(0,4);
console.log(spliceArray)
console.log(mainArray)