/*
Very simple, given a number (integer / decimal / both depending on the language), find its opposite (additive inverse).

Examples:

1: -1
14: -14
-34: 34
*/

// function opposite(number) {
//   if (number === 0) {
//     console.log(number)
//   } else {
//     console.log(number * -1)
//   }
// }

const opposite = number => number === 0 ? console.log(number) : console.log(number * -1)

opposite(1)
opposite(0)
opposite(-2)