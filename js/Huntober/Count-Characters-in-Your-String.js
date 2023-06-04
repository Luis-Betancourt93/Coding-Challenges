// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.



function count(string) {
  // First make Obj => Loop though and add if not inside the obj and if it is add one
  let countObj = {}

  for(const char of string ){

    if (countObj[char]) {
      countObj[char]++
    } else {
      countObj[char] = 1
    }
  }

  return countObj

}













// Leon Response on stand-up
/*
function count(string) {
  let countObj = {}

  for(const char of string) {
      if (countObj[char]) {
        countObj[char]++
      } else {
        countObj[char] = 1
      }
  }

  return countObj;
  
}
*/

console.log(count('aba'), "{'a': 2, 'b': 1}")
console.log(count('dog'), "{'d': 1, 'o': 1, 'g': 1}")
console.log(count('abba'), "{'a': 2, 'b': 2}")