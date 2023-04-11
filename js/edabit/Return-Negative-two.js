// Create a function that takes a number as an argument and returns negative of that number. Return negative numbers without any change.

function returnNegative(n) {
	if (n > 0) {
    console.log(-n)
  }else if (n === 0){
    console.log(0)
  } else if (n < 0) {
    console.log(n)
  }
}



returnNegative(4) //  ➞ -4

returnNegative(15) // ➞ -15

returnNegative(-4) // ➞ -4

returnNegative(0) // ➞ 0