/*
Write a function that validates whether two strings are identical. Make it case insensitive.

*/


function match(str1, str2) {
    if (str1.toLowerCase() === str2.toLowerCase()) {
      console.log('true')
    } else {
      console.log('False')
    }
}

match("hello", "hELLo") // ➞ true

match("motive", "emotive") // ➞ false

match("venom", "VENOM") // ➞ true

match("mask", "mAskinG") // ➞ false