// Given this array console.log only cities that have a population higher then 3000000 in them.


let cities = [
  {name: 'Los Angeles', population: 3792621},
  {name: 'New York', population: 8175133},
  {name: 'Chicago', population: 2695598},
  {name: 'Houston', population: 2099451},
  {name: 'Philadelphia', population: 1526006}
];


const bigCity = cities.filter(element => element.population > 3000000)

console.log(bigCity)