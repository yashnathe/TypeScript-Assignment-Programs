// Write a TS program which contains one  function named as Summation. That function accepts
// array of numbers and returns the summation of each number from array.

function Summation(Arr : number[]) : number {

    var Max : number = 0;

    for(var Cnt = 0; Cnt < Arr.length; Cnt++){

        Max += Arr[Cnt];

    }

    return Max

}

var num : number[] = [23,6,7,4,5,7]

var Ret : number = 0

Ret =  Summation(num)

console.log("Addition is "+Ret)