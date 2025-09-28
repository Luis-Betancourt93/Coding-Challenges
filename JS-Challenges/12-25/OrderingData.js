/*
Sometimes the data doesn't have an ID, but the order matters. In Playwright, you might want to verify that the first item is "Rank 1", the second is "Rank 2", etc.

The .map() function actually gives you two things if you ask for them:

The element (the item itself).

The index (the position number, starting at 0).

notice the parentheses around (element, index) are required now
const result = myArray.map((element, index) => {
  index will be 0, then 1, then 2...
});

Exercise 16 You scraped a leaderboard, but it's just a list of names. You need to assign them a rank.

Instruction: Return an array of strings that includes their rank (starting at 1, not 0).

Hint: Since index starts at 0, you'll need to do index + 1.

Target: ["1. Sonic", "2. Flash", "3. Quicksilver"]
*/

const runners = ["Sonic", "Flash", "Quicksilver"];


const rankRunners = runners.map((element, index) => {
return  `${index + 1}. ${element}`
});

console.log(rankRunners)