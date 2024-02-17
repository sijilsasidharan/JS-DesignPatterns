// Prototype design pattern is used when the Object creation is a costly affair and requires a lot of time and resources and you have a similar object already existing.
// Prototype pattern provides a mechanism to copy the original object to a new object and then modify it according to our needs.
// Prototype design pattern uses java cloning to copy the object.

class Address {
    constructor(street, pin, city) {
        this.street = street;
        this.pin = pin;
        this.city = city;
    }

    deepCopy() {
        return new Address(
            this.street,
            this.pin,
            this.city
        );
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

    deepCopy() {
        return new Person(
            this.name,
            this.address.deepCopy()
        );
    }

    toString() {
        return `name: ${this.name}, ${this.address.toString()}`;
    }
}

const john = new Person('John', new Address('123 London', 123345, 'UK'));
let jane = john;

console.log(`*****Before prototyping******`);
console.log(john.toString());
console.log(jane.toString());

// copy
john.name = "John Luther";
john.address.street = '908 Mandrid';
john.address.pin = 90005000;
john.address.city = 'Spain';
console.log(john.toString());
console.log(jane.toString());

// Since it is an object it will change both john and jane object names.
// So we have to use deepcopy

console.log(`*****After prototyping******`);
jane = john.deepCopy();
john.name = 'James';
john.address.street = '321 Okalahoma';
john.address.pin = 100000;
john.address.city = 'United States';

console.log(john.toString());
console.log(jane.toString());
