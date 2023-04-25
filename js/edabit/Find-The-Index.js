// Create a function that takes an array and a string as arguments and returns the index of the string.

function findIndex(arr, str) {
	console.log(arr.indexOf(str))
}


findIndex(["hi", "edabit", "fgh", "abc"], "fgh") // ➞ 2

findIndex(["Red", "blue", "Blue", "Green"], "blue") // ➞ 1

findIndex(["a", "g", "y", "d"], "d") // ➞ 3

findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple")//  ➞ 0