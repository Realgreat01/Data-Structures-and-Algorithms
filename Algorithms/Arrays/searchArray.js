const print = (n) => console.log(n)

let mainArray = ["David", "Cynthia", "Raymond", "Clayton", "Jennifer"];

let searchedItem = "David";

let itemPosition = mainArray.indexOf(searchedItem);

if (itemPosition >= 0) {
    print("Found " + searchedItem + " at position " + eval(itemPosition+1));
}
else {
    print(searchedItem + " not found in array.");
}