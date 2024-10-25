// control flow statements

// if else, if  else if  else

var n1 = 10;
var n2 = 20;

if(n1 < n2) {
    console.log("if statement");
}
console.log();

if(n1 > n2) {
    console.log("empty");
}else if(n1 < n2) {
    console.log("else if statement")
}
console.log();

if(n1 > n2) {
    console.log("empty");
}else if(n1 == n2) {
    console.log("empty");
}else {
    console.log("else statement");
}
console.log();


// switch statements 

var fname1 = "Amuthan";
var fname2 = "Bharani";
var fname = "name";

switch(fname1) {
    case "Amuthan":
        console.log("Amuthan - switch statement - normal case");
        break;
    case "Bharani":
        console.log("Bharani - switch statement - normal case");
        break;
    default:
        console.log("Default statement");
}
console.log();

switch(fname) {
    case "Amuthan":
        console.log("Amuthan - switch statement - normal case");
        break;
    case "Bharani":
        console.log("Bharani - switch statement - normal case");
        break;
    default:
        console.log("Default statement");
}
console.log();

switch(fname1) {
    case "Amuthan":
        console.log("Amuthan - switch statement - normal case without break");
    case "Bharani":
        console.log("Bharani - switch statement - normal case without break");
    default:
        console.log("Default statement");
}
console.log();


// for loop

console.log("for loop example");
var num = 10;
for(var i=1; i<=num; i++) {
    console.log(i);
}
console.log();


// while loop

console.log("while loop example");
var temp = num;
while (temp > 0) {
    console.log(temp);
    temp = temp - 1;
}
console.log();


// do while loop

console.log("do loop while example");
var t = num;
do {
    console.log(t);
    if(t == 10) {
        console.log("inside do while loop condition true - breaks");
        break;
    }
    t = t - 1;
}while(t > 0);