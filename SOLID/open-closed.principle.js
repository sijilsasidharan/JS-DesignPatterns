// objects or entities should be open for extension but closed for modification.
var Color = Object.freeze({
    red: 'red',
    blue: 'blue',
    green: 'green'
});
var Size = Object.freeze({
    small: 'small',
    medium: 'medium',
    large: 'large'
});
var Product = /** @class */ (function () {
    function Product(name, color, size) {
        this.name = name;
        this.color = color;
        this.size = size;
    }
    return Product;
}());
/**
 * The product filter class will keep on extending when ever there comes a new filter like filter by size or filter by color and size (state space explosion).
 * This will break the open closed principle
 */
var ProductFilter = /** @class */ (function () {
    function ProductFilter() {
    }
    ProductFilter.prototype.filterByColor = function (products, color) {
        return products.filter(function (product) { return product.color === color; });
    };
    return ProductFilter;
}());
var apple = new Product('Apple', Color.red, Size.small);
var tree = new Product('Tree', Color.green, Size.medium);
var house = new Product('House', Color.blue, Size.large);
var flat = new Product('Flat', Color.green, Size.large);
var villa = new Product('Villa', Color.green, Size.large);
var products = [apple, tree, house, flat, villa];
var productFilter = new ProductFilter();
console.log("Green products (old):");
for (var _i = 0, _a = productFilter.filterByColor(products, Color.green); _i < _a.length; _i++) {
    var product = _a[_i];
    console.log(product.name);
}
// To resolve the open closed principle issue in product filter we can use specification classes
var ColorSpecification = /** @class */ (function () {
    function ColorSpecification(color) {
        this.color = color;
    }
    ColorSpecification.prototype.isSatisfied = function (item) {
        return item.color === this.color;
    };
    return ColorSpecification;
}());
var SizeSpecification = /** @class */ (function () {
    function SizeSpecification(size) {
        this.size = size;
    }
    SizeSpecification.prototype.isSatisfied = function (item) {
        return item.size === this.size;
    };
    return SizeSpecification;
}());
// we can use combination of specification using this (Combinator specification)
var AndSepcification = /** @class */ (function () {
    function AndSepcification() {
        var specs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            specs[_i] = arguments[_i];
        }
        this.specs = specs;
    }
    AndSepcification.prototype.isSatisfied = function (item) {
        return this.specs.every(function (spec) { return spec.isSatisfied(item); });
    };
    return AndSepcification;
}());
var BetterFilter = /** @class */ (function () {
    function BetterFilter() {
    }
    BetterFilter.prototype.filter = function (items, spec) {
        return items.filter(function (item) { return spec.isSatisfied(item); });
    };
    return BetterFilter;
}());
var bf = new BetterFilter();
console.log("Green products (new):");
for (var _b = 0, _c = bf.filter(products, new ColorSpecification(Color.green)); _b < _c.length; _b++) {
    var product = _c[_b];
    console.log(product.name);
}
console.log("Large products (new):");
for (var _d = 0, _e = bf.filter(products, new SizeSpecification(Size.large)); _d < _e.length; _d++) {
    var product = _e[_d];
    console.log(product.name);
}
console.log("Large & Green products (new):");
var specs = new AndSepcification(new ColorSpecification(Color.green), new SizeSpecification(Size.large));
for (var _f = 0, _g = bf.filter(products, specs); _f < _g.length; _f++) {
    var product = _g[_f];
    console.log(product.name);
}
