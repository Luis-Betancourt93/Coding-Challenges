/* Even Or Odds */

/*
Description 
Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
*/


// Here we are checking in number is even or odd, I used the modulus operator to see if is even by returning 0

function even_or_odd(number) {
  if(number % 2 == 0 ) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log( even_or_odd(30) ); // Should console.log "Even"