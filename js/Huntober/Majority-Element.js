/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
*/

/*
Example 1:
Input: nums = [3,2,3]
Output: 3


Example 2:
Input: nums = [2,2,1,1,1,2,2]
Output: 2
*/

console.log(marjorityElement([3,2,3]), 3)
console.log(marjorityElement([2,2,1,1,1,2,2]), 2)



















/* Leon's Code 12/13/22

function marjorityElement(arr){
  let elem = {}
  let count = 0
  let majElem = arr[0]

  for(const nums of arr){
    if (elem[nums]) {
      elem[nums]++
    } else {
      elem[nums] = 1
    }
  }

  for(const n in elem) {
    if( elem[n] > count){
      count = elem[n]
      majElem = n
    }
  }

  return majElem
}

*/



