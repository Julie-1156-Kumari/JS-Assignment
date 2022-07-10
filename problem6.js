var sum = 0;
function sumofN(N) {
    for (var i = 1; i <= N; i++) {
        sum += i;
    }
    return sum;
}
console.log("Qestion 6: The sum of number 1 to N is ", sumofN(10));