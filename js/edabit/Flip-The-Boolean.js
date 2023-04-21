// Due to a programming concept known as truthiness, certain values can be evaluated to (i.e. take the place of) booleans. For example, 1 (or any number other than 0) is often equivalent to true, and 0 is often equivalent to false.

// Create a function that returns the opposite of the given boolean, as a number.

function flipBool(b) {
	if (b > 0 || b === true) {
    console.log(0)
  } else if (b <= 0 || b === false ) {
    console.log(1)
  }
}


flipBool(true) // ➞ 0

flipBool(false) // ➞ 1

flipBool(1) // ➞ 0

flipBool(0) // ➞ 1