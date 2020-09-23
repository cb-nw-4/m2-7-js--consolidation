# [2-7]

# Fundamentals: array.sort()

---

## .sort() - without parameters

```js
const characters = ["Rick", "Morty", "Summer", "Beth", "Jerry"];

characters.sort();

// outcome?
```

---

This method will sort the array items by their `unicode` numbers.

```
let letter = 'A';
console.log(letter.charCodeAt(0))
```

---

This will work for _most_ cases, but what about when it doesn't?

---

### Example

This doesn't work as _expected_.

```js
const numbers = [123, 13, 12, 6, 76, 0, 9];

numbers.sort();

// outcome?
```

---

## Solution: Define out own sorting function!

---

## .sort() - with a function parameters

- This method can accept a function as a parameter.
- This function acts as a sorting function.

---

```js
const numbers = [123, 13, 12, 6, 76, 0, 9];

numbers.sort((a, b) => {
  // Write code here!
});

// outcome?
```
