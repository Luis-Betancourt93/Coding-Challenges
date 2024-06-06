/*
Complete the solution so that the function will break up camel casing, using a space between words.
*/


const solution = str => {
  return str.replace(/([a-z])([A-Z])/g, '$1 $2');
};