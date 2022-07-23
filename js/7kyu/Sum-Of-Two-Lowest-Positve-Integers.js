/*
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.
*/


// PARAMETERS: An array of positive integers, whole numbers grater than zero, min of 4 positive integers.

// RESULTS: Sum of the two lowest integeres in the arary. 

// EXAMPLES: 
/*
assert.strictEqual(sumTwoSmallestNumbers([5, 8, 12, 19, 22]), 13 , "Sum should be 13");
assert.strictEqual(sumTwoSmallestNumbers([15, 28, 4, 2, 43]), 6 , "Sum should be 6");
assert.strictEqual(sumTwoSmallestNumbers([3, 87, 45, 12, 7]), 10 , "Sum should be 10");
assert.strictEqual(sumTwoSmallestNumbers([23, 71, 33, 82, 1]), 24 , "Sum should be 24");
assert.strictEqual(sumTwoSmallestNumbers([52, 76, 14, 12, 4]), 16 , "Sum should be 16"); 
*/
// PSEUDOCODE: Sort the array from smallest to lagest, capture the two small array members and return the sum of thoses two numbers.


function sumTwoSmallestNumbers(numbers) {  
  let arr = numbers.sort( (a, b) => a - b )  // Sorting the numbers from smallest to biggest.
  console.log(arr[0] + arr[1])    // Now that we have it sort it from smallest to biggest we can add the first two smallest numbers.
}

sumTwoSmallestNumbers([19, 5, 42, 2, 77]) // Answer should be 7