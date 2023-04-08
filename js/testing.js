
function repeats(array) {
  console.log(array.filter(element => array.indexOf(element) === array.lastIndexOf(element)))
  } 
  repeats([4,5,7,5,4,8])