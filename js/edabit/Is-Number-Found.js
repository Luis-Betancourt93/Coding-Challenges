/*
Create a function which validates whether a given number exists, and could represent a real life quantity. Inputs will be given as a string.
*/

validStrNumber("3.2") // ➞ true

validStrNumber("324") // ➞ true

validStrNumber("54..4") // ➞ false

validStrNumber("number") // ➞ false


function validStrNumber(num) {
  !isNaN(num) ? console.log('True') : console.log('False')
}