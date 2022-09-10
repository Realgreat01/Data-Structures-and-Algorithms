"use strict"
const MYOBJECT = {
  name: "Samson",
  alias: "Realgreat",
  age: 22,
  company: "verix",
  school: "University of Benin",
  unknown: undefined
}
const TARGETOBJ = {
  course: "dentistry",
  interest: ["Sustainabilty", "Tech", "Community Service"]
}

const GET_PROPERTY = Object.getOwnPropertyDescriptor( MYOBJECT, "name" );
const SET_PROPERTY = Object.defineProperty(MYOBJECT, "name",{
  writable: false,
  configurable: false,
  enumerable: true
})

// SET A CONSTANT OBJECT PROPERTY
const SET_CONSTANT = Object.defineProperty(MYOBJECT, "ID", {
  value: "99YHG66TYS",
  writable: false,
  configurable: false,
  enumerable: true
})

// PREVENT EXTENSIONS
const EXTEND_OBJECT = Object.preventExtensions(MYOBJECT)


for (let item in MYOBJECT){
  console.log(item)
}
// MYOBJECT.name = "samson"
console.log(SET_PROPERTY);