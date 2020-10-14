// Exercise 2
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

// Write a function which takes one of these objects and puts them into an
// array which is sorted from most popular to least popular. For example,
// in Group B, the most popular dessert is "pie", so it should be first
// in the array.
//
// For "ties", the order doesn't matter.
//
// HINT: You'll need to do this in 2 steps:
// - First, count how often each dessert appears
// - Second, put them in order

// Your function should work with both objects and any other objects of the same shape.

function sortByPopularity(obj) {
  let newDessertArray = Object.values(obj);
  let newDessertObject = {};
  newDessertArray.forEach((element) => {
    if (newDessertObject[element] === undefined){
      newDessertObject[element] = 1;
    } else {
      newDessertObject[element] = newDessertObject[element] + 1;
    }
  })
  let dessertCountArray = Object.entries(newDessertObject);
  dessertCountArray.sort((a,b) =>{
    return b[1] - a[1];
  });
  let finalSortedArray = dessertCountArray.map(element =>{
    return element[0];
  });
  return finalSortedArray;
}
// Verification via console.log()
console.log(
  "Popular desserts in Group A:",
  sortByPopularity(favoriteDessertsGroupA)
);
console.log(
  "Popular desserts in Group B:",
  sortByPopularity(favoriteDessertsGroupB)
);

// Test your code: "yarn test exercise-2"

module.exports = sortByPopularity;

// try four
//   let newDessertArray = Object.values(obj);
//   let count = 0;
//   newDessertArray.forEach((element) => {
//     if (newDessertArray.indexOf(element) === newDessertArray.lastIndexOf(element)){
//       count ++;
//       let dessertArrayCount = [];
//       dessertArrayCount.push(element, count);
//       dessertArrayCount.sort((a,b,count) => a.count - b.count);
//       console.log(dessertArrayCount);
//     }
//   })

// try three
  // function addCount(array, index) {
  //   let count = 0;
  //   newDessertArray.forEach((index) => {
  //     array[index] = count;
  //   })
  // }
  // addCount(newDessertArray);
  // return newDessertArray;

// try two
  // let dessertArray = Object.values(obj);
  // function addCount(element){
  //   let count = 0;
  //   element.push(count);
  // }
  // let newDessertArray = [];
  // dessertArray.forEach((element) => {
  //   if (!newDessertArray.includes(element)){
  //     newDessertArray.push(element);
  //     addCount(element);
  //   } else{
  //     element.count ++;
  //   }
  // })

// try one
  // for (let x = 0; x < dessertArray.length; x++){
  //   let count = 0;
  //   for (let y = 0; y < dessertArray.length; y++){
  //     if ()
  //   }
  // }

  //   let dessertArray = Object.values(obj);
//   function getDessertNumber(array, value) {
//     let count = 0;
//     dessertArray.forEach((v) => (v === value && count++));
//     return count;
//   }
//   return getDessertNumber(dessertArray, 'pie');
// }
  // let newDessertObject = [];
  // for (let count = 0; count <= dessertArray.length; count++){
  //   if (newDessertObject.includes(value)){
  //     count++;
  //   }
  // }

  // for(let count = 0; count < obj.length; count++){
  //   Object.values creates an array of the values
  //   > create a new empty object and push each value as a key then put the value for that key as a count > need to find a way to increment the count and to check if the value already exists as a key in the array
