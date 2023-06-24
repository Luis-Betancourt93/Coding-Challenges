/*
Create a function that takes a string and changes the word amazing to not amazing. Return the string without any change if the word edabit is part of the string.

*/

amazingEdabit("edabit is amazing.") // ➞ "edabit is amazing."

amazingEdabit("Mubashir is amazing.") // ➞ "Mubashir is not amazing."

amazingEdabit("Infinity is amazing.") // ➞ "Infinity is not amazing."

function amazingEdabit(str) {
  if (str.includes('edabit')) {
    console.log(str)
  } else {
    console.log(str.replace('amazing', 'not amazing'))
  }
}