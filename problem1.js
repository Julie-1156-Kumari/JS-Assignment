function factorial(N) {
    if (N == 1) {
        console.log("Question 1: the factorial of", 
         N, "is 1");
    } else if (N < 0) {
        console.log("Question 1: the factorial of", 
 N, "is not possible, Please enter positive integer number");
    } else {
        let f = 1;
        for (var n = N; n >= 1; n--) {
            f = f * n;
        }
        console.log("Question 1: factorial value of ", N, "is", f);
    }

}
factorial(8);
