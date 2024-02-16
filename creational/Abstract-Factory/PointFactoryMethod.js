// Create Cartesian and polar factory

// Solution with Factory Method Design pattern

class Pointer {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    // Factory Method
    static newCartesianPointer(x, y) {
        return new Pointer(x, y);
    }
    // Factory Method
    static newPolarPointer(rho, theta) {
        return new Pointer(
            rho * Math.sin(theta),
            rho * Math.cos(theta)
        );
    }
}

console.log(Pointer.newCartesianPointer(4, 5));
console.log(Pointer.newPolarPointer(3, Math.PI/2));

// the above pointer class violates single-responsibility principle
// so we can create a new class for factory like below

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static get factory() {
        return PointFactory;
    }
}

class PointFactory {
    static newCartesianPoint(x, y) {
        return new Pointer(x, y);
    }

    static newPolarPoint(rho, theta) {
        return new Pointer(
            rho * Math.sin(theta),
            rho * Math.cos(theta)
        );
    }
}

console.log(Point.factory.newCartesianPoint(3, 5));
console.log(Point.factory.newPolarPoint(4, Math.PI/2));
