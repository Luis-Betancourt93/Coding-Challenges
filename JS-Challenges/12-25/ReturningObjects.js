/*
You have a list of raw user inputs, but you want to convert them into "User Objects" to send to a database or use in a test.

Instruction: Write a map function that returns an array of objects.

Key: email

Value: The email string from the array.

Target: [{ email: "sora@destiny.islands" }, { email: "riku@darkness.com" }, ...]

*/

const emails = ["sora@destiny.islands", "riku@darkness.com", "kairi@princess.heart"];

const mastersEmails = emails.map(element => ({
  email: element
}));

console.log(mastersEmails)