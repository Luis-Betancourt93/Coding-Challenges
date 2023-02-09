// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.


function lessThan100(a, b) {
	if (a + b < 100) {
    console.log(true)
  } else {
    console.log(false)
  }
}







lessThan100(22, 15) //➞ true
// 22 + 15 = 37

lessThan100(83, 34) //➞ false
// 83 + 34 = 117

lessThan100(3, 77) //➞ true