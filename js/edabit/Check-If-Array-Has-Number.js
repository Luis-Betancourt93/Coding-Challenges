// Write a function to check if an array contains a particular number.

function check(arr, el) {
	console.log(arr.includes(el))
}



check([1, 2, 3, 4, 5], 3) // ➞ true

check([1, 1, 2, 1, 1], 3) // ➞ false

check([5, 5, 5, 6], 5) // ➞ true

check([], 5) // ➞ false