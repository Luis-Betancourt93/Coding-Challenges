/*
You are given an m x n integer grid accounts, where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has. A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth. For example:
*/

const maximumWealth = accounts => {
  return Math.max(
    ...accounts.map(customer => customer.reduce((a, b) => a + b))
  );
};


console.log(
  maximumWealth([
    [2, 8, 7],
    [7, 1, 3],
    [1, 9, 5],
  ])
); // 17
console.log(
  maximumWealth([
    [1, 5],
    [7, 3],
    [3, 5],
  ])
); // 10
console.log(
  maximumWealth([
    [1, 2, 3],
    [3, 2, 1],
  ])
); // 6