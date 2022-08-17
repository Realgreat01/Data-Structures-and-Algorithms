// Arrays can be created as the result of calling the split() function on a string.
const print = (n) => console.log(n)
const table = (n) => console.table(n)

function stringToArray ( str) {
    let wordsObj = [] ;
    let words = str.split(" ");
    for (let i = 0; i < words.length; ++i) {
      wordsObj.push("word " + i + ": " + words[i] + " ");
    }
    return wordsObj
}
let sentence = "the quick brown fox jumped";
print(stringToArray(sentence))