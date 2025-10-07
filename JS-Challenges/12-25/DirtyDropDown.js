/*
You are scraping a dropdown menu of "Selectable Options." However, the DOM includes disabled options and some options have accidentally captured extra whitespace (newlines, tabs).

Filters out any option where disabled is true.

Maps the remaining items to return only the text property, but cleaned up (trimmed of whitespace).
Target: ["Dashboard", "Profile", "Logout"]
*/

const dropdownOptions = [
  { text: "   Dashboard   ", disabled: false },
  { text: "Settings", disabled: true }, // Should be removed
  { text: "\n  Profile \n", disabled: false },
  { text: "Logout", disabled: false }
];

const cleanDrop = dropdownOptions.filter(element => element.disabled === false).map(element => 
  element.text.trim()
)

console.log(cleanDrop);