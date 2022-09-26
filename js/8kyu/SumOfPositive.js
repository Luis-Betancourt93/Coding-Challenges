/*  

You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.

*/


function positiveSum(arr) {
  let total = 0;                            // Make a starting point where to add all you positive numbers
  for( let i = 0; i < arr.length; i++ ) {   // Set up Loop to go through array of given length
      if (arr[i] > 0) {                     // Checking every index of that array to see if it's greater than Zero
         total += arr[i]                    // If it is add it to the total 
      }
  }
  return total;                             // After the loop finish return the total of all the numbers added 
}


