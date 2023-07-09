/*

You will be given an array of numbers. You Have to sort the odd number in ascending order while leaving the even numbers at their original positions. Console.log the result

*/

console.log(sortArray([7, 1])) // [1, 7]
console.log(sortArray([5, 8, 6, 3, 4])) // [3, 8, 6, 5, 4]
console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1])) // [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]


function sortArray(array) {
  array.filter(element => element % 2 === 0 ).sort((a, b) => a - b)
  return array.map(element => element % 2 === 0 ? element : arrOddSort.shift())

}


