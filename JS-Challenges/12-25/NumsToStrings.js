//Instruction: Write a map function that turns these numbers into strings with a dollar sign.

//Target: ["$100", "$50", "$25"]

const prices = [100, 50, 25];

const money = prices.map(element => `$${element}`);
console.log(money);