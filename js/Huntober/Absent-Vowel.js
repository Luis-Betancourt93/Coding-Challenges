// Your job is to figure out the index of which vowel is missing from a given string:

// A has an index of 0,
// E has an index of 1,
// I has an index of 2,
// O has an index of 3,
// U has an index of 4.
// Notes: There is no need for string validation and every sentence given will contain all vowels but one. Also, you won't need to worry about capitals.



// function absentVowel(x){
//  if (x.indexOf('a') === - 1) {
//   console.log('a is missing' )
//  } else if (x.indexOf('e') === - 1) {
//   console.log('e is missing')
//  } else if (x.indexOf('i') === -1){
//   console.log('i is missing')
//  } else if (x.indexOf('o') === -1) {
//   console.log('o is missing' )
//  } else if (x.indexOf('u') === - 1){
//   console.log('u is missing')
//  }
  
// }

function absentVowel(x) {
  let vowels = 'aeiou'
  for(let i = 0; i < vowels.length; i++) {
    if( x.indexOf(vowels[i]) === - 1) {
      console.log(i)
    }
  }
}


absentVowel("John Doe hs seven red pples under his bsket")
absentVowel("Bb Smith sent us six neatly arranged range bicycles")