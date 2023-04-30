// Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.


// function sumArray(arr) {
//  console.log(arr.reduce((acc, num) => acc + num, 0))
// }

const sumArray = arr => console.log(arr.reduce((acc, num) => acc + num, 0))


// Examples
sumArray([1, 2, 3, 4, 5]) //➞ 15

sumArray([-1, 0, 1]) //➞ 0

sumArray([0, 4, 8, 12]) // ➞ 24