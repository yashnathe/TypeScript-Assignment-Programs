/* Create one typescript application which contains one class named as Arithmetic.
Arithmetic class contains three characteristics (Class data members) as Number1, Number2.
Create one parametrised constructor which accept two values and assign it to Number1 and Number2.
In Arithmetic class we have to write four methods (Behaviours) as Addition, Subtraction, Multiplication and Division.
Addition method will add Number1, Number2 & return result.
Subtraction method will subtract Number1, Number2 & return result.
Multiplication method will multiply Number1, Number2 & return result.
Division method will divide Number1, Number2 & return result. After designing the class create two objects of that
class by providing some hardcoded value.
Call all the methods by using both the objects. */
var Arithmetic = /** @class */ (function () {
    function Arithmetic(X, Y) {
        this.Num1 = X;
        this.Num2 = Y;
    }
    Arithmetic.prototype.Addition = function () {
        return this.Num1 + this.Num2;
    };
    Arithmetic.prototype.Substraction = function () {
        return this.Num1 - this.Num2;
    };
    Arithmetic.prototype.Multiplication = function () {
        return this.Num1 * this.Num2;
    };
    Arithmetic.prototype.Division = function () {
        return this.Num1 / this.Num2;
    };
    return Arithmetic;
}());
var Obj1 = new Arithmetic(223, 54);
var Obj2 = new Arithmetic(65, 54);
var Obj3 = new Arithmetic(98, 4);
var Obj4 = new Arithmetic(90, 5);
var Ret = 0;
console.log("**************************************");
Ret = Obj1.Addition();
console.log("Addition of Obj1 : " + Ret);
console.log("**************************************");
Ret = Obj2.Substraction();
console.log("Substraction of Obj2 : " + Ret);
console.log("**************************************");
Ret = Obj3.Multiplication();
console.log("Multiplication of Obj3 : " + Ret);
console.log("**************************************");
Ret = Obj4.Division();
console.log("Division of Obj4 : " + Ret);
console.log("**************************************");
