const arrsq = [];
arrsqN(-9);
function arrsqN(N) {
    var sq = 0;
    console.log("Qestion 7: An integer", N, "th is provided to you as the input.");
    if (N == 0) {
        console.log("The", N, "th term in the provided series is 0");
    } else if (N < 0) {
        console.log("The", N, "th term in the provided series is Error");
    } else {
        for (var i = 1; i <= N; i++) {
            sq = i ** 2;
            arrsq.push(sq);
        }
        console.log("the", i - 1, "th term in the provided series are ", arrsq);
    }

}