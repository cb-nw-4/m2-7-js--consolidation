const headerBanner = document.getElementById("header-banner");

const backgroundYear = document.getElementById("background-year");

const backgroundYearSelector2018 = document.getElementById("year-button-2018");

const backgroundYearSelector2019 = document.getElementById("year-button-2019");

let foodElements = [];
for (let i = 1; i < 11; i++) {
    foodElements.push(document.getElementById(`yellow-circle${i}`));
}
console.log(foodElements)

const hoverInstructions = document.getElementById("hover-instructions");

const raspberryBackground = document.getElementById("raspberry-background");

const foodText = document.getElementById("food-text");
foodText.style.display = "none";

const rank = document.getElementById("ranking");
rank.style.display = "none";

let currentYear = 2018;

backgroundYearSelector2018.addEventListener("click", function(event) {
    backgroundYear.innerText = ("2018")
    currentYear = 2018;
});

backgroundYearSelector2019.addEventListener("click", function(event) {
    backgroundYear.innerText = ("2019")
    currentYear = 2019;
});

function getInnerText(year, id) {
    let foodType;
    topTenList[year].forEach(element => {
        if (id === element["id"]) {
            foodType = element["name"]
        }
    });
    return foodType;
}

function doMouseOver(id) {
    rank.innerText = id;
    foodText.innerText = getInnerText(currentYear.toString(), id);
    foodText.style.display = "block";
    hoverInstructions.style.display = "none";
    rank.style.display = "block";
    console.log(id);
}

function removeMouseOver() {
    hoverInstructions.style.display = "block";
    rank.style.display = "none";
    foodText.style.display = "none";
}

foodElements.forEach(function(foodElement, index) {
    foodElement.addEventListener("mouseover", function(event) {
        doMouseOver(`${index + 1}`);
    })
    foodElement.addEventListener("mouseout", function(event) {
        removeMouseOver();
    })
})
