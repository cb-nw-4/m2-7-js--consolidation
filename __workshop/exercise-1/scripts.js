// set up all elements
let body = document.getElementById("body");
let header = document.getElementById("grubhubHeader");
let headerTitle = document.getElementById("headerTitle");
let headerYear = document.createElement("h1");
document.body.appendChild(headerYear);
let buttonContainer = document.getElementById("buttonContainer");
let button2018 = document.getElementById("year2018");
let button2019 = document.getElementById("year2019");
let foodNumberContainer = document.getElementById("foodNumberContainer");
let yellowButtons = document.querySelectorAll("#foodNumberContainer p");
let foodNameSection = document.getElementById("foodNames");
let defaultText = document.getElementById("defaultText");
let triangle = document.getElementById("triangle");
let foodText = document.getElementById("foodText");
let number = document.createElement("div");
document.body.appendChild(number);

// variables
let foodYear = 2018;
let foodToDisplay = '';

// set up food numbers
yellowButtons.forEach((foodNumber) => {
    foodNumber.classList.add("that");
    foodNumber.addEventListener("mouseover", displayFoodNames);
    foodNumber.addEventListener("mouseout", displayDefaultText);
})


// set up elements' classes
buttonContainer.classList.add("bacon");
button2018.classList.add("bivrip");
button2019.classList.add("bivrip");
header.classList.add("cccc");
headerTitle.classList.add("dddd");
headerYear.classList.add("believe");
headerYear.style.display = 'none';
foodNumberContainer.classList.add("what-now");
foodNameSection.classList.add("other-stuff");
defaultText.style.display = 'block';
defaultText.classList.add("eeee");
triangle.style.display = 'none';
triangle.classList.add("aaaa");
foodText.style.display = 'none';
foodText.classList.add("bbbb");
number.style.display = 'none';
number.classList.add("aaaa");


// functions
function yearButtonActivate(event){
    if (button2018.id === event.target.id){
        document.getElementById("year2018").classList.add("active");
        document.getElementById("year2018").classList.add("boom");
        document.getElementById("year2019").classList.remove("active");
        document.getElementById("year2019").classList.remove("boom");
        headerYear.style.display = 'block';
        headerYear.innerHTML = '2018';
        foodYear = 2018;
        foodToDisplay = topTenList['2018'];
        document.getElementById("year2018").removeEventListener('click', yearButtonActivate);
    } else if (button2019.id === event.target.id){
        document.getElementById("year2019").classList.add("active");
        document.getElementById("year2019").classList.add("boom");
        document.getElementById("year2018").classList.remove("active");
        document.getElementById("year2018").classList.remove("boom");
        headerYear.style.display = 'block';
        headerYear.innerHTML = '2019';
        foodYear = 2019;
        foodToDisplay = topTenList['2019'];
        document.getElementById("year2019").removeEventListener('click', yearButtonActivate);
    }
    console.log(foodToDisplay);
};
button2018.addEventListener("click", yearButtonActivate);
button2019.addEventListener("click", yearButtonActivate);

function displayFoodNames(event){
    if(foodYear === 2018){
        defaultText.style.display = 'none';
        triangle.style.display = 'block';
        foodText.style.display = 'block';
        triangle.innerText = event.target.id;
        topTenList['2018'].forEach((element) =>{
            if (element["id"] === event.target.id){
                foodText.innerHTML = element["name"];
            }
        })
    } else if (foodYear === 2019) {
        defaultText.style.display = 'none';
        triangle.style.display = 'block';
        foodText.style.display = 'block';
        triangle.innerText = event.target.id;
        topTenList['2019'].forEach((element) =>{
            if (element["id"] === event.target.id){
                foodText.innerHTML = element["name"];
            }
        })
}
}

function displayDefaultText(event){
    defaultText.style.display = 'block';
    triangle.style.display = 'none';
    foodText.style.display = 'none';
    number.style.display = 'none';
}