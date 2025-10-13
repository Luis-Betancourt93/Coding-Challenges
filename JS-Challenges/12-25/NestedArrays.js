/*
This is the hardest pattern you will see in most interviews.
Scenario: You are scraping a "Team Permissions" table. Each user has a list (array) of permissions. You need to find users who have "Delete" access, but the permissions are buried inside an array within the object.


Filter to keep only the users who have "Delete" inside their roles array.
Hint: Remember .includes()? You can use it inside the filter like this: element.roles.includes('Delete')
Map the result to return just their name.

Expected Output: 
["Mike", "Tom"]

*/
const team = [
  { name: "Sarah", roles: ["Editor", "Viewer"] },
  { name: "Mike", roles: ["Admin", "Delete", "Viewer"] },
  { name: "Jessica", roles: ["Viewer"] },
  { name: "Tom", roles: ["Moderator", "Delete"] }
];

const hasDelete = team.filter(element => element.roles.includes('Delete')).map(element => element.name)

console.log(hasDelete);