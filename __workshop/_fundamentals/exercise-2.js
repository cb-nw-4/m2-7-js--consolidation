// Exercise 2
//
// Below are two objects of the same "format".
// Each object is a mapping between individual people
// and their favourite desserts
// Notice that there are duplicates (eg. both Riley and John like "ice-cream").

// const favoriteDessertsGroupA = {
//   scott: "brownies",
//   fred: "tiramisu",
//   lisa: "chocolate cake",
//   riley: "ice-cream",
//   sunny: "cheese cake",
//   john: "ice-cream",
//   beth: "cheese cake",
//   summer: "ice-cream",
//   morty: "apple pie",
//   rick: "brownies",
//   andrew: "cheese cake",
//   jerry: "rhubard pie",
//   "jean-luc": "cheese cake",
//   tiffany: "waffles",
//   melissa: "profiteroles",
// };

// const favoriteDessertsGroupB = {
//   alice: "pie",
//   betty: "deep-fried mars bar",
//   colin: "gummy bears",
//   damien: "child tears",
//   ellicia: "panda express",
//   fertrude: "gummy bears",
//   glinda: "pie",
//   hethel: "not applicable",
//   irsula: "rum cake",
//   judas: "revenge (served cold)",
//   khloe: "pie",
//   lyndon: "easter eggs",
//   minda: "dessert",
// };

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
  // Write code
  let list = Object.values(obj);
  let listCount = list.reduce(function(item, count) {
    item[count] = (item[count] || 0) + 1;
    return item;
  }, {});
  
  let ranking = Object.entries(listCount).sort(function(a,b) {
   if (b[1] > a[1]) {
     return 1;
  } else if (b[1] < a[1]) {
    return -1;
    } else {
           if(a[0] > b[0]) return 1;
           else if(a[0] < b[0]) return -1;
           else return 0
        }
  })
  let finalList = []
  for (let i = 0; i < ranking.length; i++) {
    finalList.push(ranking[i][0]);
  }
  return finalList;
  console.log(finalList)
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
