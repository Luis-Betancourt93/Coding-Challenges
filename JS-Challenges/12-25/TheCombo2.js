/*
You have a list of users. You want to email only the "Members", but you just need their names, not the whole object.
Instruction: 1. Filter to keep only where isMember is true. 2. Map the result to return only the name.

Target: ["Sora", "Kairi"]
*/

const members = [
  { name: "Sora", isMember: true },
  { name: "Riku", isMember: false },
  { name: "Kairi", isMember: true }
];

const list = members.filter(element => element.isMember === true).map(element => element.name);

console.log(list);