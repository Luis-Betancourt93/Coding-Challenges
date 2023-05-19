// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"
// Words will be separated by a single space. There will be no leading or trailing spaces in the string. An empty string (0 words) is a valid input.



function removeConsecutiveDuplicates(string) {
let removeDubs = string.split(" ").filter((element, index, array) => element !== array[ index - 1]).join(' ')
console.log(removeDubs)


}




removeConsecutiveDuplicates("alpha alpha alpha alpha") // alpha
removeConsecutiveDuplicates("alpha beta alpha") // alpha beta alpha
removeConsecutiveDuplicates("alpha alphabeta alphagamma") // "alpha alphabeta alphagamma"