/*
Write a function that turns a given string into a wave! You will be passed a string and you must return that string in an array where each letter takes turns to become uppercase. The input string will always be lowercase but may be empty. If you encounter a whitespace then pass over it.*/


const wave = str => {
  const result = [];
  const len = str.length;
  for (let i = 0; i < len; i++) {
    if (str[i] !== ' ') {
      const word =
        str.substring(0, i).toLowerCase() +
        str[i].toUpperCase() +
        str.substring(i + 1).toLowerCase();
      result.push(word);
    }
  }
  return result;
};