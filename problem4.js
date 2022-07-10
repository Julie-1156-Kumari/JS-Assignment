let n = nOfday(8);
function nOfday(i) {
    if (i == 7) {
        console.log("Question 4: ", 31);
    }
    if (((i % 2) == 1) && (i != 2) && (i != 7)) {
        console.log("Question 4: ", 30);
    }
    if (((i % 2) == 0) && ((i != 2))) {
        console.log("Question 4: ", 31);
    }
    if (i == 2) {
        console.log("Question 4: ", 28, "Or", 29);
    }
}