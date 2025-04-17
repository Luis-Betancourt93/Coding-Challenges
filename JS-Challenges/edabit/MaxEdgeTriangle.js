/*
Create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers.
*/

function nextEdge(side1, side2) {
	if(side1 > 0 && side2 > 0) {
		return (side1 + side2) - 1;
	}else {
		return;
	}
}


/*
const nextEdge = (side1, side2) => side1 + side2 - 1;
*/