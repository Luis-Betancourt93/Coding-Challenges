/*
Given a string of characters, return the character that appears the most often.

describe("Max Character", () => {
 it("Should return max character", () => {
  assert.equal(max("Hello World!"), "l");
 });
});

No String or Array Methods (well brute force it first, but then no methods)! 
*/


console.log(maxCharacter('Hello World'), 'l')

function maxCharacter(string) {
  let charMap = {},
      counter = 0,
      maxChar = null

  for(const char of string){
    if (charMap[char]) {
      charMap[char]++
    } else {
      charMap[char] = 1
    }
  }

  for(const char in charMap) {
    if (charMap[char] > counter) {
      counter = charMap[char]
      maxChar = char
    } 
  }


  return maxChar


}













/*
? Leon's Code 12/08/22 

function maxCharacter(string) {

  ? Here we are setting the map, count and the character that appears the most!
  let charMap = {},
      count = 0,
      maxChar = null

  ? This forLoop is checking if each char of the string is inside that hashmap. If it is add 1 but if not set it to one.
  for(const char of string) {
    if (charMap[char]) {
      charMap[char]++
    } else {
      charMap[char] = 1
    }
  }

  ?This Loop is where it get a bit complicated. Insted of looking for character inside the 'string' we are looking inside the 'charMap' and is saying if the value of letter is bigger than 0? set it as the new valve, and also change the maxChar to the current one.
  for(const char in charMap){
    if(charMap[char] > count){
      count = charMap[char]
      maxChar = char
    }

  }

  return maxChar
 
}
*/



