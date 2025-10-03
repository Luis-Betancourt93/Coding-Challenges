/*
Now, let's look at the "Exclude" pattern. In testing, you often want to say: "Give me everything EXCEPT the broken ones."
Instruction: Write a filter that keeps items where the status is NOT "Out of Stock".

Target: [{ name: "Switch", ... }, { name: "Xbox", ... }]
*/

const inventory = [
  { name: "PS5", status: "Out of Stock" },
  { name: "Switch", status: "In Stock" },
  { name: "Xbox", status: "In Stock" }
];

const inStock = inventory.filter(element => element.status !== 'Out of Stock');

console.log(inStock);