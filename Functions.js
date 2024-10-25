// Functions are reusable code, which can called again and again to perform a specific task without retyping

// Types of functions in javascript
// 1) Function declaration (Named function)
// 2) Fuction expression (Anonymous function)
// 3) Arrow function
// 4) Immediately invoked function expression (IIFE)

var a = 10;
var b = 20;

// Named funtion (function declaration)

function add(x, y) {
    return x+y;
}
console.log("Nomal named function for addition: "+add(a, b));

// Anonymous function

const subtract = function(x, y) {
    return Math.abs(x-y);
};
console.log("Anonymous function for subtraction: "+subtract(a, b));

// Arrow function

const multiply = (x, y) => x*y;
console.log("Arrow function for multiplication: "+multiply(a, b));

// Immediately invoked function expression

(function() {
    console.log("IIFE function for division: "+a/b);
})();