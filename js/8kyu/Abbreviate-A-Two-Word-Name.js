// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:


// Take name => initials 
// No empty string, always F&L name, No funny biz
// console.log the result 
// Fist initals . last initial 


function nameIntoInitials(name) {
 let firstName = name.split(' ').shift().toUpperCase().charAt(0)
 let lastName = name.split(' ').pop().toUpperCase().charAt(0)
 console.log(lastName)
 let initials = `${firstName}.${lastName}`
 console.log(initials)
 

}


nameIntoInitials('Luis Betancourt')

// Luis Betancourt = L.B
// Stacy Cruz = S.C
// Esperanza Alejandrino = E.A









