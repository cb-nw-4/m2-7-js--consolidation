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
  let finalObject={};
  let {address1,addressCity,addressCountry,addressState} = data;
  let address = {}; 
  address.streetAddress=address1;
  address.city=addressCity; 
  address.country=addressCountry;
  address.state=addressState;
  let {name,age,status} = data; 
  finalObject.name=name; 
  finalObject.age=age; 
  finalObject.status=status; 
  finalObject.address=address;
  let {superpower1,superpower2}= data;
  let superpowersArr=[];
  if(superpower1!==null) { 
    superpowersArr.push(superpower1);
  };
  if(superpower2!==null) { 
    superpowersArr.push(superpower2);
  };
  finalObject.superpowers=superpowersArr;
  relationshipsArr= []; 
  let {motherName,motherAge,motherStatus,motherSuperpower1,motherSuperpower2}= data;
  let mother={}; 
  mother.type="mother";
  mother.name=motherName;
  mother.age=motherAge;
  mother.status=motherStatus;
  let superpowersArrMother=[];
  if(motherSuperpower1!==null) { 
    superpowersArrMother.push(motherSuperpower1);
  };
  if(motherSuperpower2!==null) { 
    superpowersArrMother.push(motherSuperpower2);
  };
  mother.superpowers=superpowersArrMother;
  relationshipsArr.push(mother);
  let {girlfriendAge,girlfriendName,girlfriendStatus,girlfriendSuperpower1,girlfriendSuperpower2} = data;
  let girlfriend = {}; 
  girlfriend.type="girlfriend"; 
  girlfriend.name=girlfriendName; 
  girlfriend.age=girlfriendAge;
  girlfriend.status=girlfriendStatus;
  let superpowersArrGirlfrnd=[];
  if(girlfriendSuperpower1!==null) { 
    superpowersArrGirlfrnd.push(girlfriendSuperpower1);
  };
  if(girlfriendSuperpower2!==null) { 
    superpowersArrGirlfrnd.push(girlfriendSuperpower2);
  };
  girlfriend.superpowers=superpowersArrGirlfrnd;
  relationshipsArr.push(girlfriend);
  finalObject.relationships = relationshipsArr;
  return finalObject;
}

// Use a console.log to verify
// `JSON.stringify` is used to "pretty-print" the output, so that it's easy
// to see what it looks like, and debug any problems.
console.log(JSON.stringify(transformData(inputData), null, 2));

// Test your code: "yarn test exercise-1"

module.exports = { inputData, transformData };
