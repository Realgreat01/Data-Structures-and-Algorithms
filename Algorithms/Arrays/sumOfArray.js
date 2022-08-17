const print = (n) => console.log(n);

const arraySum = (array) =>{
    let sum = 0;
    for (let i = 0; i< array.length; i++){
        // Any return statement here is the one for the first iteration
        sum += array[i];
    }
        // Any return statement here is for after iteration of the array
    return sum
}

print(arraySum([1,2,3,4,5,5,6,7]))
