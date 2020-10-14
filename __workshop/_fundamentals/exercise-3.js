// Exercise 3
//
// Below are two objects of the same "format".
// Each object is a mapping between individual people
// and their favourite desserts
// Notice that there are duplicates (eg. both Riley and John like "ice-cream").

const favoriteDessertsGroupA = {
  scott: "brownies",
  fred: "tiramisu",
  lisa: "chocolate cake",
  riley: "ice-cream",
  sunny: "cheese cake",
  john: "ice-cream",
  beth: "cheese cake",
  summer: "ice-cream",
  morty: "apple pie",
  rick: "brownies",
  andrew: "cheese cake",
  jerry: "rhubard pie",
  "jean-luc": "cheese cake",
  tiffany: "waffles",
  melissa: "profiteroles",
};

const favoriteDessertsGroupB = {
  alice: "pie",
  betty: "deep-fried mars bar",
  colin: "gummy bears",
  damien: "child tears",
  ellicia: "panda express",
  fertrude: "gummy bears",
  glinda: "pie",
  hethel: "not applicable",
  irsula: "rum cake",
  judas: "revenge (served cold)",
  khloe: "pie",
  lyndon: "easter eggs",
  minda: "dessert",
};

// Write a function that accepts an object (like above) and returns a new object with the data sorted
// and classified like so:

// {
//   'name of dessert': ['name1', 'name2']
// }

// Expected output for groupByValue(favoriteDessertsGroupB) is
// {
//   'pie': [ 'alice', 'glinda', 'khloe' ],
//   'deep-fried mars bar': [ 'betty' ],
//   'gummy bears': [ 'colin', 'fertrude' ],
//   'child tears': [ 'damien' ],
//   'panda express': [ 'ellicia' ],
//   'not applicable': [ 'hethel' ],
//   'rum cake': [ 'irsula' ],
//   'revenge (served cold)': [ 'judas' ],
//   'easter eggs': [ 'lyndon' ],
//   'dessert': [ 'minda' ]
// }

function groupByValue(obj) {
  // first create an array of the desserts, then create an object that takes the dessert as the key
  let newDessertObject = {};
  let dessertArray = Object.entries(obj);
  dessertArray.forEach(([person, dessert]) =>{
    newDessertObject[dessert] = dessertArray[dessert] || [];
    newDessertObject[dessert].push(person);
  });
return newDessertObject;
}
  // let finalDessertObject = objectArray.forEach((element, key) => {
  //   if(objectArray[1] === newDessertObject[key]){
  //     newDessertObject[element] = objectArray[0];
  //   }
  //   return finalDessertObject;
  // });
  // push the original object through and create a conditional that matches the value to the new object's key and adds that key to an array
  // goal: new object with the key as the desserts and the values are an array of peopl


// Verification via console.log()
console.log("Group A", groupByValue(favoriteDessertsGroupA));
console.log("Group B", groupByValue(favoriteDessertsGroupB));

// Test your code: "yarn test exercise-3"

module.exports = groupByValue;
