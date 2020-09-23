const groupByValue = require("../exercise-3");

test("Exercise 3", () => {
  expect(
    groupByValue({
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
    })
  ).toStrictEqual({
    brownies: ["scott", "rick"],
    tiramisu: ["fred"],
    "chocolate cake": ["lisa"],
    "ice-cream": ["riley", "john", "summer"],
    "cheese cake": ["sunny", "beth", "andrew", "jean-luc"],
    "apple pie": ["morty"],
    "rhubard pie": ["jerry"],
    waffles: ["tiffany"],
    profiteroles: ["melissa"],
  });
  expect(
    groupByValue({
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
    })
  ).toStrictEqual({
    pie: ["alice", "glinda", "khloe"],
    "deep-fried mars bar": ["betty"],
    "gummy bears": ["colin", "fertrude"],
    "child tears": ["damien"],
    "panda express": ["ellicia"],
    "not applicable": ["hethel"],
    "rum cake": ["irsula"],
    "revenge (served cold)": ["judas"],
    "easter eggs": ["lyndon"],
    dessert: ["minda"],
  });
  expect(
    groupByValue({
      a: "blue",
      b: "red",
      c: "green",
      d: "blue",
      e: "blue",
      f: "red",
    })
  ).toStrictEqual({ blue: ["a", "d", "e"], red: ["b", "f"], green: ["c"] });
  expect(
    groupByValue({
      a: "monday",
      b: "monday",
      c: "tuesday",
      d: "wednesday",
      e: "saturday",
      f: "monday",
    })
  ).toStrictEqual({
    monday: ["a", "b", "f"],
    tuesday: ["c"],
    wednesday: ["d"],
    saturday: ["e"],
  });
});
