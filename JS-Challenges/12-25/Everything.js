/*
This exercise combines everything you have learned. This is exactly what a "Page Object Model" data cleanup function looks like in a real job.

Exercise 17 You scraped a messy table of user data. You need to clean it up to verify it against your database.

Instruction: Return a new array of objects with these exact changes:

id: Create an ID based on the index (start at 1).

name: Clean up the name (trim whitespace AND make it all uppercase).

isActive: Convert the "Active"/"Away" string into a Boolean (true if "Active", false otherwise).

Target Output:
[
  { id: 1, name: "CLOUD STRIFE", isActive: true },
  { id: 2, name: "TIFA LOCKHART", isActive: false },
  { id: 3, name: "AERITH GAINSBOROUGH", isActive: true }
]
*/

const scrapedUsers = [
  { rawName: "  cloud strife  ", role: "SOLDIER", status: "Active" },
  { rawName: "  tifa lockhart", role: "Monk", status: "Away" },
  { rawName: "aerith gainsborough  ", role: "Healer", status: "Active" }
];



const FF7 = scrapedUsers.map((element, index) => ({
  id: index + 1, 
  name: element.rawName.trim().toUpperCase(),
  isActive: element.status === 'Active' ? true : false 
}));

console.log(FF7)