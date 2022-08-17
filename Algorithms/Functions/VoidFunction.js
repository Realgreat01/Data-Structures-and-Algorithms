// A void function does not return any value when called
const print = (n) => console.log(n) ;

function showScope() {
    scope = "local";
    return scope
;}

scope = "global";
print(scope); // displays "global"
print(showScope()); // displays "local"
print(scope);