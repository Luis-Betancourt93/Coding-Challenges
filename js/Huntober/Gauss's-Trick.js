/*
  O(N) Example
  Here we sum the numbers in the array. We have to add each number to a running sum, so we have to operate on each one. This means one operation per input.

  const nums = [1, 2, 3, 4, 5]
  let sum = 0 
  for(let num of nums) {
    sum += num
  }
   console.log(sum) = 15
*/

// Turn it into O(1) using Gauss's Trick 

  const sumContiguousArray = function(arr) {
    // get the last item
    const lastItem = arr[arr.length - 1]
    // Gauss's Trick
    console.log( lastItem * (lastItem + 1) / 2)
  }

  const nums = [1, 2, 3, 4, 5]
  const sumOfArray = sumContiguousArray(nums)
  // console.log(sumOfArray)