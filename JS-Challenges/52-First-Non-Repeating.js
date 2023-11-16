/*
  Write a function that takes an input string and returns the first character that is not repeated anywhere in the string. Upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter.
*/

const firstNonRepeatingLetter = str => {
  const strToLower = str.toLowerCase();
  for (let char of str) {
    if (
      strToLower.indexOf(char.toLowerCase()) ===
      strToLower.lastIndexOf(char.toLowerCase())
    ) {
      return char;
    }
  }
  return '';
};