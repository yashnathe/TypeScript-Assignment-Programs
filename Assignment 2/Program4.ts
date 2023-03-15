// Write a TS program which contains one arrow function name as ChkArmstrong. That function accepts
// one number and Check whether number is Armstrong number or not.

var num : number = 153

var rem : number = 0

var sum : number = 0

while(temp > 0){

    rem = temp % 10

    sum += rem * rem * rem

    temp = parseInt(temp/10)
            
}

if(sum == x){

    console.log("It is Armstrong number")

}else{

    console.log("It is not Armstrong number")
            
}

var num : number = 153