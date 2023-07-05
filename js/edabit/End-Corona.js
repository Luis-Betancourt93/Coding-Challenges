/*
Create a function that takes the number of daily average recovered cases recovers, daily average newCases, current activeCases, and returns the number of days it will take to reach zero cases.
*/


endCorona(4000, 2000, 77000) // ➞ 39

endCorona(3000, 2000, 50699) // ➞ 51

endCorona(30000, 25000, 390205) // ➞ 79


function endCorona(recovered, newCases, activeCases) {
  console.log( Math.ceil(activeCases / (recovered - newCases)))
}