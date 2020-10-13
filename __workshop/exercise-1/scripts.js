const headerBanner = document.getElementById("header-banner");

const backgroundYear = document.getElementById("background-year");

const backgroundYearSelector2018 = document.getElementById("year-button-2018");

const backgroundYearSelector2019 = document.getElementById("year-button-2019");

const foodOne = document.getElementById("yellow-circle1");

const foodTwo = document.getElementById("yellow-circle2");

const foodThree = document.getElementById("yellow-circle3");

const foodFour = document.getElementById("yellow-circle4");

const foodFive = document.getElementById("yellow-circle5");

const foodSix = document.getElementById("yellow-circle6");

const foodSeven = document.getElementById("yellow-circle7");

const foodEight = document.getElementById("yellow-circle8");

const foodNine = document.getElementById("yellow-circle9");

const foodTen = document.getElementById("yellow-circle10");

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
}

function removeMouseOver() {
    hoverInstructions.style.display = "block";
    rank.style.display = "none";
    foodText.style.display = "none";
}

foodOne.addEventListener("mouseover", function(event) {
    doMouseOver("1");
});

foodOne.addEventListener("mouseout", function(event) {
    removeMouseOver();
})

foodTwo.addEventListener("mouseover", function(event) {
    doMouseOver("2");
});

foodTwo.addEventListener("mouseout", function(event) {
    removeMouseOver();
})

foodThree.addEventListener("mouseover", function(event) {
    doMouseOver("3");
});

foodThree.addEventListener("mouseout", function(event) {
    removeMouseOver();
})

foodFour.addEventListener("mouseover", function(event) {
    doMouseOver("4");
});

foodFour.addEventListener("mouseout", function(event) {
    removeMouseOver();
})

foodFive.addEventListener("mouseover", function(event) {
    doMouseOver("5");
});

foodFive.addEventListener("mouseout", function(event) {
    removeMouseOver();
});

foodSix.addEventListener("mouseover", function(event) {
    doMouseOver("6");
});

foodSix.addEventListener("mouseout", function(event) {
    removeMouseOver();
});

foodSeven.addEventListener("mouseover", function(event) {
    doMouseOver("7");
});

foodSeven.addEventListener("mouseout", function(event) {
    removeMouseOver();
});

foodEight.addEventListener("mouseover", function(event) {
    doMouseOver("8");
});

foodEight.addEventListener("mouseout", function(event) {
    removeMouseOver();
});

foodNine.addEventListener("mouseover", function(event) {
    doMouseOver("9");
});

foodNine.addEventListener("mouseout", function(event) {
    removeMouseOver();
});

foodTen.addEventListener("mouseover", function(event) {
    doMouseOver("10");
});

foodTen.addEventListener("mouseout", function(event) {
    removeMouseOver();
});
