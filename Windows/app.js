items =[
  {name: "Caleb", age: 45},
  {name: "John", age: 20},
  {name: "Binta", age: 50},
  {name: "Kingsley", age: 680},
];
let arr = [];
const result = items.reduce((acc, curr)=> {
  const sum = {curr}
  arr.push(sum);
  return arr
},0)

console.log(result);