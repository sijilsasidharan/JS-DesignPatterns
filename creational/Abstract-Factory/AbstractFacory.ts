interface Chair {
    name: string;
    legs: number;
    price: number;
    discount: number;
    hasLeg: () => boolean;
    totalPrice: () => number;
}

class ModernChair implements Chair {
    name: string;
    legs: number;
    price: number;
    discount: number;
    hasLeg: () => boolean;
    totalPrice: () => number;
    constructor() {
    }
}