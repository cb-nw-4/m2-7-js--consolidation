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
  // let {scott, fred, lisa, riley, sunny, john, beth, summer, morty, rick, andrew, jerry, "jean-luc":jeanLuc, tiffany, melissa} = favoriteDessertsGroupA;
  let newArr = Object.values(obj);
  let count = {};
  newArr.forEach((element) => {
    count[element] = (count[element] || 0) + 1;
  }) // Count duplicates (not in order) i.e: { pie: 3, 'deep-fried mars bar': 1, etc. }

  let sortable = [];
  for (let item in count) {
    sortable.push([item, count[item]]);
  } //Creates an array with nested arrays i.e: [ ['pie', 3], ['deep-fried mars bar', 1], etc. ]
  sortable.sort((a,b) => {
    return a[1] - b[1];
  }) //Sort them by lowest to highest i.e: [ ['deep-fried mars bar', 1], ['pie', 3], etc. ]

  let newSortable = sortable.map((element) => {
    return element[0];
  }) //Return only the name i.e: [ 'deep-fried mars bar', pie, etc.]

  // return sortable.reverse();
  return newSortable.reverse(); //Reverse to get highest to lowest i.e: [ pie, 'deep-fried-mars bar', etc.]

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
