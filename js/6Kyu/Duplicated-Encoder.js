// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is duplicate

function duplicateEncode(word){
  
  console.log(word.toLowerCase().split('').map((element, index, array ) => array.indexOf(element) === array.lastIndexOf(element) ? '(' : ')').join(''))


}


// Examoles
duplicateEncode("din") //=> '((('
duplicateEncode("recede") // => '()()()' 
// "Success" => ')())())'
// "(( @"  => '))(('


/*
function dubString(str) {
  const newArray = str.split('')
  console.log(newArray)

  const dubArray = newArray.map(element => newArray.indexOf(element) === newArray.lastIndexOf(element) ? '(' : ')').join("")
  console.log(dubArray)

}

*/


