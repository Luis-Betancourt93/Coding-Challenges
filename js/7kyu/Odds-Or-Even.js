/*Task:
Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).

Examples:
Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even"
Have fun!
*/

// PARAMETERS: An array of integers, or an empty array 

// RESULT: Sum up all the integers and see if the sum is Even or odd

// EXAMPLE:
    // assert.strictEqual(oddOrEven([0]), 'even')
    // assert.strictEqual(oddOrEven([1]), 'odd')
    // assert.strictEqual(oddOrEven([]), 'even')

// PSEUDOCODE: Use reduce meathod and conditional with modulus to see if its even or odd

function oddOrEven(array) {
  let result = array.reduce( (sum, current) => sum + current, 0 )

  if (result % 2 === 0 || result === 0) {
    console.log('Even')
  } else {
    console.log('Odd')
  }
}

oddOrEven([])