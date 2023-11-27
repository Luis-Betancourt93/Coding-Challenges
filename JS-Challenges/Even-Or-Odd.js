/*
Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
*/

function evenOrOdd(number) {
  if (number % 2 === 0) {
    return 'Even'
  } else {
    return 'Odds'
  }



}

console.log(evenOrOdd(1))  // Odds
console.log(evenOrOdd(2)) //Even
console.log(evenOrOdd(3)) // Odds
console.log(evenOrOdd(4)) //Even

