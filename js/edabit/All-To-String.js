/*
Create a function that takes an array of integers and strings. Convert integers to strings and return the new array.
*/ 

parseArray([1, 2, "a", "b"]) // ➞ ["1", "2", "a", "b"]

parseArray(["abc", 123, "def", 456]) // ➞ ["abc", "123", "def", "456"]

parseArray([1, 2, 3, 17, 24, 3, "a", "123b"]) // ➞ ["1", "2", "3", "17", "24", "3", "a", "123b"]

parseArray([]) // ➞ []

function parseArray(array) {
  let stringArray = array.map(element => String(element))
  console.log(stringArray )

}