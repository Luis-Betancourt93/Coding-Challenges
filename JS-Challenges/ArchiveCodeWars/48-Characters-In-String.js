/*
Write a function that counts the frequency of all the characters in a given string.

*/


const count = string => {
  const frequency = {};
  for (const char of string) {
    frequency[char] = (frequency[char] || 0) + 1;
  }
  return frequency;
};