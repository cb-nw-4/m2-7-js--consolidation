// Exercise 1
//
// Write a function will transform the inputData object into a new shape (As provided below.)

const inputData = {
  name: "Will Byers",
  age: 9,
  status: "upside down",
  superpower1: "can-blink-lights",
  superpower2: null,
  address1: "123 Whatever street",
  addressCity: "Hawkins",
  addressState: "Indiana",
  addressCountry: "United States",
  motherName: "Joyce Byers",
  motherAge: 35,
  motherStatus: "worried",
  motherSuperpower1: null,
  motherSuperpower2: null,
  bestFriendName: "Mike Wheeler",
  bestFriendAge: 9,
  bestFriendStatus: "frenetic",
  bestFriendSuperpower1: null,
  bestFriendSuperpower2: null,
  girlfriendName: "Eleven",
  girlfriendAge: 9,
  girlfriendStatus: "angry",
  girlfriendSuperpower1: "telepathy",
  girlfriendSuperpower2: "multiverse portal sealing",
};

// We want a function that can transform it from that shape to this shape:
//
// {
//   "name": "Will Byers",
//   "age": 9,
//   "status": "upside down",
//   "address": {
//     "streetAddress": "123 Whatever street",
//     "city": "Hawkins",
//     "state": "Indiana",
//     "country": "United States"
//   },
//   "superpowers": [
//     "can-blink-lights"
//   ],
//   "relationships": [
//     {
//       "type": "mother",
//       "name": "Joyce Byers",
//       "age": 35,
//       "status": "worried",
//       "superpowers": []
//     },
//     {
//       "type": "girlfriend",
//       "name": "Eleven",
//       "age": 9,
//       "status": "angry",
//       "superpowers": [
//         "telepathy",
//         "multiverse portal sealing"
//       ]
//     }
//   ]
// }

// Specifically:

// - Address becomes nested in an object
// - Instead of `superpower1` and `superpower2`, an array is used
// - Instead of having a "flat" structure for relationships, a new `relationships`
//   array is added, which holds objects for each relationship.
// - Each relationship has a `type`, like mother/best-friend/girlfriend
// - Each relationship also has an array of super powers, same logic as the main
//   `superpowers` array

// NOTE: For superpowers, you should only have as many items as are available.
// For example, the main superpowers array should be:
// ✅ ['can-blink-lights']
// ⛔️ ['can-blink-lights', null]

function transformData(data) {
  // Your code here

  let willSuperpowers = [];
if (data.superpower1 !== null) {
  willSuperpowers.push(data.superpower1);
}
if (data.superpower2 !== null) {
  willSuperpowers.push(data.superpower2);
}

let motherSuperpowers = [];
if (data.motherSuperpower1 !== null) {
  motherSuperpowers.push(data.motherSuperpower1);
}
if (data.motherSuperpower2 !== null) {
  motherSuperpowers.push(data.motherSuperpower2);
}

let girlfriendSuperpowers = [];
if (data.girlfriendSuperpower1 !== null) {
  girlfriendSuperpowers.push(data.girlfriendSuperpower1);
}
if (data.girlfriendSuperpower2 !== null) {
  girlfriendSuperpowers.push(data.girlfriendSuperpower2);
}

let willRelationships = [];

let mother = {type: "mother", name: data.motherName, age: data.motherAge, status: data.motherStatus, superpowers: motherSuperpowers};

let girlfriend = {type: "girlfriend", name: data.girlfriendName, age: data.girlfriendAge, status: data.girlfriendStatus, superpowers: girlfriendSuperpowers};

willRelationships.push(mother)
willRelationships.push(girlfriend)

let object = {};
object.name = data.name;
object.age = data.age;
object.status = data.status;
object.address = {streetAddress: data.address1, city: data.addressCity, state: data.addressState, country: data.addressCountry};
object.superpowers = willSuperpowers;
object.relationships = willRelationships;

return object;
}

// Use a console.log to verify
// `JSON.stringify` is used to "pretty-print" the output, so that it's easy
// to see what it looks like, and debug any problems.
console.log(JSON.stringify(transformData(inputData), null, 2));

// Test your code: "yarn test exercise-1"

module.exports = { inputData, transformData };
