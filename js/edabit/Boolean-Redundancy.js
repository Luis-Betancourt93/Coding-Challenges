// Check the principles of minimalist code in the intro to the first challenge.

// In the Code tab you will find a code that is missing a single character in order to pass the tests. However, your goal is to submit a function as minimalist as possible. Use the tips in the tips section down below.

// Write a function that returns the string "even" if the given integer is even, and the string "odd" if it's odd.

// Tips
// Converting a boolean, or something that will ultimately be interpreted as a boolean, into a boolean is redundant.

// For example, the code:

// let bool = Boolean(x < 4)
// return bool === true
// Is equivalent to simply:

// return x < 4
// A comparison with <, <=, ===, !==, >=, > will always result in a boolean, therefore using the function Boolean() is totally unnecessary.
// bool === true is redundant, as it will always return bool.
// To obtain the opposite of bool we could use bool === false. However, a much cleaner way of doing this is simply !bool.
// While preserving readability, avoid declaring unnecessary variables.



function parity(n) {
	let remainder = n % 2 
	if(remainder === 0) {
		console.log( "even" )
	} else if(remainder !== 0) {
		console.log( "ODD" )
	}
}

parity(2)
parity(7)
parity(1)
parity(25)