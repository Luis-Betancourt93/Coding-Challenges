// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]


function maps(x){
  const result = x.map(element => element * 2) 
  return result
}

// maps = x => x.maps(element => element * 2)


maps([4, 1, 1, 1, 4])