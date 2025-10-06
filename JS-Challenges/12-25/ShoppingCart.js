/*
You are testing a "shopping cart" API. You received a raw list of items. You need to prepare the data to verify the total price.

Filter: Keep only items that are "In Stock" AND have a price greater than 0.

Map: Transform the remaining items into an object with:

product: The name (Uppercased).

total: The calculated cost (price * qty).

Chain: Do it all in one variable.
Instruction: Write the full chain and log the result. If you get this right, you are 100% ready to apply this to Playwright.
*/
// TODO: Chain .filter().map()
// Target Output: 
// [ 
//   { product: "LAPTOP", total: 1000 }, 
//   { product: "MONITOR", total: 600 } 
// ]

const cartItems = [
  { name: "Laptop", price: 1000, qty: 1, status: "In Stock" },
  { name: "Mouse", price: 20, qty: 5, status: "Out of Stock" }, // Skip (Out of Stock)
  { name: "Free Gift", price: 0, qty: 1, status: "In Stock" },  // Skip (Price is 0)
  { name: "Monitor", price: 300, qty: 2, status: "In Stock" }
];

const inStock = cartItems.filter(e => {
 return  e.price > 0 && e.status !== 'Out of Stock' 
} ).map(element => ({
  product: element.name.toUpperCase(),
  total: element.qty * element.price, 

}))

console.log(inStock);