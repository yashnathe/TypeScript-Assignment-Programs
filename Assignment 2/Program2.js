// Write a TS program which contains one  function named as Summation. That function accepts
// array of numbers and returns the summation of each number from array.
function Summation(Arr) {
    var Max = 0;
    for (var Cnt = 0; Cnt < Arr.length; Cnt++) {
        Max += Arr[Cnt];
    }
    return Max;
}
var num = [23, 6, 7, 4, 5, 7];
var Ret = 0;
Ret = Summation(num);
console.log("Addition is " + Ret);
