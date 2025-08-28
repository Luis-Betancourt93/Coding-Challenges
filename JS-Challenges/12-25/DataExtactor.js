const users = [
  { id: 1, username: "PixelMaster", email: "pixel@test.com" },
  { id: 2, username: "CodeWarrior", email: "warrior@test.com" },
  { id: 3, username: "BugHunter", email: "hunter@test.com" }
];

// TODO: Use .map() to create a new array called 'userEmails'
const userEmails = users.map( element => element.email);

console.log(userEmails);
// Expected Output: ["pixel@test.com", "warrior@test.com", "hunter@test.com"]