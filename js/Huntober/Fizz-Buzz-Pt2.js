// Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 2, print out “Fizz”; when it’s divisible by 3, print out “Buzz”; when it’s divisible by both 2 and 3, print out “Fizz Buzz”.

function fizzBuzz(num) {
  for(let i = 1; i <= num; i++) {
    if (i % 2 === 0 && i % 3 === 0) {
      console.log(i, 'fizbuzz')
    } else if(i % 2 === 0 ){
      console.log(i, 'Fizz')
    } else if( i % 3 === 0 ){
      console.log(i, 'Buzz')
    } else {
      console.log(i)
    }
  }
}

fizzBuzz(20)