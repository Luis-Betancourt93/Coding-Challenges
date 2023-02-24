// A vehicle needs 10 times the amount of fuel than the distance it travels. However, it must always carry a minimum of 100 fuel before setting off.

// Create a function which calculates the amount of fuel it needs, given the distance.


function calculateFuel(n) {

  if (n < 10) {
    console.log(100)
  } else {
    console.log(n * 10 )
  }
	


}

calculateFuel(15) // ➞ 150

calculateFuel(23.5) // ➞ 235

calculateFuel(3) // ➞ 100