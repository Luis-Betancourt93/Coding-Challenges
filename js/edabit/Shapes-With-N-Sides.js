/*
Create a function that takes a whole number as input and returns the shape with that number's amount of sides. Here are the expected outputs to get from these inputs.
*/

nSidedShape(3) // ➞ "triangle"

nSidedShape(1) // ➞ "circle"

nSidedShape(9) // ➞ "nonagon"

function nSidedShape(sides) {
  if (sides === 3) {
    console.log('triangle')
  } else if (sides === 1) {
    console.log('circle')
  } else {
    console.log('nonagon')
  }
}
