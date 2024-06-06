/*
Let's assume that the numeric value of a letter is its position in the alphabet starting from 0 (i.e. a -> 0, b -> 1, c -> 2, etc.). Similarly, the numerical value of a string str consisting of some lowercase English letters is the concatenation (not sum!) of the numeric values of each letter in str, which is then converted into an integer. For example, if str = 'acb', we concatenate each letter's numeric value, resulting in 021 which is then converted to integer 21.

You are given three strings firstWord, secondWord, and targetWord, each consisting of lowercase English letters a through j inclusive. Write a function that returns true if the sum of the numerical values of firstWord and secondWord equals the numerical value of targetWord.
*/


const getNumericValue = str => {
  const offset = 'a'.charCodeAt();
  const arr = [];

  for (const char of str) {
    arr.push(char.charCodeAt() - offset);
  }

  return parseInt(arr.join(''));
};

const isSumEqual = (firstWord, secondWord, targetWord) => {
  return (
    getNumericValue(firstWord) + getNumericValue(secondWord) ===
    getNumericValue(targetWord)
  );
};