/*
Write a function that given an integer array nums of length n, returns an array of length 2n where nums is concatenated to itself.
*/

const getConcatenation = nums => {
  return [...nums, ...nums];
};