/*
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
*/

function positiveSum(arr) {
 console.log( arr.filter(element => element >= 0).reduce((acc, current) => acc + current, 0) )
}


positiveSum([1,2,3,4,5]) //15
positiveSum([1,-2,3,4,5]) //13
positiveSum([]) //,0
positiveSum([-1,-2,-3,-4,-5]) //,0
positiveSum([-1,2,3,4,-5]) //,9