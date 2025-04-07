/*
Create a function that takes the age in years and returns the age in days.
*/
/*
function calcAge(age) {
	let ageInDays = (age*365)>=0 && typeof(age*365) == 'number' ? (age*365) : []
	return ageInDays
}
*/

const calcAge = age => age * 365; 