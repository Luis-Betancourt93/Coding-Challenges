// Create a function that accepts an array and returns the last item in the array.


// function getLastItem(arr) {
// 	console.log(arr.pop())
// }

const getLastItem = arr => console.log(arr.pop())



getLastItem([1, 2, 3]) // ➞ 3

getLastItem(["cat", "dog", "duck"]) // ➞ "duck"

getLastItem([true, false, true]) // ➞ true