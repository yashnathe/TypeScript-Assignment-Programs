/* 
Create one typescript application which contains one class named as Circle.
Circle class contains two characteristics (Class data members) as Radius, PI. 
Create one parametrised constructor which accept one value and assign it to Radius. Value of
PI member is set to 3.14.
In Circle class we have to one method (Behaviours) as Area which will return area of Circle. 
After designing the class create two objects of that class by providing some hardcoded value. 
Call the method Area by using both the objects.
*/

class Circle {
    
    Rad : number;
    PI : number;

    constructor(Area : number){

        this.Rad = Area;
        this.PI = 3.142;

    }

    AreaOfCircle() : number{

        let Ans : number = 0;
        Ans = this.PI * this.Rad * this.Rad;
        return Ans;

    }

    CircumfaranceOfCircle() : number {

        let Ans : number = 0;
        Ans = 2 * this.PI * this.Rad;
        return Ans;

    }

}

var Obj1 = new Circle(22.65);
var Ret : number = 0;

Ret = Obj1.AreaOfCircle();
console.log("Area of the Circle is : "+Ret);

console.log("*****************************************");

Ret = Obj1.CircumfaranceOfCircle();
console.log("Area of the Circle is : " + Ret);