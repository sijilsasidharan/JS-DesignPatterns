/* Furniture Factory */

// Chair
const chair = ({ name, legs, price, discount }) => ({
  name,
  legs,
  price,
  discount,
  hasLegs: function () {
    return this.legs;
  },
  totalPrice: function () {
    return this.price - this.discount;
  },
});

// Modern Chair
const modernChair = () =>
  chair({ name: "Modern Chair", legs: 4, price: 100, discount: 10 });

// Victorian Chair
const victorianChair = () =>
  chair({ name: "Victorian Chair", legs: 4, price: 200, discount: 20 });

// ArtDeco Chair
const artDecoChair = () =>
  chair({ name: "ArtDeco Chair", legs: 4, price: 150, discount: 15 });

const sofa = ({ name, legs, numberOfSeats, price, discount }) => ({
  name,
  legs,
  numberOfSeats,
  price,
  discount,
  hasLegs: function () {
    return this.legs;
  },
  totalPrice: function () {
    return this.price - this.discount;
  },
});

// Modern Chair
const modernSofa = () =>
  sofa({
    name: "Modern Sofa",
    legs: 4,
    numberOfSeats: 2,
    price: 100,
    discount: 10,
  });

// Victorian Chair
const victorianSofa = () =>
  sofa({
    name: "Victorian Sofa",
    legs: 4,
    numberOfSeats: 3,
    price: 200,
    discount: 20,
  });

// ArtDeco Chair
const artDecoSofa = () =>
  sofa({
    name: "ArtDeco Sofa",
    legs: 4,
    numberOfSeats: 2,
    price: 150,
    discount: 15,
  });

const table = ({ name, legs, width, height, length, price, discount }) => ({
  name,
  legs,
  width,
  height,
  length,
  price,
  discount,
  hasLegs: function () {
    return this.legs;
  },
  totalPrice: function () {
    return this.price - this.discount;
  },
  area: function () {
    return this.width * this.length;
  },
});

// Modern Chair
const modernTable = () =>
  table({
    name: "Modern Table",
    legs: 4,
    width: 60,
    height: 76,
    length: 120,
    numberOfSeats: 2,
    price: 100,
    discount: 10,
  });

// Victorian Chair
const victorianTable = () =>
  table({
    name: "Victorian Table",
    legs: 4,
    width: 70,
    height: 76,
    length: 80,
    numberOfSeats: 3,
    price: 200,
    discount: 20,
  });

// ArtDeco Chair
const artDecoTable = () =>
  table({
    name: "ArtDeco Table",
    legs: 4,
    width: 70,
    height: 76,
    length: 80,
    numberOfSeats: 2,
    price: 150,
    discount: 15,
  });

const furnitureFactory = ({ chair, sofa, table }) => ({
  createChair: chair,
  createTable: table,
  createSofa: sofa,
});

const modernFurnitureFactory = furnitureFactory({
  chair: modernChair,
  table: modernTable,
  sofa: modernSofa,       
});
const victorianFurnitureFactory = furnitureFactory({
  chair: victorianChair,
  table: victorianTable,
  sofa: victorianSofa,
});
const artDecoFurnitureFactory = furnitureFactory({
  chair: artDecoChair,
  table: artDecoTable,
  sofa: artDecoSofa,
});

const furnitures = {
  chair: modernFurnitureFactory.createChair(),
  table: victorianFurnitureFactory.createTable(),
  sofa: artDecoFurnitureFactory.createSofa(),
};

console.log(furnitures);
