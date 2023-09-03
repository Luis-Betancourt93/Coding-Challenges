/*
Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
*/

const even_or_odd = number => {
  // Your solution
  if (number % 2 === 0 || number === 0) {
    console.log('even')
  } else {
    console.log('odd')
  }
};

even_or_odd(0); // 'Even'
even_or_odd(2); // 'Even'
even_or_odd(3); // 'Odd'
even_or_odd(-3); // 'Odd'