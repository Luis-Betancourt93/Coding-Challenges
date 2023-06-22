/*
Create a function that returns the ASCII value of the passed in character.
*/

ctoa("A") //➞ 65

ctoa("m") //➞ 109

ctoa("[") //➞ 91

function ctoa(char) {
  console.log(ctoa.charCodeAt(char))
}