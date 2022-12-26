
// Given this array of objects check if everyone hight is shorter than 200

const characters = [
  {
      name: 'Luke Skywalker',
      height: '172',
      mass: '77',
      eye_color: 'blue',
      gender: 'male',
  },
  {
      name: 'Darth Vader',
      height: '202',
      mass: '136',
      eye_color: 'yellow',
      gender: 'male',
  },
  {
      name: 'Leia Organa',
      height: '150',
      mass: '49',
      eye_color: 'brown',
      gender: 'female',
  },
  {
      name: 'Anakin Skywalker',
      height: '188',
      mass: '84',
      eye_color: 'blue',
      gender: 'male',
  },
];

const smallPeople = characters.every(element => element.height < 200)
console.log(smallPeople)

// It should return false because even tho 3 out 4 people are smaller than 200 one is 202 which will make it false and every element needs to pass in order to become True.