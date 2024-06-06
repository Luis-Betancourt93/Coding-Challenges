/*Write a function that accepts two strings and returns true if some or all of the characters in the first string can be rearranged to match the second string.
*/


const scramble = (str1, str2) => {
  return [...str2].every(
    letter => str2.split(letter).length <= str1.split(letter).length
  );

};