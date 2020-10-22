// 😋
let coverYear = document.getElementById("coverYear")
let button2018= document.getElementById("button2018")
let button2019= document.getElementById("button2019")
let circles = document.querySelectorAll(".yellow-circle .number")
let textHover = document.getElementById("textHover")
let foodText = document.getElementById("foodText")
let triangleNumber = document.getElementById("triangleNumber")

foodText.style.display = "none"
triangleNumber.style.display = "none"

/*top area: title and years*/
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

function ontriangleNumber(id){
    triangleNumber.innerText = id
    foodText.innerText = topList(year.toString(), id)
    foodText.style.display = "block"
    triangleNumber.style.display = "block"
    textHover.style.display = "none"
}

function nottriangleNumber(){
    textHover.style.display = "block"
    foodText.style.display = "none"
    triangleNumber.style.display = "none"
}
circles.forEach((circle, i) => {
    circle.addEventListener("mouseover", function() {
        ontriangleNumber(`${i + 1}`);        
    });   
})