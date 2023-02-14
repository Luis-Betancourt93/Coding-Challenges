// Create a function that returns true when num1 is equal to num2; otherwise return false.

// function isSameNum(num1, num2) {
// 	if (num1 === num2 ) {
//     console.log(true)
//   } else {
//     console.log(false)
//   }
// }


const isSameNum = (num1, num2) => num1 === num2 ? console.log(true) : console.log(false)

isSameNum(4, 8) // ➞ false

isSameNum(2, 2) // ➞  true

isSameNum(2, "2") // ➞ false