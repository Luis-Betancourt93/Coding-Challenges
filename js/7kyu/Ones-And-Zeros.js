/*
Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

Examples:

Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11
However, the arrays can have varying lengths, not just limited to 4.
*/

//PARAMETERS: An array containing ones and zeroes, could be varying length.

//RESULT: An interger equivalent of the binary value represented in the array

//EXAMPLE:
// Test.assertEquals(binaryArrayToNumber([0,0,0,1]), 1);
// Test.assertEquals(binaryArrayToNumber([0,0,1,0]), 2);
// Test.assertEquals(binaryArrayToNumber([1,1,1,1]), 15);
// Test.assertEquals(binaryArrayToNumber([0,1,1,0]), 6);

//PSEUDOCODE: Take the array and join the elements together into a string and then convert to binary using that string and return the integer equivalent


const binaryArrayToNumber = arr => {
  console.log( parseInt(arr.join(''), 2) )
};

binaryArrayToNumber([1,1,1,1])