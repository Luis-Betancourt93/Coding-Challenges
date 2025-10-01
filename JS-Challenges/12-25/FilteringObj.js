/*
Instruction: Write a filter function that returns an array of objects where isActive is true.

Target: [{ name: "Sora", isActive: true }, { name: "Kairi", isActive: true }]
*/

const users = [
  { name: "Sora", isActive: true },
  { name: "Riku", isActive: false },
  { name: "Kairi", isActive: true }
];

const activeUsers = users.filter(element => element.isActive === true);