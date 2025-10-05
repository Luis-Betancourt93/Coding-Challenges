/*
Instruction: Write a filter that keeps requests where the status is "Pending" OR "Failed" (we want to retry both of these).

Target: [{ id: 1... }, { id: 2... }, { id: 4... }]

*/


const requests = [
  { id: 1, status: "Pending" },
  { id: 2, status: "Failed" },
  { id: 3, status: "Success" },
  { id: 4, status: "Pending" }
];


const statusRequests = requests.filter(element => element.status === 'Pending' || element.status === 'Failed');
console.log(statusRequests);