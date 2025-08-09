/*
Level 1: The Bouncer (Basic Filtering)
Goal: .filter() looks at every item. If your logic returns true, it keeps the item. If false, it drops it.

Instruction: Write a filter function that returns an array of only the passing scores (80 or higher).

Target: [90, 85, 100]
*/

const scores = [45, 90, 85, 30, 100];

const passScores = scores.filter(element =>  element >= 80)

console.log(passScores)