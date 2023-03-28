/*
Create one typescript application which contains one class named as 
Circlex which sill inherits above Circle class.
In CircleX class we have to write one method (Behaviours) as 
Circumference which will return circumference of circle.
After designing the class create two objects of that class by providing some hardcoded value. 
Call Circumference and Area methods by using both the objects.
*/

class Circle{

    Rad : number;
    PI : number;

    constructor ( Area : number ){

        this.Rad = Area;
        this.PI = 3.142;

    }

    Circumference() {

        let Ans : number = 0;
        Ans = 2 * this.PI * this.Rad;
        return Ans;

    }

}

var Obj1 = new Circle(44.5);
var Ret : number = 0;

console.log("*****************************************");

Ret  = Obj1.Circumference();
console.log("Circumference of circle is : "+Ret);

console.log("*****************************************");