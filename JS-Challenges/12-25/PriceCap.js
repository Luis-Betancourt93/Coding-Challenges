/*
You are testing a "Price Filter" on a shopping site. You selected "Under $50". Now you need to verify the results.
Instruction: Write a filter that keeps items with a price less than 50.

Target: [{ item: "Mouse", price: 25 }, { item: "Cable", price: 10 }]

*/

const products = [
  { item: "Mouse", price: 25 },
  { item: "Monitor", price: 150 },
  { item: "Keyboard", price: 100 },
  { item: "Cable", price: 10 }
];

const underFifty = products.filter(element => element.price < 50); 
console.log(underFifty);