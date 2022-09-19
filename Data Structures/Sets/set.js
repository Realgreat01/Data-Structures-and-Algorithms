const set = new Set([1, 2, 3, 4, 5, 6, 6, 4, 4])
console.log(set);
set.keys(item => console.log(item / 2))
console.log(set.keys());