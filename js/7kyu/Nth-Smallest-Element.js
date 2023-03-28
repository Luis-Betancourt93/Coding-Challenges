// Task
// Given an array/list of integers, find the Nth smallest element in the array.

// Notes
// Array/list size is at least 3.
// Array/list's numbers could be a mixture of positives , negatives and zeros.
// Repetition in array/list's numbers could occur, so don't remove duplications.


// Notes 
// at least 3 inside array, just nums positive and negatives, yes dups

// console.log the return 

function nthSmallest(arr, nth) {
  // sort the array from smallest to bigest
  // get the number in the nth position and console log it.
  console.log(arr.sort((a, b) => a - b )[nth - 1] )

}



nthSmallest([3,1,2], 2) // 2
nthSmallest([15,20,7,10,4,3], 3) //  7
