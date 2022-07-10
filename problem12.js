const nu = 12321;
const str = nu.toString();
function palindrom(str) {
    return str.split("").reverse().join("");
}
palindrom(str);
console.log("Question 12: This ", str, "is palindromic numbers");
let s = str.length;
console.log("The count of all palindromic numbers till ’n’ (inclusive) is ", s);