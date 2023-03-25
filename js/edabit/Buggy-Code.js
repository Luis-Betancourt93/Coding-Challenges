// The challenge is to try and fix this buggy code, given the inputs true and false. See the examples below for the expected output.

function has_bugs(buggy_code) {
	if (buggy_code === true) {
		console.log( 'sad days')
	} else {
		console.log( "it's a good day")
	}
}

has_bugs(true) // ➞ "sad days"

has_bugs(false) // ➞ "it's a good day"