// Given this array, console.log 'True' or 'False' if it contains any number below 5.

let marks = [ 4, 5, 7, 9, 10, 3 ];

const lessThanFive = marks.some(element => element < 5)

console.log(lessThanFive)