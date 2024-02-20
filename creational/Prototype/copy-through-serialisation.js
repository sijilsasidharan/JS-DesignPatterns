// Usaing serialization for the serializer

class Address {
    constructor(street, pin, city) {
        this.street = street;
        this.pin = pin;
        this.city = city;
    }
    
    toString() {
        return `Address: ${this.street}, ${this.pin}, ${this.city}`;
    }
}
class Person {
    constructor(name, address) {
        this.name = name;
        this.address = address
    }

    toString() {
        return `name: ${this.name}, Address: ${this.address}`;
    }
}

class Serializer {
    constructor(types) {
        this.types = types;
    }

    markRecursive(object) {
        const idx = this.types.findIndex(t => t.name === object.constructor.name)
        if (idx !== -1) {
            object['typeIndex'] = idx;
            for (const key in object) {
                if (object.hasOwnProperty(key)) {
                    this.markRecursive(object[key])
                }
            }
        }
    }

    reconstructRecursive(object) {
        if (object.hasOwnProperty('typeIndex')) {
            let type = this.types[object.typeIndex];
            let obj = new type();
            for (const key in object) {
                if (object.hasOwnProperty(key) && object[key !== null]) {
                    obj[key] = this.reconstructRecursive(obj[key]);
                }
            }
            delete obj.typeIndex;
            return obj;
        }
        return object;
    }

    clone(object) {
        this.markRecursive(object);
        const copy = JSON.parse(JSON.stringify(object));
        return this.reconstructRecursive(copy);
    }
}

const jane = new Person('Jane', new Address('123 London', 12345, 'UK'));

// Json parse
const jack = JSON.parse(JSON.stringify(jane))
jack.name = 'Jack';
jack.address.street = '908 Mandrid';
jack.address.pin = 90005000;
jack.address.city = 'Spain';
console.log(jane.toString());
console.log(jack.toString());
// But in JSON parse only properties of object will be called.
// jack.toString() will not work(it will show [object Object]).
// TO solve this we can implement a serialiser

const serializer = new Serializer([Person, Address]);
const jim = serializer.clone(jane);
jim.name = 'Jim';
// jim.address.street = '908 Mandrid';
// jim.address.pin = 90005000;
// jim.address.city = 'Spain';

console.log(jane.toString());
console.log(jim.toString());