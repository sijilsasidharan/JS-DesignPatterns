# Abstract Factory
- This pattets lets you produce families of related Objects without spescifing their concreate classes.

## Example
    Imagine that you’re creating a furniture shop simulator. Your code consists of classes that represent:

 - A family of related products, say: `Chair` + `Sofa` + `CoffeeTable`.

 - Several variants of this family. For example, products `Chair` + `Sofa` + `CoffeeTable` are available in these variants: `Modern`, `Victorian`, `ArtDeco`.

### Problem
    You need a way to create individual furniture objects so that they match other objects of the same family. Customers get quite mad when they receive non-matching furniture.
