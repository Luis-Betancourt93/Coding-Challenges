
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

// You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

// You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

// Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.


// Write a function that will check if two given characters are the same case.

// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0