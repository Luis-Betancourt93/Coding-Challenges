// According to the lodash documentation, _.drop creates a slice of an array with n elements dropped from the beginning.

// Your challenge is to write your own version using vanilla JavaScript.


function drop(arr, val = 1) {
	console.log(arr.slice(val))
}




drop([1, 2, 3], 1) // ➞ [2, 3]

drop([1, 2, 3], 2)//  ➞ [3]

drop([1, 2, 3], 5) // ➞ []

drop([1, 2, 3], 0) // ➞ [1, 2, 3]