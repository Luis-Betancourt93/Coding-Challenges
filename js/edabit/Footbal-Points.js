// Create a function that takes the number of wins, draws and losses and calculates the number of points a football team has obtained so far.

// wins get 3 points
// draws get 1 point
// losses get 0 points

function footballPoints(wins, draws, losses) {
console.log(wins * 3 + draws * 1 + losses * 0 )


}



footballPoints(3, 4, 2) // ➞ 13

footballPoints(5, 0, 2) // ➞ 15

footballPoints(0, 0, 1) // ➞ 0