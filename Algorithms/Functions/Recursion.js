// A recursive function is that which calls itself till it's dependencies becomes the true for the set value
// An example is used in Factorial

// Lets Find Factorial of a number (n)

const print = (n) => console.log(n);

function factorial (n) {
    if (n ===1){
        return 1
    } else {
        return  n * factorial(n-1)
    }
} 
print(factorial(5))

// NOTES
// any function that uses recursion can be rewritten in an iterative manner
