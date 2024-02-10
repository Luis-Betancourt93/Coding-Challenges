/*
Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
*/

// function evenOrOdd(number) {
//   if (number % 2 === 0) {
//     console.log('Even')
//   } else {
//     console.log('Odd')
//   }
// }

const evenOrOdd = number => number % 2 === 0 ? console.log('Even') : console.log('Odd')



evenOrOdd(1);
evenOrOdd(2);