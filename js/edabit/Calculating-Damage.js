/*
Create a function that takes damage and speed (attacks per second) and returns the amount of damage after a given time.
*/

damage(40, 5, "second") // ➞ 200

damage(100, 1, "minute") // ➞ 6000

damage(2, 100, "hour") // ➞ 720000

function damage(damage, speed, time) {
if (time === 'second') {
  console.log(damage * speed)
} else if( time === 'minute'){
  console.log(damage * 60)
} else {
  console.log(damage * speed * 60 * 60 )
}

}