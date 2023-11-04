/*
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
*/

const reverse = x => {
  const MAX = Math.pow(2, 31) - 1;
  const MIN = -1 * Math.pow(2, 31);
  const arr = Math.abs(x).toString().split('');
  const reversed = Math.sign(x) * Number(arr.reverse().join(''));
  return reversed < MIN || reversed > MAX ? 0 : reversed;
};