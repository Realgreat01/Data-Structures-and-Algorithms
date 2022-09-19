const toAvg =(avg, number , index)=>{
  console.log(avg)
  console.log(number)
  console.log(index);
  return avg + (number-avg) / (index +1);
}

[1,2,3,4].reduce(toAvg);
[1,2,3,4].reduce((acc, curr, index)=>{
  console.log(acc)
  console.log(curr)
  console.log(index);
  return acc+ (curr-acc) / (index +1);
})

const inc = x => x+1
console.log(inc(-90));