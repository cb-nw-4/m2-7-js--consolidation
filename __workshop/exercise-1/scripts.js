// 😋
//hide dessert name and number
let currentYear = "2018";

const dessertName = document.getElementById("name");
const dessertNumber = document.getElementById("number");
const dessertDefault = document.getElementById("default");
const btn2018 = document.getElementById("btn-2018");
const btn2019 = document.getElementById("btn-2019");

dessertName.style.display = "none";
dessertNumber.style.display = "none";

const handleClick = ()=> {
    currentYear = currentYear === "2018" ? "2019" : "2018";
    let yearTitle = document.getElementById("year-title");
    yearTitle.innerText = currentYear;
    btn2019.classList.toggle("active");
    btn2018.classList.toggle("active");
}

btn2018.addEventListener("click", handleClick);
btn2019.addEventListener("click", handleClick);

const handleMouseover = (event)=>{
    const circle = event.currentTarget.id;     
    const circleId = circle.slice(7);  
    dessertDefault.style.display = "none";
    dessertName.style.display = "block";
    dessertNumber.style.display = "block";
    dessertNumber.innerText = topTenList[currentYear][circleId-1].id;
    dessertName.innerText = topTenList[currentYear][circleId-1].name;
}
const handleMouseout = ()=>{    
    dessertDefault.style.display = "block";
    dessertName.style.display = "none";   
    dessertNumber.style.display = "none";  
}

const yellowButtons = document.querySelectorAll("#yellow-section div");
yellowButtons.forEach((circle)=> {
    circle.addEventListener("mouseover", handleMouseover);
});

yellowButtons.forEach((circle)=> {
    circle.addEventListener("mouseout", handleMouseout);
});


