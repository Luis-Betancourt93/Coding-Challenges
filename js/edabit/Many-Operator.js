/*
Some basic arithmetic operators are +, -, *, /, and %. In this challenge you will be given three parameters, num1, num2, and an operator. Use the operator on number 1 and 2.
*/

operate(1, 2, "+") // ➞ 3
// 1 + 2 = 3

operate(7, 10, "-") // ➞ -3
// 7 - 10 = -3

operate(20, 10, "%") // ➞ 0
// 20 % 10 = 0

function operate(num1, num2, operator) {
  if (operator === '+') {
    console.log(num1 + num2)
  } else if (operator === '-'){
    console.log(num1 - num2)
  } else{
    console.log(num1 % num2)
  }
}
