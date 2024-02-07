// objects of a superclass should be replaceable with objects of its subclasses without affecting the correctness of the program
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// problem
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = 0;
        this.height = 0;
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.setWidth = function (width) {
        this.width = width;
    };
    Rectangle.prototype.setHeight = function (height) {
        this.height = height;
    };
    Rectangle.prototype.area = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
// Square is a type of rectangle so we can assume it can extend Rectangle
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Square.prototype.setWidth = function (width) {
        this.width = width;
        this.height = width;
    };
    Square.prototype.setHeight = function (height) {
        this.height = height;
        this.width = height;
    };
    return Square;
}(Rectangle));
function increaseWidth(rectangle) {
    rectangle.setWidth(rectangle.width + 1);
}
var rect1 = new Rectangle(10, 5);
var rect2 = new Square(5, 5);
increaseWidth(rect1);
increaseWidth(rect2);
console.log('Problem');
console.log('Area rect1:', rect1.area());
console.log('Area rect2:', rect2.area());
// The problem with above code is, it changes sqare width and height and area will be shown as 6 * 6 = 36,
// This breaks LSP principle
// ***********************************************************************************************************************************
// Solution
var Shape = /** @class */ (function () {
    function Shape() {
    }
    return Shape;
}());
var RectangleShape = /** @class */ (function (_super) {
    __extends(RectangleShape, _super);
    function RectangleShape(width, height) {
        var _this = _super.call(this) || this;
        _this.width = 0;
        _this.height = 0;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    RectangleShape.prototype.setWidth = function (width) {
        this.width = width;
    };
    RectangleShape.prototype.setHeight = function (height) {
        this.height = height;
    };
    RectangleShape.prototype.area = function () {
        return this.width * this.height;
    };
    return RectangleShape;
}(Shape));
var SquareShape = /** @class */ (function (_super) {
    __extends(SquareShape, _super);
    function SquareShape() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.width = 0;
        return _this;
    }
    SquareShape.prototype.setWidth = function (width) {
        this.width = width;
    };
    SquareShape.prototype.area = function () {
        return this.width * this.width;
    };
    return SquareShape;
}(Shape));
function increaseShapeWidth(shape) {
    shape.setWidth(shape.width + 1);
}
var rectShape = new Rectangle(10, 5);
var squareShape = new Square(5, 5);
increaseShapeWidth(rect1);
increaseShapeWidth(rect2);
console.log('Solution');
console.log('Area rect1:', rectShape.area());
console.log('Area rect2:', squareShape.area());
