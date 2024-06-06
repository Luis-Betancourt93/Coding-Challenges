/*
Write a program that prints the numbers from 1 to 100. But for multiples of 3 prints "Fizz" instead of the number and for the multiples of 5 prints "Buzz". For numbers which are multiples of both 3 and 5 prints "FizzBuzz".


*/

const fizzBuzz = () => {
  let output;
  for (let num = 1; num <= 100; num++) {
    output = '';
    if (num % 3 === 0) output += 'Fizz';
    if (num % 5 === 0) output += 'Buzz';
    console.log(output || num);
  }
};