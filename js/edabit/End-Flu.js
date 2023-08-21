/*
Create a function that takes the number of daily average recovered cases recovers, daily average newCases, current activeCases, and returns the number of days it will take to reach zero cases.
*/


function endFlu(recovered, newCases, activeCases) {
  console.log( Math.ceil(activeCases / (recovered - newCases)))
}

endFlu(4000, 2000, 77000) // ➞ 39

endFlu(3000, 2000, 50699) // ➞ 51

endFlu(30000, 25000, 390205) // ➞ 79