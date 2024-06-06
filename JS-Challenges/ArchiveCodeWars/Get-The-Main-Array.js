/*
It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.
*/


function getAverage(marks){
//add all the numbers of each array
// find the average of the array 
// round down to the nearest integer

const addNums = marks.reduce((acc, current) => acc + current, 0)
const averageNum = Math.floor(addNums / marks.length)
console.log(averageNum)


}



getAverage([1,2,3,4,5]) // 3
getAverage([2,2,2,2]) // 2
getAverage([1,1,1,1,1,1,1,2]) // 1