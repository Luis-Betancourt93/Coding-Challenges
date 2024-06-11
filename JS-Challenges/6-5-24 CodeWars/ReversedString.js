/*
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'
*/

// string -> rev string 
// no empty string
// no nums 
// no !
// no funny buzz

// console.log the results 

/*
function stringReverse(str) {
  let reverseString = str.split('').reverse().join('')
  return reverseString;
}
*/

const stringReverse = str => str.split('').reverse().join('')


console.log(stringReverse('Luis'), 'siuL'); 
console.log(stringReverse('Tom'), 'moT'); 
console.log(stringReverse('Coffee'), 'eeffoC');
console.log(stringReverse('World'), 'dlroW');