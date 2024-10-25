var num = 370;
const temp = num;
let countNum = num;
var answer = 0;
var rem = 0;
let count = 0;
while(countNum != 0) {
    countNum = parseInt(countNum/10);
    count += 1;
}
while(num!=0) {
    rem = num % 10;
    answer += Math.pow(rem, count);
    num = parseInt(num/10);
}
if(temp == answer) {
    console.log(temp+" Armstrong number");
}else {
    console.log(temp+" not Armstrong Number");
}
