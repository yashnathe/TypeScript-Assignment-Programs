// Write a TS program which contains one function named as Maximum. That function accepts
// array of numbers and returns the second largest number from array.
function Maximum(Arr) {
    var first = -1, second = -1;
    for (var i = 0; i <= Arr.length - 1; i++) {
        if (Arr[i] > first) {
            second = first;
            first = Arr[i];
        }
        else if (Arr[i] > second && Arr[i] != first) {
            second = Arr[i];
        }
    }
    return second;
}
var num = [23, 89, 6, 29, 56, 45, 77, 32];
var Ret = 0;
Ret = Maximum(num);
console.log("Second Maximum number is " + Ret);
