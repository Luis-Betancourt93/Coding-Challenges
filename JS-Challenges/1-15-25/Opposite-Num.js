/*
Very simple, given a number (integer / decimal / both depending on the language), find its opposite (additive inverse).

Examples:

1: -1
14: -14
-34: 34
*/

/*
function oppositeNum (num) {
  if (num === 0 ) {
    console.log(0)
  } else {
    console.log( num * -1) 
  }
  
}
*/

const oppositeNum = num => num === 0? num : num * -1; 




console.log(oppositeNum(1))
console.log(oppositeNum(-10))
console.log(oppositeNum(-15))
console.log(oppositeNum(23))
console.log(oppositeNum(0))

