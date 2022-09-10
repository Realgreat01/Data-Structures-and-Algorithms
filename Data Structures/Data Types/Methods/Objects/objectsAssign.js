// THIS COPIES OBJECTS FROM ONE ARRAY TO ANOTHER
// Object.assign(..) takes a target object as its first parameter, and one
// or more source objects as its subsequent parameters.

const MYOBJECT = {
  name: "Samson",
  alias: "Realgreat",
  age: 22,
  company: "verix",
  school: "University of Benin"
}
const TARGETOBJ = {
  course: "dentistry",
  interest: ["Sustainabilty", "Tech", "Community Service"]
}
const ASSIGNEDOBJ = Object.assign(TARGETOBJ, MYOBJECT)
console.log(TARGETOBJ);