// Write a template string according to the following example:

// const a = "John";
// const b = "Joe";
// const c = "Jack";
// const template = "your template string" ➞ "Their names were:  John,  Joe  and  Jack."

// modify the template variable to be a template string 
function format(a, b, c) {
  // the result string must give: "Their names were: a, b and c."
    const template = `Ther names were: ${a}, ${b} and ${c}`
   console.log( template )
  }

  format('John', 'Joe', 'Jack')

