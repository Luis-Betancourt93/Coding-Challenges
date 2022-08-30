/*
Examples
Input: [1, 5.2, 4, 0, -1]
Output: 9.2

Input: []
Output: 0

Input: [-2.398]
Output: -2.398

Assumptions
You can assume that you are only given numbers.
You cannot assume the size of the array.
You can assume that you do get an array and if the array is empty, return 0.
What We're Testing
We're testing basic loops and math operations. This is for beginners who are just learning loops and math operations.
Advanced users may find this extremely easy and can easily write this in one line.
*/


// This is how I would do it 

function sum (numbers) {
  let sumOfNumbers = 0;                     // Start from 0, something to add to 
  for(let i = 0; i < numbers.length; i++){  // Here we are looping though the array 
    sumOfNumbers += numbers[i];             // We are adding every number of the array to the variable sumOfNumbers
    
  }
  console.log(sumOfNumbers)                 // Console.log the results
};

sum([5, 5, 5])                              // Calling the function and passing it the array of numbers.



/* We can also do it Using the ".Reduce" Method */
// .reduce has 2 parameters (the Function , the starting point "0" )
// the accumulator start at "0" or whatever you put '0' as
// next is going to loop though the array and add everything to the accumulator.

function add (numbers) {
  const sumOfAll = numbers.reduce((accumulator, currentValue) => {  // 
    return accumulator + currentValue;
  }, 0);

  console.log(sumOfAll)
};

add([])    


/* CodeWars Answer (Stupid)*/

// Sum Numbers
function sum (numbers) {
if(numbers.length === 0) return 0;                                    // Testing if array is empty it returns 0.
return numbers.reduce((total, currentValue) => total + currentValue); // here we are using the reduce method but not assign it into a variable
  
};