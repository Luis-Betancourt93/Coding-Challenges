/*
Given a fraction as a string, return whether or not it is greater than 1 when evaluated.
*/

greaterThanOne("1/2") // ➞ false

greaterThanOne("7/4") // ➞ true

greaterThanOne("10/10") // ➞ false

function greaterThanOne(str) {
  eval(str) > 1 ? console.log('true') : console.log('false')
}