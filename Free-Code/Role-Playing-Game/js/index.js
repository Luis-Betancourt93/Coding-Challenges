let camperbot = 0;

let health = 100;
let gold = 50;

let currentWeapon = 0;

let fighting;
let monsterHealth;
let inventory = ["stick", "dagger", "sword"];

const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');

const text = document.querySelector('#text');
const xpText = document.querySelector('#xpText');
const healthText = document.querySelector('#healthText');
const goldText = document.querySelector('#goldText');
const monsterStats = document.querySelector('#monsterStats');
const monsterName = document.querySelector('#monsterName');

const monsterHealthText = document.querySelector('#monsterHealth');


// initialize buttons
function goStore() {
  console.log('Going to store');
}

function goCave() {
  update(locations[2])
}

function fightDragon() {
  console.log('Fighting dragon.')
}

button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function goTown() {
  update(locations[0])

  text.innerText = "You are in the town square. You see a sign that says \"Store\"."
  button1.innerText = 'Go to store'
  button2.innerText = "Go to cave";
  button3.innerText = "Fight Dragon";

button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;
}


function goStore() {
  update(locations[1])
  text.innerText = 'You enter the store'
  button1.innerText = 'Buy 10 health (10 gold)'
  button2.innerText = "Buy weapon (30 gold)";
  button3.innerText = "Go to town square";

button1.onclick = buyHealth;
button2.onclick = buyWeapon;
button3.onclick = goTown;

}

function buyHealth() {
  if (gold >= 10) {
    gold -= 10;
    health += 10;
    goldText.innerText = gold;
    healthText.innerText = health;
  } else {
    text.innerText = "You do not have enough gold to buy health."
  }

  
}
 function buyWeapon() {
  if(gold >= 30) {
    gold -= 30;
    currentWeapon ++;
    goldText.innerText = gold;
    let newWeapon = weapons[currentWeapon].name;
    text.innerText = "You now have a new weapon.";
  }
 }

 function fightSlime() {

 }
 
 function fightBeast() {
   
 }

function update(location) {
  button1.innerText = location["button text"][0];
  button2.innerText = location["button text"][1];
  button3.innerText = location["button text"][2];
  button2.innerText = "Go to cave";
  button3.innerText = "Fight dragon";
  button1.onclick = location["button functions"][0];
  button2.onclick = location["button functions"][1];
  button3.onclick = location["button functions"][2];
  text.innerText = text.innerText = location.text;;
}

const weapons = [
  {
    name: "stick",
    power: 5
  },
  {
    name: "dagger",
    power: 30
  },
  {
    name: "claw hammer",
    power: 50
  },
   {
     name: "sword",
     power: 100
  }
];

const locations = [{
  name: 'town square',
  "button text": ["Go to store", "Go to cave", "Fight dragon"],
  "button functions" : [goStore, goCave, fightDragon],
  text : "You are in the town square. You see a sign that says \"Store\"."
},
{
  name: 'store',
  "button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],
  "button functions" : [buyHealth, buyWeapon, goTown],
  text : "You enter the store."
},
{
  name: "cave",
  "button text": ["Fight slime", "Fight fanged beast", "Go to town square"],
  "button functions": [fightSlime, fightBeast, goTown],
  text: "You enter the cave. You see some monsters."
}

];