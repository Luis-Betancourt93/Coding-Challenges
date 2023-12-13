/*
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

*/

function duplicateEncode(word){
  const lowerWord = word.toLowerCase()
  const newWord = lowerWord.split('').map((element, index, array) => array.indexOf(element) === array.lastIndexOf(element) ? '(' : ')' ).join('')

  console.log(newWord)

}

duplicateEncode("din") // "((("
duplicateEncode("recede") // "()()()"
duplicateEncode("Success") // ")())())","should ignore case"
duplicateEncode("(( @") // "))(("