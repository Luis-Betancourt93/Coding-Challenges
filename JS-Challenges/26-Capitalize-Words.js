/*
Write a function that capitalizes each word in a given input string.
*/


String.prototype.capitalize = function () {
  return this.split(' ')
    .map(ele => ele[0].toUpperCase() + ele.slice(1))
    .join(' ');
};

