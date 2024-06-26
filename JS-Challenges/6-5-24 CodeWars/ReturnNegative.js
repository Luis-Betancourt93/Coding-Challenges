/*
In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

Examples
makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12
Notes
The number can be negative already, in which case no change is required.
Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.
*/

/*
pos num -> negative num 
negative -> do nothing 
if 0 -> 0 
no string, no !, always a num no empty. 
*/

//console.log the return 

/*
function makeNegative(num) {
  if (num > 0) {
    return num * -1
  } else {
    return num
  }
}
*/

const makeNegative = num => num > 0 ? num * -1 : num


console.log(makeNegative(-1), -1)
console.log(makeNegative(5), -5)
console.log(makeNegative(10), -10)
console.log(makeNegative(0), 0)











