// Sum of array singles-----
// In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

// More examples in the test cases.

// Good luck!


// add only nums that appear Only once.
// no empty array, all nums no fun biz 

// console.log result 

function repeats(arr){

  //Here Im using filter and checking if the "element/number" is the same index at the start of the array by using .indexOf() and also using .lastIndexOf() to also check the index of the "element/number" from the end to the front if both equals the same index that means there is only one of that same number. so that would mean that is not a pair/duplicate number and you should add it.
  const newArray = arr.filter(element => arr.indexOf(element) === arr.lastIndexOf(element)) //
  const sum = newArray.reduce((acc,num) => acc + num, 0)
  console.log(newArray)
  console.log(sum)
  };





console.log(repeats([4,5,7,5,4,8]), 15)
console.log(repeats([9, 10, 19, 13, 19, 13]), 19)
console.log(repeats([16, 0, 11, 4, 8, 16, 0, 11]), 12) 

