//Instruction: Write a map function that returns an array of the total cost for each line item (price * quantity).

//Target: [200, 2000, 50]

const cart = [
  { item: "Logitech MX Master 3S", price: 100, quantity: 2 },
  { item: "MacBook Pro", price: 2000, quantity: 1 },
  { item: "Playwright Course", price: 50, quantity: 1 }
];

const total = cart.map(element => element.price * element.quantity);
console.log(total);