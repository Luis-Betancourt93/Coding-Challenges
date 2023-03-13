// Create a function that takes an integer and returns true if it's divisible by 100, otherwise return false.


function divisible(num) {
	if (num % 100 === 0 ) {
    console.log(true)
  } else {
    console.log(false)
  }
}



divisible(1) // ➞ false

divisible(1000) // ➞ true

divisible(100) // ➞ true