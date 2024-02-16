// Create Cartesian and polar factory

// Solution with Factory Design pattern

// // only for cartesian points
// class Point {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//     }
// }

// cartesian and polar points


CoordinateSystem = {
    cartesian: 0,
    polar: 1
};

class Point {
    constructor(a, b, cs = CoordinateSystem.cartesian) {
        switch(cs) {
            case CoordinateSystem.cartesian:
                this.x = a;
                this.y = b;
                break;
            case CoordinateSystem.polar:
                this.x = a * Math.cos(b);
                this.y = a * Math.sin(b);
                break;            
        }
    }
}

console.log(new Point(4, 5, 0));
console.log(new Point(10, 45, 1));

// in the above code the problem is we have to change the constructor if we introduce new cartesian system which violates open-closed principle
// also parameter passed to constrctor is not meaning full.
// These issues can be resolved using factory method.
