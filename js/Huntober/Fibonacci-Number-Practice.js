/*
Practicing Fibonacci Problem, Huntober Jan 4 2023
*/

function fib(num) {
  if( num < 2 ){
    return num
  }

  return fib(num - 1) + fib(num - 2)

}

console.log(fib(5))
console.log(fib(4)) 