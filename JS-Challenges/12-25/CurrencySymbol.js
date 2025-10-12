/*
Real websites almost always include the currency symbol in the text (e.g., "$12.00").
If you try Number("$12.00"), JavaScript gives you NaN (Not a Number) because it doesn't know what $ is.
You must clean the string before converting it.

Filter for items that cost more than $20.
Hint: Inside the filter, you need to chain methods: element.cost.replace('$', '') ... then wrap that in Number(...).
Map to return the item name.
Expected Output: 
["Steak", "Lobster"]
*/

const menu = [
  { item: "Burger", cost: "$12.99" },
  { item: "Steak", cost: "$55.00" },
  { item: "Salad", cost: "$15.50" },
  { item: "Lobster", cost: "$80.00" }
];

const moreThan = menu.filter(element => Number(element.cost.replace('$', '')) > 20 ).map(element => element.item);

console.log(moreThan);