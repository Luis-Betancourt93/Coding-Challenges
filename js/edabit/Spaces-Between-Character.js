/*
Create a function that takes a string and returns a string with spaces in between all of the characters.
*/

spaceMeOut("space") // ➞ "s p a c e"

spaceMeOut("far out") // ➞ "f a r   o u t"

spaceMeOut("elongated musk") // ➞ "e l o n g a t e d   m u s k"

function spaceMeOut(str) {
	console.log(str.split('').join(' '))
}