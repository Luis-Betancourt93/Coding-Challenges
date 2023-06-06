// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Example 1:

// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3
// Example 2:

// Input: jewels = "z", stones = "ZZ"
// Output: 0

console.log(findJewels('aA', 'aAAbbbb'), '3')























/* Leon's Code 12/06/22
function findJewels(jewels, stones) {

  //?Setting up HashMap & Counter
  const map = {}
  let counter = 0

  //?This forLoop is looping though every character in the "jewels" and adding them to the "map" object)

  for(const jewel of jewels){
    map[jewel] = true
  }

  //?This forLoop is checking every char of the stones to see if exist inside the map/jewel, and if it does turn the counter up by 1.

  for(const stone of stones) {
    if(map[stone]){
      counter++
    }
  }

  return counter

}

*/

