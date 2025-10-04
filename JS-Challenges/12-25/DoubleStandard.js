/*
Instruction: Write a filter that keeps jobs where the role is "QA Engineer" AND the salary is greater than 80000.

Target: [{ role: "QA Engineer", salary: 85000 }]

*/

const jobs = [
  { role: "Intern", salary: 50000 },
  { role: "QA Engineer", salary: 85000 },
  { role: "QA Engineer", salary: 60000 }, // Underpaid!
  { role: "Developer", salary: 90000 }
];

const QaJobs = jobs.filter(element => element.role === 'QA Engineer' && element.salary > 80000);
console.log(QaJobs);