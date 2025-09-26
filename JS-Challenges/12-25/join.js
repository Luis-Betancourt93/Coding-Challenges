/*
The "Join" (Very Common) In Playwright, you often scrape a list of tags (like ['New', 'Sale', 'Limited']) but you want to verify them as a single string "New, Sale, Limited".

Instruction: Map this to an object with id and a tag_string.

Hint: Use the .join(", ") method on the array.

Target: [{ id: 1, tag_string: "playwright, testing, automation" }, { id: 2, tag_string: "javascript, coding" }]
*/

const blogPosts = [
  { id: 1, tags: ["playwright", "testing", "automation"] },
  { id: 2, tags: ["javascript", "coding"] }
];

const joinTags = blogPosts.map(element => ({
  id: element.id ,
  tags: element.tags.join(', ')
  
}));

console.log(joinTags);