/*
Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
*/

// String ->  'Yes' = 'True'
// String ->  'No' = 'False'
// No empty strings, No nums, no !, 
// make upperCase for sure. 
// No funny buzz

/*
function strToBool(str) {
   // str compare to 'No' or 'Yes'
   // 'No' -> False
   // 'Yes' -> True 
   // if else statement 
   if (str.toUpperCase() === 'YES') {
    return 'True'
   } else {
    return 'False'
   }

}
*/

const strToBool = str => str === 'Yes' ? 'True' : 'False'



console.log(strToBool('No'), 'False' )
console.log(strToBool('Yes'), 'True' )
console.log(strToBool('No'), 'False' )
console.log(strToBool('Yes'), 'True' )




/*

*/
//