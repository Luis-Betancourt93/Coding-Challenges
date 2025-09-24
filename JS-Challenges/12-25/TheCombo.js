//nstruction: Return an Array of Objects with a clean structure.

//Map location -> world

//Map x_val -> coords.x

//Target: [{ location: "Traverse Town", x_val: 10 }, { location: "Twilight Town", x_val: 50 }]

const locations = [
  { world: "Traverse Town", coords: { x: 10, y: 20 } },
  { world: "Twilight Town", coords: { x: 50, y: 60 } }
];

const updatedLocations = locations.map( element => ({
  locations: element.world, x_val: element.coords.x
  
}))

console.log(updatedLocations);