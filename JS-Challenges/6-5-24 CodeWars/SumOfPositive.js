/*
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
*/


function positiveSum(arr) {
  let sum = arr.reduce((acc, current) => current > 0? acc + current : acc, 0)
  console.log(sum)
}




  positiveSum([1,2,3,4,5]) //,15
  positiveSum([1,-2,3,4,5]) //,13
  positiveSum([]) //,0
  positiveSum([-1,-2,-3,-4,-5]) //,0
  positiveSum([-1,2,3,4,-5]) //,9