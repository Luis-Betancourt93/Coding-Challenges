// Given this list of customer objects grap the first customer that has a credit higher than 100. 

let customers = [{
  name: 'ABC Inc',
  credit: 100
}, {
  name: 'ACME Corp',
  credit: 200
}, {
  name: 'IoT AG',
  credit: 300
}];


console.log(customers.find(element => element.credit > 100))

// Here we are using the .find() which takes in a 'test' condition and will return the first elemenet that passes that test. 