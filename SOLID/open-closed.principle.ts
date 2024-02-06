// objects or entities should be open for extension but closed for modification.

const Color = Object.freeze({
    red: 'red',
    blue: 'blue',
    green: 'green'
});

const Size = Object.freeze({
    small: 'small',
    medium: 'medium',
    large: 'large'
});

class Product {
    name: string;
    color: string;
    size: string;
    constructor(name, color, size) {
        this.name = name;
        this.color = color;
        this.size = size;
    }
}

/**
 * The product filter class will keep on extending when ever there comes a new filter like filter by size or filter by color and size (state space explosion).
 * This will break the open closed principle
 */
class ProductFilter {
    filterByColor(products: Product[], color) {
        return products.filter(product => product.color === color);
    }

    // filterBySize(products: Product[], size) {
    //     return products.filter(product => product.size === size);
    // }

    // filterBySizeAndColor(products: Product[], size, color) {
    //     return products.filter(product => product.size === size && product.color === color);
    // }
}

const apple = new Product('Apple', Color.red, Size.small);
const tree = new Product('Tree', Color.green, Size.medium);
const house = new Product('House', Color.blue, Size.large);
const flat = new Product('Flat', Color.green, Size.large);
const villa = new Product('Villa', Color.green, Size.large);

const products = [apple, tree, house, flat, villa];

const productFilter = new ProductFilter();

console.log(`Green products (old):`);
for (let product of productFilter.filterByColor(products, Color.green)) {
    console.log(product.name);
}

// To resolve the open closed principle issue in product filter we can use specification classes

class ColorSpecification {
    color: string;
    constructor(color) {
        this.color = color;
    }

    isSatisfied(item) {
        return item.color === this.color;
    }
}

class SizeSpecification {
    size: string;
    constructor(size) {
        this.size = size;
    }

    isSatisfied(item) {
        return item.size === this.size;
    }
}

// we can use combination of specification using this (Combinator specification)

class AndSepcification {
    specs: any[];
    constructor(...specs) {
        this.specs = specs
    }

    isSatisfied(item) {
        return this.specs.every(spec => spec.isSatisfied(item));
    }
}

class BetterFilter {
    filter(items, spec) {
        return items.filter(item => spec.isSatisfied(item))
    }
}

const bf = new BetterFilter();
 console.log(`Green products (new):`);

for (let product of bf.filter(products, new ColorSpecification(Color.green))) {
    console.log(product.name);
}

console.log(`Large products (new):`);

for (let product of bf.filter(products, new SizeSpecification(Size.large))) {
   console.log(product.name);
}

console.log(`Large & Green products (new):`);

const specs = new AndSepcification(
    new ColorSpecification(Color.green),
    new SizeSpecification(Size.large)
)

for (let product of bf.filter(products, specs)) {
   console.log(product.name);
}