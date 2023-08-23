/*
A student learning JavaScript was trying to make a function that sorts all the letters of a word, but their code is broken, and they can't figure out why.

Spot and fix the error(s) in the code to make the function work.
*/

console.log(sortWord("dcba")) // ➞ "abcd"

console.log(sortWord("Unpredictable")) // ➞ "Uabcdeeilnprt"

console.log(sortWord("pneumonoultramicroscopicsilicovolcanoconiosis") )// ➞ "aacccccceiiiiiilllmmnnnnooooooooopprrsssstuuv"


function sortWord(word) {
	return word.split('').sort().join('');
}