/*
Given an array candies where candies[i] represents the number of candies that the ith kid has, and an integer extraCandies, write a function that for each kid checks if he/she would have the greatest number of candies in the group if they were given extraCandies. Note that multiple kids can have the greatest number of candies. For example,
*/


const kidsWithCandies = (candies, extraCandies) => {
  const MAX = Math.max(...candies);
  return candies.map(candy => candy + extraCandies >= MAX);
};