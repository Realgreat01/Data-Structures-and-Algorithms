// DEEP COPY

const print = (n) => console.log(n);
function copy(arr1, arr2) {
 for (let i = 0; i < arr1.length; ++i) {
 arr2[i] = arr1[i];
} 
return [arr2, arr1]
}
let nums = [];
for (let i = 0; i < 15; i++) {
 nums[i] = i+1; }
let samenums = [];
print(copy(nums, samenums));


