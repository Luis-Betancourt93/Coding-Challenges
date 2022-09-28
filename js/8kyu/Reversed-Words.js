/*
Reversed Words

      Complete the solution so that it reverses all of the words within the string passed in.

      Example(Input --> Output):
      "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"
*/


// MINE SOLUTION 

  /* 
      Make Sure you put a space in between the ("Quotation Marks"). 
      WITH SPACE - it will return ( world! hello ) Returns the WORDS backwards
      WITHOUT SPACE - it will return ( !dlrow olleh ) Returns the LETTERS backwards
  */

function reverseString(str) {

  // Step 1: Use the "split()" method to return a new array. Each letter is it's own. (Dont forget the Quotaion Mark "")
  let splitString = str.split(" "); // let splitString = "hello".split("");
  ["h", "e", "l", "l", "o"]

  // Step 2: Use the 'reverse()' method to reverse the new created array and put it into a new variable. 
  let reverseArray = splitString.reverse(); // reverseArray = ["h", "e", "l", "l", "o"].reverse();

  // Step 3: Use the "join()" method to join all elements of the array into a string and put it into a new variable. (Dont forget the Quotaion Mark "")
  let joinArray = reverseArray.join(" ")

  // Now we can return the array.
  return joinArray; // "olleh"
}

console.lg (reverseString("hello world!"));


/*
    CODE WARS BEST PRACTICES SOLUTION 

    function reverseWords(str){
      return str.split(' ').reverse().join(' ');
    }
*/


