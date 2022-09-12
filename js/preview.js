
// ---------------------------------------- Problem #1 --------------------------------

// Let's imagine we have a popular online RPG. A player begins with a score of 0 in class E5. A1 is the highest level a player can achieve.

// Now let's say the players wants to rank up to class E4. To do so the player needs to achieve at least 100 points to enter the qualifying stage.

// Write a script that will check to see if the player has achieved at least 100 points in his class. If so, he enters the qualifying stage.

// In that case, we return, "Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up.".

// Otherwise return, False/false (according to the language in use).


// -------------------------------- Solution --------------------------------------------
// let playerScore = 0;

// if (playerScore === 100) {
//   alert("Well done! You have advanced to the qualifying stage. Win 2 out of you next 3 games to rank up.");
// } else {
//   alert("Sorry you dont have enough points to advance to the next stage.");
// }




// ---------------------------------------- Problem #2 --------------------------------

// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.


// -------------------------------- Solution --------------------------------------------

// Here we are checking in number is even or odd, I used the modulus operator to see if is even by returning 0

// function even_or_odd(number) {
//   if(number % 2 == 0 ) {
//     return "Even";
//   } else {
//     return "Odd";
//   }
// }


//  ------------------------------------- Reversed Words Challange -------------------------------
// MINE SOLUTION 

function reverseString(str) {

  /* 
      Make Sure you put a space in between the ("Quotation Marks"). 
      WITH SPACE - it will return ( world! hello ) Returns the WORDS backwards
      WITHOUT SPACE - it will return ( !dlrow olleh ) Returns the LETTERS backwards
  */

  // Step 1: Use the "split()" method to return a new array. Each letter is it's own. (Dont forget the Quotaion Mark "")
  let splitString = str.split(" "); // let splitString = "hello".split("");
  // ["h", "e", "l", "l", "o"]

  // Step 2: Use the 'reverse()' method to reverse the new created array and put it into a new variable. 
  let reverseArray = splitString.reverse(); // reverseArray = ["h", "e", "l", "l", "o"].reverse();

  // Step 3: Use the "join()" method to join all elements of the array into a string and put it into a new variable. (Dont forget the Quotaion Mark "")
  let joinArray = reverseArray.join(" ")

  // Now we can return the array.
  return joinArray; // "olleh"

}

console.log (reverseString("hello world!"));


/*
    CODE WARS BEST PRACTICES SOLUTION 

    function reverseWords(str){
      return str.split(' ').reverse().join(' ');
    }
*/


/*
Messi goals function
Messi is a soccer player with goals in three leagues:

LaLiga
Copa del Rey
Champions
Complete the function to return his total number of goals in all three leagues.

Note: the input will always be valid.

*/

//----------------------------- Challange -------------------
/*
Make multiple functions that will return the sum, difference, modulus, product, quotient, and the exponent respectively.

Please use the following function names:

addition = add

multiply = multiply

division = divide (both integer and float divisions are accepted)

modulus = mod

exponential = exponent

subtraction = subt

Note: All math operations will be: a (operation) b

*/


/* Solution

function add(a,b){
    return a + b;
}

function divide(a,b){
    return a / b;
}

function multiply(a,b){
    return a * b;
}

function mod(a,b){
    return a % b;
}
   
function exponent(a,b){
    return Math.pow(a,b);
}
    
function subt(a,b){
    return a - b;
}











*/