// Getters are properties that actually call a hidden function
// to retrieve a value.
// Setters are properties that actually call a hidden
// function to set a value.

const myArr  = []
var myObject = {
  hello: "hello",
  get a() {
  return 10;
  },
  // define a setter for `a`
  set a(val) {
    this.hello = val * 2;
  }
 };
// console.log( myObject.a = 40);
 console.log(myObject.a);
 Object.defineProperty(myObject, "hello", {enumerable: false})
 console.log(myObject.hasOwnProperty("a"));
 console.log(myArr instanceof Array);
 console.log(Object.keys(myObject))
 console.log(Object.getOwnPropertyNames(myObject));
//   returns an array of all enumerable properties,
//  whereas Object.getOwnPropertyNames(..) returns an array of all
//  properties, enumerable or not.);

const func = (function(elem){
  const flag = [];
  for(let i = 0; i< 5 ; i++){
    flag.push( `<h1> ${elem} ${i} </h2>`);
  }
  return flag
})("everyone")

console.log(func)