// high level modules should not depend on low level modules; both should depend on abstractions.

// Prpoblem
// Here we create a relationship class(LOW-LEVEL) which keeps data of peoples realtionships
// the problem here is the relationship class(HIGH-LEVEL) which is dependend on of data of LOW LEVEL class.
// basically HIGH-LEVEL Module depended on LOW-LEVEL modules. (Field DIP)
const Relationship = Object.freeze({
    parent: 0,
    child: 1,
    sibling: 2
});

class Person {
    name: string;
    constructor(name) {
        this.name = name;
    }
}

type RelationshipsData = { from: Person, type: typeof Relationship[keyof typeof Relationship], to: Person };
// LOW-LEVEL Modules
class Relationships {
    data: RelationshipsData[] = [];

    addParentAndChild(parent: Person, child: Person) {
        this.data.push({
            from: parent,
            type: Relationship.parent,
            to: child
        })
    }
}

// HIGH-LEVEL Modules
class Research {
    constructor(relationships: Relationships) {
        // fing all children of John
        for (let rel of relationships.data.filter(r => r.from.name === 'John' && r.type === Relationship.parent)) {
            console.log(`John has a child name ${rel.to.name}`);
        }
    }
}

const parent1 = new Person('John');
const child1 = new Person('Smith');
const child2 = new Person('Jenny');

const rels = new Relationships();
rels.addParentAndChild(parent1, child1);
rels.addParentAndChild(parent1, child2);

console.log('Problem');
new Research(rels);

// SOLUTION
// SOLUTION is define a abstract class which high level class expect to be implemented by low level class
// This will help high level class independed of low level class implementation.


// LOW-LEVEL Modules
abstract class RelationshipBrowser {
    abstract findAllChildrenOf(name): Person[];
}
class RelationshipsSol extends RelationshipBrowser {
    data: RelationshipsData[] = [];

    addParentAndChild(parent: Person, child: Person) {
        this.data.push({
            from: parent,
            type: Relationship.parent,
            to: child
        })
    }

    findAllChildrenOf(name: any): Person[] {
        return this.data.filter(r =>
            r.from.name === name &&
            r.type === Relationship.parent
        ).map(r => r.to)
    }
}

// HIGH-LEVEL Modules
class ResearchSol {
    constructor(browser: RelationshipBrowser) {
        // fing all children of John
        for (let rel of browser.findAllChildrenOf('Jphn')) {
            console.log(`John has a child name ${rel.name}`);
        }
    }
}

const relsSol = new RelationshipsSol();
relsSol.addParentAndChild(parent1, child1);
relsSol.addParentAndChild(parent1, child2);

console.log('Solution');
new Research(relsSol);
