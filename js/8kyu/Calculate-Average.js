// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function findAverage(array) {
  const sum = array.reduce((a,c) => a + c, 0 )
  const average = sum / array.length
  
  if(array.length === 0) {
    return 0;
  } else {
    return average
  }
  

}


console.log(findAverage([1,1,1]))
console.log(findAverage([1,2,3]))
console.log(findAverage([1,2,3,4]))
console.log(findAverage([]))