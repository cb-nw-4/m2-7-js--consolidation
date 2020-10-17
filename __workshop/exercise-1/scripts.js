let coverYear = document.getElementById("coverYear")
let button2018= document.getElementById("button2018")
let button2019= document.getElementById("button2019")
let circles = document.querySelectorAll(".numberSelection .number")
let textHover = document.getElementById("textHover")
let foodName = document.getElementById("foodName")
let topNumber = document.getElementById("topNumber")

foodName.style.display = "none"
topNumber.style.display = "none"


let year = 2018;
coverYear.innerText = ("2018")
button2018.addEventListener("click", function() {
    coverYear.innerText = ("2018")
    year = 2018;
});
button2019.addEventListener("click", function() {
    coverYear.innerText = ("2019")
    year = 2019;
});

function topList(currentYear, id) {
    const foodItem = topTenList[currentYear].find((food) => {
        return food.id === id
    })
    return foodItem.name
}


function onTopNumber(id){
    topNumber.innerText = id
    foodName.innerText = topList(year.toString(), id)
    foodName.style.display = "block"
    topNumber.style.display = "block"
    textHover.style.display = "none"
}

function notTopNumber(){
    textHover.style.display = "block"
    foodName.style.display = "none"
    topNumber.style.display = "none"
}
circles.forEach((circle, i) => {
    circle.addEventListener("mouseover", function() {
        onTopNumber(`${i + 1}`);
        // notTopNumber();
    });   
})


