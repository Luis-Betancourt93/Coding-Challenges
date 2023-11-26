/*
Write a function that converts all the keys in an object from snake case to camel case.


*/


const toCamel = obj => {
  const result = {};
  for (const [key, value] of Object.entries(obj)) {
    // Let's use regex capture groups
    const camelKey = key.replace(/(_[a-z])/gi, $1 =>
      $1.replace('_', '').toUpperCase()
    );
    result[camelKey] = value;
  }
  return result;
};