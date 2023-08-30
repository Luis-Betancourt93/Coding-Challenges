/*

Given a fraction as a string, return whether or not it is greater than 1 when evaluated.


*/


function greaterThanOne(fractionString) {
  const [numerator, denominator] = fractionString.split("/").map(Number);
  return numerator > denominator;
}

const fractionString = "3/2";

if (greaterThanOne(fractionString)) {
  console.log("The fraction is greater than 1.");
} else {
  console.log("The fraction is not greater than 1.");
}


greaterThanOne("1/2") // ➞ false

greaterThanOne("7/4") // ➞ true

greaterThanOne("10/10") // ➞ false


