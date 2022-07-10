function arrEvOdd(arr, nn) {
    let evenArr = [];
    let OddArr = [];
    for (let i = 0; i < nn; i++) {
        if (i % 2 != 1) {
            evenArr.push(arr[i]);
            evenArr.sort(function (a, b) { return a - b; });
        } else {
            OddArr.push(arr[i]);
            OddArr.sort(function (a, b) { return a - b; });
        }
    }
    let reArnEvOd = [];
    console.log("Even and odd positioned element", evenArr, OddArr);
    for (let i = 0; i < evenArr.length, i < OddArr.length; i++) {
        reArnEvOd.push(evenArr[i], OddArr[i]);
    }
    console.log("Even index array elements sorted in ascending order is ", reArnEvOd);

}
let arr = [1, 5, 8, 9, 6, 7, 3, 4, 2, 0];
console.log("Question 10:");
console.log("Given Array is ", arr);
let nn = arr.length;
arrEvOdd(arr, nn);
