const names = ["alice", "bob", "charlie"];

// TODO: Use .map() to create a new array called 'capitalizedNames'
const capitalizedNames = names.map( element => element[0].toUpperCase() + element.slice(1));

console.log(capitalizedNames);
// Expected Output: ["Alice", "Bob", "Charlie"]