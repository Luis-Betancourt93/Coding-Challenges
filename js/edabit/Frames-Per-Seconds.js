// Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.

function frames(minutes, fps) {
	console.log((minutes * 60) * fps )
}



frames(1, 1) // ➞ 60

frames(10, 1) // ➞ 600

frames(10, 25) // ➞ 15000