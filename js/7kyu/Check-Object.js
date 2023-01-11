//  Check if this object includes ford and bmw


let bmw = {name: 'BMW' }, 
    toyota = { name: 'Toyota'},
    ford = {name: 'Ford'}



let cars = [ford, toyota];

console.log(cars.includes(ford)); // true
console.log(cars.includes(bmw)); // false