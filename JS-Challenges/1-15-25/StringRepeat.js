/*
Write a function that accepts a non-negative integer n and a string s as parameters, and returns a string of s repeated exactly n times.

Examples (input -> output)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"

*/
/*
function repeatStr (n, s) {
  if (n > 0) {
    return s.repeat(n)
  } else {
    return ''
  }
}
*/

const repeatStr = (n, s) => n > 0? s.repeat(n) : ''

console.log(repeatStr(3, "*"))
console.log(repeatStr(5, "#"))
console.log(repeatStr(2, "ha "))
console.log(repeatStr(0, ""))
console.log(repeatStr(0, "I"))