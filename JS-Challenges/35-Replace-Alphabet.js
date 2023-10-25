/*
Given a string, write a function that replaces every letter with its position in the alphabet: 'a' = 1, 'b' = 2, .... If anything in the input isn't a letter, ignore it and don't return it.
*/


const alphabetPosition = text => {
  const startingIndex = 'a'.charCodeAt() - 1;
  return text
    .toLowerCase()
    .match(/[a-z]/g)
    .map(letter => letter.charCodeAt() - startingIndex)
    .join(' ');
};