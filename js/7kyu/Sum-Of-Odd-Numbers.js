/*
Given the triangle of consecutive odd numbers:

             1                = 1^3 - 1
          3     5             = 2^3 - 8
       7     9    11          = 3^3 - 27
   13    15    17    19       = 4^3 - 64
21    23    25    27    29    = 5^3 - 125
...
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8
*/

// PARAMETERS: A triangle of consecutive odd numbers with n rows. where n starts at 1, input is the row number

// RESULTS: Sum of the numbers in row n 

// Example: 
// assert.strictEqual(rowSumOddNumbers(42), 74088)
// 1 -->  1
// 2 --> 3 + 5 = 8




// So we found that the Nth row is just to the power of 3 
function rowSumOddNumbers(n) {
	console.log(Math.pow(n,3))
}

rowSumOddNumbers(42) // We should get 74088