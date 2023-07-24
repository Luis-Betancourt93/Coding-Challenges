/*Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.*/

minMax([1, 2, 3, 4, 5]) // ➞ [1, 5]

minMax([2334454, 5]) // ➞ [5, 2334454]

minMax([1]) // ➞ [1, 1]


function minMax(arr) {
  let sortArr = arr.sort((a, b) => a - b)
  let minNum = sortArr[0]
  let maxNum = arr[arr.length - 1] > 1 ? arr[arr.length - 1] : 1
  console.log(minNum, maxNum)
}

