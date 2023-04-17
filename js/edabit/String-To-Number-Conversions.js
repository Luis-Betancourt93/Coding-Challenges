// You need to create two functions to substitute toString() and parseInt(); A function called intToString() that converts integers into strings and a function called stringToInt() that converts strings into integers.

function intToString(num) {
	console.log(String(num))
}


function stringToInt(num) {
	console.log(Number(num))
}



intToString(4) // ➞ "4"

stringToInt("4") // ➞ 4

intToString(29348) // ➞ "29348"