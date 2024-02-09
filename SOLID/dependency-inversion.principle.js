// high level modules should not depend on low level modules; both should depend on abstractions.
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
// Prpoblem
// Here we create a relationship class(LOW-LEVEL) which keeps data of peoples realtionships
// the problem here is the relationship class(HIGH-LEVEL) which is dependend on of data of LOW LEVEL class.
// basically HIGH-LEVEL Module depended on LOW-LEVEL modules. (Field DIP)
var Relationship = Object.freeze({
    parent: 0,
    child: 1,
    sibling: 2
});
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
// LOW-LEVEL Modules
var Relationships = /** @class */ (function () {
    function Relationships() {
        this.data = [];
    }
    Relationships.prototype.addParentAndChild = function (parent, child) {
        this.data.push({
            from: parent,
            type: Relationship.parent,
            to: child
        });
    };
    return Relationships;
}());
// HIGH-LEVEL Modules
var Research = /** @class */ (function () {
    function Research(relationships) {
        // fing all children of John
        for (var _i = 0, _a = relationships.data.filter(function (r) { return r.from.name === 'John' && r.type === Relationship.parent; }); _i < _a.length; _i++) {
            var rel = _a[_i];
            console.log("John has a child name ".concat(rel.to.name));
        }
    }
    return Research;
}());
var parent1 = new Person('John');
var child1 = new Person('Smith');
var child2 = new Person('Jenny');
var rels = new Relationships();
rels.addParentAndChild(parent1, child1);
rels.addParentAndChild(parent1, child2);
console.log('Problem');
new Research(rels);
// SOLUTION
// SOLUTION is define a abstract class which high level class expect to be implemented by low level class
// This will help high level class independed of low level class implementation.
// LOW-LEVEL Modules
var RelationshipBrowser = /** @class */ (function () {
    function RelationshipBrowser() {
    }
    return RelationshipBrowser;
}());
var RelationshipsSol = /** @class */ (function (_super) {
    __extends(RelationshipsSol, _super);
    function RelationshipsSol() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.data = [];
        return _this;
    }
    RelationshipsSol.prototype.addParentAndChild = function (parent, child) {
        this.data.push({
            from: parent,
            type: Relationship.parent,
            to: child
        });
    };
    RelationshipsSol.prototype.findAllChildrenOf = function (name) {
        return this.data.filter(function (r) {
            return r.from.name === name &&
                r.type === Relationship.parent;
        }).map(function (r) { return r.to; });
    };
    return RelationshipsSol;
}(RelationshipBrowser));
// HIGH-LEVEL Modules
var ResearchSol = /** @class */ (function () {
    function ResearchSol(browser) {
        // fing all children of John
        for (var _i = 0, _a = browser.findAllChildrenOf('Jphn'); _i < _a.length; _i++) {
            var rel = _a[_i];
            console.log("John has a child name ".concat(rel.name));
        }
    }
    return ResearchSol;
}());
var relsSol = new RelationshipsSol();
relsSol.addParentAndChild(parent1, child1);
relsSol.addParentAndChild(parent1, child2);
console.log('Solution');
new Research(relsSol);
