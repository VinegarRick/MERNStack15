//classes and methods - java is object oriented
// class Area {
//     int length, breadth, radius;

//     Rectangle(1,b)
//     Square(1)
//     Circle(radius)
// }

// Area rectObj = new Area();
// reactObj.Rectangle(5,6);

//javascript is functional programming language - it is behavior-oriented

function Rectangle(length, breadth) {
    return length * breadth;
}

function Circle(radius) {
    return Math.PI * Math.pow(radius, 2);
}

console.log(Rectangle(5,6))
console.log(Circle(3))