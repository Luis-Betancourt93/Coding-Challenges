// A bartender is writing a simple program to determine whether he should serve drinks to someone. He only serves drinks to people 18 and older and when he's not on break.

// Given the person's age, and whether break time is in session, create a function which returns whether he should serve drinks.

function shouldServeDrinks(age, onBreak) {
  if (age >= 18 && onBreak === false) {
    console.log(true)
  } else {
    console.log(false)
  }
	
}





shouldServeDrinks(17, true)  //➞ false

shouldServeDrinks(19, false)  //➞ true

shouldServeDrinks(30, true) // ➞ false