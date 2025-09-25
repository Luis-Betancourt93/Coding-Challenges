//Instruction: Write a map function that returns an array of objects containing the title and the primary genre (the first item in the genres array).

//Target: [{ title: "Frozen", primary_genre: "Animation" }, { title: "John Wick", primary_genre: "Action" }, ...]

const movies = [
  { title: "Frozen", genres: ["Animation", "Family", "Musical"] },
  { title: "John Wick", genres: ["Action", "Thriller"] },
  { title: "Notebook", genres: ["Romance", "Drama"] }
];

const newObj = movies.map(element => ({
  title: element.title, primary_genre: element.genres[0]
}))

console.log(newObj);