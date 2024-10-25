// var type variable
// redeclaration possible
// reassignment possible
// global scope (accessed everywhere in the program)

var a = 10;
console.log("var type normally: "+a);
var a = 10;
console.log("var type redeclaration: "+a);
a = 15;
console.log("var type reassigning: "+a);
while(a > 0) {
    console.log("var type inside the block: "+a);
    var aa = 20;
    break;
}
try {
    console.log("var type variable accesed outside the block: "+aa);
}catch(error) {
    console.log("var type variable cannot be accesed outside the scope");
}
console.log();


// const type variable
// redeclaration possible
// reassignment not possible
// local scope (accessed only with in the block)

const b = 10;
console.log("const type normally: "+b);
try {
    const b = 10;
    console.log("const type redeclaring: "+b);
} catch(error) {
    console.log("const type variable cannot be redeclared");
}
try {
    b = 15;
    console.log("const type reassigning: "+b);
}catch(error) {
    console.log("const type variable cannot be reassigned");
}
while(b > 0) {
    console.log("const type inside the block: "+b);
    const bb = 20;
    break;
}
try {
    console.log("const type variable accesed outside the block: "+bb);
}catch(error) {
    console.log("const type variable cannot be accesed outside the scope");
}
console.log();


// let type variable
// redeclartion possible
// reassignment possible
// local scope (accessed only with in the block)

let c = 10;
console.log("let type normally: "+c);
try {
    let c = 10;
    console.log("let type redeclaring: "+c);
} catch(error) {
    console.log("let type variable cannot be redeclared");
}
try {
    c = 15;
    console.log("let type reassigning: "+c);
} catch(error) {
    console.log("let type variable cannot be reassigned");
}
while(c > 0) {
    console.log("let type inside the block: "+c);
    let cc = 20;
    break;
}
try {
    console.log("let type variable accesed outside the block: "+cc);
}catch(error) {
    console.log("let type variable cannot be accesed outside the scope");
}
console.log();