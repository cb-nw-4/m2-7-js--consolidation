let currentYear = "2018";

const dessertName = document.getElementById("dessert-name");
const dessertNumber = document.getElementById("dessert-number");
const dessertDefault = document.getElementById("dessert-default");
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
    const target = event.target.id;  
    if (target === "yellow-section") 
        return; 

    dessertDefault.style.display = "none";    
    dessertName.style.display = "block";
    dessertNumber.style.display = "block"; 
 
    const circleId = target.slice(7);  
    dessertNumber.innerText = topTenList[currentYear][circleId-1].id;
    dessertName.innerText = topTenList[currentYear][circleId-1].name;
}
const handleMouseout = (event)=>{   
    const target = event.target.id;  
    if (target !== "yellow-section") 
        return;
      
    dessertDefault.style.display = "block";
    dessertName.style.display = "none";   
    dessertNumber.style.display = "none";  
}

const yellowSection = document.querySelector("#yellow-section");
yellowSection.addEventListener("mouseover", handleMouseover);
yellowSection.addEventListener("mouseout", handleMouseout);


