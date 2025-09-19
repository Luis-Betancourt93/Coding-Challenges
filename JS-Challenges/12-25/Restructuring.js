/*
APIs often give you messy data with keys you don't care about (like database_id or created_at). In testing, you often want to simplify the object to just the keys you are verifying.

Instruction: Write a map function that returns a new array of objects containing ONLY name (mapped from firstName) and role (mapped from class).

Target: [
  { name: "Terra", role: "Keyblade Wielder" },
  { name: "Aqua", role: "Master" },
  { name: "Ventus", role: "Wind" }
]


*/
const apiResponse = [
  { _id: 99, firstName: "Terra", class: "Keyblade Wielder", region: "NA" },
  { _id: 100, firstName: "Aqua", class: "Master", region: "EU" },
  { _id: 101, firstName: "Ventus", class: "Wind", region: "JP" }
];

const keybladeMasters = apiResponse.map(element => ({
  name: element.firstName,
  role: element.class,
}))

console.log(keybladeMasters);
