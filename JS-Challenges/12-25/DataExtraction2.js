//Instruction: Write a map function that returns an array containing only the names.

//arget: ["Sora", "Riku", "Kairi"]

const kingdomHeartsCharacters = [
  { id: 1, name: "Sora", weapon: "Keyblade" },
  { id: 2, name: "Riku", weapon: "Soul Eater" },
  { id: 3, name: "Kairi", weapon: "Destiny's Embrace" }
];

const nameKH = kingdomHeartsCharacters.map(element => element.name);

console.log(nameKH);