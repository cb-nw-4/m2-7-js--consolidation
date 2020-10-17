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

function transformData(obj) {
  let newObject = {};
  newObject.name = obj.name;
  newObject.age = obj.age;
  newObject.status = obj.status;

  let address = {};
  address.streetAddress = obj.address1;
  address.city = obj.addressCity;
  address.state = obj.addressState;
  address.country = obj.addressCountry;
  newObject.address = address;

  let superpowers = [];
  superpowers.push(obj.superpower1);
  newObject.superpowers = superpowers;

  let relationships = [
    {
      'type': 'mother',
      'name': `${obj.motherName}`,
      'age': `${obj.motherAge}`,
      'status': `${obj.motherStatus}`,
      'superpowers': [],
    },
    {
      'type': 'best friend',
      'name': `${obj.bestFriendName}`,
      'age': `${obj.bestFriendAge}`,
      'status': `${obj.bestFriendStatus}`,
      'superpowers': [],
    },
    {
      'type': 'girlfriend',
      'name': `${obj.girlfriendName}`,
      'age': `${obj.girlfriendAge}`,
      'status': `${obj.girlfriendStatus}`,
      'superpowers': [`${obj.girlfriendSuperpower1}`, `${obj.girlfriendSuperpower2}`],
    }
  ];
  newObject.relationships = relationships;
  return newObject;
  }

console.log(transformData(inputData));

// Use a console.log to verify
// `JSON.stringify` is used to "pretty-print" the output, so that it's easy
// to see what it looks like, and debug any problems.
console.log(JSON.stringify(transformData(inputData), null, 2));

// Test your code: "yarn test exercise-1"

module.exports = { inputData, transformData };



// motherObject.name = obj.motherName;
// motherObject.age = obj.motherAge;
// motherObject.status = obj.motherStatus;
// motherObject.superpowers = [];
// relationships.motherObject = motherObject;
// let bestFriendObject = {};
//   bestFriendObject.type = 'best friend';
//   bestFriendObject.name = obj.bestFriendName;
//   bestFriendObject.age = obj.bestFriendAge;
//   bestFriendObject.status = obj.bestFriendStatus;
//   bestFriendObject.superpowers = [];
// relationships.bestFriendObject = bestFriendObject;
// let girlfriendObject = {};
//   girlfriendObject.type = 'girlfriend';
//   girlfriendObject.name = obj.girlfriendName;
//   girlfriendObject.age = obj.girlfriendAge;
//   girlfriendObject.status = obj.girlfriendStatus;
//   girlfriendObject.superpowers = [obj.girlfriendSuperpower1, obj.girlfriendSuperpower2];
// relationships.girlfriendObject = girlfriendObject;