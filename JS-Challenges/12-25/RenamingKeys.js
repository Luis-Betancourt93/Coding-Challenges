//Instruction: Map this to a cleaner object structure using the ({}) syntax.

//Map u_id -> id

//Map u_name -> username

//Target Output: [{ id: 1, username: "Roxas" }, { id: 2, username: "Axel" }]

const originalData = [
  { u_id: 1, u_name: "Roxas" },
  { u_id: 2, u_name: "Axel" }
];

const newData = originalData.map(element => ({
  id: element.u_id,
  username: element.u_name

}))

console.log(newData)