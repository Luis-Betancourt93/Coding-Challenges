/*
Create a function that takes a positive integer less than 4,000 as its input and returns a string containing the Roman numeral representation of that integer. Modern Roman numerals are written by expressing each digit separately starting with the leftmost digit and skipping any digit with a value of zero. There can't be more than 3 identical symbols in a row. 
*/

const convertToRoman = number => {
  const decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  // prettier-ignore
  const romans = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  let result = '';

  decimals.map((value, index) => {
    while (number >= value) {
      result += romans[index];
      number -= value;
    }
  });

  return result;
};