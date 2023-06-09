/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example 1:
  Input: nums = [1,2,3,1]
  Output: true

Example 2:
  Input: nums = [1,2,3,4]
  Output: false

Example 3:
  Input: nums = [1,1,1,3,3,4,3,2,4,2]
  Output: true
*/

console.log(containsDuplicate([1,2,3,1]))
console.log(containsDuplicate([1,2,3,4]))
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))


//  Leon's Code 12/12/22 Goes though code (Time Stamp: 11:50)
function containsDuplicate (arr) {
  // Creat the object
  let numsMap = {}

  for(let i = 0; i < arr.length; i++){ // Loop starts at index '0'
    let num = arr[i] // let num = 1

    if (numsMap[num]) {  // Does 1 exist inside 'numMap'/ the object at this Time? No it does not! It goes to 'else'
      return true
    } else {
      numsMap[num] = true // It 'Creats' a property of '1' with the value of 'True'
    }

  }

  return false

}







