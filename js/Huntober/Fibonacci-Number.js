/*
The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,
*/


function fib(n) {
  let arr = [0, 1]

  for(let i =2; i <= n; i++){
    arr[i] = arr[i - 1] + arr[i - 2]
  }

  return arr[n]
}

console.log(fib(2), 1)
console.log(fib(4),3)