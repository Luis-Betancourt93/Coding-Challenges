/*
toInt() : A function to convert a string to an integer.
toStr() : A function to convert an integer to a string.
*/

toInt("77") // ➞ 77

toInt("532") // ➞ 532

toStr(77) // ➞ "77"

toStr(532) // ➞ "532"

function toStr(str) {
  console.log(Number(str))
}

function toInt(num){
 console.log(toStr(num))
}