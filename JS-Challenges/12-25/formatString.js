//Instruction: Write a map function that returns a formatted string. If stock is 0, it should say "Out of Stock". If stock is greater than 0, it should say "In Stock".

//Target: ["iPhone 13: Out of Stock", "Samsung S22: In Stock", "Pixel 7: In Stock"]

const products = [
    { title: "iPhone 13", stock: 0 },
    { title: "Samsung S22", stock: 5 },
    { title: "Pixel 7", stock: 12 }
];

const inStock = products.map(element => 
   element.stock > 0 ? `${element.title}: In Stock` : `${element.title}: Out of Stock`
  );

console.log(inStock);