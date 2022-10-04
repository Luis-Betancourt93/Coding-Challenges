/*

Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

I love you
a little
a lot
passionately
madly
not at all
When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.

*/








function howMuchILoveYou(nbPetals) {
   const phrases = [ // Put all you possiable results in a array.
    "I love you", 
    "a little", 
    "a lot", 
    "passionately",
    "madly", 
    "not at all"
   ]

   let index = nbPetals % 6 - 1; // Getting the "input" number and getthing a phrases from it 
   
   /* we can get into an issue when they put "6" because 6%6 = 0 but we want the last index so ONLY when we get -1 will reasign the index variable to the last index by getting the length of the phrases and subtracting 1. */
   if(index === -1 ) {  
      index = phrases.length -1;
   }
   return phrases[index];
}


console.log(howMuchILoveYou());