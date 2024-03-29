/*
Fibonacci number (Fibonacci sequence), named after mathematician Fibonacci, is a sequence of numbers that looks like this: 0, 1, 1, 2, 3, 5, 8, 13,.... You get first two starting numbers, 0 and 1, and the next number in the sequence is always the sum of the previous two numbers.

Write a function fib() that takes one parameter steps, and returns a number from the Fibonacci sequence, based on the parameter steps, which determines the position in Fibonacci number. For example fib(0) returns 0, fib(4) returns 3, and fib(15) returns 610.
*/

const fib = steps => {
  if (steps < 2) return steps;
  return fib(steps - 2) + fib(steps - 1);
};

console.log(fib(0)); // 0
console.log(fib(4)); // 3
console.log(fib(17)); // 1597
console.log(fib(20)); // 6765