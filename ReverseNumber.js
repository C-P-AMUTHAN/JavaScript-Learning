var number = 123;
var numCopy = number;
var reversed = 0;
while(number != 0) {
    var rem = number % 10;
    reversed = (reversed * 10) + rem;
    number /= 10;
}
if(reversed == numCopy) {
    console.log(numCopy+" is palindrome number");
}else {
    console.log(numCopy+" is not palindrome number");
}