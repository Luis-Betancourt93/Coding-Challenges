/*
We need a function that can transform a number (integer) into a string.

What ways of achieving this do you know?

Examples (input --> output):
123  --> "123"
999  --> "999"
-100 --> "-100"
*/

/*
Notes
 - Num -> string 
 - Not empty
 - No !
 - Always a Num 
*/

/*
function numToString(num) {
  return String(num);
}
*/

const numToString = num => String(num)


console.log(numToString(1), '1')
console.log(numToString(3), '3')
console.log(numToString(44), '44')




