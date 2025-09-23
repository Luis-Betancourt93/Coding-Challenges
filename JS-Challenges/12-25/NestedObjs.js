//Instruction: Write a map function that returns an Array of Strings containing ONLY the class.

//Hint: You need to chain the dots. element.something.somethingElse.

//Target: ["Wielder", "Master", "Princess"]

const profiles = [
  { name: "Sora", attributes: { level: 99, class: "Wielder" } },
  { name: "Riku", attributes: { level: 50, class: "Master" } },
  { name: "Kairi", attributes: { level: 1, class: "Princess" } }
];

const masterClass = profiles.map(element => 
  element.attributes.class
);

console.log(masterClass);