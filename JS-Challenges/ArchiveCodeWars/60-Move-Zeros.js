/*
Given an integer array nums, move all 0's in the array to the end of it while maintaining the relative order of the non-zero elements. Achieve this without copying the array or creating a new array.


*/

const moveZeroes = nums => {
  const length = nums.length;
  let index = 0;

  for (let i = 0; i < length; i++) {
    if (nums[i] !== 0) {
      nums[index] = nums[i];
      if (index !== i) {
        nums[i] = 0;
      }
      index++;
    }
  }

  return nums;
};