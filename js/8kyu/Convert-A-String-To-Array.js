// Write a function to split a string and convert it into an array of words.

// Examples (Input ==> Output):
// "Robin Singh" ==> ["Robin", "Singh"]

// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]



// String into array,
// No empty string, no nums, no funny biz

// console.log the result 

// "I love array they are my favorite" ==> ["I", "love", "array", "they", "are", "my", "favorite"]

// function stringToArray(string) {
//   console.log(string.split(' '))

// }

const stringToArray = string => console.log(string.split(' '))

stringToArray("Robin Singh")
stringToArray("I love arrays they are my favorite")