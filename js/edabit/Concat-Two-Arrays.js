// Create a function to concatenate two integer arrays.

function concat(arr1, arr2) {
	console.log(arr1.concat(arr2))
}

concat([1, 3, 5], [2, 6, 8]) // ➞ [1, 3, 5, 2, 6, 8]

concat([7, 8], [10, 9, 1, 1, 2]) // ➞ [7, 8, 10, 9, 1, 1, 2]

concat([4, 5, 1], [3, 3, 3, 3, 3]) // ➞ [4, 5, 1, 3, 3, 3, 3, 3]