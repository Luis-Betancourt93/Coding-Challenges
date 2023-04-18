// I'd like to calculate how long on average I've lived in a single house.

// Given a person's age and the number of times they've moved house as moves, return the average number of years that they've spent living in the same house.

function yearsInOneHouse(age, moves) {
	console.log(age / (moves + 1) )
}


yearsInOneHouse(30, 1) // ➞ 15

yearsInOneHouse(15, 2) // ➞ 5

yearsInOneHouse(80, 0) // ➞ 80