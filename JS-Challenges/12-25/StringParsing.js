/*
Instruction: Write a map function that returns just the numeric ID as a Number (not a string).

Hint: You might need .replace('ID-', '') and Number().

Target: [101, 202, 303]
*/

const users = [
  { id: "ID-101", name: "Sora" },
  { id: "ID-202", name: "Riku" },
  { id: "ID-303", name: "Kairi" }
];

const idNumber = users.map(element => 
  Number(element.id.replace('ID-', ''))
);

console.log(idNumber);