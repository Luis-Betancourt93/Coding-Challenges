// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]

// Hint: Don't forget to check for bad values like null/undefined

// look inside array and count how many sheep are present/true.
// not empty, no nums or string, could have null/undefined.
 



function countSheeps(arrayOfSheep) {
  let count = 0;

  for(let i = 0; i < arrayOfSheep.length; i++){
    if(arrayOfSheep[i] === true){
      count++
    }

  }

  console.log(count)
  
}

countSheeps([true,false,false,null, undefined])
countSheeps([true,true,true])
countSheeps([true,true])
countSheeps([false,false,false])






















