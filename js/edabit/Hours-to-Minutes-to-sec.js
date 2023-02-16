// Write a function that takes two integers (hours, minutes), converts them to seconds, and adds them.

function convert(hours, minutes) {
	console.log((minutes * 60) + (hours * 3600))
}


convert(1, 3)  //➞ 3780

convert(2, 0)  //➞ 7200

convert(0, 0) // ➞ 0
