// Given an array of strings of the same letter type. Return a new array, which will differ in that the length of each element is equal to the average length of the elements of the previous array.

// ['u', 'y'] =>  ['u', 'y']  average length is 1
// ['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc']  average length is 3
// ['aa', 'bb', 'ddd', 'eee'] => ['aaa', 'bbb', 'ddd', 'eee']  average length is 2.5 round up to 3

// If the average length is not an integer, use Math.round().
// The input array's length > 1

function averageLength(array) { 
  let average = Math.round(array.reduce((acc, str) => acc + str.length, 0) / array.length)

  console.log(array.map(str => str[0].repeat(average)))
}


averageLength(['u', 'y']) // , ['u', 'y']
averageLength(['aa', 'bbb', 'cccc']) // , ['aaa', 'bbb', 'ccc']
averageLength(['aa', 'bb', 'ddd', 'eee']) // , ['aaa', 'bbb', 'ddd', 'eee']