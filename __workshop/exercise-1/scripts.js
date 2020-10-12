// 😋

const yearSelection = document.getElementById("yearSelection");
const select2018 = document.getElementById("2018Button");
const select2019 = document.getElementById("2019Button");
const displayYear = document.getElementById("displayYear");
const numbersList = document.getElementById("numbersList");
const hoverText = document.getElementById("hoverText");
const triangle = document.getElementById("triangle");
const purpleBox = document.getElementById("purpleBox");

let SELECTED_YEAR = 2018;
let foodID = 1;
triangle.style.display = "none";
purpleBox.style.display= "none";

/* Choosing a year */
yearSelection.addEventListener("click", function(){

    if(event.target == select2018){
        SELECTED_YEAR = 2018;
        displayYear.innerText = "2018";
        
        if(!select2018.classList.contains("active")){
            select2018.classList.toggle("active");
            select2019.classList.toggle("active");
        }

    } else {
        SELECTED_YEAR = 2019;
        displayYear.innerText = "2019";

        if(!select2019.classList.contains("active")){
            select2018.classList.toggle("active");
            select2019.classList.toggle("active");
        }
    }

});

numbersList.addEventListener("mouseover",function(){
    if(event.target != numbersList){
        hoverText.style.display = "none";

        triangle.style.display="inline";
        foodID = event.target.innerText;
        triangle.innerText = foodID;

        purpleBox.style.display= "flex";
        purpleBox.innerText = topTenList[SELECTED_YEAR][foodID-1].name;
    }
});

numbersList.addEventListener("mouseout", function(){
    if(event.target != numbersList){
        hoverText.style.display = "inline";
        triangle.style.display = "none";
        purpleBox.style.display= "none";
    }
});
