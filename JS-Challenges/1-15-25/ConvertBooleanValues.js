/*

Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

*/

/*
function boolToWord(bool) {
  if (bool === true) {
    return 'Yes'
  } else {
    return 'No'
  }
}
*/

const boolToWord = bool => bool === true? 'Yes' : 'No'

console.log(boolToWord(true))
console.log(boolToWord(false))
console.log(boolToWord(true))
console.log(boolToWord(false))