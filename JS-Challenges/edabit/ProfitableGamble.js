/*
Create a function that takes three arguments prob, prize, pay and returns true if prob * prize > pay; otherwise return false.

To illustrate:

profitableGamble(0.2, 50, 9)
... should yield true, since the net profit is 1 (0.2 * 50 - 9), and 1 > 0.

Examples
profitableGamble(0.2, 50, 9) ➞ true

profitableGamble(0.9, 1, 2) ➞ false

profitableGamble(0.9, 3, 2) ➞ true
*/

function profitableGamble(prob, prize, pay) {
	return (prob * prize - pay) > 0
}
/*
function profitableGamble(prob, prize, pay) {
	return prob*prize > pay;
}
*/