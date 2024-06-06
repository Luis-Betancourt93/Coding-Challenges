/*
Given a non-empty string of words, return the length of the shortest word(s).
*/

const findShort = str => {
  return Math.min(...str.split(' ').map(word => word.length));
};