// Create a function that takes a number as an argument and returns "even" for even numbers and "odd" for odd numbers.

function isEvenOrOdd(num) {
	if (num % 2 === 0) {
    console.log("even")
  } else {
    console.log("odd")
  }
}

isEvenOrOdd(3)//  ➞ "odd"

isEvenOrOdd(146) // ➞ "even"

isEvenOrOdd(19) // ➞ "odd"