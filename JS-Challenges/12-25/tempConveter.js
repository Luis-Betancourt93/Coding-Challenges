const celsiusTemps = [0, 10, 20, 30, 100];

// TODO: Use .map() to create a new array called 'fahrenheitTemps'
const fahrenheitTemps = celsiusTemps.map( e => (e * 1.8) + 32 );

console.log(fahrenheitTemps);
// Expected Output: [32, 50, 68, 86, 212]