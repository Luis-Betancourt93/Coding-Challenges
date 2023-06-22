/*
Write a function that validates whether two strings are identical. Make it case insensitive.
*/

match("hello", "hELLo") // ➞ true

match("motive", "emotive") // ➞ false

match("venom", "VENOM") // ➞ true

match("mask", "mAskinG") // ➞ false

function match(str1, str2) {
  str1.toLowerCase() === str2.toLowerCase() ? console.log('True') : console.log('False')
}