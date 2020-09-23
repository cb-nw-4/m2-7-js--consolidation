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
  // Write code
  let dessertCounts = {};

  Object.values(obj).forEach((dessert) => {
    // Is this dessert brand-new, or has it come up already?
    let isBrandNewItem = typeof dessertCounts[dessert] === "undefined";

    if (isBrandNewItem) {
      // If it's brand new, add it to the object, and assign it a count of `1`
      dessertCounts[dessert] = 1;
    } else {
      // Otherwise, increment it
      dessertCounts[dessert]++;
    }
  });

  // dessertCount should now be an object like:
  // { 'pie': 3, 'gummy bears': 2, 'child tears': 1 }
  //
  // We can iterate through the keys, and use the `.sort` method to put
  // them in order

  return Object.keys(dessertCounts).sort((dessertA, dessertB) => {
    let dessertCountA = dessertCounts[dessertA];
    let dessertCountB = dessertCounts[dessertB];

    if (dessertCountA < dessertCountB) {
      return 1;
    } else {
      return -1;
    }
  });
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
