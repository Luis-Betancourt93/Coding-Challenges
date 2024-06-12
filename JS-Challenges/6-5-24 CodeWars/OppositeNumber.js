/*
Very simple, given a number (integer / decimal / both depending on the language), find its opposite (additive inverse).

Examples:

1: -1
14: -14
-34: 34
*/

// num return negative 
// No Strings
// no empty nums
// Pos and negatives 
// no funny buzz
// no ! 

// Return -> console.log

/*
function opposite(num) {
  let oppositeNum = num * -1;
  return oppositeNum;
}
*/

const opposite = num => num * -1



console.log(opposite(1), -1)
console.log(opposite(3), -3)
console.log(opposite(-10), 10)
console.log(opposite(-30), 30)

