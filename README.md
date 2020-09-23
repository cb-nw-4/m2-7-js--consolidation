# Consolidation

## Exercise 1 😋

Build fun web page that renders GrubHub's top ten food for [2018](https://www.insider.com/most-popular-foods-grubhub-2018-12) and [2019](https://www.thepacker.com/article/report-grubhubs-2019-year-food)!

![exercise 1 complete](./__lecture/assets/ex-1_3.gif)

The lists of foods are provided in `assets/topTenList.js`.

```js
const topTenList = {
  2018: [
    { id: "1", name: "bean burritos" },
    { id: "2", name: "poke bowl" },
    { id: "3", name: "chicken sliders" },
    { id: "4", name: "pork baby back ribs" },
    { id: "5", name: "chicken burritos" },
    { id: "6", name: "chicken sandwich" },
    { id: "7", name: "cauliflower rice bowl" },
    { id: "8", name: "chicken and waffle sliders" },
    { id: "9", name: "parmesan chicken" },
    { id: "10", name: "buffalo-flavored cauliflower" },
  ],
  2019: [
    { id: "1", name: "cauliflower pizza" },
    { id: "2", name: "spicy brussel sprouts" },
    { id: "3", name: "portobello empanada" },
    { id: "4", name: "black bean & sweet potato taco" },
    { id: "5", name: "miso pork ramen" },
    { id: "6", name: "chicken burger" },
    { id: "7", name: "bone broth" },
    { id: "8", name: "brown sugar (bubble) tea" },
    { id: "9", name: "vegan pad thai" },
    { id: "10", name: "impossible burger" },
  ],
};
```

_It has already been added to the HTML file, so it will be available for use in your `scripts.js` file._

---

### Requirements

1. The year in the header changes depending on which year is selected.

![exercise 1 header](./__lecture/assets/ex-1_2.gif)

2. To view each top ten item, the user has to hover over the numbers in the white area.
3. If the user's mouse is not over one of the numbers, the bottom section should say "hover over a #!"
4. The end result should look _exactly_ like the provided mockup.
5. You are not allowed to modify any of the CSS properties. _see below_
6. In light of the horrible classnames, please add `id`s to the HTML elements and use `.getElementById()` for this exercise. _This is to ensure that the CSS and JS don't interfere with each other._

### CSS

All of the CSS has been provided for you. Adding the right class to the right HTML element will get you the desired outcome, but it was done by particularly _evil_ developer. The class names are non-sensical 🤦‍♂️ and won't help you. You'll have to do some detective work.

**You are not allowed to modify any of the provided CSS properties, but you are definitely encouraged to change/improve the class names to make them more understandable.**

---

<center>🟡 - Minimally complete workshop (75%) - 🟡</center>

---

---

<center>🟢 - Complete workshop (100%) - 🟢</center>

---

## Stretch goals

- Improve/add functionality to the page!
