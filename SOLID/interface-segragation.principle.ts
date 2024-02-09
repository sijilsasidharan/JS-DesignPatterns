// “Clients should not be forced to depend upon interfaces that they do not use“

// problem
export interface IVehicle {
    drive(): void;
    fly(): void;
}

class Car implements IVehicle {
    drive(): void {
        console.log('Drive Implemented')
    }
    fly(): void {
        // ISP violation
        throw new Error("Method not implemented.");
    }

}


class Flight implements IVehicle {
    drive(): void {
        // ISP violation
        throw new Error("Method not implemented.");
    }
    fly(): void {
        console.log('Drive Implemented')
    }

}

// solution
interface ICar {
    drive(): void;
}

interface IFlight {
    fly(): void;
}

class NewCar implements ICar {
    drive(): void {
        console.log('car implemented')
    }
}

class NewFlight implements IFlight {
    fly(): void {
        console.log('car implemented')
    }
}