// Arithmetic Operators ( +, -, *, /, %, ** )

var n1 = 10;
var n2 = 20;
console.log("Addition: "+(n1+n2));
console.log("Subtraction: "+(n1-n2));
console.log("Multiplication: "+(n1*n2));
console.log("Division: "+(n1/n2));
console.log("Modulus: "+(n1%n2));
console.log("Exponent: "+(n1**n2));
console.log();


// Assignment Operators ( =, +=, -=)

console.log("(=) Operator: "+n1);
n1 += 10;
console.log("(+=) Operator: "+n1);
n1 -= 10;
console.log("(-=) Operator: "+n1);
console.log();


// Comparison Operators ( ==, ===, !=, !==, >, <)

console.log("(==) Operator: "+(n1==n2));
console.log("(===) Operator: "+(n1===n2));
console.log("(!=) Operator: "+(n1!=n2));
console.log("(!==) Operator: "+(n1!==n2));
console.log("(>) Operator: "+(n1>n2));
console.log("(<) Operator: "+(n1<n2));
console.log();


// Logical Operators ( &&, ||, !)

if(n1 == 10 && n2 == 20) {
    console.log("(&&) Operators works");
}
if(n1 == 10 || n2 != 20) {
    console.log("(||) Operator works");
}
if(!(n1 == 20)) {
    console.log("(!) Operators works");
}
console.log();


// Ternary Operator ( Condition ? expr1 : expr2 )

n1 < n2 ? console.log("True works") : console.log("False works");