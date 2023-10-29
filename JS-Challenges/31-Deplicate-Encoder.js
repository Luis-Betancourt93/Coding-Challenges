/*
Write a function that converts a string to a new string where each character in the new string is ( if that character appears only once in the original string, or ) if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
*/

const duplicateEncode = word => {
  const lowerWord = word.toLowerCase();
  let result = '';
  for (const char of lowerWord) {
    lowerWord.indexOf(char) !== lowerWord.lastIndexOf(char)
      ? (result += ')')
      : (result += '(');
  }
  return result;
};


console.log(duplicateEncode('din')); // '((('
console.log(duplicateEncode('(( @')); // '))(('
console.log(duplicateEncode('recede')); // '()()()'
console.log(duplicateEncode('Success')); // ')())())'