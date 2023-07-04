/*
Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.
h = 0
m = 1
s = 1

result = 61000
*/

function past(h, m, s){
  console.log((h * 3600000)+(m * 60000)+(s * 1000))
}

past(0,1,1) //,61000
past(1,1,1) //,3661000
past(0,0,0) //,0
past(1,0,1) //,3601000
past(1,0,0) //,3600000