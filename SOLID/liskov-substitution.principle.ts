// objects of a superclass should be replaceable with objects of its subclasses without affecting the correctness of the program

// problem
class Rectangle {
    width = 0;
    height = 0;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    setWidth(width: number) {
        this.width = width;
    }
    
    setHeight(height: number) {
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }
}

// Square is a type of rectangle so we can assume it can extend Rectangle
class Square extends Rectangle {

    setWidth(width: number) {
        this.width = width;
        this.height = width
    }
    
    setHeight(height: number) {
        this.height = height;
        this.width = height;
    }
}

function increaseWidth(rectangle: Rectangle) {
    rectangle.setWidth(rectangle.width + 1);
}

const rect1 = new Rectangle(10, 5);
const rect2 = new Square(5, 5);

increaseWidth(rect1);
increaseWidth(rect2);

console.log('Problem')
console.log('Area rect1:', rect1.area());
console.log('Area rect2:', rect2.area());

// The problem with above code is, it changes sqare width and height and area will be shown as 6 * 6 = 36,
// This breaks LSP principle

// ***********************************************************************************************************************************

// Solution

abstract class Shape {
    abstract area(): number;
}

class RectangleShape extends Shape {
    width = 0;
    height = 0;

    constructor(width: number, height: number) {
        super();
        this.width = width;
        this.height = height;
    }

    setWidth(width: number) {
        this.width = width;
    }
    
    setHeight(height: number) {
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }
}

class SquareShape extends Shape {
    width = 0;
    setWidth(width: number) {
        this.width = width
    }
    area() {
        return this.width * this.width;
    }
}

function increaseShapeWidth(shape: Rectangle | Square) {
    shape.setWidth(shape.width + 1);
}

const rectShape = new Rectangle(10, 5);
const squareShape = new Square(5, 5);

increaseShapeWidth(rect1);
increaseShapeWidth(rect2);

console.log('Solution')
console.log('Area rect1:', rectShape.area());
console.log('Area rect2:', squareShape.area());
