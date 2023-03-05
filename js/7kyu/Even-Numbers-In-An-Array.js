// Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

// For example:

// ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
// ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
// ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]


// get the last even numbers base on the valve givin in number
// no empty array, all nums, no funny biz 

// console.log the result 

// SOLUTION

function evenNumbers(array, number) {
  const evenNums = array.filter(element => element % 2 === 0).slice(-number)
  console.log(evenNums)
}


// ARROW FUNCTION

const evenNumber = (array, number) => array.filter(element => element % 2 === 0).slice(-number)

evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9],3)
evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2)

// evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3), [4, 6, 8]
// evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2), [-8, 26]

