/*
It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry about strings with less than two characters.
*/

/*
function removeChar(str){
  //You got this!
  return str.slice(1, -1)
 
 };

 */

const removeChar = str => str.slice(1, -1);



 console.log(removeChar('eloquent'))
 console.log(removeChar('country'))
 console.log(removeChar('person'))
 console.log(removeChar('place'))