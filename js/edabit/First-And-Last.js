// Create a function that takes a string and returns the concatenated first and last character.

firstLast("ganesh")  //➞ "gh"

firstLast("kali")  //➞ "ki"

firstLast("shiva")  //➞ "sa"

firstLast("vishnu") // ➞ "vu"

firstLast("durga")  //➞ "da"

function firstLast(word) {
  let firstLetter = word[0]
  let lastLetter = word[word.length - 1]
  console.log(firstLetter.concat(lastLetter))
}