var root1, root2;
console.log("Question 9: The coefficients of a quadratic equation in order A, B & C");
var a = 1;
var b = 5;
var c = 6;

let discriminant = b * b - 4 * a * c;
console.log("Discriminant value is ", discriminant);

console.log("Check condition for real and different roots");
if (discriminant > 0) {
    root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    console.log("Discriminant >0, the roots are real and different");
    console.log(`The roots of quadratic equation are ${root1.toFixed(2)} and ${root2.toFixed(2)}`);
} else if (discriminant == 0) {
    root1 = root2 = (-b / (2 * a));
    console.log("Discriminant == 0, the roots are real and equal");
    console.log(`The roots of quadratic equation are ${root1.toFixed(2)} and ${root2.toFixed(2)}`);
} else {
    let realPart = (-b / (2 * a)).toFixed(2);
    let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
    console.log("Discriminant<0, the roots are complex and different");
    console.log(
        `The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`
    );
}