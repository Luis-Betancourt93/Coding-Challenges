/*
Given a string which includes only letters, write a function that produces the outputs below.
*/

const accum = str => {
  return str
    .split('')
    .map((ele, index) => ele.toUpperCase() + ele.toLowerCase().repeat(index))
    .join('-');
};