/*
Create one typescript application which contains one class named as
Circlex which sill inherits above Circle class.
In CircleX class we have to write one method (Behaviours) as
Circumference which will return circumference of circle.
After designing the class create two objects of that class by providing some hardcoded value.
Call Circumference and Area methods by using both the objects.
*/
var Circle = /** @class */ (function () {
    function Circle(Area) {
        this.Rad = Area;
        this.PI = 3.142;
    }
    Circle.prototype.Circumference = function () {
        var Ans = 0;
        Ans = 2 * this.PI * this.Rad;
        return Ans;
    };
    return Circle;
}());
var Obj1 = new Circle(44.5);
var Ret = 0;
Ret = Obj1.Circumference();
console.log("Circumference of circle is : " + Ret);
