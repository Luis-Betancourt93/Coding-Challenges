/*
You are scraping an e-commerce page using page.$$eval. Sometimes, items are sold out or broken, so the price comes back as null or undefined. You cannot perform math on null.
Filter out any product that does not have a valid price (remove nulls and undefined).

Hint: In JS, null and undefined are "falsy", but be careful if a price is 0.

Safe check: element.price != null (this catches both null and undefined).

Map the remaining items to a string format: "ITEM: $PRICE".
["Laptop: $1000", "Keyboard: $50"]

*/

const products = [
  { item: "Laptop", price: 1000 },
  { item: "Mouse", price: null },     // Scraper failed or item out of stock
  { item: "Keyboard", price: 50 },
  { item: "Monitor", price: undefined } // Data missing entirely
];

const noNull = products.filter(element => element.price  != null).map(element => {
 return `${element.item}: $${element.price}`
})
 
console.log(noNull);