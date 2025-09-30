/*
Instruction: Write a filter function that keeps only the files that include the word "report".

Hint: Strings have a method called .includes("text").

Target: ["report_final.pdf", "report_draft.pdf"]
*/

const filenames = ["report_final.pdf", "image.png", "report_draft.pdf", "data.csv"];

const filterNames = filenames.filter(element => element.includes('report'));

console.log(filterNames);