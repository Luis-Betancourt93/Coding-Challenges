/*
The packaging system is running wild! The candy is lying loose all over in the warehouse, the cereal is missing, and bread is stuffed in a bottle. What is going on here? The candy should be in plastic and the bread should be in a bag.

The packaging machine is running the getContainer() function to retrieve the container of a product. But something is not right...
*/

getContainer("Bread") // ➞ "bag"

getContainer("Beer") // ➞ "bottle"

getContainer("Candy") // ➞ "plastic"

getContainer("Cheese") // ➞ null

function getContainer(word) {
  if (word === 'Bread') {
    console.log('bag')
  } else if(word === 'Beer') {
    console.log('bottle')
  }
}