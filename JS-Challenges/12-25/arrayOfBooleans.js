//Instruction: Write a map function that returns an array of booleans. Return true if the salary is greater than 80000, and false if it isn't.

//Target: [true, false, true]

const employees = [
  { name: "Kim", salary: 85000 },
  { name: "Joe", salary: 62000 },
  { name: "Angie", salary: 95000 }
];

const booleans = employees.map(element => 
  element.salary > 80000? true : false
)

console.log(booleans);