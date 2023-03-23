// Create a function that calculates the area of a rectangle. If the arguments are invalid, your function must return -1.



function area(h, w) {
	if (h > 0 && w > 0 ) {
    console.log(h * w)
  } else {
    console.log(-1)
  }
}



area(3, 4) // ➞ 12

area(10, 11) // ➞ 110

area(-1, 5) // ➞ -1

area(0, 2) // ➞ -1