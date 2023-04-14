// Create a function that accepts a measurement value in inches and returns the equivalent of the measurement value in feet.

function inchesToFeet(inches) {
	if (inches >= 12) {
    console.log(inches / 12)
  } else {
    console.log(0)
  }
}


inchesToFeet(324) //➞ 27

inchesToFeet(12) //➞ 1

inchesToFeet(36)//➞ 3