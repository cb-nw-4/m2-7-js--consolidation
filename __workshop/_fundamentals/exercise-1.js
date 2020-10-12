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
	let person = {
			name: '', age: '', status: '', address: {},
			superpowers: [],
			relationships: [
				{ type: '', name: '', age: '', status: '', superpowers: []},
				{ type: '', name: '', age: '', status: '', superpowers: []}
			]};

	person.name = data.name;
	person.age = data.age;
	person.status = data.status;
	person.address.streetAddress = data.address1;
	person.address.city = data.addressCity;
	person.address.state = data.addressState;
	person.address.country = data.addressCountry;

	if (data.superpower1 !== null) {
		person.superpowers.push(data.superpower1);
	}

	if (data.superpower2 !== null) {
		person.superpowers.push(data.superpower2);
	}

	person.relationships[0].type = 'mother';
	person.relationships[0].name = data.motherName;
	person.relationships[0].age = data.motherAge;
	person.relationships[0].status = data.motherStatus;

	if (data.motherSuperpower1 !== null) {
		person.relationships[0].superpowers.push(data.motherSuperpower1);
	}

	if (data.motherSuperpower2 !== null) {
		person.relationships[0].superpowers.push(data.motherSuperpower2);
	}

	person.relationships[1].type = 'girlfriend';
	person.relationships[1].name = data.girlfriendName;
	person.relationships[1].age = data.girlfriendAge;
	person.relationships[1].status = data.girlfriendStatus;

	if (data.girlfriendSuperpower1 !== null) {
		person.relationships[1].superpowers.push(data.girlfriendSuperpower1);
	}

	if (data.girlfriendSuperpower2 !== null) {
		person.relationships[1].superpowers.push(data.girlfriendSuperpower2);
	}

	return person;
}

// Use a console.log to verify
// `JSON.stringify` is used to "pretty-print" the output, so that it's easy
// to see what it looks like, and debug any problems.
console.log(JSON.stringify(transformData(inputData), null, 2));

// Test your code: "yarn test exercise-1"

module.exports = { inputData, transformData };
