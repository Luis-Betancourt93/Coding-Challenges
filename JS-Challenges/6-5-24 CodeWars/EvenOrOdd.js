/*
Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
*/

// Return 'Even' for even nums and 'Odd' for odd nums

// always a num, no !, no funny buz. 

// console.log the return. 

/*
function evenOrOdd(num) {
    if (num % 2 === 0) {
    return 'Even'
  } else {
    return 'Odd'
  }
}
*/

const evenOrOdd = num => num % 2 === 0 ? 'Even' : 'Odd'


console.log(evenOrOdd(2), 'Even')
console.log(evenOrOdd(1), 'Odd')
console.log(evenOrOdd(10), 'Even')



