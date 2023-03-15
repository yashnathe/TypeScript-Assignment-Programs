// Write a TS program which contains one arrow function name as ChkArmstrong. That function accepts
// one number and Check whether number is Armstrong number or not.
function ChkArmstrong(x) {
    var temp = x;
    var rem = 0;
    var sum = 0;
    while (temp > 0) {
        rem = temp % 10;
        sum += rem * rem * rem;
    }
    if (sum == x) {
        console.log("It is Armstrong number");
    }
    else {
        console.log("It is not Armstrong number");
    }
}
var num = 153;
ChkArmstrong(num);
