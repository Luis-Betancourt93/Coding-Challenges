// Given this array console.log the first even number. 

let numbers = [1, 2, 3, 4, 5];

console.log(numbers.find(element => element % 2 === 0))

// By using the .find() method it does a "test" condition and it will only get the first element in that array that passes that test but only the first one. Unlike filter() that returns all elements that pass that test. 