//Instruction: Write a map function that extracts the innerText AND trims the whitespace so you get clean strings.

//Target: ["Order #555", "Order #556", "Order #557"]

const rawScrapedData = [
  { innerText: "   Order #555   " },
  { innerText: "Order #556" },
  { innerText: "   Order #557 " }
];

const data = rawScrapedData.map(element => element.innerText.trim())

console.log(data);