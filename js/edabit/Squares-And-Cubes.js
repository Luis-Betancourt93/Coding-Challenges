/*
Create a function that takes an array of two numbers and checks if the square root of the first number is equal to the cube root of the second number.
*/
checkSquareAndCube([4, 8]) // ➞ true

checkSquareAndCube([16, 48]) // ➞ false

checkSquareAndCube([9, 27]) // ➞ true

function checkSquareAndCube(arr) {
  // console.log(Math.cbrt(arr[1]))
  // console.log(Math.sqrt(arr[0]))
  Math.cbrt(arr[1]) === Math.sqrt(arr[0]) ? console.log('True') : console.log('False')
}