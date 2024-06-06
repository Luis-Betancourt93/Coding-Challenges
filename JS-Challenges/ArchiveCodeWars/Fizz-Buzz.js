/*
Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 3, print out “Fizz”; when it’s divisible by 5, print out “Buzz”; when it’s divisible by both 3 and 5, print out “Fizz Buzz”.
*/

function fizzBuzz(num) {
  for(let i = 0; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz')
    } else if(i % 3 === 0 ) {
      console.log('Fizz')
    } else if(i % 5 === 0){
      console.log('Buzz')
    } else {
      console.log(i)
    }
  }


}

fizzBuzz(20) // 'Fizz'
// console.log(fizzBuzz(5)) // 'Buzz'
// console.log(fizzBuzz(15)) // 'Fizz Buzz'
// console.log(fizzBuzz(1))
// console.log(fizzBuzz(70))