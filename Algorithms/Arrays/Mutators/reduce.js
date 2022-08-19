const mainArray = [2,3,4,5,6,32,35,67]
const filter = mainArray.filter(item => item % 2 === 0)
const reduce = mainArray.reduce((sum, item )=> sum+ item)
console.log(reduce)
console.log(filter)
