/*
A vehicle needs 10 times the amount of fuel than the distance it travels. However, it must always carry a minimum of 100 fuel before setting off.

Create a function which calculates the amount of fuel it needs, given the distance.
*/

function calculateFuel(n) {
	return n>10 ? n*10 : 100
}
/*
const calculateFuel = n => Math.max(100, n * 10);
*/