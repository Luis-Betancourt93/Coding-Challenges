/*
In Playwright, when you grab text from a website (using innerText), it is always a string. Even if it looks like a number ("500"), the computer sees it as text. You cannot do math on text.
You are testing a filter on a shopping site. You want to verify that the "Under $50" filter is working. You scrape the prices, but they come back as strings.
Filter the items to keep only those where the price is less than 50.

Hint: You must convert the string to a number inside the filter using Number(element.price) or parseFloat(element.price).
Comparison: convertedPrice < 50
Map the result to return just the id.

["A", "C", "D"]
*/

const scrapedItems = [
  { id: "A", price: "12.50" },
  { id: "B", price: "100.00" },
  { id: "C", price: "45.99" },
  { id: "D", price: "5.00" }
];


const numberScraped = scrapedItems.filter(element => Number(element.price) < 50 ).map(element => element.id);

console.log(numberScraped)