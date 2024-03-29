// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// If a value is present in b, all of its occurrences must be removed from the other:

function arrayDiff(a, b) {
  let newArray = new Set(b)
  console.log(a.filter(element => !newArray.has(element)))
}


arrayDiff([1,2],[1]) // == [2]
arrayDiff([1,2,2,2,3],[2]) // == [1,3]