// A typical car can hold four passengers and one driver, allowing five people to travel around. Given n number of people, return how many cars are needed to seat everyone comfortably.



function carsNeeded(n) {
	console.log(Math.ceil(n / 5))
}





// Examples
carsNeeded(5) // ➞ 1

carsNeeded(11) // ➞ 3

carsNeeded(0) // ➞ 0