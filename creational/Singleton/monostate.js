class CEO {

    set name(name) {
        CEO._name = name;
    }

    get name() {
        return CEO._name;
    }

    set age(age) {
        CEO._age = age;
    }

    get age() {
        return CEO._age;
    }

}

CEO._name = undefined;
CEO._age = undefined;

const ceo1 = new CEO()
const ceo2 = new CEO()
ceo1.name = 'John';
ceo1.age = 43;

console.log('ceo1 ', ceo1.name, ceo1.age);
console.log('ceo2 ', ceo2.name, ceo2.age);