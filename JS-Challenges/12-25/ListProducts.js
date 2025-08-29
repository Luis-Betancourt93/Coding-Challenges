const cart = [
  { item: "apple", price: 0.99 },
  { item: "bread", price: 2.50 },
  { item: "milk", price: 3.00 }
];

// TODO: Create an array that looks like: ["APPLE: 0.99", "BREAD: 2.5", "MILK: 3"]
// HINT: You'll need .toUpperCase() and template literals `${}` or string concatenation '+'.

const receiptLines = cart.map( element => 
   `${element.item.toUpperCase()}: ${element.price}`
   );

console.log(receiptLines);