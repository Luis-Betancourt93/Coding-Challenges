/*
Write a function that takes an integer and:

If the number is a multiple of 3, return "Hello".
If the number is a multiple of 5, return "World".
If the number is a multiple of both 3 and 5, return "Hello World".
*/

// helloWorld(3) // ➞ "Hello"

// helloWorld(5) // ➞ "World"

// helloWorld(15) // ➞ "Hello World"

helloWorld(19)

function helloWorld(num) {
  for(let i = 1; i <= num; i++){
    if (i % 8 === 0) {
      console.log("Hello Word", i)
    } else if(i % 3 === 0 ) {
      console.log("Hello", i)
    } else if(i % 5 === 0 ){
      console.log('World', i)
    } else {
      console.log(i)
    }
  }

  
}