// Write a TS program which contains one function named as Maximum. That function accepts
// array of numbers and returns the largest number from array.

function Maximum(Arr : number[]):number{

    var largest= 0;

    for (var i=0; i<=Arr.length;i++){

        if (Arr[i] > largest) {

            var largest=Arr[i];

        }
    }
    return largest

}

var Ele : number[] = [23,89,6,29,56,45,77,32]

var Ret : number = 0;

Ret = Maximum(Ele)

console.log("Maximum element is "+Ret)