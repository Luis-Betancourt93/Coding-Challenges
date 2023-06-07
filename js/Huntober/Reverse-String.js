// Given a string of characters as input, write a function that returns it with the characters reversed. No Reverse Method (well brute force it first, but then no reverse method)! 


function reverseString(string) {
  
  // console.log(string.split(' ').reverse().join(' '))

  let reverString = ''
  for(char of string) {
    reverString = char + reverString
  } 

  console.log(reverString)

}

reverseString('Reverse This String')




