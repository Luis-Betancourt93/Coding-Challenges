/*
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1 
2
 +2 
2
 +2 
2
 =9

*/

/*
function squareSum(numbers){
  return numbers.reduce((sum, current) => sum + current ** 2, 0)
}
*/

const squareSum = numbers => numbers.reduce((sum, current) => sum + current ** 2, 0 )


console.log(squareSum([1,2]))
console.log(squareSum([0, 3, 4, 5]))
console.log(squareSum([]))
