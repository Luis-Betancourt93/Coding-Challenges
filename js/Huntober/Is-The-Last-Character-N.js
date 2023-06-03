// Create a function that takes a string (a random name). If the last character of the name is an "n", return true, otherwise return false.

function isLastCharacterN(word) {
	console.log(word.charAt(word.length - 1) === 'n' ? true : false)
}



isLastCharacterN("Aiden") // ➞ true

isLastCharacterN("Piet") // ➞ false

isLastCharacterN("Bert") // ➞ false

isLastCharacterN("Dean") // ➞ true