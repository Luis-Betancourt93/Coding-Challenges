/*

Luke Skywalker has family and friends. Help him remind them who is who. Given a string with a name, return the relation of that person to Luke.

Person	Relation
Darth Vader ->	father
Leia ->	sister
Han ->	brother in law
R2D2 ->	droid

*/

relationToLuke("Darth Vader") // ➞ "Luke, I am your father."

relationToLuke("Leia") // ➞ "Luke, I am your sister."

relationToLuke("Han") // ➞ "Luke, I am your brother in law."

function relationToLuke(string) {
  if(string === 'Darth Vader') {
    console.log('Luke, I am your father')
  } else if(string === 'Leia') {
    console.log('Luck, I am your sister')
  } else if(string === 'Han'){
    console.log('Luck, I am your brother in law')
  } 



}


