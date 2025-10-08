/*
The Task:

Filter users for anyone whose role is "admin" (ignoring case).

Map to { username: "NAME", status: "Active" }.

*/

const users = [
  { name: "Alice", role: "Admin", id: 101 },
  { name: "Bob", role: "User", id: 102 },
  { name: "Charlie", role: "ADMIN", id: 103 },
  { name: "Dave", role: "user", id: 104 }
];

const caseUsers = users.filter(element => element.role.toLocaleLowerCase() === 'admin').map(element => ({
  username: element.name.toLocaleUpperCase(),
  status: 'Active'
}))

console.log(caseUsers);